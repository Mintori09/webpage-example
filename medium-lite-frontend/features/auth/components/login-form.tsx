// src/features/auth/components/login-form.tsx
"use client";

import { useTransition } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { loginAction } from "../actions";

export const LoginForm = () => {
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            await loginAction(formData);
        });
    };

    return (
        <form action={handleSubmit} className="mt-6 w-full space-y-5">
            <div>
                <Label htmlFor="email">Email address</Label>
                <div className="mt-2">
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Enter your email"
                        disabled={isPending}
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                </div>
                <div className="mt-2">
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Enter your password"
                        disabled={isPending}
                    />
                </div>
            </div>

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    <Link
                        href="/forgot-password"
                        className="font-medium text-[#6B6B6B] dark:text-gray-400 hover:text-primary dark:hover:text-primary/80"
                    >
                        Forgot Password?
                    </Link>
                </div>
            </div>

            <div>
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Signing in..." : "Sign In"}
                </Button>
            </div>
        </form>
    );
};

