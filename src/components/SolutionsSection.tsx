import { InfrastructureDiagram } from "@/components/ui/infrastructure-diagram"

export default function SolutionsSection() {
    return (
        <section id="solution" className="py-8 md:py-12 relative overflow-hidden bg-[#f6f3ee]">
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">

                {/* Content Wrapper */}
                <div className="py-4 md:py-6">
                    <div className="text-center max-w-4xl mx-auto mb-4">
                        <h2
                            className="text-2xl md:text-4xl lg:text-5xl font-medium mb-3 text-foreground tracking-tight break-words"
                            style={{ fontFamily: "'LinecaGreek', 'Outfit', sans-serif" }}
                        >
                            A unified agentic AI layer <br className="hidden md:block" />powering aggregation, analysis and advancement.
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            We are building the bridge between stability & innovation
                        </p>
                    </div>

                    <div className="w-full flex justify-center">
                        <InfrastructureDiagram />
                    </div>
                </div>

            </div>
        </section>
    )
}
