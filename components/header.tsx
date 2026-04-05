import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-full border border-border/50 bg-background/80 backdrop-blur-xl px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-white to-muted-foreground flex items-center justify-center">
              <span className="text-sm font-bold text-background">R</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Rhodawk AI</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-1">
            <Link
              href="https://www.linkedin.com/company/rhodawk-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/Rhodawk-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label="View our GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
