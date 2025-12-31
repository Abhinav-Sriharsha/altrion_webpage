import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-primary tracking-tight">
                    ALTRION
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <a href="#mission" className="hover:text-primary transition-colors">Our Mission</a>
                    <a href="#problem" className="hover:text-primary transition-colors">Problem</a>
                    <a href="#solution" className="hover:text-primary transition-colors">Our Solution</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="default" className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-sm">
                        Contact Us
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
