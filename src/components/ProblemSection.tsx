import { useRef } from "react"
import { Scale, Database, ShieldAlert } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

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
    const containerRef = useRef(null)
    const headerRef = useRef(null)
    const gridRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(headerRef.current, { x: -30, opacity: 0, duration: 1, ease: "power3.out" })
            .from(gridRef.current?.children || [], {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.6")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} id="problem" className="py-16 md:py-24 bg-[#ffffff]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Huge Header */}
                    <div className="lg:w-1/3 shrink-0">
                        <h2
                            ref={headerRef}
                            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-foreground tracking-tight"
                            style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
                        >
                            Fragmented <br />
                            infrastructure <br />
                            is stifling <br />
                            institutional <br />
                            growth
                        </h2>
                    </div>

                    {/* Right Column: Grid of Items */}
                    <div ref={gridRef} className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-16">
                        {problems.map((item, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className={cn("w-6 h-6 mb-2", item.iconClass)}>
                                    <item.icon className="w-full h-full stroke-[1.5]" />
                                </div>
                                <h3
                                    className="text-xl md:text-2xl font-medium text-foreground"
                                    style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
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
