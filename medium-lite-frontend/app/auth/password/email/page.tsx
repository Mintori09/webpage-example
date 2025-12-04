import React from 'react';

export default function EmailForgotPasswordPage() {
    return <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Forgot Password - Novu</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700;900&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
        />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n    .material-symbols-outlined {\n      font-variation-settings:\n      'FILL' 0,\n      'wght' 400,\n      'GRAD' 0,\n      'opsz' 24\n    }\n  "
            }}
        />
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center group/design-root overflow-x-hidden">
            <header className="absolute top-0 left-0 right-0 flex items-center justify-between whitespace-nowrap px-6 sm:px-10 py-5">
                <a
                    className="flex items-center gap-3 text-gray-900 dark:text-white"
                    href="#"
                >
                    <div className="size-6 text-primary">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_6_543)">
                                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" />
                                <path
                                    clipRule="evenodd"
                                    d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6_543">
                                    <rect fill="white" height={48} width={48} />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight">
                        Novu
                    </h2>
                </a>
                <div className="flex items-center gap-6">
                    <a
                        className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
                        href="#"
                    >
                        Sign In
                    </a>
                    <a
                        className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
                        href="#"
                    >
                        Get Started
                    </a>
                </div>
            </header>
            <main className="flex w-full max-w-md flex-col items-center justify-center p-6 text-center">
                <div className="w-full">
                    <h1 className="text-gray-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight pt-6 pb-3">
                        Reset your password
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed pb-8">
                        Enter your email address below and we'll send you a link to reset your
                        password.
                    </p>
                </div>
                <form className="w-full flex flex-col items-center gap-6">
                    <div className="w-full text-left">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                Email Address
                            </p>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark focus:border-primary focus:ring-2 focus:ring-primary/30 h-12 placeholder:text-gray-500 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                                placeholder="yourname@example.com"
                                type="email"
                                defaultValue=""
                            />
                        </label>
                    </div>
                    <div className="w-full">
                        <button
                            className="bg-blue-500 flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-wide transition-colors duration-200"
                            type="submit"
                        >
                            <span className="truncate">Send Reset Link</span>
                        </button>
                    </div>
                </form>
                <div className="mt-8">
                    <a
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center gap-2"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-base">
                            arrow_back
                        </span>
                        Back to Sign In
                    </a>
                </div>
            </main>
        </div>
    </>
}
