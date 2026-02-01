"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthProvider";
import { useRouter } from "next/navigation";
import { get, post } from "@/app/lib/api";
import { Category, Tag } from "@/app/lib/types";
import { ImagePlus } from "lucide-react";

export default function NewStoryPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | "">("");
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Assume GET /categories and GET /tags returns { data: [] }
         const cats = await get<Category[]>("/categories");
         const tgs = await get<Tag[]>("/tags");
         setCategories(cats || []);
         setTags(tgs || []);
      } catch (e) {
        console.error("Failed to load metadata", e);
      }
    }
    fetchData();
  }, []);

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPublishing(true);
    try {
      // Payload structure based on plan:
      // title, body, status, taxonomies[0][id], taxonomies[0][type]
      
      const payload: any = {
        title,
        body,
        status: 'published', // or 'draft'
      };

      if (selectedCategory) {
          payload.taxonomies = [
              { id: selectedCategory, type: 'category' }
          ];
      }

      await post("/posts", payload);
      router.push("/");
    } catch (e) {
      console.error("Failed to publish", e);
      alert("Failed to publish story. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  if (loading || !user) return null;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <form onSubmit={handlePublish} className="space-y-8">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-500">Draft in {user.name}</span>
           </div>
           
           <button
             type="submit"
             disabled={isPublishing || !title}
             className="rounded-full bg-green-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
           >
             {isPublishing ? "Publishing..." : "Publish"}
           </button>
        </div>

        <div className="space-y-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-4xl md:text-5xl font-serif font-bold placeholder:text-zinc-300 dark:placeholder:text-zinc-700 outline-none bg-transparent"
                required
            />
            
            <textarea
                placeholder="Tell your story..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full h-[60vh] text-xl font-serif leading-relaxed placeholder:text-zinc-300 dark:placeholder:text-zinc-700 outline-none bg-transparent resize-none"
                required
            />
        </div>

        {/* Floating or bottom toolbar for categories */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 p-4">
            <div className="max-w-4xl mx-auto flex items-center gap-4">
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(Number(e.target.value))}
                    className="block rounded-md border-0 py-1.5 pl-3 pr-10 text-zinc-900 ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-black sm:text-sm sm:leading-6"
                >
                    <option value="">Select a topic</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                
                <button type="button" className="p-2 text-zinc-500 hover:text-black">
                    <ImagePlus className="w-6 h-6" />
                </button>
            </div>
        </div>
      </form>
    </main>
  );
}
