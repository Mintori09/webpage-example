import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NotFoundView() {
    return (
        <div className="layout-content-container flex flex-col max-w-lg flex-1 items-center text-center">
            <h1 className="text-black dark:text-white tracking-tight text-8xl sm:text-9xl font-bold leading-tight px-4 pb-4">
                404
            </h1>
            <h2 className="text-black dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
                Page Not Found.
            </h2>
            <p className="text-black/60 dark:text-white/60 text-base font-normal leading-relaxed pb-6 px-4">
                The page you are looking for might have been moved, deleted, or is
                temporarily unavailable.
            </p>
            <div className="flex px-4 py-3 justify-center">
                <Link href="/">
                    <Button className="h-11 px-6 text-base max-w-[480px]">
                        Go to Homepage
                    </Button>
                </Link>
            </div>
        </div>
    );
}

