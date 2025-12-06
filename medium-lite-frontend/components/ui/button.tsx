import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost" | "outline";
    rounded?: "full" | "default";
}

export function Button({
    children, className, variant = "ghost", rounded = "full", ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90",
        ghost: "bg-transparent text-[#6B6B6B] dark:text-gray-300 hover:text-[#1A1A1A] dark:hover:text-white",
        outline: "border border-[#1A1A1A] dark:border-gray-500 text-[#1A1A1A] dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary"
    };

    return (
        <button
            className={cn(
                "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-medium leading-normal transition-colors",
                rounded === "full" ? "rounded-full" : "rounded-lg",
                variants[variant],
                className
            )}
            {...props}
        >
            <span className="truncate">{children}</span>
        </button>
    );
}

