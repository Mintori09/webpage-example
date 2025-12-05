"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Thay thế Material Symbols
import { resetPasswordAction } from "@/features/auth/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ForgotPasswordForm() {
    return (
        <>
            <form action={resetPasswordAction} className="w-full flex flex-col items-center gap-6">
                <div className="w-full text-left">
                    <div className="flex flex-col min-w-40 flex-1">
                        <Label htmlFor="email" className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="yourname@example.com"
                            defaultValue=""
                            required
                            // Override style của Input gốc để khớp với design mẫu (h-12 thay vì h-14)
                            className="h-12 border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark focus:border-primary focus:ring-primary/30 text-gray-900 dark:text-white"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <Button
                        type="submit"
                        // Override style của Button gốc (h-12, màu xanh specific)
                        className="h-12 w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-wide transition-colors duration-200"
                    >
                        <span className="truncate">Send Reset Link</span>
                    </Button>
                </div>
            </form>

            <div className="mt-8">
                <Link
                    href="/login"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Sign In
                </Link>
            </div>
        </>
    );
}
