import type { Metadata } from "next";
import { Header } from "@/components/layout/header";


export const metadata: Metadata = {
    title: "Author Dashboard Overview",
    description: "Dashboard for Novu authors",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="light">
            <head>
                {/* Material Symbols Import */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                    rel="stylesheet"
                />
                <style>
                    {`
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20
            }
          `}
                </style>
            </head>
            <body className={`bg-background text-high-emphasis`}>
                <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                    <div className="flex h-full grow flex-col">
                        <Header />
                        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
