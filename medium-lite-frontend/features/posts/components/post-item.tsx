import { Avatar } from "@/components/ui/avatar";
import { Post } from "../types";

export function PostItem({ post }: { post: Post }) {
    return (
        <div className="group block cursor-pointer">
            <div className="flex items-stretch justify-between gap-6">
                <div className="flex flex-[2_2_0px] flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Avatar src={post.author.avatar} alt={post.author.name} />
                        <p className="text-[#1A1A1A] dark:text-gray-200 text-sm font-medium">{post.author.name}</p>
                    </div>
                    <h3 className="text-[#1A1A1A] dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-[#6B6B6B] dark:text-gray-400 text-base font-normal hidden sm:block">
                        {post.summary}
                    </p>
                    <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-gray-500 text-sm mt-2">
                        <span>{post.date} · {post.readTime}</span>
                        {post.category && (
                            <span className="bg-[#E6E6E6]/60 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs">
                                {post.category}
                            </span>
                        )}
                    </div>
                </div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                        style={{ backgroundImage: `url("${post.image}")` }}></div>
                </div>
            </div>
        </div>
    );
}

