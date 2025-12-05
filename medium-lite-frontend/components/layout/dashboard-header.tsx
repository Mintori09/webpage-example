export function Header() {
    return (
        <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-center border-b border-subtle-border bg-surface/80 backdrop-blur-sm">
            <div className="flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <div className="size-8 text-high-emphasis">
                        {/* SVG Logo */}
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 3.25A.75.75 0 0 1 7.5 2.5h2.25a.75.75 0 0 1 0 1.5H7.5a.75.75 0 0 1-.75-.75Zm0 17.5a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H7.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm.75-18.25a.75.75 0 0 0 0 1.5h2.25a.75.75 0 0 0 0-1.5H18ZM4.25 7.5a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0V7.5Zm17 0a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0V7.5Zm-17 7a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25Zm17 0a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25ZM12 6.247a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM7.753 12a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z"></path>
                        </svg>
                    </div>
                    <h1 className="text-lg font-semibold tracking-tight">Medium Lite</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex size-9 items-center justify-center rounded-full text-medium-emphasis hover:bg-gray-100 transition-colors">
                        <span className="material-symbols-outlined text-2xl">notifications</span>
                    </button>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZbG_FfViY9Lh6FS4mgsGY37caQFsYtIkV8xvf3-giSlWS8WiYAsr85SJf0sUgQ8lLQT8wCSN_DkwYSe5jJsYDW2CcP-aSJdNO2ZoIfa4uvj5tv6WG3NfRIL5XWH8y-tQD-K6YgxhZzzv4OWn0WJXgnSVuZNvhRSv_J5ETlUzSoOwz_6h0yYuxsmUIekhTXrXm1iax5cy6iWjfxpWA1qnyN_XIiTicunqofd3TeaRaZS31QylWL20IvtysKMTemWsAdCZyquoIyiRu")' }}
                    ></div>
                </div>
            </div>
        </header>
    );
}
