"use client";


import coreImage from "@/assets/justlogo'd.png";
import { cn } from "@/lib/utils";

const nodes = [
    {
        title: "Portfolio Tracker",
        description: "Unified portfolio syncing. Real-time anomaly detection powered by Agentic AI.",
        position: "top-left", // 10 o'clock
    },
    {
        title: "Altrion Personal Planner",
        description: "Insurance against volatility & smart contract risk. Automated payouts.",
        position: "top-right", // 2 o'clock
    },
    {
        title: "Tokenized Lending",
        description: "Smart-Contract Lending Infrastructure. Dynamic AI LTV & Risk Adjustment.",
        position: "bottom", // 6 o'clock
    },
];

export const InfrastructureDiagram = () => {
    return (
        <div className="w-full">
            {/* Mobile View (Vertical Stack) */}
            <div className="md:hidden flex flex-col items-center gap-8 py-8 w-full">
                <NodeCard node={nodes[0]} align="center" />

                {/* Central Hub Mobile */}
                <div className="w-24 h-24 rounded-2xl bg-white shadow-xl border border-teal-100 flex items-center justify-center p-1 relative my-4">
                    <div className="absolute inset-0 bg-teal-500/5 rounded-2xl animate-pulse" />
                    <img src={coreImage} alt="Altrion" className="w-full h-auto object-contain" />
                </div>

                <NodeCard node={nodes[1]} align="center" />
                <NodeCard node={nodes[2]} align="center" />
            </div>

            {/* Desktop View (Diagram) - 3 tiles at 10, 2, and 6 o'clock */}
            <div className="hidden md:flex relative w-full aspect-[16/12] md:aspect-[16/9] lg:aspect-[16/8] items-center justify-center">

                {/* Grid Background with Fade Effect */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #073121 1px, transparent 1px),
                            linear-gradient(to bottom, #073121 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        mask: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 70%)',
                        WebkitMask: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 70%)',
                        opacity: 0.4
                    }}
                />

                {/* Connecting Lines (SVG Layer) */}
                <svg className="absolute inset-0 w-full h-full text-border pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
                    <g stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" fill="none">
                        {/* 10 o'clock (Top Left) to Center */}
                        <path d="M 420 150 C 500 200, 550 280, 600 300" />
                        {/* 2 o'clock (Top Right) to Center */}
                        <path d="M 780 150 C 700 200, 650 280, 600 300" />
                        {/* 6 o'clock (Bottom Center) to Center */}
                        <path d="M 600 480 C 600 420, 600 360, 600 300" />
                    </g>

                    {/* Animated Particles - Moving towards center */}
                    <g>
                        <circle r="3" fill="#008080">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M 420 150 C 500 200, 550 280, 600 300" />
                        </circle>
                        <circle r="3" fill="#008080">
                            <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 780 150 C 700 200, 650 280, 600 300" />
                        </circle>
                        <circle r="3" fill="#008080">
                            <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s" path="M 600 480 C 600 420, 600 360, 600 300" />
                        </circle>
                    </g>
                </svg>

                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-32 h-32 md:w-30 md:h-30 rounded-3xl bg-white shadow-xl border border-teal-100 flex items-center justify-center p-1 relative">
                        <div className="absolute inset-0 bg-teal-500/5 rounded-3xl animate-pulse" />
                        <img src={coreImage} alt="Altrion" className="w-full h-auto object-contain" />
                    </div>
                </div>

                {/* Nodes - positioned at 10, 2, and 6 o'clock */}
                <div className="absolute inset-0 w-full h-full">
                    {/* 10 o'clock - Top Left, angled toward center */}
                    <div className="absolute top-[15%] left-[15%] w-[28%] max-w-[280px]">
                        <NodeCard node={nodes[0]} align="right" />
                    </div>

                    {/* 2 o'clock - Top Right, angled toward center */}
                    <div className="absolute top-[15%] right-[15%] w-[28%] max-w-[280px]">
                        <NodeCard node={nodes[1]} align="left" />
                    </div>

                    {/* 6 o'clock - Bottom Center */}
                    <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[28%] max-w-[280px]">
                        <NodeCard node={nodes[2]} align="center" />
                    </div>
                </div>
            </div>
        </div>
    );
};

function NodeCard({ node, align }: { node: typeof nodes[0], align: "left" | "right" | "center" }) {
    return (
        <div className={cn(
            "bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default",
            align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"
        )}>
            <h3
                className="text-lg font-semibold text-foreground mb-2"
                style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
            >
                {node.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {node.description}
            </p>
        </div>
    )
}
