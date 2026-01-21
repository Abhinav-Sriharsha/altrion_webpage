import { Scale, Database, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"

const problems = [
    {
        icon: Scale,
        title: "Regulatory Barriers",
        description: "Rules are evolving faster than institutions can comply. Staying ahead requires constant vigilance and adaptation.",
        iconClass: "text-[#065F46]", // Dark Emerald
    },
    {
        icon: Database,
        title: "Fragmented Data",
        description: "Digital asset activity is spread across chains and systems, making holistic risk management nearly impossible.",
        iconClass: "text-[#3730A3]", // Dark Indigo
    },
    {
        icon: ShieldAlert,
        title: "No On-Chain Compliance",
        description: "Institutions have no way to monitor or enforce policies in real time, leading to potential unseen liabilities.",
        iconClass: "text-[#115E59]", // Dark Teal
    },
]

export default function ProblemSection() {
    return (
        <section id="problem" className="py-16 md:py-24 bg-[#051310]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Huge Header */}
                    <div className="lg:w-1/3 shrink-0">
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight"
                            style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif", color: '#f6f3ee' }}
                        >
                            Fragmented <br />
                            tools create <br />
                            fragmented  <br />
                            financial <br />
                            decisions.
                        </h2>
                    </div>

                    {/* Right Column: Grid of Items */}
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-16">
                        {problems.map((item, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className={cn("w-6 h-6 mb-2", item.iconClass)}>
                                    <item.icon className="w-full h-full stroke-[1.5]" />
                                </div>
                                <h3
                                    className="text-xl md:text-2xl font-medium"
                                    style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif", color: '#f6f3ee' }}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
