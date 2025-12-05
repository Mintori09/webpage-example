export interface StatItem {
    label: string;
    value: string | number;
}


export interface NotificationItem {
    id: string;
    user: string;
    action: string;
    target?: string;
    avatarColor?: string;
}

export interface StoryItem {
    id: number;
    title: string;
    date: string;
    views: string;
    likes: string;
}

export interface RecentNotificationItem {
    id: string;
    username: string;
    action: string;
    avatarUrl?: string;
    userId?: string;
}
