// src/components/ui/label.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => (
        <label
            ref={ref}
            className={cn("block text-base font-medium text-[#1A1A1A] dark:text-gray-200", className)}
            {...props}
        />
    )
);
Label.displayName = "Label";
export { Label };

