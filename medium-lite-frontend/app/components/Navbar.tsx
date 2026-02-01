"use client";

import Link from "next/link";
import { Search, PenSquare, Bell, User as UserIcon, LogOut } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { useAuth } from "@/app/context/AuthProvider";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo & Search */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold tracking-tight text-black dark:text-white">
              Medium-Lite
            </span>
          </Link>
          
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-2 text-zinc-500 dark:bg-zinc-900 transition focus-within:ring-1 focus-within:ring-black dark:focus-within:ring-white">
            <Search className="h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm outline-none placeholder:text-zinc-400 dark:text-zinc-200 w-48"
            />
          </form>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/new-story"
            className="hidden md:flex items-center gap-2 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            <PenSquare className="h-5 w-5" />
            <span className="text-sm">Write</span>
          </Link>

          {user ? (
            <div className="flex items-center gap-4 relative">
              <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {user.profile_photo_url ? (
                    <img src={user.profile_photo_url} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                    <UserIcon className="h-full w-full p-1 text-zinc-500" />
                )}
              </div>
              
              {isMenuOpen && (
                  <div className="absolute top-10 right-0 w-48 bg-white dark:bg-zinc-900 rounded-md shadow-lg border border-zinc-100 dark:border-zinc-800 py-2 flex flex-col z-50">
                      <div className="px-4 py-2 border-b border-zinc-100 dark:border-zinc-800 mb-2">
                          <p className="text-sm font-bold truncate">{user.name}</p>
                          <p className="text-xs text-zinc-500 truncate">{user.email}</p>
                      </div>
                      <Link href={`/u/${user.id}`} className="px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">Profile</Link>
                      <Link href="/me/stories" className="px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">My Stories</Link>
                      <button onClick={() => { logout(); setIsMenuOpen(false); }} className="px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 text-left text-red-500 flex items-center gap-2">
                          <LogOut className="w-4 h-4" /> Sign out
                      </button>
                  </div>
              )}
            </div>
          ) : (
             <div className="flex items-center gap-4">
               <Link
                 href="/login"
                 className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white"
               >
                 Sign In
               </Link>
               <Link
                 href="/register"
                 className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
               >
                 Get Started
               </Link>
             </div>
          )}
        </div>
      </div>
    </nav>
  );
}
