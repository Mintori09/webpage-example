import { get } from "@/app/lib/api";
import { Post } from "@/app/lib/types";
import { notFound } from "next/navigation";
import { User, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import CommentsSection from "@/app/components/CommentsSection"; 

async function getPost(slug: string) {
  try {
    const post = await get<Post>(`/posts/${slug}`);
    return post;
  } catch (error) {
    console.error(`Failed to fetch post used slug: ${slug}`, error);
    return null;
  }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <header className="mb-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 font-serif">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
            <Link href={`/u/${post.user_id}`} className="flex items-center gap-2 hover:text-black dark:hover:text-white transition">
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-full p-1">
                    <User className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm">{post.user?.name || "Unknown"}</span>
            </Link>
            <span>·</span>
            <div className="flex items-center gap-1 text-sm">
                <Calendar className="w-4 h-4" />
                <span>
                 {new Date(post.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
            </div>
             {post.reading_time && (
                 <>
                    <span>·</span>
                    <div className="flex items-center gap-1 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.reading_time}</span>
                    </div>
                 </>
             )}
        </div>
      </header>

      {/* Featured Image */}
      {post.featured_image && (
        <div className="mb-12 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 aspect-video relative">
           <img 
               src={post.featured_image} 
               alt={post.title} 
               className="object-cover w-full h-full"
           />
        </div>
      )}

      {/* Content */}
      <div 
        className="prose prose-lg dark:prose-invert prose-zinc max-w-none font-serif leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                  <span key={tag.id} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full text-sm">
                      #{tag.name}
                  </span>
              ))}
          </div>
      )}

      {/* Comments Section */}
      <CommentsSection postId={post.id} />
    </article>
  );
}
