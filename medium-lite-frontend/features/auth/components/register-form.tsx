"use client";

import { registerUserAction } from "@/features/auth/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
    return (
        <form action={registerUserAction} className="mt-8 w-full space-y-6">
            {/* Full Name */}
            <div className="flex flex-col">
                <Label htmlFor="full-name">Full Name</Label>
                <Input
                    id="full-name"
                    name="full-name"
                    placeholder="Enter your full name"
                    required
                />
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <Label htmlFor="email-address">Email Address</Label>
                <Input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    required
                />
            </div>

            {/* Password */}
            <div className="flex flex-col">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Enter your password"
                    required
                />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                    id="confirm-password"
                    type="password"
                    name="confirm-password"
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    required
                />
            </div>

            {/* Submit */}
            <div>
                <Button type="submit">Create Account</Button>
            </div>
        </form>
    );
}
