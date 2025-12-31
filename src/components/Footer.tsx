export default function Footer() {
    return (
        <footer id="contact" className="py-12 border-t border-indigo-100 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-2xl font-bold text-primary">ALTRION</span>
                        <p className="text-sm text-muted-foreground">Intelligent Finance, Secured by AI</p>
                    </div>

                    <div className="flex gap-8 text-sm text-muted-foreground font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Mission</a>
                        <a href="#" className="hover:text-primary transition-colors">Problem</a>
                        <a href="#" className="hover:text-primary transition-colors">Solution</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                    </div>

                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <div className="w-8 h-8 rounded-full bg-indigo-50 hover:bg-primary/20 transition-colors" />
                        <div className="w-8 h-8 rounded-full bg-indigo-50 hover:bg-primary/20 transition-colors" />
                        <div className="w-8 h-8 rounded-full bg-indigo-50 hover:bg-primary/20 transition-colors" />
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Altrion. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
