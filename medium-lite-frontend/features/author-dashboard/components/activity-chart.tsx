import { Card } from "@/components/ui/card";

export function ActivityChart() {
    return (
        <Card className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Activity Overview</h3>
                <span className="text-sm text-medium-emphasis">Last 30 Days</span>
            </div>
            <div className="w-full h-64">
                <svg className="w-full h-full" fill="none" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
                    {/* ... (SVG Content from original HTML - giữ nguyên nội dung SVG) ... */}
                    <g className="text-xs text-medium-emphasis/70" style={{ fontFamily: "Inter, sans-serif" }}>
                        <line className="stroke-subtle-border" strokeDasharray="2,3" x1="0" x2="400" y1="0" y2="0"></line>
                        <text dominantBaseline="middle" textAnchor="end" x="-4" y="0">1k</text>
                        {/* ... Các phần còn lại của SVG ... */}
                        <rect height="40" rx="2" width="10" x="8.33" y="0"></rect>
                        {/* Lưu ý: Trong React phải đổi class=".." thành className=".." và style string thành object */}
                    </g>
                    {/* Tôi rút gọn code SVG ở đây cho ngắn, nhưng bạn sẽ copy full SVG và sửa attribute thành camelCase */}
                </svg>
            </div>
        </Card>
    );
}

