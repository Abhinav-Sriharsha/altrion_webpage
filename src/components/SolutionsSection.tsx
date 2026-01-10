import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { InfrastructureDiagram } from "@/components/ui/infrastructure-diagram"

gsap.registerPlugin(ScrollTrigger)

export default function SolutionsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentWrapperRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const diagramRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contentWrapperRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(contentWrapperRef.current, { y: 40, opacity: 0, duration: 1, ease: "power3.out" })
            .from(titleRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
            .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
            .from(diagramRef.current, { scale: 0.95, opacity: 0, duration: 1 }, "-=0.6")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} id="solution" className="py-16 md:py-24 relative overflow-hidden bg-[#ffffff]">
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">

                {/* Colored Container Wrapping Text + Diagram */}
                <div
                    ref={contentWrapperRef}
                    className="bg-[#DCE5E2] p-8 md:p-20 border border-teal-50 shadow-sm rounded-3xl"
                >
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2
                            ref={titleRef}
                            className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground tracking-tight break-words"
                            style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
                        >
                            A Compliance-First Infrastructure <br className="hidden md:block" /> for Institutional Digital Assets
                        </h2>
                        <p ref={subtitleRef} className="text-xl text-muted-foreground">
                            We are building the bridge between stability & innovation
                        </p>
                    </div>

                    <div ref={diagramRef} className="w-full flex justify-center">
                        <InfrastructureDiagram />
                    </div>
                </div>

            </div>
        </section>
    )
}
