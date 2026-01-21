import { LayoutDashboard, Coins, ShieldAlert, Check, X, FileWarning, TrendingDown, ShieldOff, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
    // const ListIcon = isPositive ? Check : X; // Removing unused variable

    const titleColor = "text-slate-900";
    const subtitleColor = "text-slate-500";
    const textColor = "text-slate-600";

    return (
        <div className="flex flex-col gap-2 py-4 px-5 rounded-xl border border-slate-200 items-center text-center shadow-sm max-w-[320px] mx-auto w-full h-full flex-1" style={{ backgroundColor: '#f6f3ee' }}>
            <div className={`w-7 h-7 ${accentColor} flex items-center justify-center shrink-0`}>
                <Icon className="w-full h-full stroke-[1.5]" />
            </div>

            <div className="shrink-0">
                <h4 className={`text-xl font-bold ${titleColor} font-['LinecaGreek'] mb-1`}>{title}</h4>
                <p className={`text-base font-medium ${subtitleColor} leading-snug`}>{subtitle}</p>
            </div>

            <div className="space-y-1 pt-1 w-full">
                {features.map((feature, i) => (
                    <div key={i} className={`text-sm ${textColor} flex items-center justify-center gap-2`}>
                        <p className="leading-relaxed">{feature}</p>
                    </div>
                ))}
            </div>
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

    return (
        <div className="bg-[#ffffff]">
            <section className="relative py-8 lg:py-6 min-h-0 flex flex-col justify-center overflow-hidden" style={{ backgroundColor: '#083524' }}>
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center py-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-['LinecaGreek'] mb-2 tracking-tight" style={{ color: '#f6f3ee' }}>
                            The Altrion Difference
                        </h2>
                        <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Turn financial chaos into clarity. See why smarter investors choose Altrion.
                        </p>
                    </div>

                    {/* Mobile View - All Advantage cards, then all Cost cards */}
                    <div className="lg:hidden space-y-6">
                        {/* Advantage Section */}
                        <div className="space-y-3">
                            <div className="flex flex-col items-center text-center gap-1 mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 font-['LinecaGreek']">The Altrion Advantage</h3>
                            </div>
                            {ADVANTAGE_CARDS.map((card, index) => (
                                <DifferenceTile key={index} {...card} variant="positive" />
                            ))}
                        </div>

                        {/* Cost Section */}
                        <div className="space-y-3 mt-8">
                            <div className="flex flex-col items-center text-center gap-1 mb-4">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                                    <X className="w-4 h-4 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-red-600 font-['LinecaGreek']">The Cost of Ignoring It</h3>
                            </div>
                            {COST_CARDS.map((card, index) => (
                                <DifferenceTile key={index} {...card} variant="negative" />
                            ))}
                        </div>
                    </div>

                    {/* Desktop View - Row by Row paired tiles */}
                    <div className="hidden lg:block">
                        {/* Column Headers */}
                        <div className="grid grid-cols-2 gap-8 relative mb-4">
                            {/* Vertical Divider Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

                            {/* Column 1 Header: The Altrion Advantage */}
                            <div className="flex flex-col items-center text-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 font-['LinecaGreek']">The Altrion Advantage</h3>
                            </div>

                            {/* Column 2 Header: The Cost of Ignoring It */}
                            <div className="flex flex-col items-center text-center gap-1">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                                    <X className="w-4 h-4 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-red-600 font-['LinecaGreek']">The Cost of Ignoring It</h3>
                            </div>
                        </div>

                        {/* Tiles - Row by Row */}
                        <div className="space-y-3 relative">
                            {/* Vertical Divider Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

                            {ADVANTAGE_CARDS.map((advantageCard, index) => (
                                <div key={index} className="grid grid-cols-2 gap-8">
                                    <div className="flex">
                                        <DifferenceTile {...advantageCard} variant="positive" />
                                    </div>
                                    <div className="flex">
                                        <DifferenceTile {...COST_CARDS[index]} variant="negative" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Institutions Choose Altrion - Refactored to match ProblemSection */}
            <section className="py-10 md:py-16" style={{ backgroundColor: '#051310' }}>
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Left Column: Huge Header */}
                        <div className="lg:w-1/3 shrink-0 flex flex-col justify-between">
                            <div>
                                <h2
                                    className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight mb-4"
                                    style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif", color: '#f6f3ee' }}
                                >
                                    Why <br />
                                    Institutions <br />
                                    <span style={{ color: '#073121' }}>Trust Altrion</span>
                                </h2>
                                <p className="text-base leading-relaxed max-w-md mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                    It's more than a platform — it's a guardian of your financial future.
                                    A system built to empower users, banks, and institutions with the tools to thrive.
                                </p>
                            </div>


                        </div>

                        {/* Right Column: Grid of Items */}
                        <div className="lg:w-2/3 grid md:grid-cols-2 gap-x-8 gap-y-10">
                            {institutionReasons.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className={cn("w-6 h-6 mb-2", item.iconClass)}>
                                        <item.icon className="w-full h-full stroke-[1.5]" />
                                    </div>
                                    <h3
                                        className="text-xl font-medium"
                                        style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif", color: '#f6f3ee' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="text-base leading-relaxed max-w-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
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
