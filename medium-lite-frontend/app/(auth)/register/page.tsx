import Link from "next/link";
import { RegisterForm } from "@/features/auth/components/register-form";
import { Header } from "@/components/layout/header";

export default function RegisterPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center group/design-root overflow-x-hidden p-4">
            {/* Layout Component */}
            <Header />

            <main className="flex w-full max-w-md flex-col items-center">
                <div className="w-full text-center">
                    <h1 className="text-[#111418] dark:text-white tracking-light text-[32px] font-bold leading-tight pb-3 pt-6">
                        Create your account
                    </h1>
                </div>

                {/* Feature Component */}
                <RegisterForm />

                {/* Static Footer Links */}
                <div className="mt-6 text-center text-sm">
                    <p className="text-slate-600 dark:text-slate-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-primary hover:text-primary/90"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

                <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-500">
                    <p>By creating an account, you agree to our</p>
                    <p>
                        <Link href="/terms" className="underline hover:text-primary">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline hover:text-primary">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </main>
        </div>
    );
}

