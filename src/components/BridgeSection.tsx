import { useRef } from "react"
import { Button } from "@/components/ui/button"
import featuresImage from "@/assets/altrion_features.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function BridgeSection() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const imageRef = useRef(null)
    const buttonRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(textRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6")
            .from(imageRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.4")
            .from(buttonRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.6
            }, "-=0.6")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="py-24 md:py-32 text-center bg-transparent relative">
            {/* Soft radial glow for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
                <h2 ref={titleRef} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
                    A Compliance-First Infrastructure <br className="hidden md:block" /> for Institutional Digital Assets
                </h2>

                <p ref={textRef} className="text-xl md:text-2xl text-muted-foreground mb-10">
                    We are building the bridge between stability & innovation
                </p>

                <div ref={imageRef} className="relative w-full max-w-6xl mx-auto mb-12">
                    {/* Clean transparent image without background/border */}
                    <img
                        src={featuresImage}
                        alt="Altrion Features"
                        className="w-full h-auto"
                    />
                </div>

                <div ref={buttonRef}>
                    <Button size="lg" className="rounded-full px-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    )
}
