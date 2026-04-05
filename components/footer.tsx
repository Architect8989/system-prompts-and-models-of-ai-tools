"use client";

import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <span className="text-base font-bold text-background">R</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-foreground">
                Rhodawk AI
              </span>
            </a>
            <span className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Rhodawk AI. All rights reserved.
            </span>
          </div>

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
      </div>
    </footer>
  );
}
