"use client";

import Link from "next/link";
import { Tag } from "@/app/lib/types";
import { useEffect, useState } from "react";
// import { get } from "@/app/lib/api"; // Will connect later

export default function Sidebar() {
  // Placeholder data
  const recommendedTopics = [
    { id: 1, name: "Technology", slug: "technology" },
    { id: 2, name: "Design", slug: "design" },
    { id: 3, name: "Startups", slug: "startups" },
    { id: 4, name: "Culture", slug: "culture" },
    { id: 5, name: "Politics", slug: "politics" },
    { id: 6, name: "Programming", slug: "programming" },
  ];

  return (
    <aside className="hidden lg:block w-80 shrink-0 space-y-8 pl-8 border-l border-zinc-100 dark:border-zinc-800/50 min-h-screen">
      <div className="sticky top-24">
        <div className="space-y-4">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase text-xs tracking-wider">
            Recommended Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {recommendedTopics.map((topic) => (
              <Link
                key={topic.id}
                href={`/tag/${topic.slug}`}
                className="rounded-full bg-zinc-100 px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase text-xs tracking-wider">
                Trending
            </h3>
            {/* Placeholder for trending */}
            <p className="text-sm text-zinc-500">Trending implementation coming soon...</p>
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-400">
            <Link href="#" className="hover:text-zinc-600">Help</Link>
            <Link href="#" className="hover:text-zinc-600">Status</Link>
            <Link href="#" className="hover:text-zinc-600">Writers</Link>
            <Link href="#" className="hover:text-zinc-600">Blog</Link>
            <Link href="#" className="hover:text-zinc-600">Privacy</Link>
            <Link href="#" className="hover:text-zinc-600">Terms</Link>
            <Link href="#" className="hover:text-zinc-600">About</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
