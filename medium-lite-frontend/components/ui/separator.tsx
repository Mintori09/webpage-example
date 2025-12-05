// src/components/ui/separator.tsx
import React from "react";

export const SeparatorWithText = ({ text }: { text: string }) => (
    <div className="relative flex items-center justify-center text-sm">
        <span className="w-full border-t border-[#EAEAEA] dark:border-gray-700" />
        <span className="absolute bg-background-light dark:bg-background-dark px-2 text-[#6B6B6B] dark:text-gray-400">
            {text}
        </span>
    </div>
);

