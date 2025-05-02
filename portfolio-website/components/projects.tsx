import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Terminal, Code } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Project One",
    description: "A brief description of this project and what technologies were used.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "Project Two",
    description: "A brief description of this project and what technologies were used.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-secondary/20 to-accent/20",
  },
  {
    title: "Project Three",
    description: "A brief description of this project and what technologies were used.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Firebase", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-accent/20 to-primary/20",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-muted/5 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono text-primary">~/projects</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl formal-heading">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Check out some of my recent work and personal projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="tech-card overflow-hidden border-transparent bg-background/50">
              <div className={`aspect-video overflow-hidden bg-gradient-to-br ${project.color} relative`}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 mix-blend-overlay"
                />
                <div className="absolute top-2 right-2 bg-background/80 rounded-full p-1">
                  <Code className="h-4 w-4 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary font-mono">{project.title}</CardTitle>
                <CardDescription className="font-mono text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-mono text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={project.liveUrl}>
                  <Button variant="outline" size="sm" className="cyber-button">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.githubUrl}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-secondary text-secondary hover:text-primary-foreground hover:border-secondary"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
