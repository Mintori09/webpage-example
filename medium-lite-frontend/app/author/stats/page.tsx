import React from 'react';

const AuthorDashboardOverview = () => {
    return <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Author Dashboard Overview</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            rel="stylesheet"
        />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n    .material-symbols-outlined {\n      font-variation-settings:\n      'FILL' 0,\n      'wght' 400,\n      'GRAD' 0,\n      'opsz' 20\n    }\n  "
            }}
        />
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="flex h-full grow flex-col">
                <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-center border-b border-subtle-border bg-surface/80 backdrop-blur-sm">
                    <div className="flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2">
                            <div className="size-8 text-high-emphasis">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M244.2,212.2l-96-168A16,16,0,0,0,132.3,36H43.7a16,16,0,0,0-15.9,20.2l96,168A16,16,0,0,0,139.7,232h88.6a16,16,0,0,0,15.9-20.2ZM139.7,216l-44-77,22-38.5,66,115.5Zm66-1.8L158.3,120,132.3,73.1,205.7,214.2Z" />
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold tracking-tighter">Novu</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex size-9 items-center justify-center rounded-full text-medium-emphasis hover:bg-gray-100 transition-colors">
                                <span className="material-symbols-outlined text-2xl">
                                    notifications
                                </span>
                            </button>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                                data-alt="Author's profile picture"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZbG_FfViY9Lh6FS4mgsGY37caQFsYtIkV8xvf3-giSlWS8WiYAsr85SJf0sUgQ8lLQT8wCSN_DkwYSe5jJsYDW2CcP-aSJdNO2ZoIfa4uvj5tv6WG3NfRIL5XWH8y-tQD-K6YgxhZzzv4OWn0WJXgnSVuZNvhRSv_J5ETlUzSoOwz_6h0yYuxsmUIekhTXrXm1iax5cy6iWjfxpWA1qnyN_XIiTicunqofd3TeaRaZS31QylWL20IvtysKMTemWsAdCZyquoIyiRu")'
                                }}
                            />
                        </div>
                    </div>
                </header>
                <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                                <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md h-10 px-4 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                    <span>Write a story</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="flex flex-col gap-1 rounded-lg border border-subtle-border bg-surface p-4 shadow-subtle">
                                    <p className="text-sm font-medium text-medium-emphasis">
                                        Views (30d)
                                    </p>
                                    <p className="text-2xl font-semibold text-high-emphasis">
                                        12,450
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 rounded-lg border border-subtle-border bg-surface p-4 shadow-subtle">
                                    <p className="text-sm font-medium text-medium-emphasis">
                                        Reads (30d)
                                    </p>
                                    <p className="text-2xl font-semibold text-high-emphasis">
                                        8,912
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 rounded-lg border border-subtle-border bg-surface p-4 shadow-subtle">
                                    <p className="text-sm font-medium text-medium-emphasis">
                                        Fans (30d)
                                    </p>
                                    <p className="text-2xl font-semibold text-high-emphasis">345</p>
                                </div>
                                <div className="flex flex-col gap-1 rounded-lg border border-subtle-border bg-surface p-4 shadow-subtle">
                                    <p className="text-sm font-medium text-medium-emphasis">
                                        New Followers
                                    </p>
                                    <p className="text-2xl font-semibold text-high-emphasis">27</p>
                                </div>
                            </div>
                            <div className="rounded-lg border border-subtle-border bg-surface p-4 sm:p-6 shadow-subtle">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold">Activity Overview</h3>
                                    <span className="text-sm text-medium-emphasis">
                                        Last 30 Days
                                    </span>
                                </div>
                                <div className="w-full h-64">
                                    <svg
                                        className="w-full h-full"
                                        fill="none"
                                        viewBox="0 0 400 160"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            className="text-xs text-medium-emphasis/70"
                                            style={{ fontFamily: "Inter, sans-serif" }}
                                        >
                                            <line
                                                className="stroke-subtle-border"
                                                strokeDasharray="2,3"
                                                x1={0}
                                                x2={400}
                                                y1={0}
                                                y2={0}
                                            />
                                            <text
                                                dominantBaseline="middle"
                                                textAnchor="end"
                                                x={-4}
                                                y={0}
                                            >
                                                1k
                                            </text>
                                            <line
                                                className="stroke-subtle-border"
                                                strokeDasharray="2,3"
                                                x1={0}
                                                x2={400}
                                                y1={40}
                                                y2={40}
                                            />
                                            <text
                                                dominantBaseline="middle"
                                                textAnchor="end"
                                                x={-4}
                                                y={40}
                                            >
                                                750
                                            </text>
                                            <line
                                                className="stroke-subtle-border"
                                                strokeDasharray="2,3"
                                                x1={0}
                                                x2={400}
                                                y1={80}
                                                y2={80}
                                            />
                                            <text
                                                dominantBaseline="middle"
                                                textAnchor="end"
                                                x={-4}
                                                y={80}
                                            >
                                                500
                                            </text>
                                            <line
                                                className="stroke-subtle-border"
                                                strokeDasharray="2,3"
                                                x1={0}
                                                x2={400}
                                                y1={120}
                                                y2={120}
                                            />
                                            <text
                                                dominantBaseline="middle"
                                                textAnchor="end"
                                                x={-4}
                                                y={120}
                                            >
                                                250
                                            </text>
                                            <line
                                                className="stroke-subtle-border"
                                                x1={0}
                                                x2={400}
                                                y1={160}
                                                y2={160}
                                            />
                                            <text
                                                dominantBaseline="middle"
                                                textAnchor="end"
                                                x={-4}
                                                y={160}
                                            >
                                                0
                                            </text>
                                        </g>
                                        <g
                                            className="text-xs text-medium-emphasis/70"
                                            style={{ fontFamily: "Inter, sans-serif" }}
                                        >
                                            <text textAnchor="middle" x="13.33" y={174}>
                                                1
                                            </text>
                                            <text textAnchor="middle" x="66.67" y={174}>
                                                5
                                            </text>
                                            <text textAnchor="middle" x="133.33" y={174}>
                                                10
                                            </text>
                                            <text textAnchor="middle" x={200} y={174}>
                                                15
                                            </text>
                                            <text textAnchor="middle" x="266.67" y={174}>
                                                20
                                            </text>
                                            <text textAnchor="middle" x="333.33" y={174}>
                                                25
                                            </text>
                                            <text textAnchor="middle" x={400} y={174}>
                                                30
                                            </text>
                                        </g>
                                        <g
                                            className="fill-primary/80 hover:fill-primary transition-colors"
                                            transform="translate(0, 160) scale(1, -1)"
                                        >
                                            <rect height={40} rx={2} width={10} x="8.33" y={0} />
                                            <rect height={64} rx={2} width={10} x="21.67" y={0} />
                                            <rect height={56} rx={2} width={10} x={35} y={0} />
                                            <rect height={80} rx={2} width={10} x="48.33" y={0} />
                                            <rect height={72} rx={2} width={10} x="61.67" y={0} />
                                            <rect height={96} rx={2} width={10} x={75} y={0} />
                                            <rect height={88} rx={2} width={10} x="88.33" y={0} />
                                            <rect height={120} rx={2} width={10} x="101.67" y={0} />
                                            <rect height={112} rx={2} width={10} x={115} y={0} />
                                            <rect height={128} rx={2} width={10} x="128.33" y={0} />
                                            <rect height={104} rx={2} width={10} x="141.67" y={0} />
                                            <rect height={90} rx={2} width={10} x={155} y={0} />
                                            <rect height={80} rx={2} width={10} x="168.33" y={0} />
                                            <rect height={70} rx={2} width={10} x="181.67" y={0} />
                                            <rect height={60} rx={2} width={10} x={195} y={0} />
                                            <rect height={75} rx={2} width={10} x="208.33" y={0} />
                                            <rect height={85} rx={2} width={10} x="221.67" y={0} />
                                            <rect height={95} rx={2} width={10} x={235} y={0} />
                                            <rect height={110} rx={2} width={10} x="248.33" y={0} />
                                            <rect height={130} rx={2} width={10} x="261.67" y={0} />
                                            <rect height={115} rx={2} width={10} x={275} y={0} />
                                            <rect height={100} rx={2} width={10} x="288.33" y={0} />
                                            <rect height={85} rx={2} width={10} x="301.67" y={0} />
                                            <rect height={70} rx={2} width={10} x={315} y={0} />
                                            <rect height={55} rx={2} width={10} x="328.33" y={0} />
                                            <rect height={40} rx={2} width={10} x="341.67" y={0} />
                                            <rect height={60} rx={2} width={10} x={355} y={0} />
                                            <rect height={75} rx={2} width={10} x="368.33" y={0} />
                                            <rect height={50} rx={2} width={10} x="381.67" y={0} />
                                            <rect height={65} rx={2} width={10} x={395} y={0} />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="rounded-lg border border-subtle-border bg-surface shadow-subtle overflow-hidden">
                                <div className="p-4 sm:p-6 border-b border-subtle-border">
                                    <h3 className="text-lg font-semibold">Recent Stories</h3>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center px-4 sm:px-6 py-4 hover:bg-gray-50/50 transition-colors">
                                        <div className="flex-1">
                                            <p className="font-semibold text-high-emphasis">
                                                The Art of Minimalist Design
                                            </p>
                                            <p className="text-sm text-medium-emphasis mt-1">
                                                Published on Oct 26, 2023
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-6 text-sm">
                                            <div className="text-center">
                                                <p className="text-medium-emphasis">Views</p>
                                                <p className="font-semibold">5.2k</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-medium-emphasis">Likes</p>
                                                <p className="font-semibold">890</p>
                                            </div>
                                            <button className="text-medium-emphasis flex size-8 items-center justify-center rounded-full hover:bg-gray-200/50 transition-colors">
                                                <span className="material-symbols-outlined text-xl">
                                                    more_horiz
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center px-4 sm:px-6 py-4 hover:bg-gray-50/50 transition-colors border-t border-subtle-border">
                                        <div className="flex-1">
                                            <p className="font-semibold text-high-emphasis">
                                                10 UI/UX Principles for a Better User Experience
                                            </p>
                                            <p className="text-sm text-medium-emphasis mt-1">
                                                Published on Sep 15, 2023
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-6 text-sm">
                                            <div className="text-center">
                                                <p className="text-medium-emphasis">Views</p>
                                                <p className="font-semibold">12.1k</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-medium-emphasis">Likes</p>
                                                <p className="font-semibold">1.2k</p>
                                            </div>
                                            <button className="text-medium-emphasis flex size-8 items-center justify-center rounded-full hover:bg-gray-200/50 transition-colors">
                                                <span className="material-symbols-outlined text-xl">
                                                    more_horiz
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center px-4 sm:px-6 py-4 hover:bg-gray-50/50 transition-colors border-t border-subtle-border">
                                        <div className="flex-1">
                                            <p className="font-semibold text-high-emphasis">
                                                A Deep Dive into Modern CSS Layouts
                                            </p>
                                            <p className="text-sm text-medium-emphasis mt-1">
                                                Published on Aug 02, 2023
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-6 text-sm">
                                            <div className="text-center">
                                                <p className="text-medium-emphasis">Views</p>
                                                <p className="font-semibold">8.7k</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-medium-emphasis">Likes</p>
                                                <p className="font-semibold">950</p>
                                            </div>
                                            <button className="text-medium-emphasis flex size-8 items-center justify-center rounded-full hover:bg-gray-200/50 transition-colors">
                                                <span className="material-symbols-outlined text-xl">
                                                    more_horiz
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 flex flex-col gap-6">
                            <div className="rounded-lg border border-subtle-border bg-surface shadow-subtle">
                                <div className="p-4 border-b border-subtle-border">
                                    <h3 className="font-semibold">Quick Actions</h3>
                                </div>
                                <div className="p-4 flex flex-col gap-3">
                                    <a
                                        className="flex items-center gap-3 text-medium-emphasis hover:text-high-emphasis transition-colors p-2 rounded"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined">bar_chart</span>
                                        <span className="text-sm font-medium">View Stats</span>
                                    </a>
                                    <a
                                        className="flex items-center gap-3 text-medium-emphasis hover:text-high-emphasis transition-colors p-2 rounded"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined">article</span>
                                        <span className="text-sm font-medium">Manage Stories</span>
                                    </a>
                                    <a
                                        className="flex items-center gap-3 text-medium-emphasis hover:text-high-emphasis transition-colors p-2 rounded"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined">comment</span>
                                        <span className="text-sm font-medium">View Comments</span>
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-lg border border-subtle-border bg-surface shadow-subtle">
                                <div className="p-4 border-b border-subtle-border">
                                    <h3 className="font-semibold">Notifications</h3>
                                </div>
                                <div className="p-4 flex flex-col gap-4">
                                    <div className="flex gap-3">
                                        <div className="size-8 rounded-full bg-gray-200 flex-shrink-0" />
                                        <p className="text-sm text-medium-emphasis">
                                            <strong className="font-medium text-high-emphasis">
                                                Jane Doe
                                            </strong>{" "}
                                            liked your story "The Art of Minimalist Design".
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="size-8 rounded-full bg-gray-200 flex-shrink-0" />
                                        <p className="text-sm text-medium-emphasis">
                                            <strong className="font-medium text-high-emphasis">
                                                John Smith
                                            </strong>{" "}
                                            started following you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </>
};

export default AuthorDashboardOverview;
