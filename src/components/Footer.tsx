import { TextHoverEffect } from "@/components/ui/hover-footer"
import transparentLogo from "@/assets/transparent_logo.png"

export default function Footer() {
    return (
        <footer className="bg-[#ffffff] py-12 pb-0 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10 mb-8">
                <div className="flex flex-col items-center">
                    <div className="mb-8">
                        <img src={transparentLogo} alt="Altrion Logo" className="h-16 w-auto object-contain" />
                    </div>
                    <nav className="mb-8 flex flex-wrap justify-center gap-8 text-muted-foreground font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Home</a>
                        <a href="#problem" className="hover:text-primary transition-colors">Problem</a>
                        <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </nav>
                    <div className="text-center mb-8">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Altrion. All rights reserved.
                        </p>
                    </div>
                    <div className="h-px w-64 bg-black/20" />
                </div>
            </div>

            {/* Text Hover Effect at the bottom */}
            <div className="w-full h-40 md:h-60 relative">
                <div className="absolute inset-x-0 bottom-0 top-1/2 -translate-y-1/2 w-full h-full">
                    <TextHoverEffect
                        text="ALTRION"
                        mainStrokeColor="black"
                        hoverStrokeColor="#008080"
                        fillColor="rgba(5, 150, 150, 1)"
                    />
                </div>
            </div>
        </footer>
    )
}
