import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Code, Terminal, User } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="text-sm font-mono text-primary">~/portfolio</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none typing-effect">
                Hi, I'm <span className="formal-heading">Phanindhar Telukuntla</span>
              </h1>
              <div className="flex items-center space-x-2 my-4">
                <Code className="h-5 w-5 text-secondary" />
                <span className="text-sm font-mono text-secondary">const developer = &#123;</span>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl ml-8 font-mono">
                George Mason Computer Science grad. Code enthusiast. On a mission to craft smart, user-friendly tech and
                ready for my
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Code className="h-5 w-5 text-secondary" />
                <span className="text-sm font-mono text-secondary">&#125;;</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Link href="#projects">
                <Button size="lg" className="cyber-button">
                  View My Work
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:text-primary-foreground hover:border-primary"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 bg-muted/20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] tech-card glow">
              {/* Temporary placeholder with your initials until you can add your real photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <User className="h-16 w-16 text-primary mb-2" />
                <div className="text-2xl font-bold text-primary">PT</div>
                <div className="text-xs text-muted-foreground mt-2 max-w-[80%] text-center">
                  Add your photo after deployment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/50 hover:bg-background/80 border border-primary/20 text-primary"
            >
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
