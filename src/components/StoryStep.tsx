import { useRef } from "react";

export interface StoryStepProps {
    step: {
        title: string;
        description: string;
        media: {
            type: string;
            src: string;
            poster?: string;
        };
    };
    index?: number;
}

export default function StoryStep({ step }: StoryStepProps) {
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
        <div
            className="flex flex-col w-full h-full rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50 cursor-pointer shadow-sm hover:shadow-md group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Text Section */}
            <div className="p-8 flex flex-col justify-center items-center text-center flex-1">
                <h3 className="text-xl font-bold font-['LinecaGreek'] leading-tight text-foreground mb-4">
                    {step.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground font-medium">
                    {step.description}
                </p>
            </div>

            {/* Media Section */}
            <div className="w-full h-[300px] bg-secondary/5 relative overflow-hidden">
                {step.media.type === 'video' ? (
                    <video
                        ref={videoRef}
                        src={step.media.src}
                        poster={step.media.poster}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={step.media.src}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}
            </div>
        </div>
    );
}
