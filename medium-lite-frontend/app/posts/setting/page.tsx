export default function SettingModel() {
    return <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Post Settings Modal</title>
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
                    "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n    "
            }}
        />
        <div
            className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
        >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/30 z-40" />
            {/* Modal */}
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 flex flex-1 justify-center items-center py-10 z-50">
                    <div className="layout-content-container flex flex-col w-full max-w-2xl bg-white dark:bg-background-dark rounded-xl shadow-2xl">
                        {/* Modal Header */}
                        <div className="flex flex-wrap justify-between items-center gap-3 p-6 border-b border-gray-200 dark:border-gray-700">
                            <p className="text-gray-900 dark:text-gray-100 text-2xl font-bold leading-tight">
                                Post Settings
                            </p>
                            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400">
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-8">
                            {/* Cover Image Uploader */}
                            <div className="flex flex-col">
                                <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 px-6 py-14">
                                    <div className="flex max-w-[480px] flex-col items-center gap-2">
                                        <p className="text-gray-900 dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] text-center">
                                            Cover Image
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal text-center">
                                            Recommended size: 1600x900px
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700">
                                        <span className="truncate">Upload an image</span>
                                    </button>
                                </div>
                            </div>
                            {/* Tags */}
                            <div className="flex flex-col gap-4">
                                <label className="flex flex-col w-full">
                                    <p className="text-gray-900 dark:text-gray-100 text-base font-medium leading-normal pb-2">
                                        Tags
                                    </p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                                        placeholder="Add up to 5 tags..."
                                    />
                                </label>
                                <div className="flex gap-3 flex-wrap">
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 pl-4 pr-3">
                                        <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">
                                            Technology
                                        </p>
                                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                                            <span className="material-symbols-outlined text-base">
                                                close
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 pl-4 pr-3">
                                        <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">
                                            Writing
                                        </p>
                                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                                            <span className="material-symbols-outlined text-base">
                                                close
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 pl-4 pr-3">
                                        <p className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal">
                                            Productivity
                                        </p>
                                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                                            <span className="material-symbols-outlined text-base">
                                                close
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Post URL Slug */}
                            <div className="flex flex-col gap-4">
                                <label className="flex flex-col w-full">
                                    <p className="text-gray-900 dark:text-gray-100 text-base font-medium leading-normal pb-2">
                                        Post URL Slug
                                    </p>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                                        defaultValue="my-awesome-blog-post"
                                    />
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal pt-2">
                                        The part of the URL that identifies your post.
                                    </p>
                                </label>
                            </div>
                            {/* SEO Meta Description */}
                            <div className="flex flex-col gap-4">
                                <label className="flex flex-col w-full">
                                    <p className="text-gray-900 dark:text-gray-100 text-base font-medium leading-normal pb-2">
                                        SEO Meta Description
                                    </p>
                                    <textarea
                                        className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark focus:border-primary placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                                        placeholder="Enter a short description for search engines..."
                                        defaultValue={""}
                                    />
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal pt-2">
                                        A brief summary for search engines. 150-160 characters
                                        recommended.
                                    </p>
                                </label>
                            </div>
                        </div>
                        {/* Modal Footer */}
                        <div className="flex flex-wrap justify-end gap-4 p-6 border-t border-gray-200 dark:border-gray-700">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-transparent text-gray-900 dark:text-gray-100 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="truncate">Cancel</span>
                            </button>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                                <span className="truncate">Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
