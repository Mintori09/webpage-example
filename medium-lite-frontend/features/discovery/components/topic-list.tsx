import { Button } from "@/components/ui/button";

const TAGS = ["Technology", "Self Improvement", "Design", "Startups", "Culture"];

export function TopicList() {
    return (
        <div>
            <h4 className="text-base font-bold text-[#1A1A1A] dark:text-white mb-4">Top Tags</h4>
            <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                    <Button key={tag} variant="ghost" >{tag}</Button>
                ))}
            </div>
        </div>
    );
}

