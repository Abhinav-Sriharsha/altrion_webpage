import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Logo from "@/assets/justlogo'd.png"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

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
            className="fixed top-0 w-full z-50 transition-all duration-300"
            style={{
                backgroundColor: '#073121',
                borderBottom: '1px solid rgba(255, 255, 255, 0.4)'
            }}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                        <img src={Logo} alt="Altrion Logo" className="h-8 md:h-10 w-auto brightness-0 invert" />
                        <span className="text-lg md:text-xl font-bold tracking-wide uppercase" style={{ color: 'white', fontFamily: "'LinecaGreek', sans-serif" }}>
                            Altrion
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.url}
                                className="text-base font-medium transition-all duration-200 hover:opacity-80"
                                style={{
                                    color: 'white',
                                    fontFamily: "'LinecaGreek', sans-serif",
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className="text-white hover:bg-white/10"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-white/15" style={{ backgroundColor: '#073121' }}>
                    <div className="flex flex-col space-y-4 px-4 py-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.url}
                                className="text-base font-medium transition-all duration-200 hover:opacity-80"
                                style={{ color: 'white', fontFamily: "'LinecaGreek', sans-serif" }}
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
