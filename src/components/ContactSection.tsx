import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
    const containerRef = useRef(null)
    const contentRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(contentRef.current, { y: 30, opacity: 0, duration: 1, ease: "power3.out" })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} id="contact" className="py-24 bg-[#BDC2AE] border-t border-slate-200">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <div ref={contentRef} className="flex flex-col items-center gap-8">
                    <h2
                        className="text-3xl md:text-5xl font-medium tracking-tight text-foreground"
                        style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
                    >
                        Ready to modernize your <br className="hidden md:block" /> digital asset infrastructure?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get in touch to learn how Altrion can secure and scale your institutional operations.
                    </p>
                    <Button size="lg" className="rounded-full px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
