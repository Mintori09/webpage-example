"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthProvider";
import { useRouter } from "next/navigation";
import { get, del } from "@/app/lib/api";
import { Post, PaginatedData } from "@/app/lib/types";
import Link from "next/link";
import { Edit2, Trash2 } from "lucide-react";

export default function MyStoriesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    async function fetchMyPosts() {
        if (!user) return;
        try {
            // Re-use GET /users/{id}/posts
            const response = await get<PaginatedData<Post>>(`/users/${user.id}/posts`);
            setPosts(response.data || []);
        } catch (e) {
            console.error("Failed to fetch my posts", e);
        } finally {
            setLoadingPosts(false);
        }
    }
    fetchMyPosts();
  }, [user]);

  const handleDelete = async (postId: number) => {
      if (!confirm("Are you sure you want to delete this story?")) return;
      try {
          await del(`/posts/${postId}`);
          setPosts(posts.filter(p => p.id !== postId));
      } catch (e) {
          console.error("Delete failed", e);
          alert("Failed to delete post");
      }
  };

  if (loading || !user) return null;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="flex items-center justify-between mb-12">
            <h1 className="text-3xl font-bold font-serif">Your Stories</h1>
            <Link href="/new-story" className="rounded-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium">
                Write a story
            </Link>
        </div>

        <div className="space-y-6">
            <div className="flex border-b border-zinc-200 dark:border-zinc-800 pb-2 gap-6 text-sm font-medium text-zinc-500">
                <button className="text-black dark:text-white pb-2 border-b-2 border-black dark:border-white">Published</button>
                <button className="hover:text-black dark:hover:text-white">Drafts</button>
            </div>

            {loadingPosts ? (
                <div className="text-zinc-500 py-10">Loading stories...</div>
            ) : posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className="py-6 border-b border-zinc-100 dark:border-zinc-800 last:border-0 flex justify-between items-start group">
                        <div className="space-y-2">
                             <Link href={`/posts/${post.slug}`} className="block text-xl font-bold hover:underline">{post.title}</Link>
                             <div className="text-xs text-zinc-500">
                                 Published on {new Date(post.created_at).toLocaleDateString()}
                                 {post.categories && post.categories.length > 0 && ` · ${post.categories[0].name}`}
                             </div>
                        </div>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link href={`/p/${post.id}/edit`} className="p-2 text-zinc-500 hover:text-black dark:hover:text-white">
                                <Edit2 className="w-4 h-4" />
                            </Link>
                            <button onClick={() => handleDelete(post.id)} className="p-2 text-zinc-500 hover:text-red-600">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-zinc-500 py-10">
                    You haven't published any stories yet.
                </div>
            )}
        </div>
    </main>
  );
}
