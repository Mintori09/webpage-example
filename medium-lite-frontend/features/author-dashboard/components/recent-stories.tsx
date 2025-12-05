import { Card } from "@/components/ui/card";
import { StoryItem } from "../types";


const stories: StoryItem[] = [
    { id: 1, title: "The Art of Minimalist Design", date: "Oct 26, 2023", views: "5.2k", likes: "890" },
    { id: 2, title: "10 UI/UX Principles for a Better User Experience", date: "Sep 15, 2023", views: "12.1k", likes: "1.2k" },
    { id: 3, title: "A Deep Dive into Modern CSS Layouts", date: "Aug 02, 2023", views: "8.7k", likes: "950" },
];

export function RecentStories() {
    return (
        <Card className="overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-subtle-border">
                <h3 className="text-lg font-semibold">Recent Stories</h3>
            </div>
            <div className="flex flex-col">
                {stories.map((story, idx) => (
                    <div
                        key={story.id}
                        className={`flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center px-4 sm:px-6 py-4 hover:bg-gray-50/50 transition-colors ${idx !== 0 ? "border-t border-subtle-border" : ""
                            }`}
                    >
                        <div className="flex-1">
                            <p className="font-semibold text-high-emphasis">{story.title}</p>
                            <p className="text-sm text-medium-emphasis mt-1">Published on {story.date}</p>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                                <p className="text-medium-emphasis">Views</p>
                                <p className="font-semibold">{story.views}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-medium-emphasis">Likes</p>
                                <p className="font-semibold">{story.likes}</p>
                            </div>
                            <button className="text-medium-emphasis flex size-8 items-center justify-center rounded-full hover:bg-gray-200/50 transition-colors">
                                <span className="material-symbols-outlined text-xl">more_horiz</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}

