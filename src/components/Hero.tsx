import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroBackground from "@/components/HeroBackground"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20">
            <HeroBackground />

            <div className="container relative z-10 px-4 md:px-6 text-center mx-auto max-w-5xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
                    Tokenized Crypto Lending & <br className="hidden md:block" /> Insurance Solution
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                    Altrion empowers you to navigate the digital finance frontier—synching assets, securing loans, tokenizing equity, and enforcing compliance with AI automation, all on a one-click integration platform.
                </p>

                <div className="flex justify-center flex-wrap gap-4">
                    <Button size="lg" className="rounded-full px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                        Explore
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
