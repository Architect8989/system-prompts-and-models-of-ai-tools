"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Cpu, UserX } from "lucide-react"

const metrics = [
  { 
    value: 120000, 
    suffix: "+", 
    label: "Lines of Code Stabilized", 
    description: "Production-grade codebase maintained autonomously",
    icon: TrendingUp,
    color: "text-foreground",
    gradient: "from-white/10 to-transparent"
  },
  { 
    value: 4, 
    suffix: "", 
    label: "Specialized AI Agents", 
    description: "Working in orchestrated harmony 24/7",
    icon: Cpu,
    color: "text-accent",
    gradient: "from-accent/10 to-transparent"
  },
  { 
    value: 0, 
    suffix: "", 
    label: "Human Interventions", 
    description: "Zero maintenance overhead post-deployment",
    icon: UserX,
    color: "text-green-400",
    gradient: "from-green-400/10 to-transparent"
  },
]

function AnimatedCounter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <div ref={ref} className={`font-mono text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl ${color}`}>
      {formatNumber(count)}{suffix}
    </div>
  )
}

export function OriginSection() {
  return (
    <section id="origin" className="relative py-32 md:py-48">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header - Centered */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/30 px-5 py-2 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The Origin Story</span>
          </div>
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Born from scale.
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Managing massive AI architectures breaks standard development cycles. While building a 120,000+ LOC proprietary internal system, human maintenance became the bottleneck. We engineered MACS to solve our own scaling limits and automate our engineering overhead.
          </p>
        </div>

        {/* Metrics grid - Premium cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-b from-card/50 to-card/20 p-10 backdrop-blur-sm transition-all duration-500 hover:border-border/60 hover:shadow-2xl hover:shadow-accent/5"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Corner glow */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border/30 bg-secondary/30 ${metric.color} transition-all duration-300 group-hover:scale-110 group-hover:border-current/30`}>
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Counter */}
                <div className="relative">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} color={metric.color} />
                  <div className="mt-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                    {metric.label}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground/70">
                    {metric.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
