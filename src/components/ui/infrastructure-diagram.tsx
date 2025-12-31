"use client";

import { motion } from "motion/react";
import coreImage from "@/assets/transparent_logo.png";
import { cn } from "@/lib/utils";

const nodes = [
    {
        title: "Portfolio Tracker",
        description: "Unified portfolio syncing. Real-time anomaly detection powered by Agentic AI.",
        position: "top-left",
    },
    {
        title: "Risk Shield (ARS)",
        description: "Insurance against volatility & smart contract risk. Automated payouts.",
        position: "top-right",
    },
    {
        title: "Tokenized Lending",
        description: "Smart-Contract Lending Infrastructure. Dynamic AI LTV & Risk Adjustment.",
        position: "bottom-left",
    },
    {
        title: "Agentic AI",
        description: "Continuous on-chain monitoring. Automated compliance & suspicious-activity detection.",
        position: "bottom-right",
    },
];

export const InfrastructureDiagram = () => {
    return (
        <div className="relative w-full max-w-[1200px] aspect-[16/12] md:aspect-[16/9] lg:aspect-[16/8] flex items-center justify-center">

            {/* Connecting Lines (SVG Layer) */}
            <svg className="absolute inset-0 w-full h-full text-border pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
                <g stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" fill="none">
                    {/* Top Left to Center */}
                    <path d="M 350 180 C 450 180, 500 300, 550 300" />
                    {/* Top Right to Center */}
                    <path d="M 850 180 C 750 180, 700 300, 650 300" />
                    {/* Bottom Left to Center */}
                    <path d="M 350 420 C 450 420, 500 300, 550 300" />
                    {/* Bottom Right to Center */}
                    <path d="M 850 420 C 750 420, 700 300, 650 300" />
                </g>

                {/* Animated Particles - Moving towards center */}
                <g>
                    <circle r="3" fill="#008080">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 350 180 C 450 180, 500 300, 550 300" />
                    </circle>
                    <circle r="3" fill="#008080">
                        <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 850 180 C 750 180, 700 300, 650 300" />
                    </circle>
                    <circle r="3" fill="#008080">
                        <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s" path="M 350 420 C 450 420, 500 300, 550 300" />
                    </circle>
                    <circle r="3" fill="#008080">
                        <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M 850 420 C 750 420, 700 300, 650 300" />
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

            {/* Nodes */}
            <div className="absolute inset-0 w-full h-full">
                {/* Top Left */}
                <div className="absolute top-[10%] left-[5%] md:left-[10%] w-[40%] md:w-[30%] max-w-[320px]">
                    <NodeCard node={nodes[0]} align="right" />
                </div>

                {/* Top Right */}
                <div className="absolute top-[10%] right-[5%] md:right-[10%] w-[40%] md:w-[30%] max-w-[320px]">
                    <NodeCard node={nodes[1]} align="left" />
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-[10%] left-[5%] md:left-[10%] w-[40%] md:w-[30%] max-w-[320px]">
                    <NodeCard node={nodes[2]} align="right" />
                </div>

                {/* Bottom Right */}
                <div className="absolute bottom-[10%] right-[5%] md:right-[10%] w-[40%] md:w-[30%] max-w-[320px]">
                    <NodeCard node={nodes[3]} align="left" />
                </div>
            </div>
        </div>
    );
};

function NodeCard({ node, align }: { node: typeof nodes[0], align: "left" | "right" }) {
    return (
        <div className={cn(
            "bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default",
            align === "right" ? "text-right" : "text-left"
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
