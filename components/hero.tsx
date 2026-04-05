import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
      
      {/* Floating glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl animate-glow-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-muted-foreground">Now accepting early access applications</span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
          The future of
          <br />
          <span className="bg-gradient-to-r from-white via-white to-muted-foreground bg-clip-text text-transparent">
            intelligent systems
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up-delay-2 mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
          Rhodawk AI is building next-generation AI infrastructure that transforms how enterprises 
          operate. Be among the first to experience the future.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up-delay-3 mt-12 flex flex-col items-center gap-4">
          <Link
            href="https://tally.so/r/obdvXO"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            <span>Apply for Early Access</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          
          <Link
            href="https://tally.so/r/obdvXO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground"
          >
            Fill out the early access form
          </Link>
        </div>
      </div>
    </section>
  );
}
