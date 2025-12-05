// src/app/(auth)/login/page.tsx
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { SeparatorWithText } from "@/components/ui/separator";
import { LoginForm } from "@/features/auth/components/login-form";
import { GoogleLoginButton } from "@/features/auth/components/social-login";

export default function LoginPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
            {/* 1. Layout Component */}
            <Header />

            <main className="flex w-full max-w-md flex-col items-center">
                {/* Title */}
                <h1 className="text-[#1A1A1A] dark:text-white text-4xl font-bold leading-tight tracking-tight text-center">
                    Welcome back.
                </h1>
                <p className="mt-2 text-center text-base font-normal text-[#6B6B6B] dark:text-gray-400">
                    Sign in to continue to Medium.
                </p>

                <div className="mt-10 w-full space-y-6">
                    {/* 2. Feature Components */}
                    <GoogleLoginButton />

                    <SeparatorWithText text="or" />

                    <LoginForm />
                </div>

                {/* Footer Text */}
                <p className="mt-10 text-center text-sm text-[#6B6B6B] dark:text-gray-400">
                    No account?{" "}
                    <Link
                        href="/register"
                        className="font-semibold leading-6 text-[#1A1A1A] dark:text-white hover:text-primary dark:hover:text-primary/80"
                    >
                        Sign up
                    </Link>
                </p>
            </main>
        </div>
    );
}

