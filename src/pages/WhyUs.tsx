import { useRef } from "react";
// Assets
import scene1Video from "@/assets/animations/scene 1 animation.mp4";
import scene2Video from "@/assets/animations/scene 2 animation.mp4";
import scene3Video from "@/assets/animations/scene 3 animation.mp4";
import scene4Video from "@/assets/animations/scene 4 animation.mp4";
import scene4Poster from "@/assets/images/loan scene 4.jpg";
import scene5Video from "@/assets/animations/scene 5 animation.mp4";

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

function StepCard({ step, index }: { step: typeof steps[0] & { media: { poster?: string } }; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current && step.media.type === 'video') {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current && step.media.type === 'video') {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
            {/* Text Tile */}
            <div className="p-8 rounded-2xl border border-border bg-card h-[250px] flex flex-col justify-center transition-all hover:border-primary/30">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">
                        {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold font-['LinecaGreek']">
                        {step.title}
                    </h3>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground font-medium">
                    {step.description}
                </p>
            </div>

            {/* Media Tile */}
            <div
                className="rounded-2xl overflow-hidden bg-secondary/5 border border-border h-[250px] flex items-center justify-center cursor-pointer group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {step.media.type === 'video' ? (
                    <video
                        ref={videoRef}
                        src={step.media.src}
                        poster={step.media.poster}
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <img
                        src={step.media.src}
                        alt={step.title}
                        className="w-full h-full object-contain scale-125 transition-transform duration-700 group-hover:scale-[1.35]"
                    />
                )}
            </div>
        </div>
    );
}

export default function WhyUs() {
    return (
        <div className="bg-background py-24">
            {/* Header */}
            <div className="container mx-auto px-6 mb-24">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-['LinecaGreek']">
                        Move at the speed of <br /><span className="text-primary">Innovation</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Follow the journey that leads smarter investors to Altrion.
                    </p>
                </div>
            </div>

            {/* Steps Grid */}
            <div className="container mx-auto px-6 space-y-16">
                {steps.map((step, index) => (
                    <StepCard key={index} step={step} index={index} />
                ))}
            </div>
        </div>
    );
}