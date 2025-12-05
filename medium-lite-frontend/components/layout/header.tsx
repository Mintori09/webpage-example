// src/components/layout/auth-header.tsx
import Link from "next/link";
import { NovuLogo } from "../ui/icon";

export const Header = () => {
    return (
        <header className="absolute top-0 flex w-full max-w-5xl items-center justify-center p-6">
            <Link href="/"
                className="flex items-center gap-2 text-[#1A1A1A] dark:text-white"
            >
                <NovuLogo className="h-8 w-8" />
                <h1 className="text-2xl font-bold">Novu</h1>
            </Link>
        </header>
    );
};

