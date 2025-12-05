import { Metadata } from "next";
import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
    title: "Forgot Password - Novu",
    description: "Reset your password",
};

export default function EmailForgotPasswordPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center group/design-root overflow-x-hidden p-4">
            {/* Layout Component: Reusing global Header */}
            <Header />

            <main className="flex w-full max-w-md flex-col items-center justify-center p-6 text-center">
                <div className="w-full">
                    <h1 className="text-gray-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight pt-6 pb-3">
                        Reset your password
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed pb-8">
                        Enter your email address below and we will send you a link to reset your password.
                    </p>
                </div>

                {/* Feature Component: Contains Form Logic */}
                <ForgotPasswordForm />
            </main>
        </div>
    );
}

