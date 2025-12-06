// src/components/ui/input.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

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

function SearchInput({ className }: { className?: string }) {
    return (
        <label className={cn("hidden sm:flex flex-col min-w-40 !h-10 max-w-64", className)}>
            <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                <div className="text-[#6B6B6B] flex bg-[#E6E6E6]/40 dark:bg-background-dark dark:border dark:border-gray-600 items-center justify-center pl-4 rounded-l-full border-r-0">
                    <Icon name="search" />
                </div>
                <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-[#1A1A1A] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#E6E6E6]/40 dark:bg-background-dark dark:border dark:border-gray-600 h-full placeholder:text-[#6B6B6B] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    placeholder="Search"
                />
            </div>
        </label>
    );
}


Input.displayName = "Input";
export { Input, SearchInput };

