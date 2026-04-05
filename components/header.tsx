"use client";

import { Github, Linkedin } from "lucide-react";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
            <span className="text-lg font-bold text-background">R</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Rhodawk AI
          </span>
        </a>

        {/* Social Links */}
        <div className="flex items-center gap-1">
          <a
            href="https://www.linkedin.com/company/rhodawk-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          </a>
          <a
            href="https://github.com/Rhodawk-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          </a>
        </div>
      </div>
    </header>
  );
}
