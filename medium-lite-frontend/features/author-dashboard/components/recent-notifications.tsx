import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { RecentNotificationItem } from "../types";
import { getRecentNotifications } from "../services/notification.service";
import { NotificationItem } from "./notification-item";

export async function RecentNotifications() {

    const notifications: RecentNotificationItem[] = await getRecentNotifications();

    return (
        <Card>
            <CardHeader title="Notifications" />
            <CardContent className="flex flex-col gap-4">
                {notifications.map((item) => (
                    <NotificationItem
                        key={item.id}
                        username={item.username}
                        action={item.action}
                        avatarUrl={item.avatarUrl}
                    />
                ))}
            </CardContent>
        </Card>
    );
}


