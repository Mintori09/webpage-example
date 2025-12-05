import { Card } from "@/components/ui/card";
import { getAnalyticsSummary } from "../services/analytics.service";

export async function StatsOverview() {
    const data = await getAnalyticsSummary();

    const items = [
        { label: "Views (30d)", value: data.views },
        { label: "Reads (30d)", value: data.reads },
        { label: "Fans (30d)", value: data.fans },
        { label: "New Followers", value: data.followers },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item, idx) => (
                <Card key={idx} className="flex flex-col gap-1 p-4">
                    <p className="text-sm font-medium text-medium-emphasis">{item.label}</p>
                    <p className="text-2xl font-semibold text-high-emphasis">{item.value}</p>
                </Card>
            ))}
        </div>
    );
}

