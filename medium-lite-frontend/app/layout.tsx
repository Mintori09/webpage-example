import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { AuthProvider } from "@/app/context/AuthProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Medium-Lite",
  description: "A place to read, write, and deepen your understanding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 min-h-screen flex flex-col`}>
        <AuthProvider>
            <Navbar />
            <div className="flex-1 flex flex-col">
            {children}
            </div>
        </AuthProvider>
      </body>
    </html>
  );
}
