import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProblemSection from "@/components/ProblemSection"
import SolutionsSection from "@/components/SolutionsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {

  useEffect(() => {
    // Force scroll to top on page reload and enforce /# in URL
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    // Set URL to /#
    window.history.replaceState(null, '', '/#')
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="min-h-screen w-full relative">
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
