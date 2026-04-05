"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Sparkles, Github } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "border-b border-border/30 bg-background/60 backdrop-blur-xl shadow-lg shadow-black/5" 
        : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/10">
                <span className="font-mono text-base font-bold text-background">M</span>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-foreground blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </div>
            <span className="font-mono text-xl font-bold tracking-tight text-foreground">MACS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {[
              { href: "#architecture", label: "Architecture" },
              { href: "#benchmarks", label: "Benchmarks" },
              { href: "#origin", label: "Origin" },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="relative px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover background */}
                <div className="absolute inset-0 rounded-lg bg-secondary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#apply"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-border/50 bg-secondary/30 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10"
            >
              <Sparkles className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
              <span>Apply for Design Partner</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-secondary/30 backdrop-blur-sm transition-all duration-300 hover:bg-secondary md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}>
          <div className="flex flex-col gap-2 border-t border-border/30 pt-4">
            {[
              { href: "#architecture", label: "Architecture" },
              { href: "#benchmarks", label: "Benchmarks" },
              { href: "#origin", label: "Origin" },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="rounded-xl px-4 py-3.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/50 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#apply"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Sparkles className="h-4 w-4" />
              Apply for Design Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
