import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const solutions = [
    {
        title: "Portfolio Tracker",
        description: "Unified portfolio syncing across wallets, banks, and brokers. Real-time anomaly detection powered by Agentic AI. Automated Liquidation & Capital Protection.",
    },
    {
        title: "Tokenized Lending",
        description: "Smart-Contract Lending Infrastructure. Dynamic AI LTV & Risk Adjustment. Automated Liquidation & Capital Protection.",
    },
    {
        title: "Altrion Insurance Risk Shield (ARS)",
        description: "Insurance against volatility, custodial failures, and smart contract risk. Automated payouts via parametric triggers. Regulatory capital optimization.",
    },
    {
        title: "Agentic AI",
        description: "Continuous on-chain monitoring across assets and wallets. Automated compliance checks and suspicious-activity detection. Operational oversight that reduces institutional and counterparty risk.",
    },
]

export default function SolutionsSection() {
    return (
        <section id="solution" className="py-20 relative overflow-hidden bg-transparent">
            {/* Subtle light overlay instead of dark fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
                    Our Solutions
                </h2>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {solutions.map((item, index) => (
                        <Card key={index} className="bg-white/60 backdrop-blur-md border-indigo-50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                            <CardHeader>
                                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
