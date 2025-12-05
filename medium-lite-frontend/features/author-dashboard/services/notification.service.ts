import { RecentNotificationItem } from "../types";

// Giả lập data fetch
export const getRecentNotifications = async (): Promise<RecentNotificationItem[]> => {
    // Simulate delay
    // await new Promise(resolve => setTimeout(resolve, 100));

    return [
        {
            id: "1",
            username: "Jane Doe",
            action: 'liked the story "The Art of Minimalist Design"',
            avatarUrl: "",
            userId: "",
        },
        {
            id: "2",
            username: "John Smith",
            action: "started following you",
            avatarUrl: "",
            userId: "",
        },
    ];
};
