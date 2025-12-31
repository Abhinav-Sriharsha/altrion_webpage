import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const solutions = [
    {
        title: "Portfolio Tracker",
        description: "Unified portfolio syncing across wallets, banks, and brokers. Real-time anomaly detection powered by Agentic AI. Automated Liquidation & Capital Protection.",
    },
    {
        title: "Tokenized Lending",
        description: "Smart-Contract Lending Infrastructure. Dynamic AI LTV & Risk Adjustment. Automated Liquidation & Capital Protection.",
    },
    {
        title: "Altrion Insurance Risk Shield (ARS)",
        description: "Insurance against volatility, custodial failures, and smart contract risk. Automated payouts via parametric triggers. Regulatory capital optimization.",
    },
    {
        title: "Agentic AI",
        description: "Continuous on-chain monitoring across assets and wallets. Automated compliance checks and suspicious-activity detection. Operational oversight that reduces institutional and counterparty risk.",
    },
]

export default function SolutionsSection() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef([])

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(min-width: 768px)", () => {
            // Desktop: Grid cols 2. Group 0,1 (Row 1) and 2,3 (Row 2).
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })

            const cards = cardsRef.current
            const row1 = [cards[0], cards[1]]
            const row2 = [cards[2], cards[3]]

            tl.from(titleRef.current, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" })
                .from(row1, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
                .from(row2, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        })

        mm.add("(max-width: 767px)", () => {
            // Mobile: Stacked -> Stagger all
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
        <section ref={containerRef} id="solution" className="py-20 relative overflow-hidden bg-transparent">
            {/* Subtle light overlay instead of dark fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
                    Our Solutions
                </h2>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {solutions.map((item, index) => (
                        <div key={index} ref={(el) => { cardsRef.current[index] = el }}>
                            <Card className="bg-white/60 backdrop-blur-md border-indigo-50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group h-full">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
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
