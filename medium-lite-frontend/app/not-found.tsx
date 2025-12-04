import React from 'react';

export default function NotFoundPage() {
    return <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-black/10 dark:border-b-white/10 px-6 sm:px-10 md:px-20 lg:px-40 py-4">
                <div className="flex items-center gap-3 text-black dark:text-white">
                    <div className="size-6">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Novu</h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Sign In</span>
                </button>
            </header>
            <main className="flex flex-1 items-center justify-center py-10 px-4">
                <div className="layout-content-container flex flex-col max-w-lg flex-1 items-center text-center">
                    <h1 className="text-black dark:text-white tracking-tight text-8xl sm:text-9xl font-bold leading-tight px-4 pb-4">404</h1>
                    <h2 className="text-black dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Page Not Found.</h2>
                    <p className="text-black/60 dark:text-white/60 text-base font-normal leading-relaxed pb-6 px-4">The page you are looking for might have been moved, deleted, or is temporarily unavailable.</p>
                    <div className="flex px-4 py-3 justify-center">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                            <span className="truncate">Go to Homepage</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    </div>
}
