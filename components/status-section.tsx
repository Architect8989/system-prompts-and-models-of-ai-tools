"use client"

import { useEffect, useState, useRef } from "react"
import { CheckCircle, Clock, Users, Activity, Terminal, Beaker } from "lucide-react"

const statusItems = [
  { 
    label: "Unit Testing", 
    status: "in-progress", 
    details: "PyTest Integration Suite",
    progress: 78,
    icon: Beaker,
  },
  { 
    label: "SWE-bench Evaluation", 
    status: "in-progress", 
    details: "Industry Standard Benchmark",
    progress: 45,
    icon: Activity,
  },
  { 
    label: "Closed Pilot Program", 
    status: "accepting", 
    details: "Enterprise Repositories",
    progress: 100,
    icon: Users,
  },
]

function ProgressBar({ progress, status }: { progress: number; status: string }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(progress), 300)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [progress])

  const getColor = () => {
    if (status === "accepting") return "bg-gradient-to-r from-green-400 to-emerald-400"
    return "bg-gradient-to-r from-accent to-cyan-400"
  }

  return (
    <div ref={ref} className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
      <div 
        className={`h-full rounded-full transition-all duration-1000 ease-out ${getColor()}`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

function StatusIndicator({ status }: { status: string }) {
  if (status === "in-progress") {
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-yellow-400 opacity-40" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-yellow-400">In Progress</span>
      </div>
    )
  }

  if (status === "accepting") {
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-green-400 opacity-40" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-green-400">Open</span>
      </div>
    )
  }

  return null
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1500
          const steps = 40
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
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export function StatusSection() {
  return (
    <section id="benchmarks" className="relative py-32 md:py-48">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header - Centered */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/30 px-5 py-2 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Radical Transparency</span>
          </div>
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Validation & Benchmarking
          </h2>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Before public release, the core engine is undergoing rigorous testing and evaluation against industry standards to ensure absolute patch reliability.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column - Stats & Info */}
          <div className="space-y-8">
            {/* Key stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 847, label: "Test Cases", color: "text-accent" },
                { value: 99.2, suffix: "%", label: "Pass Rate", color: "text-green-400" },
                { value: 23, label: "Patches Validated", color: "text-violet-400" },
                { value: 0, label: "Regressions", color: "text-emerald-400" },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="rounded-2xl border border-border/30 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/60"
                >
                  <div className={`font-mono text-4xl font-bold ${stat.color}`}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Info card */}
            <div className="rounded-2xl border border-border/30 bg-card/30 p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">SWE-bench Evaluation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We&apos;re evaluating MACS against SWE-bench, the industry-standard benchmark for automated software engineering, to validate real-world performance on complex codebases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Terminal status */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-accent/10 via-cyan-500/5 to-violet-500/10 blur-3xl" />
            
            {/* Border gradient */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-accent/30 via-border/30 to-violet-500/30" />
            
            <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a]">
              {/* Terminal header */}
              <div className="flex items-center gap-3 border-b border-border/30 bg-[#111111] px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.5)]" />
                  <div className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.5)]" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]" />
                </div>
                <div className="flex-1 text-center flex items-center justify-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-muted-foreground/40" />
                  <span className="font-mono text-xs text-muted-foreground/60">status.macs.internal</span>
                </div>
                <div className="w-14" />
              </div>

              {/* Status items */}
              <div className="p-6 space-y-6">
                {statusItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 transition-all duration-300 group-hover:bg-secondary">
                            <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                          </div>
                          <div>
                            <div className="font-mono text-sm font-medium text-foreground">{item.label}</div>
                            <div className="font-mono text-xs text-muted-foreground/60">{item.details}</div>
                          </div>
                        </div>
                        <StatusIndicator status={item.status} />
                      </div>
                      <ProgressBar progress={item.progress} status={item.status} />
                    </div>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="border-t border-border/30 bg-[#111111] px-5 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground/60" />
                    <span className="font-mono text-xs text-muted-foreground/60">Last sync: 2 min ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-xs text-green-400">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
