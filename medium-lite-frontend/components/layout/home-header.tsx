import Link from "next/link";
import { SearchInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon, NovuLogo } from "@/components/ui/icon";

export function HomeHeader() {
    return (
        <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-solid border-[#E6E6E6] dark:border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between whitespace-nowrap py-3">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-3 text-[#1A1A1A] dark:text-gray-100">
                            <NovuLogo className="h-8 w-8" />
                            <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">Novu</h2>
                        </Link>
                        <div className="hidden md:flex items-center gap-9">
                            <Link href="#" className="text-[#6B6B6B] dark:text-gray-400 hover:text-primary text-sm font-medium">Our Story</Link>
                            <Link href="#" className="text-[#6B6B6B] dark:text-gray-400 hover:text-primary text-sm font-medium">Membership</Link>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6">
                        <SearchInput />
                        <button className="sm:hidden text-[#6B6B6B] dark:text-gray-300">
                            <Icon name="search" />
                        </button>
                        <div className="flex gap-2">
                            <Button variant="ghost" className="hidden sm:flex">Sign In</Button>
                            <Button variant="primary">Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
