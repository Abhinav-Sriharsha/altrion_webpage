"use client";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const AuroraBackground = ({ className, children, ...props }: AuroraBackgroundProps) => {
    return (
        <div className={`relative w-full overflow-hidden bg-slate-50 ${className || ""}`} {...props}>
            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

            {/* Aurora Blobs */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Teal Blob - Primary Altrion Color */}
                <div className="absolute top-0 left-[-10%] w-[70vw] h-[70vw] bg-[#008080]/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob" />

                {/* Indigo Blob - Depth */}
                <div className="absolute top-0 right-[-10%] w-[70vw] h-[70vw] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000" />

                {/* Slate/Pink Hint - Warmth/Neutrality */}
                <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-pink-100/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000" />

                {/* Grain overlay for texture (optional, subtle) */}
                <div
                    className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                ></div>
            </div>

            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};
