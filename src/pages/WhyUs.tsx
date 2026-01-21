// Assets
import scene1Video from "@/assets/animations/scene 1 animation.mp4";
import scene2Video from "@/assets/animations/scene 2 animation.mp4";
import scene3Video from "@/assets/animations/scene 3 animation.mp4";
import scene4Video from "@/assets/animations/scene 4 animation.mp4";
import scene4Poster from "@/assets/images/temp.jpg";
import scene5Video from "@/assets/animations/scene 5 animation.mp4";
import AltrionDifference from "@/components/AltrionDifference";
import StoryStep from "@/components/StoryStep";

import { Component as WhyUsBackground } from "@/components/ui/background-components";

const steps = [
    {
        title: "The Asset",
        description: "Zach is a regular crypto investor who has accumulated over $500,000 in cryptocurrencies over the years.",
        media: { type: "video", src: scene1Video }
    },
    {
        title: "The Need",
        description: "Zach wants to buy a car but doesn't want to sell his crypto and trigger a taxable event or miss out on future gains.",
        media: { type: "video", src: scene2Video }
    },
    {
        title: "The Problem",
        description: "Traditional banks won't lend against his crypto. DeFi protocols are too risky, unregulated, and have volatile rates. He's stuck.",
        media: { type: "video", src: scene3Video }
    },
    {
        title: "The Solution",
        description: "Zach discovers Altrion.ai, a compliant, institutional-grade platform that lets him borrow against his crypto with transparent rates, insurance protection, and regulatory oversight.",
        media: { type: "video", src: scene4Video, poster: scene4Poster }
    },
    {
        title: "The Outcome",
        description: "Zach gets his car loan in days, keeps his crypto working for him, and enjoys peace of mind knowing his assets are protected and compliant.",
        media: { type: "video", src: scene5Video }
    }
];

export default function WhyUs() {
    return (
        <>
            {/* Section 1: Story & Tiles */}
            <WhyUsBackground className="py-24">
                {/* Header */}
                <div className="relative z-10 container mx-auto px-6 mb-24 pt-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-['LinecaGreek'] text-foreground"
                        >
                            Move at the speed of <br /><span style={{ color: '#073121' }}>Altrion</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Follow the journey that leads smarter investors to Altrion.
                        </p>
                    </div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6">
                    {steps.map((step, index) => (
                        <StoryStep key={index} step={step} index={index} />
                    ))}
                </div>
            </WhyUsBackground>

            <AltrionDifference />
        </>
    );
}