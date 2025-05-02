import { Card, CardContent } from "@/components/ui/card"
import { Terminal, User, Lightbulb, ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-muted/5 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono text-primary">~/about</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl formal-heading">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Learn more about my background, experience, and what drives me.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card className="tech-card border-primary/20 bg-background/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-primary">My Story</h3>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start">
                  <span className="text-primary mr-2 mt-1">$</span>
                  <div>
                    <span className="text-secondary">whoami</span>
                    <p className="mt-1 text-muted-foreground">
                      Hi, I'm <span className="text-foreground">Phanindhar</span> a Computer Science graduate with a
                      curious mind and a love for solving problems through technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-primary mr-2 mt-1">$</span>
                  <div>
                    <span className="text-secondary">cat journey.txt</span>
                    <p className="mt-1 text-muted-foreground">
                      My journey into computer science started with simple questions:{" "}
                      <span className="text-accent">"How does this work?"</span> and{" "}
                      <span className="text-accent">"Can I build that?"</span> Those questions turned into projects,
                      late-night debugging, and a growing passion for software development. I've always enjoyed learning
                      new things, exploring new tools, and challenging myself to think differently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-primary mr-2 mt-1">$</span>
                  <div>
                    <span className="text-secondary">echo $MISSION</span>
                    <p className="mt-1 text-muted-foreground">
                      Now, I'm excited to turn that passion into impact by building software that's not just functional,
                      but meaningful.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="tech-card border-secondary/20 bg-background/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-5 w-5 text-secondary" />
                <h3 className="text-2xl font-bold text-secondary">My Approach</h3>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">$</span>
                  <div>
                    <span className="text-primary">cat philosophy.md</span>
                    <div className="mt-2 p-3 bg-muted/20 rounded border border-muted text-muted-foreground">
                      <p className="mb-2">
                        <span className="text-accent"># Philosophy</span>
                      </p>
                      <p>
                        I believe great software comes from a mix of <span className="text-primary">curiosity</span>,{" "}
                        <span className="text-secondary">creativity</span>, and{" "}
                        <span className="text-accent">continuous learning</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">$</span>
                  <div>
                    <span className="text-primary">./approach.sh</span>
                    <div className="mt-2 space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        <p>Writing clean, maintainable code</p>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        <p>Understanding the "why" behind every task</p>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        <p>Learning something new every step of the way</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
