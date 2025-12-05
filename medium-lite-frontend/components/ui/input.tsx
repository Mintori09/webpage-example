// src/components/ui/input.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "form-input block w-full rounded-lg border-0 bg-white dark:bg-gray-800 py-3 px-4 text-[#1A1A1A] dark:text-white shadow-sm ring-1 ring-inset ring-[#EAEAEA] dark:ring-gray-700 placeholder:text-[#6B6B6B] focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 transition-all",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
export { Input };

