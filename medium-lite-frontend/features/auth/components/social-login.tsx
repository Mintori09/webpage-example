// src/features/auth/components/social-login.tsx
"use client";

import { Button } from "@/components/ui/button";
import { loginWithGoogleAction } from "../actions";
import { GoogleIcon } from "@/components/ui/icon";

export const GoogleLoginButton = () => {
    return (
        <div className="relative flex items-center justify-center text-sm">
            <span className="absolute w-full border-t border-[#EAEAEA] dark:border-gray-700" />
            <Button
                variant="outline"
                className="relative gap-2 rounded-full px-6 py-2.5 w-auto z-10"
                onClick={() => loginWithGoogleAction()}
            >
                <GoogleIcon className="h-5 w-5" />
                Sign in with Google
            </Button>
        </div>
    );
};
