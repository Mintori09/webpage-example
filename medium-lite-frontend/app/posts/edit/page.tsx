export default function EditPostPage() {
    return <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Novu - Post Editor</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
        />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n    .material-symbols-outlined {\n      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n    }\n  "
            }}
        />
        <div className="relative flex min-h-screen w-full flex-col">
            <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-4 text-zinc-900 dark:text-zinc-100">
                            <a className="flex items-center gap-2" href="#">
                                <h1 className="text-2xl font-bold">Novu</h1>
                            </a>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                Saved
                            </span>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide transition-colors hover:bg-primary/90">
                                <span className="truncate">Publish</span>
                            </button>
                            <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-zinc-200/80 text-zinc-800 text-sm font-bold leading-normal tracking-wide transition-colors hover:bg-zinc-300/80 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600">
                                <span className="truncate">Save Draft</span>
                            </button>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9"
                                data-alt="Author's profile picture"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKiYTHlqq57fxsXSd3L1mxqIzfjwnWhtjD10_xPWq7OS84mY5rpoZEIISf14WgDXxTRj0d3MbQ7r1So3JAkWdZAjnfF98TznXVDvl48aZl6n3dUCFZuCixI0acAFlJkFofH-8MynzfjTXZY_v3D9uTBHfVEAKL1AoxhRpoC_42RZDmwzOtExVyiFFqd2AHIq154Ka5_13hOOUSZ-aG5DAj1vv_CcJK3AWeUDm5hxckB_Y_h4uCjIH81DnDmdcojXJWprcMypeU3Ex9")'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex flex-1 justify-center py-8 sm:py-12 lg:py-16">
                <div className="w-full max-w-3xl px-4">
                    <div className="relative flex flex-col gap-4">
                        <div className="group relative">
                            <button className="absolute -left-12 top-1 flex size-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-500 opacity-0 transition-opacity focus-within:opacity-100 hover:text-zinc-800 group-focus-within:opacity-100 group-hover:opacity-100 dark:border-zinc-600 dark:bg-background-dark dark:text-zinc-400 dark:hover:text-zinc-200">
                                <span className="material-symbols-outlined text-xl">
                                    add_circle
                                </span>
                            </button>
                            <textarea
                                className="w-full resize-none overflow-hidden border-none bg-transparent p-0 text-3xl font-bold text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-0 dark:text-zinc-100 dark:placeholder:text-zinc-500 sm:text-4xl lg:text-5xl"
                                placeholder="Your Title..."
                                rows={1}
                                defaultValue={""}
                            />
                        </div>
                        <div className="sticky top-[65px] z-10 -ml-12 mb-4 hidden sm:block">
                            <div className="relative inline-block">
                                <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-background-light p-1 shadow-sm dark:border-zinc-700 dark:bg-background-dark">
                                    <button className="flex size-12 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        <span className="material-symbols-outlined !text-3xl">
                                            format_bold
                                        </span>
                                    </button>
                                    <button className="flex size-12 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        <span className="material-symbols-outlined !text-3xl">
                                            format_italic
                                        </span>
                                    </button>
                                    <button className="flex size-12 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        <span className="material-symbols-outlined !text-3xl">
                                            format_underlined
                                        </span>
                                    </button>
                                    <div className="mx-1 h-6 w-px bg-zinc-200 dark:bg-zinc-700" />
                                    <button className="flex h-12 items-center justify-center rounded-full px-4 text-lg font-bold text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        H1
                                    </button>
                                    <button className="flex h-12 items-center justify-center rounded-full px-4 text-lg font-bold text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        H2
                                    </button>
                                    <button className="flex h-12 items-center justify-center rounded-full px-4 text-lg font-bold text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        H3
                                    </button>
                                    <div className="mx-1 h-6 w-px bg-zinc-200 dark:bg-zinc-700" />
                                    <button className="flex size-12 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        <span className="material-symbols-outlined !text-3xl">
                                            format_list_bulleted
                                        </span>
                                    </button>
                                    <button className="flex size-12 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        <span className="material-symbols-outlined !text-3xl">
                                            format_list_numbered
                                        </span>
                                    </button>
                                    <button className="flex size-12 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        <span className="material-symbols-outlined !text-3xl">
                                            format_quote
                                        </span>
                                    </button>
                                    <button className="flex size-12 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                                        <span className="material-symbols-outlined !text-3xl">
                                            link
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="absolute -left-12 top-1 flex size-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-500 opacity-0 transition-opacity focus-within:opacity-100 hover:text-zinc-800 group-focus-within:opacity-100 group-hover:opacity-100 dark:border-zinc-600 dark:bg-background-dark dark:text-zinc-400 dark:hover:text-zinc-200">
                                <span className="material-symbols-outlined text-xl">
                                    add_circle
                                </span>
                            </button>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <textarea
                                    className="min-h-[40vh] w-full resize-none border-none bg-transparent p-0 text-lg leading-relaxed text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-0 dark:text-zinc-200 dark:placeholder:text-zinc-500"
                                    placeholder="Tell your story..."
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>

}
