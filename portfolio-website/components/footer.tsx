import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram, Terminal } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-muted py-6 md:py-0 relative z-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-mono">
            © {new Date().getFullYear()} <span className="formal-heading font-semibold">Phanindhar Telukuntla</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Github className="h-5 w-5 text-primary hover:text-primary/80" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Twitter className="h-5 w-5 text-primary hover:text-primary/80" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Linkedin className="h-5 w-5 text-primary hover:text-primary/80" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Instagram className="h-5 w-5 text-primary hover:text-primary/80" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
