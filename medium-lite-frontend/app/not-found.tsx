import { NotFoundView } from "@/features/system/components/not-found-view";


import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
    title: "404 Not Found Page",
    description: "Page not found example",
};

export default function NotFoundPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex flex-1 items-center justify-center py-10 px-4">
                    <NotFoundView />;
                </main>
            </div>
        </div>
    );
}
