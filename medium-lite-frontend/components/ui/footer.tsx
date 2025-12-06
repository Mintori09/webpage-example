import Link from "next/link";
import { NovuLogo } from "./icon";

export function Footer() {
    return (
        <footer className=" bg-background-light dark:bg-background-dark border-t border-[#E6E6E6] dark:border-gray-800 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                    {/* Logo & Copyright Section */}
                    <div className="flex items-center gap-2 text-[#6B6B6B] dark:text-gray-400">
                        <div className="size-6 text-[#1A1A1A] dark:text-gray-100">
                            <NovuLogo />
                        </div>
                        <span className="text-sm">© 2025 Novu</span>
                    </div>

                    {/* Links Section */}
                    <div className="flex items-center gap-6 text-sm text-[#6B6B6B] dark:text-gray-400">
                        <Link className="hover:text-primary transition-colors" href="/about">
                            About
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="/help">
                            Help
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="/terms">
                            Terms
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="/privacy">
                            Privacy
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

