"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
    src?: string | null;
    alt?: string;
    fallback: string;
    className?: string;
}

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
    const [isError, setIsError] = useState(false);
    const [prevSrc, setPrevSrc] = useState(src);

    // --- KỸ THUẬT: STATE DERIVATION (Thay thế useEffect) ---
    // Nếu src thay đổi so với lần render trước, reset lỗi ngay lập tức.
    // React sẽ phát hiện thay đổi state này và render lại ngay (trước khi vẽ lên màn hình),
    // giúp tránh useEffect và "nháy" giao diện.
    if (src !== prevSrc) {
        setPrevSrc(src);
        setIsError(false);
    }

    return (
        <div
            className={cn(
                "relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 bg-muted",
                className
            )}
        >
            {src && !isError ? (
                <Image
                    src={src}
                    alt={alt || "Avatar"}
                    // fill + sizes: Giúp ảnh tự scale theo class w-xx h-xx của thẻ cha div
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    onError={() => setIsError(true)}
                // priority: Nên bật nếu avatar nằm above-the-fold (trên cùng trang)
                // priority={true} 
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500 font-medium text-xs">
                    {fallback}
                </div>
            )}
        </div>
    );
}

