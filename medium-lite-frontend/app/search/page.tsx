export default function SearchPage() {
    return <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Search Results Page</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
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
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-gray-700 bg-white dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-10">
                    <div className="flex items-center gap-4 text-gray-900 dark:text-white">
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
                        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                            Brand
                        </h2>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-4">
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal"
                                href="#"
                            >
                                Our Story
                            </a>
                            <a
                                className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal"
                                href="#"
                            >
                                Write
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Get started</span>
                            </button>
                            <button className="hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Sign In</span>
                            </button>
                        </div>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            data-alt="User profile avatar"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD89bJ-Fe0PAbw5Z--Jr2zGcemgdFR11MPGHX8wC5Le8DHsb3ZEXkz8alHGMp7arczoQlikl6X8ymV_PsZcwv12esTHveORtISDTgjklmtYRKcIfl0qoavpSs0URkAkj5NIPGDxg7wH03YZXGI18lZPwrtlvNS5MTGS-7m08L8rd9p-du5Qwv3SyNctImvinvBLkkQiVQp0euwHtgLVWoCFYsGBWOdvjAThTiQgvC2GA9BDVSRl5m_79jwubW5VG1WiwFTcJStXNcVu")'
                            }}
                        />
                    </div>
                </header>
                <main className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1 px-4 sm:px-6 lg:px-8">
                        <div className="py-6">
                            <div className="px-0 sm:px-4 py-3">
                                <label className="flex flex-col min-w-40 h-14 w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border border-gray-200 dark:border-gray-700 border-r-0">
                                            <span className="material-symbols-outlined">search</span>
                                        </div>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-none text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary focus:ring-inset border-y border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                                            defaultValue="UI Design"
                                        />
                                        <div className="flex items-center justify-center rounded-r-lg border border-gray-200 dark:border-gray-700 border-l-0 bg-white dark:bg-background-dark pr-4">
                                            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent text-gray-900 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] h-auto min-w-0 px-0">
                                                <div className="text-gray-500 dark:text-gray-400">
                                                    <span className="material-symbols-outlined">close</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                                    <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-primary text-white">
                                        All results
                                    </button>
                                    <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        People
                                    </button>
                                    <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        Technology
                                    </button>
                                    <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        Design
                                    </button>
                                    <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        Business
                                    </button>
                                    <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                                        Psychology
                                    </button>
                                </div>
                            </div>
                            <h1 className="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight px-4 text-left pb-3 pt-6">
                                Results for 'UI Design'
                            </h1>
                        </div>
                        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
                            <div className="flex flex-col sm:flex-row gap-6 bg-transparent px-4 py-8 justify-between">
                                <div className="flex flex-1 flex-col justify-center gap-2">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                                            data-alt="Author avatar for Sarah Lee"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBVTnox_ySdwaccgGa7W0F9moNF87Xk--siedM6PD9alhADxmofBI2esPEh-bKxhhy31QlCe6Ifo6euu-MNwjeHoPNdWkDJ6LF32fE7gdADWDUSNyVnIuMyZoRvE34KXc_vmEraninEVsT76Wdl0O0HWyclraC18_AtfCi7LfkATVkjGyMrF4gFUFunQeKr0e2A2kaVK2pvDzHW4o94r1IqAzpidDrqD1VWUixlINdiORB_un59y95wJHNl23V6dAxPmboYMtMcatj")'
                                            }}
                                        />
                                        <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
                                            Sarah Lee
                                        </p>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
                                        The Future of{" "}
                                        <span className="bg-primary/20 rounded px-1 py-0.5">
                                            UI Design
                                        </span>
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">
                                        Exploring the latest trends and technologies shaping the way
                                        we interact with digital products. From AI-driven interfaces
                                        to the rise of immersive AR/VR experiences, we dive into
                                        what's next for{" "}
                                        <span className="font-bold text-gray-700 dark:text-gray-300">
                                            UI Design
                                        </span>
                                        .
                                    </p>
                                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm mt-2">
                                        <span>Jan 15</span>
                                        <span>·</span>
                                        <span>7 min read</span>
                                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full px-3 py-1 text-xs font-medium">
                                            Technology
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between sm:justify-start mt-4 sm:mt-0">
                                    <div
                                        className="bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg w-full sm:w-48 h-auto sm:h-32"
                                        data-alt="Abstract image representing future UI design concepts"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0QPoSEm73-7uWxXzO9mToSbnOI8qObMwaNA2gWRJV0E5A-YUCob58EnTjsiRDxCJGKN29PUeQt9yEUIRZCB7dzL6l10c5F59r7_JcbZyreW2AHjB0zj7S5TXPMVbKjrMOGI3fVb2ukLB7NHhRlELS6crM8CPOw1x3qOEvBgiumQGWYJQkyRdyXmm7QXvZW4q2YFJ5q-WR2gEHRo4YwNsbFvg8SXTpCdIXlP_oWRBkCj48bguU4_umAHkMHFm6BTUNddXQ6a-z3uRv")'
                                        }}
                                    />
                                    <button className="shrink-0 ml-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">
                                            bookmark_add
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6 bg-transparent px-4 py-8 justify-between">
                                <div className="flex flex-1 flex-col justify-center gap-2">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                                            data-alt="Author avatar for Mark Chen"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDU1tLmEF_GrK-uNwNIhFLgaV2ofxNf9wjkZktKPCCEhaDvEo5_KqLHmyJgKTLxYhSJzzq11aiJcm1tOQq3onNakHkcZrL3SwM3n8ohmiKZlho2bZAoECjC6j9gaIM84Fp-AxZp-U3CB-yPbOMik_CEDbThDhmX760YzO6YSNG9J7MTrSN0Qnrjnxmpu09y52XB3e2jJmPsu3Sx6O3-QP9KE-z1eziVXiDa5yrEHuWz9tImBAI0A8pNehqtp8uixYedaibTLA0bvEcc")'
                                            }}
                                        />
                                        <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
                                            Mark Chen
                                        </p>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
                                        A Beginner's Guide to{" "}
                                        <span className="bg-primary/20 rounded px-1 py-0.5">
                                            UI Design
                                        </span>{" "}
                                        Principles
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">
                                        Learn the fundamental principles of{" "}
                                        <span className="font-bold text-gray-700 dark:text-gray-300">
                                            UI design
                                        </span>{" "}
                                        that will help you create intuitive and beautiful user
                                        experiences for any digital product. We cover hierarchy,
                                        contrast, and consistency.
                                    </p>
                                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm mt-2">
                                        <span>Jan 12</span>
                                        <span>·</span>
                                        <span>5 min read</span>
                                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full px-3 py-1 text-xs font-medium">
                                            Design
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between sm:justify-start mt-4 sm:mt-0">
                                    <div
                                        className="bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg w-full sm:w-48 h-auto sm:h-32"
                                        data-alt="A clean and minimal user interface wireframe"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAukw-T9k0kNGmzaJcUWG81EWs_xYiJdkuLRugwcyOSirc0tfOAbVFwizvw6wMcziNLuvlfPVPEkZV5wxlimURhPIlBHepKTbxb-5uOFZ7fCEQpbfFOMR3nk1oP3_audLu3z4RbWbzAxDgZ8-WxAhyUM3I6aSbh0_M8larIq8JZ-jvptHC6Z-FX4DODy-44vYv0USY72MxPpOmYSKhf_rcMaRkJ_Xdw2v6vuVOeEN7hDzrnYaDP12DbQsCGDwrRSwjR_DbQiQsNi3Eb")'
                                        }}
                                    />
                                    <button className="shrink-0 ml-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">
                                            bookmark_add
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6 bg-transparent px-4 py-8 justify-between">
                                <div className="flex flex-1 flex-col justify-center gap-2">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
                                            data-alt="Author avatar for Emily Carter"
                                            style={{
                                                backgroundImage:
                                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeHNw_T46WJgKR3vOgjq0n6l8t_pbL_ru5MQV7KfMEeoemmn79C67ExfYqkLzq0Y13_UkTv4nIIQLzB_1beV8eh1XJfx4G30CldKLk_HmaaVj32BJYEAogK0ndkoEx0-H6-wikg9kTUMw7-Oyn4XnSXO1t8ZEnzu-GVvNhiUSukkw2UW8hC3Qs6ovc8uvzK3EeRdB--ASemm2vQUlm6S5hhhyE7mMEuy4Tn03dLrFLNGsu3Bh1NshH8xAmvXY0J-9A1zZp4Tu0_M7r")'
                                            }}
                                        />
                                        <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-normal">
                                            Emily Carter
                                        </p>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
                                        Crafting Accessible and Inclusive{" "}
                                        <span className="bg-primary/20 rounded px-1 py-0.5">UI</span>
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">
                                        Good design is accessible design. This article provides
                                        practical tips and best practices for creating user interfaces
                                        that are usable by everyone, regardless of ability or
                                        disability. Essential reading for any modern designer.
                                    </p>
                                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm mt-2">
                                        <span>Jan 10</span>
                                        <span>·</span>
                                        <span>9 min read</span>
                                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full px-3 py-1 text-xs font-medium">
                                            Accessibility
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between sm:justify-start mt-4 sm:mt-0">
                                    <div
                                        className="bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg w-full sm:w-48 h-auto sm:h-32"
                                        data-alt="Image showing accessibility features on a screen"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIyF2qjwm8O-1qqBdkvSKV3fVc8uhb5OZZdbdQhN5W9Yj5chBIGTeOvq7UVV8E-29O36ONo5NtTrYvG0iOAnqtasDHI6kLR5S9BbY6mkN0Sr4U3LZhni6l3TIYHoHWCHwPUKWs00gOFHrqDYMO4EFtX_-qlZbmqQZj6wXs7_8QR8ZyipSCZGJ4eBVbrQDvxOR_UhkhNvdfcFQPp0-34HKf5Yo5J3yaJc2sG_KeH4sZm6rveogBoN4GS1ACW4-DLzA412bVRvrso3e5")'
                                        }}
                                    />
                                    <button className="shrink-0 ml-4 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">
                                            bookmark_add
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 py-10">
                            <button className="flex items-center gap-2 px-4 h-10 rounded-lg text-sm font-bold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <span className="material-symbols-outlined text-base">
                                    arrow_back
                                </span>
                                <span>Previous</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 h-10 rounded-lg text-sm font-bold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <span>Next</span>
                                <span className="material-symbols-outlined text-base">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </>
}
