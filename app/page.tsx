import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen grain-overlay">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
