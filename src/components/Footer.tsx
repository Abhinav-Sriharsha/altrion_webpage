import { TextHoverEffect } from "@/components/ui/hover-footer"
import transparentLogo from "@/assets/justlogo'd.png"

export default function Footer() {
    return (
        <footer className="bg-[#f6f3ee] py-12 pb-0 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10 mb-8">
                <div className="flex flex-col items-center">
                    <div className="mb-8">
                        <img src={transparentLogo} alt="Altrion Logo" className="h-16 w-auto object-contain" />
                    </div>
                    <nav className="mb-8 flex flex-wrap justify-center gap-8 text-lg font-medium" style={{ color: 'black' }}>
                        <a href="#" className="hover:opacity-70 transition-opacity">Home</a>
                        <a href="#problem" className="hover:opacity-70 transition-opacity">Problem</a>
                        <a href="#solutions" className="hover:opacity-70 transition-opacity">Solutions</a>
                        <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
                    </nav>
                    <div className="text-center mb-8">
                        <p className="text-base" style={{ color: 'black' }}>
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
                        hoverStrokeColor="#007958"
                        fillColor="rgba(0, 121, 88, 1)"
                    />
                </div>
            </div>
        </footer>
    )
}
