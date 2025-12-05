import { NotificationItem, StatItem, StoryItem } from "../types";

export const getDashboardStats = async (): Promise<StatItem[]> => {
    // Simulate DB call
    return [
        { label: "Views (30d)", value: "12,450" },
        { label: "Reads (30d)", value: "8,912" },
        { label: "Fans (30d)", value: 345 },
        { label: "New Followers", value: 27 },
    ];
};


