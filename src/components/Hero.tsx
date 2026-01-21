import { useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import HeroBackground from "@/components/HeroBackground"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Logo from "@/assets/hero.png"

export default function Hero() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const buttonRef = useRef(null)
    const logoRef = useRef(null)

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
            .from(logoRef.current, {
                x: 50,
                opacity: 0,
                duration: 1,
                scale: 0.9
            }, "-=1.2")

    }, { scope: containerRef })

    return (
        <section id="mission" ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20">
            <HeroBackground />

            <div className="container relative z-10 px-4 md:px-6 mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                {/* Text Block - Left Side */}
                <div className="flex-1 text-center lg:text-left max-w-2xl">
                    <h1
                        ref={titleRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground"
                        style={{
                            fontFamily: "'LinecaGreek', 'Outfit', sans-serif",
                            fontVariationSettings: "'wght' 463, 'slnt' -51",
                            fontWeight: 463
                        }}
                    >
                        Aggregate, Analyze & <br className="hidden md:block" /> Advance
                    </h1>

                    <p ref={textRef} className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                        Altrion is a financial management tool that empowers you to navigate the digital wealth frontier by synching assets, securing loans, tokenizing wealth, and enforcing compliance with AI automation, all on a one-click integration platform.
                    </p>

                    <div ref={buttonRef} className="flex justify-center lg:justify-start flex-wrap gap-4">
                        <Link
                            to="/why-us"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2"
                            style={{ backgroundColor: '#073121' }}
                        >
                            <span className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                            <span className="relative z-10 flex items-center gap-2">
                                Why Altrion?
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Logo - Right Side */}
                <div ref={logoRef} className="flex-1 flex items-center justify-center lg:justify-end self-stretch lg:-mr-16">
                    <img
                        src={Logo}
                        alt="Altrion Logo"
                        className="h-full max-h-[500px] md:max-h-[600px] lg:max-h-[700px] w-auto object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    )
}
