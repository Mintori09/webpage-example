import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { RecentNotificationItem } from "../types";
import { getRecentNotifications } from "../services/notification.service";
import { NotificationItem } from "./notification-item";

export async function RecentNotifications() {

    const notifications: RecentNotificationItem[] = await getRecentNotifications();

    return (
        <Card>
            {/* Giả định CardHeader của bạn nhận title prop như code gốc. 
          Nếu dùng shadcn chuẩn, nên dùng <CardTitle> bên trong */}
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


