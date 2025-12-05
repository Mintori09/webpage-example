export function DashboardHeader() {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md h-10 px-4 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
                <span className="material-symbols-outlined text-lg">edit</span>
                <span>Write a story</span>
            </button>
        </div>
    );
}

