// src/components/ui/button.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary",
            outline: "border border-[#EAEAEA] dark:border-gray-700 bg-background-light dark:bg-background-dark text-[#1A1A1A] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "flex w-full items-center justify-center rounded-lg px-3 py-3 text-base font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all disabled:opacity-50",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
export { Button };

