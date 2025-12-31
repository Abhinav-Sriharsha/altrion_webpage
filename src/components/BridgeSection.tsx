import { Button } from "@/components/ui/button"
import featuresImage from "@/assets/altrion_features.png"

export default function BridgeSection() {
    return (
        <section className="py-24 md:py-32 text-center bg-transparent relative">
            {/* Soft radial glow for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
                    A Compliance-First Infrastructure <br className="hidden md:block" /> for Institutional Digital Assets
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground mb-10">
                    We are building the bridge between stability & innovation
                </p>

                <div className="relative w-full max-w-6xl mx-auto mb-12">
                    {/* Clean transparent image without background/border */}
                    <img
                        src={featuresImage}
                        alt="Altrion Features"
                        className="w-full h-auto"
                    />
                </div>

                <Button size="lg" className="rounded-full px-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                    Contact Us
                </Button>
            </div>
        </section>
    )
}
