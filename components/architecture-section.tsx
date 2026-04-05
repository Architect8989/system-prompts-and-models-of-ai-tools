"use client"

import { Search, Compass, Code2, ShieldCheck, ArrowRight, Zap } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const agents = [
  {
    number: "01",
    name: "The Scout",
    description: "Continuous vulnerability and logic flaw detection. Scans your entire codebase in real-time, identifying potential issues before they become problems.",
    icon: Search,
    color: "cyan",
    capabilities: ["Vulnerability Detection", "Pattern Analysis", "Dependency Audit"]
  },
  {
    number: "02",
    name: "The Architect",
    description: "Context-aware patch design that prevents breaking changes. Understands your codebase architecture and designs solutions that preserve intent.",
    icon: Compass,
    color: "blue",
    capabilities: ["Context Mapping", "Impact Analysis", "Safe Patching"]
  },
  {
    number: "03",
    name: "The Engineer",
    description: "Automated PR generation with clean, production-ready code. Writes human-readable patches that follow your team's coding standards.",
    icon: Code2,
    color: "emerald",
    capabilities: ["Code Generation", "PR Creation", "Style Matching"]
  },
  {
    number: "04",
    name: "The Validator",
    description: "Autonomous testing and execution verification. Runs comprehensive test suites and validates every change before deployment.",
    icon: ShieldCheck,
    color: "violet",
    capabilities: ["Unit Testing", "Integration Tests", "Deployment Verification"]
  },
]

const colorClasses: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  cyan: { text: "text-cyan-400", bg: "bg-cyan-400", border: "border-cyan-400/30", glow: "shadow-cyan-400/20" },
  blue: { text: "text-blue-400", bg: "bg-blue-400", border: "border-blue-400/30", glow: "shadow-blue-400/20" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-400", border: "border-emerald-400/30", glow: "shadow-emerald-400/20" },
  violet: { text: "text-violet-400", bg: "bg-violet-400", border: "border-violet-400/30", glow: "shadow-violet-400/20" },
}

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  const Icon = agent.icon
  const colors = colorClasses[agent.color]

  return (
    <div 
      ref={ref}
      className={`group relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-b from-card/60 to-card/20 backdrop-blur-sm transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 ${colors.glow} shadow-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px ${colors.bg} opacity-0 transition-all duration-500 group-hover:opacity-100`} />
      
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-current/5 to-transparent ${colors.text} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      <div className="relative p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${colors.border} bg-secondary/30 ${colors.text} transition-all duration-500 group-hover:scale-110 group-hover:${colors.bg}/10`}>
            <Icon className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <span className="font-mono text-sm text-muted-foreground/40">{agent.number}</span>
        </div>

        {/* Content */}
        <h3 className={`font-mono text-2xl font-semibold mb-4 ${colors.text}`}>
          {agent.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {agent.description}
        </p>

        {/* Capabilities */}
        <div className="flex flex-wrap gap-2">
          {agent.capabilities.map((cap, i) => (
            <span 
              key={i}
              className={`inline-flex items-center gap-1.5 rounded-full border border-border/30 bg-secondary/20 px-3 py-1 text-xs font-mono text-muted-foreground transition-all duration-300 group-hover:border-current/20 group-hover:${colors.text}`}
            >
              <Zap className="h-3 w-3" />
              {cap}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header - Centered */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary/30 px-5 py-2 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The Engine</span>
          </div>
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Multi-Agent Orchestration
          </h2>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Four specialized AI agents working in concert to continuously stabilize and improve your codebase.
          </p>
        </div>

        {/* Agents grid - 2x2 */}
        <div className="grid gap-6 md:grid-cols-2">
          {agents.map((agent, index) => (
            <AgentCard key={agent.number} agent={agent} index={index} />
          ))}
        </div>

        {/* Flow visualization */}
        <div className="mt-20 flex justify-center">
          <div className="relative inline-flex items-center gap-4 rounded-2xl border border-border/30 bg-card/30 px-8 py-5 backdrop-blur-sm">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 via-emerald-400/20 to-violet-400/20 animate-gradient-shift" style={{ backgroundSize: '300% 100%' }} />
            </div>
            
            <div className="relative flex items-center gap-3">
              {[
                { name: "Scout", color: "bg-cyan-400" },
                { name: "Architect", color: "bg-blue-400" },
                { name: "Engineer", color: "bg-emerald-400" },
                { name: "Validator", color: "bg-violet-400" },
              ].map((step, i) => (
                <div key={step.name} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${step.color} shadow-lg`} style={{ boxShadow: `0 0 12px currentColor` }} />
                    <span className="font-mono text-sm text-foreground">{step.name}</span>
                  </div>
                  {i < 3 && <ArrowRight className="h-4 w-4 text-muted-foreground/40" />}
                </div>
              ))}
            </div>
            
            {/* Loop indicator */}
            <div className="h-6 w-px bg-border/50 mx-2" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12a9 9 0 1 0 9-9" strokeLinecap="round" />
                <path d="M3 3v6h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-wider">Loop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
