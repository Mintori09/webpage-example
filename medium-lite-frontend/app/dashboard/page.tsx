import { ActivityChart } from "@/features/author-dashboard/components/activity-chart";
import { QuickActions } from "@/features/author-dashboard/components/quick-actions";
import { RecentNotifications } from "@/features/author-dashboard/components/recent-notifications";
import { RecentStories } from "@/features/author-dashboard/components/recent-stories";
import { StatsOverview } from "@/features/author-dashboard/components/stats-overview";

export default function DashboardPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column (2/3) */}
            <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Page Header Area */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md h-10 px-4 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
                        <span className="material-symbols-outlined text-lg">edit</span>
                        <span>Write a story</span>
                    </button>
                </div>

                {/* Feature: Analytics */}
                <StatsOverview />
                <ActivityChart />

                {/* Feature: Stories */}
                <RecentStories />
            </div>

            {/* Sidebar Column (1/3) */}
            <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Feature: Dashboard Utilities */}
                <QuickActions />
                <RecentNotifications />
            </div>
        </div>
    );
}

