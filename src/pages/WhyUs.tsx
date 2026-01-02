import { useRef } from "react";
import { Wallet, Car, TrendingDown, ShieldCheck, PartyPopper } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
    {
        icon: <Wallet className="w-6 h-6 text-primary" />,
        title: "The Asset",
        description: "Zach is a regular crypto investor who has accumulated over $500,000 in cryptocurrencies over the years.",
        side: "left"
    },
    {
        icon: <Car className="w-6 h-6 text-primary" />,
        title: "The Need",
        description: "Zach wants to buy a car but doesn't want to sell his crypto and trigger a taxable event or miss out on future gains.",
        side: "right"
    },
    {
        icon: <TrendingDown className="w-6 h-6 text-destructive" />,
        title: "The Problem",
        description: "Traditional banks won't lend against his crypto. DeFi protocols are too risky, unregulated, and have volatile rates. He's stuck.",
        side: "left"
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-primary" />,
        title: "The Solution",
        description: "Zach discovers Altrion.ai, a compliant, institutional-grade platform that lets him borrow against his crypto with transparent rates, insurance protection, and regulatory oversight.",
        side: "right"
    },
    {
        icon: <PartyPopper className="w-6 h-6 text-primary" />,
        title: "The Outcome",
        description: "Zach gets his car loan in days, keeps his crypto working for him, and enjoys peace of mind knowing his assets are protected and compliant.",
        side: "left"
    }
];

export default function WhyUs() {
    const containerRef = useRef(null);
    const lineRef = useRef(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        });

        // 1. Animate Line Drawing
        tl.fromTo(lineRef.current,
            { height: "0%" },
            { height: "100%", duration: 1.5, ease: "power2.inOut" }
        );

        // 2. Animate Steps
        stepsRef.current.forEach((step, index) => {
            if (!step) return;

            const content = step.querySelector('.step-content');
            const icon = step.querySelector('.step-icon');
            const isLeft = index % 2 === 0;

            tl.fromTo(content,
                { opacity: 0, x: isLeft ? -50 : 50 },
                { opacity: 1, x: 0, duration: 0.5, ease: "out" },
                `-=${index === 0 ? 0.5 : 0.3}` // Overlap slightly
            );

            tl.fromTo(icon,
                { scale: 0, rotation: -90 },
                { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.7)" },
                "<" // Start with content
            );
        });

    }, { scope: containerRef });

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 overflow-x-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Meet Zach: The <span className="text-primary">Crypto-Rich</span>, <span className="text-muted-foreground">Cash-Poor</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        See how Altrion bridges the gap between digital assets and real-world liquidity.
                    </p>
                </div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative max-w-4xl mx-auto">

                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 md:translate-x-0 h-full">
                        <div ref={lineRef} className="w-full bg-primary origin-top" />
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col gap-12 md:gap-24 relative">
                        {timelineSteps.map((step, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex flex-col md:flex-row items-start md:items-center relative gap-8 md:gap-0",
                                    index % 2 === 0 ? "md:flex-row-reverse" : "" // Alternating sides
                                )}
                                ref={el => { stepsRef.current[index] = el }}
                            >

                                {/* Spacer (for alternating layout) */}
                                <div className="hidden md:block w-1/2" />

                                {/* Icon Marker */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 w-12 h-12 bg-background border-2 border-primary rounded-full shadow-lg step-icon">
                                    {step.icon}
                                </div>

                                {/* Content Card */}
                                <div className={cn(
                                    "w-full md:w-1/2 pl-16 md:pl-0 step-content",
                                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                                )}>
                                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{step.title}</h3>
                                    <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors shadow-sm">
                                        <p className="text-lg md:text-xl font-medium leading-relaxed">
                                            {step.title === "The Solution" ? (
                                                <>
                                                    Zach discovers <a href="/" className="text-primary hover:underline">Altrion.ai</a>, a compliant, institutional-grade platform that lets him borrow against his crypto with transparent rates.
                                                </>
                                            ) : step.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}
