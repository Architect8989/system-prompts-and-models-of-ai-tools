"use client"

import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="apply" className="relative">
      {/* CTA Section */}
      <div className="relative overflow-hidden border-t border-border/30 py-32 md:py-48">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[150px]" />
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/5 px-5 py-2 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
            </span>
            <span className="font-mono text-sm text-green-400">Limited spots available</span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Join the Design
            <br />
            <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
              Partner Program
            </span>
          </h2>
          
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            We&apos;re selectively onboarding enterprise repositories to validate MACS in production environments. Get early access and shape the future of autonomous code maintenance.
          </p>

          {/* CTA Button */}
          <Link
            href="mailto:founder@rhodawkai.com?subject=MACS%20Design%20Partner%20Application"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-foreground px-10 py-5 text-lg font-semibold text-background transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_60px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Apply for Early Access</span>
            <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-cyan-400/30 to-accent/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>No commitment required</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Enterprise-ready</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>SOC 2 compliant</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30 bg-card/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
                <span className="font-mono text-base font-bold text-background">M</span>
              </div>
              <div>
                <span className="font-mono text-lg font-bold tracking-tight text-foreground">MACS</span>
                <p className="text-xs text-muted-foreground">Multi-Agent Code Stabilizer</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a 
                href="mailto:founder@rhodawkai.com" 
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span className="font-mono">founder@rhodawkai.com</span>
              </a>
              <a 
                href="mailto:manager@rhodawkai.com" 
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span className="font-mono">manager@rhodawkai.com</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              <span className="font-mono">&copy; 2026 MACS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
