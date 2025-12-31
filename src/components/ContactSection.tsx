import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
    const containerRef = useRef(null)
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(leftRef.current, { x: -30, opacity: 0, duration: 1, ease: "power3.out" })
            .from(rightRef.current, { x: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")

    }, { scope: containerRef })

    return (
        <section ref={containerRef} id="contact" className="py-24 bg-[#ffffff] relative overflow-hidden">
            <FlickeringGrid
                className="absolute inset-0 z-0 h-full w-full [mask-image:linear-gradient(to_right,white_20%,transparent_90%)]"
                squareSize={4}
                gridGap={6}
                color="#008080"
                maxOpacity={0.25}
                flickerChance={0.25}
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Text */}
                    <div ref={leftRef} className="flex flex-col gap-6 text-left pt-8">
                        <h2
                            className="text-3xl md:text-5xl font-medium tracking-tight text-foreground leading-tight"
                            style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
                        >
                            Ready to modernize your <br className="hidden md:block" /> digital asset infrastructure?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-lg">
                            Get in touch to learn how Altrion can secure and scale your institutional operations. We are here to help you navigate the future of finance.
                        </p>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div ref={rightRef} className="w-full bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold mb-2 text-foreground">Contact Us</h3>
                            <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
                        </div>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">First name</label>
                                    <input
                                        id="first-name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="First name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">Last name</label>
                                    <input
                                        id="last-name"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">Work Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">Message</label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <Button size="lg" className="w-full text-lg mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                                Send Message
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
