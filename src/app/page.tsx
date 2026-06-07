import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import ImpactStats from "@/components/ImpactStats"
import Gallery from "@/components/Gallery"
import BudgetCalculator from "@/components/BudgetCalculator"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-black">
      <Navbar />
      <Hero />
      <Services />
      <ImpactStats />
      <Gallery />
      <BudgetCalculator />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
