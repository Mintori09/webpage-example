import { Post } from "../types";

export function HeroPost({ post }: { post: Post }) {
    return (
        <section className="mb-12">
            <div className="group flex flex-col sm:flex-row gap-6 items-center border border-[#E6E6E6] dark:border-gray-700 p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-full sm:w-2/5 flex-shrink-0">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                        style={{ backgroundImage: `url("${post.image}")` }}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <img alt={post.author.name} className="w-6 h-6 rounded-full" src={post.author.avatar} />
                        <p className="text-[#1A1A1A] dark:text-gray-200 text-sm font-medium">{post.author.name}</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#1A1A1A] dark:text-white group-hover:text-primary transition-colors">
                        {post.title}
                    </h2>
                    <p className="text-[#6B6B6B] dark:text-gray-400 text-base font-normal leading-relaxed">
                        {post.summary}
                    </p>
                    <p className="text-sm text-[#6B6B6B] dark:text-gray-500">{post.date} · {post.readTime}</p>
                </div>
            </div>
        </section>
    );
}

