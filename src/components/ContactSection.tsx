import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

export default function ContactSection() {
    return (
        <section id="contact" className="py-12 bg-[#083524] relative overflow-hidden">
            <FlickeringGrid
                className="absolute inset-0 z-0 h-full w-full [mask-image:linear-gradient(to_right,white_20%,transparent_90%)]"
                squareSize={4}
                gridGap={6}
                color="#008080"
                maxOpacity={0.25}
                flickerChance={0.25}
            />
            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Text */}
                    <div className="flex flex-col gap-6 text-left pt-8">
                        <h2
                            className="text-2xl md:text-4xl font-medium tracking-tight leading-tight"
                            style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif", color: '#f6f3ee' }}
                        >
                            Ready to modernize your <br className="hidden md:block" /> digital asset infrastructure?
                        </h2>
                        <p className="text-xl max-w-lg" style={{ color: 'white' }}>
                            Get in touch to learn how Altrion can secure and scale your institutional operations. We are here to help you navigate the future of finance.
                        </p>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="w-full p-5 md:p-6 rounded-xl border border-white/20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)' }}>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2" style={{ color: '#f6f3ee' }}>Contact Us</h3>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Fill out the form below and we'll get back to you shortly.</p>
                        </div>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium leading-none" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>First name</label>
                                    <input
                                        id="first-name"
                                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-0"
                                        placeholder="First name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium leading-none" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Last name</label>
                                    <input
                                        id="last-name"
                                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-0"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Work Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-0"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Message</label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[80px] w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-0"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <Button size="lg" className="w-full text-lg mt-2 text-white border-0 hover:opacity-90" style={{ backgroundColor: '#073121' }}>
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
