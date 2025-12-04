
export default function LoginPage() {
    return <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Sign In</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap"
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
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
            <header className="absolute top-0 flex w-full max-w-5xl items-center justify-center p-6">
                <div className="flex items-center gap-2 text-[#1A1A1A] dark:text-white">
                    <svg
                        className="h-8 w-8 text-[#1A1A1A] dark:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.72 7.97 5.5 9.428 5.5c1.398 0 2.773.19 3.902.512a.75.75 0 01.294 1.352l-3.08 1.54a.75.75 0 01-.84.043l-1.425-.855a.75.75 0 00-.842.043l-1.332.8a.75.75 0 01-1.15-.642v-1.3a.75.75 0 01.332-.607zM15.668 9.973c-1.13.323-2.505.512-3.903.512-1.457 0-2.915-.22-4.178-.636a.75.75 0 01-.293-1.352l3.08-1.54a.75.75 0 01.84.043l1.425.855a.75.75 0 00.842-.043l1.332-.8a.75.75 0 011.15.642v1.3a.75.75 0 01-.332.607z"
                            fillRule="evenodd"
                        />
                    </svg>
                    <h1 className="text-2xl font-bold">Medium</h1>
                </div>
            </header>
            <main className="flex w-full max-w-md flex-col items-center">
                <h1 className="text-[#1A1A1A] dark:text-white text-4xl font-bold leading-tight tracking-tight text-center">
                    Welcome back.
                </h1>
                <p className="mt-2 text-center text-base font-normal text-[#6B6B6B] dark:text-gray-400">
                    Sign in to continue to Medium.
                </p>
                <div className="mt-10 w-full space-y-6">
                    <div className="relative flex items-center justify-center text-sm">
                        <span className="absolute w-full border-t border-[#EAEAEA] dark:border-gray-700" />
                        <button className="relative flex items-center gap-2 rounded-full border border-[#EAEAEA] dark:border-gray-700 bg-background-light dark:bg-background-dark px-6 py-2.5 text-[#1A1A1A] dark:text-white">
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                    fill="#FFC107"
                                />
                                <path
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                    fill="#FF3D00"
                                />
                                <path
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                    fill="#4CAF50"
                                />
                                <path
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.244,44,30.036,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                    fill="#1976D2"
                                />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>
                    <div className="relative flex items-center justify-center text-sm">
                        <span className="w-full border-t border-[#EAEAEA] dark:border-gray-700" />
                        <span className="absolute bg-background-light dark:bg-background-dark px-2 text-[#6B6B6B] dark:text-gray-400">
                            or
                        </span>
                    </div>
                </div>
                <form className="mt-6 w-full space-y-5">
                    <div>
                        <label
                            className="block text-base font-medium text-[#1A1A1A] dark:text-gray-200"
                            htmlFor="email"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                autoComplete="email"
                                className="form-input block w-full rounded-lg border-0 bg-white dark:bg-gray-800 py-3 px-4 text-[#1A1A1A] dark:text-white shadow-sm ring-1 ring-inset ring-[#EAEAEA] dark:ring-gray-700 placeholder:text-[#6B6B6B] focus:ring-2 focus:ring-inset focus:ring-primary"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required=""
                                type="email"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                className="block text-base font-medium text-[#1A1A1A] dark:text-gray-200"
                                htmlFor="password"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                autoComplete="current-password"
                                className="form-input block w-full rounded-lg border-0 bg-white dark:bg-gray-800 py-3 px-4 text-[#1A1A1A] dark:text-white shadow-sm ring-1 ring-inset ring-[#EAEAEA] dark:ring-gray-700 placeholder:text-[#6B6B6B] focus:ring-2 focus:ring-inset focus:ring-primary"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required=""
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <a
                                className="font-medium text-[#6B6B6B] dark:text-gray-400 hover:text-primary dark:hover:text-primary/80"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            className="flex w-full justify-center rounded-lg bg-primary px-3 py-3 text-base font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-[#6B6B6B] dark:text-gray-400">
                    No account?
                    <a
                        className="font-semibold leading-6 text-[#1A1A1A] dark:text-white hover:text-primary dark:hover:text-primary/80"
                        href="#"
                    >
                        Sign up
                    </a>
                </p>
            </main>
        </div>
    </>
}
