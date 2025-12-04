export default function UserProfilePage() {
    return <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>User Settings - Novu</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
            rel="stylesheet"
        />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n    .material-symbols-outlined {\n      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n    }\n  "
            }}
        />
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
            <header className="sticky top-0 z-10 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                            <div className="size-6 text-primary">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.6667 11.3333C12.6667 12.0697 12.0697 12.6667 11.3333 12.6667C10.597 12.6667 10 12.0697 10 11.3333C10 10.597 10.597 10 11.3333 10C12.0697 10 12.6667 10.597 12.6667 11.3333Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        clipRule="evenodd"
                                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM19.3333 10C19.3333 8.15905 17.8409 6.66667 16 6.66667C14.1591 6.66667 12.6667 8.15905 12.6667 10V11.3333H11.3333C9.49238 11.3333 8 12.8257 8 14.6667V22.6667C8 24.5076 9.49238 26 11.3333 26H20.6667C22.5076 26 24 24.5076 24 22.6667V14.6667C24 12.8257 22.5076 11.3333 20.6667 11.3333H19.3333V10ZM15.3333 18.1504C15.3333 17.7608 15.4882 17.3873 15.761 17.1145C16.0338 16.8417 16.4072 16.6869 16.7969 16.6869C17.1865 16.6869 17.5599 16.8417 17.8327 17.1145C18.1055 17.3873 18.2604 17.7608 18.2604 18.1504V20.817C18.2604 21.2066 18.1055 21.5801 17.8327 21.8529C17.5599 22.1257 17.1865 22.2805 16.7969 22.2805C16.4072 22.2805 16.0338 22.1257 15.761 21.8529C15.4882 21.5801 15.3333 21.2066 15.3333 20.817V18.1504Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-[#111418] dark:text-white text-lg font-bold">
                                Novu
                            </h2>
                        </div>
                        <div className="flex items-center gap-6">
                            <nav className="hidden md:flex items-center gap-6">
                                <a
                                    className="text-[#111418] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                                    href="#"
                                >
                                    Home
                                </a>
                                <a
                                    className="text-[#111418] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                                    href="#"
                                >
                                    My Stories
                                </a>
                                <a
                                    className="text-[#111418] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium"
                                    href="#"
                                >
                                    Notifications
                                </a>
                            </nav>
                            <button className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90">
                                <span>Write</span>
                            </button>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                data-alt="User avatar image"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPhX4FfKHYuedOSXHkLMdA0z03hJnUK9uRPUEUaagy7Dch1m7BmzfyZfq3Sbmt0BbUYnyE2O2p5mBtAVeL6MKHoCDDPdxdZb_Tn7XsYax-0pjO62PoK8ShNknkw9-vWAlUoxNpR-kWTcLsuMT4iGNt8K5ijtnahNVfkyfYsDF8dcFJ-bqAkrkAFaEDQ5wB_t_n-_6C57nA0eDkpYal6f1p0CWkpvZHLMKL7FPs0OvZVs1Gzn5RiNlPLAAleK65_Em7HtHTHe4zZ6dk")'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
                        <div className="sticky top-24">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 px-3">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                                        data-alt="User avatar image"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqdsntM2zpN_3QCQ5lyL5QzvJHhUDTPH5nwc2yQf3E2dzhsCWcZthcvxKGTyyXiZNvis36fAK1moEzg2faxrKZtQEL92Rc0oTkO7JqdM0ElawblifNUu9AMKln4u-q999I3mlPX61otHly5utv7S5Zrxx9Y1w_F6cXzvAEw1yDV79Fvifik0vGGF_9c3iqRE_m1imJ4pkbkLhxCjIs_JdeLd1F0P2gqPpUOW7r5j8nr2EM6-zRIyiTiz-wpQgvVaHjwl79qQO2dX_1")'
                                        }}
                                    />
                                    <div className="flex flex-col">
                                        <h1 className="text-[#111418] dark:text-white text-base font-medium">
                                            Alex Doe
                                        </h1>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                                            @alexdoe
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 mt-4">
                                    <a
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            person
                                        </span>
                                        <p className="text-sm font-medium">Profile</p>
                                    </a>
                                    <a
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            settings
                                        </span>
                                        <p className="text-sm font-medium">Account</p>
                                    </a>
                                    <a
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            shield
                                        </span>
                                        <p className="text-sm font-medium">Security</p>
                                    </a>
                                    <a
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined text-xl text-red-500">
                                            warning
                                        </span>
                                        <p className="text-sm font-medium">Danger Zone</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="flex-1 min-w-0">
                        <div className="mb-8">
                            <h1 className="text-[#111418] dark:text-white text-4xl font-black tracking-tighter">
                                Settings
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base mt-2">
                                Manage your profile, account, and security settings.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-[#111418] dark:text-white text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-6">
                                    Profile
                                </h2>
                                <div className="flex p-4 @container bg-white dark:bg-background-dark rounded-xl shadow-sm">
                                    <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                                        <div className="flex items-center gap-5">
                                            <div
                                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24"
                                                data-alt="User avatar image"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNo-04vkjoUOq56_bksZ2jfhqlIEDALMyuDE2v4AIoeVTeiedb89ZMOVxIty-QHpT5YLJgHWU79sxZGKJsyr12IMmeNE8PZT95JievFRwyCyYXjR4ddXwWIAiAvAjMxpYmbNcowKSa-Nnp7uUw0riDflNZv8sUgmhRqp-SWRYSiMmAfBQ53VXyoVh-meLllTea7Fr03y5epWC6Bw7rixdWNdL7OaFLYyCqknu2tiaRXVf7AeAgEFtkYiWVb1WpTWljPNBI-b6iU2M4")'
                                                }}
                                            />
                                            <div className="flex flex-col justify-center">
                                                <p className="text-[#111418] dark:text-white text-xl font-bold">
                                                    Profile Photo
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                                    Upload a new photo for your profile.
                                                </p>
                                            </div>
                                        </div>
                                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-white/10 text-[#111418] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-white/20 w-full max-w-[480px] @[480px]:w-auto">
                                            <span>Change Photo</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 space-y-6 bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm">
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-white/5"
                                            id="name"
                                            type="text"
                                            defaultValue="Alex Doe"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            htmlFor="username"
                                        >
                                            Username
                                        </label>
                                        <input
                                            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-white/5"
                                            id="username"
                                            type="text"
                                            defaultValue="alexdoe"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            htmlFor="bio"
                                        >
                                            Short Bio
                                        </label>
                                        <textarea
                                            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-white/5"
                                            id="bio"
                                            rows={3}
                                            defaultValue={
                                                "Digital nomad, writer, and coffee enthusiast. Sharing stories from the road."
                                            }
                                        />
                                    </div>
                                    <div className="flex justify-end pt-2">
                                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90">
                                            <span>Save Changes</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <hr className="border-gray-200 dark:border-gray-800" />
                            <section>
                                <h2 className="text-[#111418] dark:text-white text-2xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 mb-6">
                                    Security
                                </h2>
                                <div className="mt-6 space-y-6 bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm">
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            htmlFor="email"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-white/5"
                                            id="email"
                                            type="email"
                                            defaultValue="alex.doe@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            htmlFor="current_password"
                                        >
                                            Current Password
                                        </label>
                                        <input
                                            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-white/5"
                                            id="current_password"
                                            type="password"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                            htmlFor="new_password"
                                        >
                                            New Password
                                        </label>
                                        <input
                                            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-gray-50 dark:bg-white/5"
                                            id="new_password"
                                            type="password"
                                        />
                                    </div>
                                    <div className="flex justify-end pt-2">
                                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90">
                                            <span>Update Password</span>
                                        </button>
                                    </div>
                                </div>
                            </section>
                            <hr className="border-gray-200 dark:border-gray-800" />
                            <section>
                                <h2 className="text-red-600 dark:text-red-500 text-2xl font-bold tracking-tight border-b border-red-200 dark:border-red-500/30 pb-3 mb-6">
                                    Danger Zone
                                </h2>
                                <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-red-200 dark:border-red-500/30">
                                    <div>
                                        <h3 className="font-bold text-[#111418] dark:text-white">
                                            Delete your account
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            Once you delete your account, there is no going back. Please
                                            be certain.
                                        </p>
                                    </div>
                                    <button className="flex mt-4 md:mt-0 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-red-600 text-white text-sm font-bold tracking-wide hover:bg-red-700">
                                        <span>Delete Account</span>
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>

}
