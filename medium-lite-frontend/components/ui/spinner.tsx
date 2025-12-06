import { cn } from "@/lib/utils";

interface SpinnerProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "white" | "ghost";
}

export function Spinner({ className, size = "md", variant = "primary" }: SpinnerProps) {
    const sizeClasses = {
        sm: "w-4 h-4 border-2",
        md: "w-8 h-8 border-4",
        lg: "w-12 h-12 border-[5px]",
    };

    const variantClasses = {
        primary: "border-primary/30 border-t-primary", // Hiệu ứng xoay mượt hơn: nền mờ, đỉnh đậm
        white: "border-white/30 border-t-white",
        ghost: "border-gray-200 border-t-gray-500 dark:border-gray-700 dark:border-t-gray-400",
    };

    // Nếu bạn muốn giữ style cũ (border dashed) thì dùng dòng này:
    // const baseStyle = "rounded-full border-dashed animate-spin border-primary";

    // Nhưng style hiện đại thường dùng border-solid với border-top có màu khác biệt:
    return (
        <div
            className={cn(
                "animate-spin rounded-full",
                sizeClasses[size],
                variantClasses[variant],
                className
            )}
        />
    );
}
