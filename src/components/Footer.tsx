import transparentLogo from "@/assets/transparent_logo.png"

export default function Footer() {
    return (
        <footer className="bg-[#ffffff] py-12">
            <div className="container mx-auto px-4 md:px-6">
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
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Altrion. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
