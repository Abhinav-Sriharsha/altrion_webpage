import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BackgroundComponentProps {
    children?: ReactNode;
    className?: string;
}

export const Component = ({ children, className }: BackgroundComponentProps) => {
    return (
        <div className={cn("min-h-screen w-full relative bg-white", className)}>
            {/* Soft Yellow Glow */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(circle at center, #008080 0%, transparent 40%)
          `,
                    opacity: 0.6,
                    mixBlendMode: "multiply",
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
