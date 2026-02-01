import Link from "next/link";
import { Post } from "@/app/lib/types";
import { Calendar, User } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface ArticleCardProps {
  post: Post;
  className?: string;
}

export default function ArticleCard({ post, className }: ArticleCardProps) {
  return (
    <article className={cn("flex flex-col gap-4 py-8 border-b border-zinc-100 dark:border-zinc-800 last:border-0", className)}>
      {/* Author & Meta */}
      <div className="flex items-center gap-2 text-sm">
        <div className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center overflow-hidden">
             {post.user?.profile_photo_url ? (
                 <img src={post.user.profile_photo_url} alt={post.user.name} className="h-full w-full object-cover" />
             ) : (
                <User className="h-4 w-4 text-zinc-500" />
             )}
        </div>
        <Link href={`/u/${post.user?.id}`} className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline">
          {post.user?.name || "Unknown Author"}
        </Link>
        <span className="text-zinc-400">·</span>
        <span className="text-zinc-500 dark:text-zinc-400">
          {new Date(post.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </span>
      </div>

      {/* Content */}
      <div className="flex justify-between gap-8 h-full">
          <div className="flex flex-col gap-2 flex-1">
            <Link href={`/posts/${post.slug}`} className="group space-y-2 block">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 leading-tight">
                    {post.title}
                </h2>
                <div 
                    className="text-zinc-500 dark:text-zinc-400 line-clamp-3 text-base font-serif"
                    dangerouslySetInnerHTML={{ __html: post.excerpt || post.body || "" }} 
                />
            </Link>
            
             {/* Footer Info */}
            <div className="flex items-center gap-4 mt-4 text-xs text-zinc-500">
                <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full uppercase tracking-wider font-medium text-[10px] text-zinc-600 dark:text-zinc-300">
                    {post.categories?.[0]?.name || "Article"}
                </span>
                <span>{post.reading_time || "5 min read"}</span>
            </div>
          </div>

        {/* Optional Thumbnail */}
        {post.featured_image && (
            <Link href={`/posts/${post.slug}`} className="shrink-0 hidden sm:block">
                <div className="relative h-32 w-48 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
                    <img 
                        src={post.featured_image} 
                        alt={post.title} 
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </Link>
        )}
      </div>
    </article>
  );
}
