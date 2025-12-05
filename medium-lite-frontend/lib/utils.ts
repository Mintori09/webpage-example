// src/lib/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Hàm Utility để quản lý và kết hợp các lớp CSS (Tailwind) một cách hiệu quả.
 * Kết hợp clsx để gộp các class có điều kiện và twMerge để giải quyết xung đột Tailwind.
 * * @param inputs - Các class CSS muốn kết hợp.
 * @returns Chuỗi class CSS đã được gộp.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
