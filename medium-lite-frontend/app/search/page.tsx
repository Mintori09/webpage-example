import { get } from "@/app/lib/api";
import { Post, PaginatedData } from "@/app/lib/types";
import ArticleCard from "@/app/components/ArticleCard";
import Sidebar from "@/app/components/Sidebar";

export const dynamic = 'force-dynamic';

async function searchPosts(query: string) {
  if (!query) return [];
  try {
    const response = await get<PaginatedData<Post>>(`/posts/search?q=${encodeURIComponent(query)}`);
    // API response format for search might be slightly different or consistent. 
    // Plan says "Search results for: keyword" with data: { data: [...] }
    return response.data || [];
  } catch (error) {
    console.error("Search failed:", error);
    return [];
  }
}

export default async function SearchPage(props: { searchParams: Promise<{ q?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams.q || "";
  const results = await searchPosts(query);

  return (
    <main className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full lg:w-[65%] min-w-0 space-y-8">
        <h1 className="text-4xl font-bold font-serif border-b border-zinc-100 dark:border-zinc-800 pb-8">
          <span className="text-zinc-400 block text-lg font-sans font-medium uppercase tracking-wide mb-2">Results for</span>
          {query}
        </h1>
        
        {results.length > 0 ? (
          results.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))
        ) : (
          <div className="py-10 text-zinc-500">
            {query ? <p>No stories found matching "{query}".</p> : <p>Type something in the search bar to find stories.</p>}
          </div>
        )}
      </div>

      <Sidebar />
    </main>
  );
}
