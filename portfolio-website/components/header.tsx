"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          <Link href="/" className="font-bold text-xl formal-heading font-mono">
            Phanindhar Telukuntla
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-mono transition-colors hover:text-primary relative group`}
            >
              <span className="text-primary mr-1">&gt;</span> {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <ModeToggle />
          <Button variant="ghost" className="ml-2 h-10 w-10 px-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-primary" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-1 bg-background/95">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-mono hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary mr-1">&gt;</span> {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
