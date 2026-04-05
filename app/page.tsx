import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { OriginSection } from "@/components/origin-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { StatusSection } from "@/components/status-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OriginSection />
      <ArchitectureSection />
      <StatusSection />
      <Footer />
    </main>
  )
}
