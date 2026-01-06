import { useRef } from "react";
import { LayoutDashboard, Coins, ShieldAlert, Check, X, FileWarning, TrendingDown, ShieldOff, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";


gsap.registerPlugin(ScrollTrigger);

type TileVariant = 'positive' | 'negative';

interface DifferenceTileProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    features: string[];
    variant: TileVariant;
}

function DifferenceTile({ icon: Icon, title, subtitle, features, variant }: DifferenceTileProps) {
    const isPositive = variant === 'positive';

    // Style configurations based on variant
    const accentColor = isPositive ? "text-blue-600" : "text-red-600";
    const iconBg = isPositive ? "bg-blue-50" : "bg-red-50";
    const hoverBorder = isPositive ? "hover:border-blue-200" : "hover:border-red-200";
    const ListIcon = isPositive ? Check : X;
    const titleColor = "text-slate-900"; // Kept consistent as per previous theme
    const subtitleColor = "text-slate-500";
    const textColor = "text-slate-600";

    return (
        <div className={`p-8 rounded-2xl border border-slate-200 bg-white ${hoverBorder} transition-colors h-[280px] flex flex-col shadow-sm`}>
            <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${iconBg} ${accentColor}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h4 className={`text-xl font-bold ${titleColor} font-['LinecaGreek']`}>{title}</h4>
                    <p className={`text-sm font-medium ${subtitleColor}`}>{subtitle}</p>
                </div>
            </div>
            <ul className="space-y-3 mt-auto">
                {features.map((feature, i) => (
                    <li key={i} className={`text-sm ${textColor} flex items-start gap-2`}>
                        <ListIcon className={`w-4 h-4 ${accentColor} mt-0.5 shrink-0`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const ADVANTAGE_CARDS = [
    {
        title: "Portfolio Tracker",
        subtitle: "See Everything, Miss Nothing",
        icon: LayoutDashboard,
        features: [
            "Unified View: Connect all accounts in minutes.",
            "Real-Time Insights: Track performance & risk.",
            "Smart Analytics: Surface trends instantly."
        ]
    },
    {
        title: "Tokenized Lending",
        subtitle: "Borrow Against What You Own",
        icon: Coins,
        features: [
            "Crypto + Equity Loans: Use portfolio as collateral.",
            "Dynamic LTV: Real-time adjustments.",
            "Blockchain-Backed: Verifiable & secure."
        ]
    },
    {
        title: "Altrion Risk Shield",
        subtitle: "The Armor for Modern Finance",
        icon: ShieldAlert,
        features: [
            "Insurance-grade security: Coverage for volatility.",
            "Compliance: Continuous AI scanning.",
            "Peace of mind: Guarded wealth."
        ]
    }
];

const COST_CARDS = [
    {
        title: "Fragmented Realities",
        subtitle: "Blind Spots Everywhere",
        icon: FileWarning,
        features: [
            "Juggling 5+ apps, exchanges, & brokers.",
            "No clear sense of where money stands.",
            "Scattered assets, invisible risks."
        ]
    },
    {
        title: "Liquidity Traps",
        subtitle: "Locked & Vulnerable",
        icon: TrendingDown,
        features: [
            "Missed margin calls during overnight dips.",
            "To get cash, you trigger taxable events.",
            "Forced to sell assets at the bottom."
        ]
    },
    {
        title: "Hidden Dangers",
        subtitle: "Exposed & Unprotected",
        icon: ShieldOff,
        features: [
            "DeFi yields look good until caught in a hack.",
            "Paying taxes on gains you could offset.",
            "Lack of regulatory oversight."
        ]
    }
];

const institutionReasons = [
    {
        icon: ShieldCheck,
        title: "Safe Digital Asset Engagement",
        description: "Institutions can confidently engage with digital assets (crypto, DeFi) without fear of exposure, thanks to insurance-grade security coverage that protects against volatility, smart contract exploits, and exchange risks.",
        iconClass: "text-[#3730A3]", // Dark Indigo
    },
    {
        icon: Scale,
        title: "Regulatory-Grade Compliance",
        description: "AI agents continuously scan for compliance anomalies, ensuring institutions meet regulatory requirements automatically. This reduces compliance burden and risk of violations in the rapidly evolving digital asset space.",
        iconClass: "text-[#065F46]", // Dark Emerald
    },
    {
        icon: LayoutDashboard,
        title: "Unified Risk Management",
        description: "Institutions gain a single intelligent dashboard to monitor and manage risk across traditional and digital assets. Real-time insights help identify trends, anomalies, and exposures before they become problems.",
        iconClass: "text-[#115E59]", // Dark Teal
    },
];

export default function AltrionDifference() {
    const institutionsRef = useRef(null);
    const institutionsHeaderRef = useRef(null);
    const institutionsGridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: institutionsRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(institutionsHeaderRef.current, { x: -30, opacity: 0, duration: 1, ease: "power3.out" })
            .from(institutionsGridRef.current?.children || [], {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.6");

    }, { scope: institutionsRef });

    return (
        <div className="relative bg-[#ffffff] py-24">
            {/* Altrion vs The Alternative Comparison */}
            <div className="relative z-10 container mx-auto px-6 mb-32">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold font-['LinecaGreek'] mb-6 text-slate-900 tracking-tight">
                        The Altrion Difference
                    </h2>
                    <p className="text-lg text-slate-600">
                        Turn financial chaos into clarity. See why smarter investors choose Altrion.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Column 1: The Altrion Advantage */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 mb-2 pl-2">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                <Check className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 font-['LinecaGreek']">The Altrion Advantage</h3>
                        </div>

                        {ADVANTAGE_CARDS.map((card, index) => (
                            <DifferenceTile
                                key={index}
                                {...card}
                                variant="positive"
                            />
                        ))}
                    </div>

                    {/* Column 2: The Cost of Ignoring It */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 mb-2 pl-2">
                            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                <X className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-red-600 font-['LinecaGreek']">The Cost of Ignoring It</h3>
                        </div>

                        {COST_CARDS.map((card, index) => (
                            <DifferenceTile
                                key={index}
                                {...card}
                                variant="negative"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Institutions Choose Altrion - Refactored to match ProblemSection */}
            <section ref={institutionsRef} className="py-16 md:py-24 bg-slate-50/50">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Left Column: Huge Header */}
                        <div className="lg:w-1/3 shrink-0 flex flex-col justify-between">
                            <div>
                                <h2
                                    ref={institutionsHeaderRef}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 tracking-tight mb-8"
                                    style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
                                >
                                    Why <br />
                                    Institutions <br />
                                    <span className="text-primary">Trust Altrion</span>
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-md mb-8">
                                    It's more than a platform — it's a guardian of your financial future.
                                    A system built to empower users, banks, and institutions with the tools to thrive.
                                </p>
                            </div>


                        </div>

                        {/* Right Column: Grid of Items */}
                        <div ref={institutionsGridRef} className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-16">
                            {institutionReasons.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className={cn("w-6 h-6 mb-2", item.iconClass)}>
                                        <item.icon className="w-full h-full stroke-[1.5]" />
                                    </div>
                                    <h3
                                        className="text-xl md:text-2xl font-bold text-slate-900"
                                        style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-base text-slate-600 leading-relaxed max-w-sm">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
