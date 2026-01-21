import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BackgroundComponentProps {
    children?: ReactNode;
    className?: string;
}

export const Component = ({ children, className }: BackgroundComponentProps) => {
    return (
        <div className={cn("min-h-screen w-full relative", className)} style={{ backgroundColor: '#f6f3ee' }}>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

