import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProblemSection from "@/components/ProblemSection"
import SolutionsSection from "@/components/SolutionsSection"
import BridgeSection from "@/components/BridgeSection"
import Footer from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <BridgeSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
