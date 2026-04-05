"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-24 text-center">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-subtle absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Now accepting early access applications
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 mb-6 text-balance font-sans text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          The Future of
          <br />
          <span className="text-muted-foreground">Intelligent Systems</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-200 mx-auto mb-12 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          Building next-generation AI infrastructure. Join us in shaping the
          future of how humans and machines work together.
        </p>

        {/* CTA Section */}
        <div className="animate-fade-in-up delay-300 flex flex-col items-center gap-6">
          {/* Primary CTA Button */}
          <a
            href="https://tally.so/r/obdvXO"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-[0.98]"
          >
            <span className="relative z-10">Apply for Early Access</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-muted-foreground/90 to-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          {/* Form link text */}
          <a
            href="https://tally.so/r/obdvXO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Fill out the early access form
          </a>
        </div>
      </div>
    </section>
  );
}
