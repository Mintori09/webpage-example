import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function QuickActions() {
    const actions = [
        { icon: "bar_chart", label: "View Stats" },
        { icon: "article", label: "Manage Stories" },
        { icon: "comment", label: "View Comments" },
    ];

    return (
        <Card>
            <CardHeader title="Quick Actions" />
            <CardContent className="flex flex-col gap-3">
                {actions.map((action) => (
                    <a
                        key={action.label}
                        className="flex items-center gap-3 text-medium-emphasis hover:text-high-emphasis transition-colors p-2 rounded"
                        href="#"
                    >
                        <span className="material-symbols-outlined">{action.icon}</span>
                        <span className="text-sm font-medium">{action.label}</span>
                    </a>
                ))}
            </CardContent>
        </Card>
    );
}

