export default function Home() {
    return (
        <>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>Blog Homepage</title>
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
                        "\n        body {\n            font-family: 'Work Sans', sans-serif;\n        }\n    "
                }}
            />
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    {/* TopNavBar */}
                    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-solid border-[#E6E6E6] dark:border-gray-700">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between whitespace-nowrap py-3">
                                <div className="flex items-center gap-8">
                                    <div className="flex items-center gap-3 text-[#1A1A1A] dark:text-gray-100">
                                        <div className="size-8 text-[#1A1A1A] dark:text-gray-100">
                                            <svg
                                                fill="currentColor"
                                                viewBox="0 0 1043.6 1043.6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M588.6,1043.6c189.4,0,359.2-123.2,423.2-302.1c7.9-22.3,1.3-47.5-15.5-62.2c-16.8-14.7-41.2-17.1-60.8-5.8 C895.4,703.1,840,729.1,782.3,744.1c-12.2,3.2-24.8,4.8-37.5,4.8c-110.1,0-199.4-89.3-199.4-199.4c0-110.1,89.3-199.4,199.4-199.4 c12.7,0,25.3,1.6,37.5,4.8c57.7,15.1,113.1,41,153.2,76.2c18.3,16,45.2,13.4,60-6.1c14.8-19.5,11.2-46.7-6.2-60.8 C904.6,302.2,756,229.4,588.6,229.4c-204.4,0-370.2,165.8-370.2,370.2S384.2,1043.6,588.6,1043.6z" />
                                                <path d="M218.4,229.4c-120.5,0-218.4,97.9-218.4,218.4s97.9,218.4,218.4,218.4s218.4-97.9,218.4-218.4S338.9,229.4,218.4,229.4z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">
                                            Novu
                                        </h2>
                                    </div>
                                    <div className="hidden md:flex items-center gap-9">
                                        <a
                                            className="text-[#6B6B6B] dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
                                            href="#"
                                        >
                                            Our Story
                                        </a>
                                        <a
                                            className="text-[#6B6B6B] dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
                                            href="#"
                                        >
                                            Membership
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6">
                                    <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
                                        <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                                            <div className="text-[#6B6B6B] flex bg-[#E6E6E6]/40 dark:bg-background-dark dark:border dark:border-gray-600 items-center justify-center pl-4 rounded-l-full border-r-0">
                                                <span className="material-symbols-outlined">search</span>
                                            </div>
                                            <input
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-[#1A1A1A] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#E6E6E6]/40 dark:bg-background-dark dark:border dark:border-gray-600 h-full placeholder:text-[#6B6B6B] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                                placeholder="Search"
                                                defaultValue=""
                                            />
                                        </div>
                                    </label>
                                    <button className="sm:hidden text-[#6B6B6B] dark:text-gray-300">
                                        <span className="material-symbols-outlined">search</span>
                                    </button>
                                    <div className="flex gap-2">
                                        <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-transparent text-[#6B6B6B] dark:text-gray-300 hover:text-[#1A1A1A] dark:hover:text-white text-sm font-medium leading-normal">
                                            <span className="truncate">Sign In</span>
                                        </button>
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal tracking-[0.015em]">
                                            <span className="truncate">Get Started</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* Main Content Area */}
                    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                        <div className="grid grid-cols-12 gap-8 lg:gap-16">
                            {/* Left Column: Hero & Feed */}
                            <div className="col-span-12 lg:col-span-8">
                                {/* Hero Section */}
                                <section className="mb-12">
                                    <div className="group flex flex-col sm:flex-row gap-6 items-center border border-[#E6E6E6] dark:border-gray-700 p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-full sm:w-2/5 flex-shrink-0">
                                            <div
                                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                                                data-alt="Abstract image with colorful gradients"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjCbXIl3xmwgPxBnbcUVxVZei3veZucDsvuFQWD5MNl9XZevjrComsPBPZfRMmtdd9wXJdvebyT5BPD0KGYJG6CHrD9FsMPS4pWNQ5IxywdcKeyQhUHe0lSCN_GE-hIJNC8dcDUZ40uB_OryY_APZ_RK6Z0F44KaD2EukVmoBxH0zHp-2v7gf7jo07sHZC5UjdpDxNOOccxosJkpVmy2ctWeUMgoaI5c1vBH92x4nGfEl_PR4KRs6vtXYfUWQ0OAZitl_gdKMu_2i_")'
                                                }}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    alt="Author avatar"
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBArFvuGNQ9qp5W7sYjeCMrQTt-r2vYGB1VQdfeiP7M6IlFwdZcTfiVJhpvbZsXbOSbRbF0BUuCyBz9GDgf__A652RDZl_nfoOyuoHNx8dPgMmJ3sw0zRyRKxu7lADjJoyjyyf2re1TnwQ9lfxy3kH2f2WSuWs1VyM9nznnjj0yF5OzyZ1_jIB9ZwNrBMzSeNiIQksb_dXHx_88M5-NMpHVIzoNOLfmFot3LcNB4mUr1kX08r-CDDbuytjUHj-fg5cA-wMYTGkbZyay"
                                                />
                                                <p className="text-[#1A1A1A] dark:text-gray-200 text-sm font-medium">
                                                    Sarah Day
                                                </p>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#1A1A1A] dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                                                The Unseen Revolution in Renewable Energy
                                            </h2>
                                            <p className="text-[#6B6B6B] dark:text-gray-400 text-base font-normal leading-relaxed">
                                                Beyond solar panels and wind turbines, a new wave of
                                                technologies is set to redefine how we power our world.
                                                Here’s what you need to know.
                                            </p>
                                            <p className="text-sm text-[#6B6B6B] dark:text-gray-500">
                                                Jul 12 · 7 min read
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                {/* SectionHeader */}
                                <div className="border-b border-[#E6E6E6] dark:border-gray-700 mb-6">
                                    <h3 className="text-[#1A1A1A] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
                                        Latest Posts
                                    </h3>
                                </div>
                                {/* Main Content Feed */}
                                <section className="flex flex-col gap-10">
                                    {/* Card 1 */}
                                    <div className="group">
                                        <div className="flex items-stretch justify-between gap-6">
                                            <div className="flex flex-[2_2_0px] flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        alt="Author avatar"
                                                        className="w-6 h-6 rounded-full"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVW2tfBgw_S4-d302P8qge6n4-sUDmrY_CupI-LBdiQtcuQ2i9hWR4V99tqtU0r3AUbs3_KagnLErut-8CY8CAKC0nVy9HnKnuyDNZjuviTAG3sC0O7v6YS2ylZeKmo-mEYGs7fWHOrZYmSuVzQpPzLMFiKqs7vgkuELFOblhkeyQU0qGjSjTkK7jZwLTiDUdRV4BsCoRCWhOlLn1zt71QxnYrVEGic96s6pGICf_7nHPIRzvp4gt4mcu7OqhN8fHSW128uggHJXZm"
                                                    />
                                                    <p className="text-[#1A1A1A] dark:text-gray-200 text-sm font-medium">
                                                        Jane Doe
                                                    </p>
                                                </div>
                                                <a
                                                    className="text-[#1A1A1A] dark:text-white text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary transition-colors"
                                                    href="#"
                                                >
                                                    The Future of AI is Not What You Think
                                                </a>
                                                <p className="text-[#6B6B6B] dark:text-gray-400 text-base font-normal leading-normal hidden sm:block">
                                                    A deep dive into the next generation of artificial
                                                    intelligence and its surprising implications for society.
                                                </p>
                                                <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-gray-500 text-sm mt-2">
                                                    <span>Jul 11 · 5 min read</span>
                                                    <span className="bg-[#E6E6E6]/60 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs">
                                                        AI
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                                                <div
                                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                                                    data-alt="Abstract image of a neural network"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPZS_0Rj9CDtDV18XsCSFIjITHytq6zSlfBiUYDhpthnZr064UYzQXGPvoKialHrNFK-nEo-JLznyrZmj0DV3hDd1idlwEiQkPaSq_Gi4DOq0QyvXYSBSZ7I_rVZJsTUHfRw-_8v6x-fxOml6UTd2ou8gxiB19N3fsp_yzvP5tQwR67RmLI2COeGQS7NsDkxnSYP6Jaa8X4XY4V8Na3iShIKriHPXK8S-Q1JYcDIC-LCueDaJh4kYv0Co2i0CujMnm-VhSM_nkRjnd")'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="group">
                                        <div className="flex items-stretch justify-between gap-6">
                                            <div className="flex flex-[2_2_0px] flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        alt="Author avatar"
                                                        className="w-6 h-6 rounded-full"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA__1BmAhRoMAxHla3K1lsKu-iVR7ifsRqyyd9Pxt3-x5LbIo-SUKEf9rtgyTf8g_nb4hyD8tNazfSNvjdyLLW0NPt4bHA7RHAYhxe6SHAEQ4jWqSQNkxFbG-9x6HHeuCjOijcXQRNtaR3DCigafOFYbp_5VV16rlmmhKj19Ewi9pOEcywNBed2GspfhThYgnXca6UOeIg8btTBzZZ5SGz2CiUBPLspoxNl5O4DJToo39oURVDD84mMoTCxUACIGctgNu5KLxtDa1hs"
                                                    />
                                                    <p className="text-[#1A1A1A] dark:text-gray-200 text-sm font-medium">
                                                        John Smith
                                                    </p>
                                                </div>
                                                <a
                                                    className="text-[#1A1A1A] dark:text-white text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary transition-colors"
                                                    href="#"
                                                >
                                                    10 Simple Habits for a More Productive Morning
                                                </a>
                                                <p className="text-[#6B6B6B] dark:text-gray-400 text-base font-normal leading-normal hidden sm:block">
                                                    Discover how small changes to your morning routine can
                                                    lead to big results in your daily productivity and
                                                    well-being.
                                                </p>
                                                <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-gray-500 text-sm mt-2">
                                                    <span>Jul 10 · 4 min read</span>
                                                    <span className="bg-[#E6E6E6]/60 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs">
                                                        Productivity
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                                                <div
                                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                                                    data-alt="Image of a sunrise over a calm lake"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCK1Tn-e4QID6P1wxrSMZiZBwYHUal2p2VtPMdFHvg1TOMHi_OryO6D7joBvs-dIPWTJsGQ8IEGAs9PduYiwlU5aBze_UZoJf2Bl_63ZR4mWVOdac5w78oiCkQN-G38OEKGIXYptFZecbyY6q0OKg5Q1Q6rod_k1ClKfI5HYKH_PwmrCo2Nlj4wzaUCtt_BEslx1qm8nqRb10vlyViKfy5fggYpTIP4YDB7ZSKDgBC5vyVUIa-MBPut5oZX36rCe4OmIugCg7WsFU4v")'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="group">
                                        <div className="flex items-stretch justify-between gap-6">
                                            <div className="flex flex-[2_2_0px] flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        alt="Author avatar"
                                                        className="w-6 h-6 rounded-full"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWi8PCx8D1spihRLWDc1m5kEHW0X5v14j3XR31hW_85C4BpWAQPnsEQc6cAqLVNGXn8OV0H-XOG2keagx-Ee3kQOxCM8p1Z4pSDebiiPu7lqtC8G8Ct6J4ihvqZeCx4YCnIJJpX9BSqpHY8c3969vcHacLFmUZDHg-l0J9jnr8xnMGFsvdX1hYNWw1n6AJsaJvBIvCOvCII2OaNxw81_oOCdN2HZWAgkZdTRpjVfrR3gYtg3-PX2lccLb-VbQ-_jc065w1_Ht7S4_u"
                                                    />
                                                    <p className="text-[#1A1A1A] dark:text-gray-200 text-sm font-medium">
                                                        Emily White
                                                    </p>
                                                </div>
                                                <a
                                                    className="text-[#1A1A1A] dark:text-white text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary transition-colors"
                                                    href="#"
                                                >
                                                    A Guide to Sustainable Travel in Southeast Asia
                                                </a>
                                                <p className="text-[#6B6B6B] dark:text-gray-400 text-base font-normal leading-normal hidden sm:block">
                                                    Explore breathtaking destinations while minimizing your
                                                    environmental impact. Tips for eco-friendly travel.
                                                </p>
                                                <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-gray-500 text-sm mt-2">
                                                    <span>Jul 9 · 8 min read</span>
                                                    <span className="bg-[#E6E6E6]/60 dark:bg-gray-700 px-2 py-0.5 rounded-full text-xs">
                                                        Travel
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                                                <div
                                                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                                                    data-alt="Lush green rice terraces in Asia"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1w19oNe9jX-l45Vr7X8i25X6U5Y-dWdTzjDlqRMkw8_2ji03cd4NPwbihqJTWUkD_kPq96TAsNrV9w7iYN_kZBhvKONTb0qhc9q5hy0uvWz7JH6b7MtFOZHBo57SAG-Usv3rAMbTsc17g1kSF5nXfk_V4fx9jT7lNu8IeOskonrjeQOOZvBO3Lnt2IYNVRTyHRHeyQ7d2FiATB01-6A0PiQ0QfwrZyEkuIwfUlnbLgDKBVco3j1frXo70I_ikwkGlG6gbZDEKj7pJ")'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Infinite Scroll Loader */}
                                    <div className="flex justify-center items-center py-8">
                                        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-primary" />
                                    </div>
                                </section>
                            </div>
                            {/* Right Column: Sidebar */}
                            <aside className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 h-fit">
                                <div className="flex flex-col gap-8">
                                    {/* Top Tags Section */}
                                    <div>
                                        <h4 className="text-base font-bold text-[#1A1A1A] dark:text-white mb-4">
                                            Top Tags
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            <button className="px-3 py-1 bg-[#E6E6E6]/60 dark:bg-gray-700 text-[#6B6B6B] dark:text-gray-300 rounded-full text-sm hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary transition-colors">
                                                Technology
                                            </button>
                                            <button className="px-3 py-1 bg-[#E6E6E6]/60 dark:bg-gray-700 text-[#6B6B6B] dark:text-gray-300 rounded-full text-sm hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary transition-colors">
                                                Self Improvement
                                            </button>
                                            <button className="px-3 py-1 bg-[#E6E6E6]/60 dark:bg-gray-700 text-[#6B6B6B] dark:text-gray-300 rounded-full text-sm hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary transition-colors">
                                                Design
                                            </button>
                                            <button className="px-3 py-1 bg-[#E6E6E6]/60 dark:bg-gray-700 text-[#6B6B6B] dark:text-gray-300 rounded-full text-sm hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary transition-colors">
                                                Startups
                                            </button>
                                            <button className="px-3 py-1 bg-[#E6E6E6]/60 dark:bg-gray-700 text-[#6B6B6B] dark:text-gray-300 rounded-full text-sm hover:bg-primary/20 dark:hover:bg-primary/30 hover:text-primary dark:hover:text-primary transition-colors">
                                                Culture
                                            </button>
                                        </div>
                                    </div>
                                    {/* Top Authors Section */}
                                    <div>
                                        <h4 className="text-base font-bold text-[#1A1A1A] dark:text-white mb-4">
                                            Top Authors
                                        </h4>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        alt="Author avatar"
                                                        className="w-10 h-10 rounded-full"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMwQd0rQtrEcEYvqLxesK5M5dpa9MDXoPDW-Vr_RHhMje2NK_pCVoYDwmkIAhKTzSqwKMaQBtq28k1R4hhw9RvrYvJ7s9zg9J1bdfNlU54v5NbjhpoIo7UTqyMz8Xo-b_I0M9TpQcFhlVq-YDR_xDjEycbxgdJ2g_LgSJnfhKv_2ip2cudOx9seZ3oPKj-AC7tXrHvP5TGiaeqtUzt7_npEMKPmQ4_bJr8e-mBnhnQzWMz2luM9o7ktDzf-BIn0kfUkjzXERT5tr4g"
                                                    />
                                                    <p className="text-base font-medium text-[#1A1A1A] dark:text-gray-200">
                                                        Alex Johnson
                                                    </p>
                                                </div>
                                                <button className="px-4 py-1 text-sm font-medium border border-[#1A1A1A] dark:border-gray-500 rounded-full text-[#1A1A1A] dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary transition-colors">
                                                    Follow
                                                </button>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        alt="Author avatar"
                                                        className="w-10 h-10 rounded-full"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV0jEqK0nvr4PhniJXcHqQJPRPArBKmm20g9tuGPfSEota_mUI8knoxV4B15TjhNoE3PT06QnZpxm0cl4fRUQ_9dvtwfIwKuuuwOI46scyIq3PYwuwieLmIxdi2svD26qZlNSFIpq_yQwVPORFoEJ4owEkgVoyu6VkiNgnccosw30klFlASyR-eTrPg99BXFznt1gpgLrjOqA8VYOIERvgXW3bQ0xSludf9kQDIT-SSw-oXwGthT3mtEbrBnlLUFXVW302c1S8N3Bt"
                                                    />
                                                    <p className="text-base font-medium text-[#1A1A1A] dark:text-gray-200">
                                                        Maria Garcia
                                                    </p>
                                                </div>
                                                <button className="px-4 py-1 text-sm font-medium border border-[#1A1A1A] dark:border-gray-500 rounded-full text-[#1A1A1A] dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary transition-colors">
                                                    Follow
                                                </button>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        alt="Author avatar"
                                                        className="w-10 h-10 rounded-full"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuYT_dyL7FXd4ax7ffpGfhglis9dJMsv7q9tZRDao0e6EIxsuqO_yotDB7EtmTMR3E8W98-ghhxvjHVfef5OoQipR-LyWBcCBUSc0M-fTIc58baBVV1cCbU_JxNSh1xQsVQlgxrHz1lwQfihOGqNAjq5JFrpzm-vM9eCbuxux_gW2rJuWZIlKLNq9dzFV-4w_at62VLS58T2B8weBqTfNQLDoIU3RxiVJQjRgT8gWGSIDXRxw8dL21esBeZUL86T4tI-XL1bTL1fBA"
                                                    />
                                                    <p className="text-base font-medium text-[#1A1A1A] dark:text-gray-200">
                                                        Chris Lee
                                                    </p>
                                                </div>
                                                <button className="px-4 py-1 text-sm font-medium border border-[#1A1A1A] dark:border-gray-500 rounded-full text-[#1A1A1A] dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary transition-colors">
                                                    Follow
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
                {/* Global Footer */}
                <footer className="bg-background-light dark:bg-background-dark border-t border-[#E6E6E6] dark:border-gray-800 mt-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-gray-400">
                                <div className="size-6 text-[#1A1A1A] dark:text-gray-100">
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 1043.6 1043.6"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M588.6,1043.6c189.4,0,359.2-123.2,423.2-302.1c7.9-22.3,1.3-47.5-15.5-62.2c-16.8-14.7-41.2-17.1-60.8-5.8 C895.4,703.1,840,729.1,782.3,744.1c-12.2,3.2-24.8,4.8-37.5,4.8c-110.1,0-199.4-89.3-199.4-199.4c0-110.1,89.3-199.4,199.4-199.4 c12.7,0,25.3,1.6,37.5,4.8c57.7,15.1,113.1,41,153.2,76.2c18.3,16,45.2,13.4,60-6.1c14.8-19.5,11.2-46.7-6.2-60.8 C904.6,302.2,756,229.4,588.6,229.4c-204.4,0-370.2,165.8-370.2,370.2S384.2,1043.6,588.6,1043.6z" />
                                        <path d="M218.4,229.4c-120.5,0-218.4,97.9-218.4,218.4s97.9,218.4,218.4,218.4s218.4-97.9,218.4-218.4S338.9,229.4,218.4,229.4z" />
                                    </svg>
                                </div>
                                <span className="text-sm">© 2024 Medium</span>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-[#6B6B6B] dark:text-gray-400">
                                <a className="hover:text-primary" href="#">
                                    About
                                </a>
                                <a className="hover:text-primary" href="#">
                                    Help
                                </a>
                                <a className="hover:text-primary" href="#">
                                    Terms
                                </a>
                                <a className="hover:text-primary" href="#">
                                    Privacy
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
