import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroBackground from "@/components/HeroBackground"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Hero() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const buttonRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        tl.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2
        })
            .from(textRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8
            }, "-=0.6")
            .from(buttonRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                scale: 0.95
            }, "-=0.6")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20">
            <HeroBackground />

            <div className="container relative z-10 px-4 md:px-6 text-center mx-auto max-w-5xl">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground"
                    style={{
                        fontFamily: "'LinecaGreek', 'Outfit', sans-serif",
                        fontVariationSettings: "'wght' 463, 'slnt' -51", // Slant usually negative in CSS or requires 'slnt' axis check. Assuming standard VF.
                        fontWeight: 463
                    }}
                >
                    Tokenized Crypto Lending & <br className="hidden md:block" /> Insurance Solution
                </h1>

                <p ref={textRef} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                    Altrion empowers you to navigate the digital finance frontier—synching assets, securing loans, tokenizing equity, and enforcing compliance with AI automation, all on a one-click integration platform.
                </p>

                <div ref={buttonRef} className="flex justify-center flex-wrap gap-4">
                    <Button size="lg" className="rounded-full px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                        Explore
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
