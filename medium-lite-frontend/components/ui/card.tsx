import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
}

export function Card({ children, className = "", noPadding = false }: CardProps) {
    return (
        <div className={`rounded-lg border border-subtle-border bg-surface shadow-subtle ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="p-4 sm:p-6 border-b border-subtle-border">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{title}</h3>
                {subtitle && <span className="text-sm text-medium-emphasis">{subtitle}</span>}
            </div>
        </div>
    );
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}

