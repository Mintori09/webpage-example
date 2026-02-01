import { get } from "@/app/lib/api";
import { Post, PaginatedData } from "@/app/lib/types";
import ArticleCard from "@/app/components/ArticleCard";
import { notFound } from "next/navigation";
import { User as UserIcon } from "lucide-react";

async function getUserPosts(userId: string) {
  try {
    const response = await get<PaginatedData<Post>>(`/users/${userId}/posts`);
    return response.data || [];
  } catch (error) {
    console.error(`Failed to fetch posts for user ${userId}`, error);
    return [];
  }
}

// Ensure the user exists (optional, could just check if posts return empty or specific user endpoint)
// For MVP, we'll try to deduce user info from the first post or separate call if endpoint exists
// The plan mentions `GET /users/{id}/posts` returns posts. It doesn't explicitly mention a user profile endpoint other than /me.
// However, the post object contains user info.
// If the user has 0 posts, we might not get their name easily without a specific endpoint like /users/{id}.
// We'll assume for now we just show the list. Ideally, we need `GET /users/{id}`.
// Let's assume the backend provides it or we just show "User Profile".

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const posts = await getUserPosts(id);
  
  // Extract user info from the first post if available
  const user = posts.length > 0 ? posts[0].user : null;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
       <div className="flex flex-col items-center gap-4 mb-12">
            <div className="h-24 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                 {user?.profile_photo_url ? (
                     <img src={user.profile_photo_url} alt={user.name} className="h-full w-full object-cover" />
                 ) : (
                    <UserIcon className="h-10 w-10 text-zinc-500" />
                 )}
            </div>
            <h1 className="text-3xl font-bold font-serif">{user?.name || `User ${id}`}</h1>
            {/* <p className="text-zinc-500">Member since ...</p> */}
       </div>

       <div className="border-t border-zinc-100 dark:border-zinc-800 pt-8">
           <h2 className="text-xl font-bold mb-6">Published Stories</h2>
           <div className="space-y-2">
               {posts.length > 0 ? (
                    posts.map(post => (
                        <ArticleCard key={post.id} post={post} />
                    ))
               ) : (
                   <p className="text-center text-zinc-500">No stories published yet.</p>
               )}
           </div>
       </div>
    </main>
  );
}
