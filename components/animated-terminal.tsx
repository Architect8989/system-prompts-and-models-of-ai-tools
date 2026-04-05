"use client"

import { useEffect, useState } from "react"

const codeLines = [
  { text: "$ macs init --scan ./src --depth=full", type: "command" },
  { text: "", type: "spacer" },
  { text: "╭──────────────────────────────────────────╮", type: "box" },
  { text: "│  MACS v2.4.1 • Multi-Agent Stabilizer   │", type: "header" },
  { text: "╰──────────────────────────────────────────╯", type: "box" },
  { text: "", type: "spacer" },
  { text: "[INIT] Loading configuration...", type: "info" },
  { text: "[INIT] Establishing agent connections...", type: "info" },
  { text: "", type: "spacer" },
  { text: "[SCAN] Indexing 120,847 source files...", type: "scan" },
  { text: "[SCAN] Building dependency graph... done", type: "scan" },
  { text: "[SCAN] Mapping architecture patterns... done", type: "scan" },
  { text: "", type: "spacer" },
  { text: "[SCOUT] ◉ Analyzing code patterns...", type: "scout" },
  { text: "[SCOUT] ⚠ 23 vulnerability patterns detected", type: "scout-warning" },
  { text: "[SCOUT]   ├─ Race condition: auth.ts:142", type: "detail" },
  { text: "[SCOUT]   ├─ Memory leak: worker.ts:89", type: "detail" },
  { text: "[SCOUT]   └─ Type coercion: api.ts:256", type: "detail" },
  { text: "", type: "spacer" },
  { text: "[ARCHITECT] ◉ Designing safe patches...", type: "architect" },
  { text: "[ARCHITECT] Breaking change risk: 0.02%", type: "architect" },
  { text: "[ARCHITECT] ✓ Context preserved", type: "success" },
  { text: "", type: "spacer" },
  { text: "[ENGINEER] ◉ Generating PR #1247...", type: "engineer" },
  { text: "[ENGINEER] +47 -12 lines • 3 files", type: "engineer" },
  { text: "", type: "spacer" },
  { text: "[VALIDATOR] ◉ Executing test suite...", type: "validator" },
  { text: "[VALIDATOR] ████████████████████ 100%", type: "progress" },
  { text: "[VALIDATOR] 847/847 tests passed", type: "validator" },
  { text: "[VALIDATOR] ✓ All assertions verified", type: "success" },
  { text: "", type: "spacer" },
  { text: "╭──────────────────────────────────────────╮", type: "box-success" },
  { text: "│  ✓ STABILIZATION COMPLETE               │", type: "final-success" },
  { text: "│    Human interventions: 0               │", type: "final-detail" },
  { text: "╰──────────────────────────────────────────╯", type: "box-success" },
]

export function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [currentTyping, setCurrentTyping] = useState<number | null>(0)
  const [typedChars, setTypedChars] = useState(0)

  useEffect(() => {
    if (currentTyping === null || currentTyping >= codeLines.length) {
      const resetTimer = setTimeout(() => {
        setVisibleLines([])
        setCurrentTyping(0)
        setTypedChars(0)
      }, 5000)
      return () => clearTimeout(resetTimer)
    }

    const line = codeLines[currentTyping]
    
    if (line.type === "spacer") {
      setVisibleLines(prev => [...prev, currentTyping])
      setTimeout(() => setCurrentTyping(prev => (prev !== null ? prev + 1 : null)), 100)
      return
    }
    
    if (typedChars < line.text.length) {
      const speed = line.type === "command" ? 35 : line.type.includes("box") ? 5 : 12
      const typingTimer = setTimeout(() => {
        setTypedChars(prev => prev + 1)
      }, speed)
      return () => clearTimeout(typingTimer)
    } else {
      const delay = line.type.includes("success") || line.type.includes("final") ? 600 : 150
      const nextLineTimer = setTimeout(() => {
        setVisibleLines(prev => [...prev, currentTyping])
        setCurrentTyping(prev => (prev !== null ? prev + 1 : null))
        setTypedChars(0)
      }, delay)
      return () => clearTimeout(nextLineTimer)
    }
  }, [currentTyping, typedChars])

  const getLineStyle = (type: string) => {
    switch (type) {
      case "command": return "text-accent font-semibold"
      case "box": return "text-border/60"
      case "box-success": return "text-green-400/60"
      case "header": return "text-foreground font-semibold"
      case "info": return "text-muted-foreground/80"
      case "scan": return "text-muted-foreground"
      case "scout": return "text-cyan-400"
      case "scout-warning": return "text-yellow-400"
      case "detail": return "text-muted-foreground/60 pl-2"
      case "architect": return "text-blue-400"
      case "engineer": return "text-emerald-400"
      case "validator": return "text-violet-400"
      case "progress": return "text-violet-400"
      case "success": return "text-green-400"
      case "final-success": return "text-green-400 font-semibold"
      case "final-detail": return "text-green-400/70"
      default: return "text-muted-foreground"
    }
  }

  return (
    <div className="relative w-full max-w-3xl">
      {/* Multi-layered glow effect */}
      <div className="absolute -inset-8 rounded-3xl bg-accent/20 blur-3xl opacity-50" />
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-accent/10 via-cyan-500/10 to-violet-500/10 blur-2xl" />
      
      {/* Animated border */}
      <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/50 via-cyan-400/30 via-violet-400/30 to-accent/50 animate-border-flow" style={{ backgroundSize: '300% 100%' }} />
      </div>
      
      {/* Terminal window */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-4 border-b border-border/30 bg-[#111111] px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3.5 w-3.5 rounded-full bg-[#ff5f57] shadow-[0_0_10px_rgba(255,95,87,0.5)]" />
            <div className="h-3.5 w-3.5 rounded-full bg-[#febc2e] shadow-[0_0_10px_rgba(254,188,46,0.5)]" />
            <div className="h-3.5 w-3.5 rounded-full bg-[#28c840] shadow-[0_0_10px_rgba(40,200,64,0.5)]" />
          </div>
          <div className="flex-1 text-center">
            <span className="font-mono text-xs text-muted-foreground/50">macs@orchestrator ~ zsh</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[10px] text-green-400/70 uppercase tracking-wider">Live</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="h-[400px] overflow-hidden p-6 font-mono text-[13px] leading-relaxed">
          {/* Completed lines */}
          {visibleLines.map((lineIndex) => (
            <div 
              key={lineIndex} 
              className={`${getLineStyle(codeLines[lineIndex].type)} ${codeLines[lineIndex].type === 'spacer' ? 'h-3' : ''}`}
            >
              {codeLines[lineIndex].text}
            </div>
          ))}
          
          {/* Currently typing line */}
          {currentTyping !== null && currentTyping < codeLines.length && codeLines[currentTyping].type !== 'spacer' && (
            <div className={getLineStyle(codeLines[currentTyping].type)}>
              {codeLines[currentTyping].text.slice(0, typedChars)}
              <span className="inline-block w-2.5 h-5 ml-0.5 bg-accent animate-pulse rounded-sm" />
            </div>
          )}
        </div>

        {/* Scan line overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-x-0 h-12 bg-gradient-to-b from-accent/5 via-accent/10 to-transparent opacity-50"
            style={{ animation: 'scan-line 5s linear infinite' }}
          />
        </div>

        {/* Bottom reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
