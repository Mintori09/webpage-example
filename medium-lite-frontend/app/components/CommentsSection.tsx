"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthProvider";
import { get, post } from "@/app/lib/api";
import { Comment } from "@/app/lib/types";
import { User, Send } from "lucide-react";
import Link from "next/link";

interface CommentsSectionProps {
  postId: number;
}

export default function CommentsSection({ postId }: CommentsSectionProps) {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchComments() {
      try {
        const data = await get<Comment[]>(`/posts/${postId}/comments`);
        setComments(data || []);
      } catch (e) {
        console.error("Failed to load comments", e);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setSubmitting(true);
    try {
        const addedComment = await post<Comment>(`/posts/${postId}/comments`, {
            body: newComment,
            parent_comment_id: null
        });
        
        // Optimistic update or refresh
        // Assuming API returns the created comment
        if (addedComment) {
             // If the API returns the comment structure, push it.
             // If it returns just status, we might need to re-fetch or construct it.
             // Plan says "Comment added successfully" with data.
             // We'll append it. We might need to ensure 'user' is populated if API doesn't return it fully populated.
             const commentWithUser = {
                 ...addedComment,
                 user: user! // Add current user ensuring optimistic UI works nicely
             };
             setComments([commentWithUser, ...comments]);
             setNewComment("");
        }
    } catch (e) {
        console.error("Failed to post comment", e);
        alert("Failed to post comment");
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <section className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800">
      <h3 className="text-xl font-bold mb-6 font-serif">Comments ({comments.length})</h3>
      
      {/* Add Comment */}
      <div className="mb-10">
          {user ? (
            <form onSubmit={handleSubmit} className="flex gap-4 items-start">
               <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex-shrink-0 overflow-hidden">
                    {user.profile_photo_url ? (
                        <img src={user.profile_photo_url} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                        <User className="h-full w-full p-2 text-zinc-500" />
                    )}
               </div>
               <div className="flex-1">
                   <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="What are your thoughts?"
                        className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent p-3 text-sm focus:border-black dark:focus:border-white outline-none min-h-[100px]"
                   />
                   <div className="mt-2 flex justify-end">
                       <button 
                           type="submit" 
                           disabled={submitting || !newComment.trim()}
                           className="bg-green-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-green-700 disabled:opacity-50"
                       >
                           {submitting ? "Posting..." : "Respond"}
                       </button>
                   </div>
               </div>
            </form>
          ) : (
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-lg text-center">
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">Sign in to leave a comment.</p>
                <Link href="/login" className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-sm font-medium">
                    Sign In
                </Link>
            </div>
          )}
      </div>

      {/* List Comments */}
      {loading ? (
          <p className="text-zinc-500">Loading comments...</p>
      ) : (
          <div className="space-y-8">
              {comments.map(comment => (
                  <div key={comment.id} className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex-shrink-0 overflow-hidden">
                             {comment.user?.profile_photo_url ? (
                                <img src={comment.user.profile_photo_url} alt={comment.user.name} className="w-full h-full object-cover" />
                             ) : (
                                <User className="h-full w-full p-2 text-zinc-500" />
                             )}
                        </div>
                        <div className="flex-1 space-y-2">
                             <div className="flex items-center gap-2">
                                 <span className="font-medium text-sm">{comment.user?.name || "Unknown"}</span>
                                 <span className="text-zinc-400 text-xs">· {new Date(comment.created_at).toLocaleDateString()}</span>
                             </div>
                             <p className="text-zinc-800 dark:text-zinc-300 text-sm leading-relaxed whitespace-pre-line">{comment.body}</p>
                        </div>
                  </div>
              ))}
          </div>
      )}
    </section>
  );
}
