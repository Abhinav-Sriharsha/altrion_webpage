import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProblemSection from "@/components/ProblemSection"
import SolutionsSection from "@/components/SolutionsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import WhyUs from "@/pages/WhyUs"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll handling
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // If simply on / and no hash, verify if we need to scroll top or not.
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="min-h-screen w-full relative">
            <Hero />
            <ProblemSection />
            <SolutionsSection />
            <ContactSection />
          </main>
        } />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
