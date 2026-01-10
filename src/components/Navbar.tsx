import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Logo from "@/assets/transparent_logo.png"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const navItems = [
        { name: 'Our Mission', url: '/#mission' },
        { name: 'Problem', url: '/#problem' },
        { name: 'Our Solution', url: '/#solution' },
        { name: 'Contact', url: '/#contact' },
        { name: 'Why Us', url: '/why-us' }
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled || isOpen
                    ? "bg-[#a6bbbb]/90 backdrop-blur-md border-border"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                        <img src={Logo} alt="Altrion Logo" className="h-8 md:h-10 w-auto" />
                        <span className="text-lg md:text-xl font-bold tracking-wide uppercase" style={{ color: 'black', fontFamily: "'LinecaGreek', sans-serif" }}>
                            Altrion
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.url}
                                className="text-base font-medium hover:text-primary transition-colors"
                                style={{ color: 'black', fontFamily: "'LinecaGreek', sans-serif" }}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link to="/#contact">
                            <Button className="ml-4 bg-[#008080] hover:bg-[#006666] text-white">
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="flex flex-col space-y-4 px-4 py-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.url}
                                className="text-base font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
