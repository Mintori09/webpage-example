import { Avatar } from "@/components/ui/avatar";
import { RecentNotificationItem } from "../types";

type NotificationItemProps = Pick<RecentNotificationItem, "username" | "action" | "avatarUrl">;

export const NotificationItem = ({ username, action, avatarUrl }: NotificationItemProps) => {
    // Logic lấy 2 chữ cái đầu để làm Avatar Fallback (VD: "Jane Doe" -> "JD")
    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    };

    return (
        <div className="flex gap-3 items-center group">
            {/* Sử dụng Shared UI Avatar thay vì thẻ div cứng */}
            <Avatar src={avatarUrl} alt={username} fallback={getInitials(username)} className="h-9 w-9 border border-border/50" />

            <p className="text-sm text-muted-foreground leading-tight">
                <span className="font-semibold text-foreground hover:underline cursor-pointer transition-colors">
                    {username}
                </span>{" "}
                <span className="text-foreground/90">{action}</span>.
            </p>
        </div >
    );
};

