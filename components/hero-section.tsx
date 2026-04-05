"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatedTerminal } from "./animated-terminal"
import { ArrowRight, FileCode2, Sparkles, Shield, Zap } from "lucide-react"
import { useEffect, useState } from "react"

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <div 
      className={`absolute rounded-full blur-3xl animate-pulse-glow ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 0%, transparent 70%)',
        }}
      />
      {/* Perspective grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(20)].map((_, i) => (
          <line 
            key={i} 
            x1={600 + (i - 10) * 60} 
            y1="0" 
            x2={600 + (i - 10) * 200} 
            y2="800" 
            stroke="url(#lineGrad)" 
            strokeWidth="1"
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <line 
            key={`h-${i}`} 
            x1="0" 
            y1={i * 100} 
            x2="1200" 
            y2={i * 100} 
            stroke="#0EA5E9" 
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Animated orbs */}
      <FloatingOrb className="h-[600px] w-[600px] bg-accent/20 -top-32 -left-32" delay={0} />
      <FloatingOrb className="h-[400px] w-[400px] bg-cyan-500/15 top-20 -right-20" delay={1.5} />
      <FloatingOrb className="h-[500px] w-[500px] bg-accent/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={0.5} />
      
      <GridPattern />

      {/* Scan line */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
            style={{ animation: 'scan-line 8s linear infinite' }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 lg:pt-48">
        {/* Badge - Centered */}
        <div className="flex justify-center mb-8">
          <div className="group inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-accent/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="font-mono text-sm text-accent tracking-wide">Design Partner Program Open</span>
            <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Hero text - Centered */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Engineering the</span>
            <span 
              className="block mt-2 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-text-shimmer text-glow-white"
              style={{ backgroundSize: '200% auto' }}
            >
              Self-Healing Codebase
            </span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
            A proprietary multi-agent orchestration framework that autonomously maps, identifies, and resolves technical debt at scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-10 sm:flex-row">
            <Link
              href="#apply"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-foreground px-8 py-4 text-base font-semibold text-background transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10">Apply for Design Partner Program</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-cyan-400/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="#architecture"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-border/50 bg-secondary/20 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10"
            >
              <FileCode2 className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
              <span>Architecture Docs</span>
            </Link>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-12">
          {[
            { icon: Shield, label: "Enterprise-Grade Security" },
            { icon: Zap, label: "Zero Human Intervention" },
            { icon: Sparkles, label: "AI-Powered Patching" },
          ].map((feature, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 rounded-full border border-border/30 bg-secondary/20 px-4 py-2 backdrop-blur-sm"
            >
              <feature.icon className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Terminal - Full width showcase */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-4xl">
            {/* Terminal glow */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-accent/10 via-cyan-500/5 to-accent/10 blur-3xl" />
            <div className="animate-float">
              <AnimatedTerminal />
            </div>
          </div>
        </div>

        {/* Trust metrics */}
        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-4xl mx-auto">
          {[
            { value: "120K+", label: "Lines of Code Stabilized" },
            { value: "4", label: "Specialized AI Agents" },
            { value: "0", label: "Human Interventions" },
            { value: "99.2%", label: "Patch Success Rate" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
