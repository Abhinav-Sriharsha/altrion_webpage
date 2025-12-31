import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShieldAlert, Database, Scale } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const problems = [
    {
        icon: Scale,
        title: "Regulatory Barriers",
        description: "Rules are evolving faster than institutions can comply. Staying ahead requires constant vigilance and adaptation.",
    },
    {
        icon: Database,
        title: "Fragmented Data",
        description: "Digital asset activity is spread across chains and systems, making holistic risk management nearly impossible.",
    },
    {
        icon: ShieldAlert,
        title: "No On-Chain Compliance",
        description: "Institutions have no way to monitor or enforce policies in real time, leading to potential unseen liabilities.",
    },
]

export default function ProblemSection() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef([])

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(min-width: 768px)", () => {
            // Desktop: All 3 cards are in 1 row -> Animate all together
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })

            tl.from(titleRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" })
                .from(cardsRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        })

        mm.add("(max-width: 767px)", () => {
            // Mobile: Stacked -> Stagger them
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })

            tl.from(titleRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" })
                .from(cardsRef.current, { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.6")
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} id="problem" className="py-20 bg-transparent">
            <div className="container mx-auto px-4 md:px-6">
                <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
                    The Problem
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} ref={(el) => { cardsRef.current[index] = el }}>
                            <Card className="bg-white/50 backdrop-blur-sm border-indigo-100 shadow-sm hover:border-primary/50 transition-colors duration-300 h-full">
                                <CardHeader className="space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
