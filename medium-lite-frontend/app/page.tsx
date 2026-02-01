import Sidebar from "@/app/components/Sidebar";
import ArticleCard from "@/app/components/ArticleCard";
import { get } from "@/app/lib/api";
import { PaginatedData, Post } from "@/app/lib/types";

// Force dynamic rendering since we are fetching data that might change
export const dynamic = 'force-dynamic';

async function getPosts() {
  try {
    const response = await get<PaginatedData<Post>>('/posts');
    return response.data || [];
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full lg:w-[65%] min-w-0 space-y-2">
        <h1 className="text-xl font-bold mb-8 pb-4 border-b border-zinc-100 dark:border-zinc-800 hidden">Latest Stories</h1>
        
        {posts.length > 0 ? (
          posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center py-20 text-zinc-500">
            <p>No stories found. Be the first to write one!</p>
          </div>
        )}
      </div>

      <Sidebar />
    </main>
  );
}
