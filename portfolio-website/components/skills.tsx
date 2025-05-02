import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Lightbulb, Database, Terminal, Server, Globe, Cpu, Layers } from "lucide-react"

const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive and performant web applications with modern frameworks",
    icon: Globe,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Backend Development",
    description: "Creating robust server-side applications and APIs",
    icon: Server,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    name: "Database Design",
    description: "Designing and optimizing database structures for performance",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    name: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "System Architecture",
    description: "Designing scalable and maintainable system architectures",
    icon: Layers,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    name: "Problem Solving",
    description: "Finding innovative solutions to complex technical challenges",
    icon: Lightbulb,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/5 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono text-primary">~/skills</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl formal-heading">Tech Stack</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Here are some of the key technologies and skills I bring to the table.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.name} className="tech-card overflow-hidden border-transparent bg-background/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`mb-4 rounded-full ${skill.bgColor} p-3`}>
                  <skill.icon className={`h-6 w-6 ${skill.color}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${skill.color}`}>{skill.name}</h3>
                <p className="text-muted-foreground font-mono text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-5xl">
          <Card className="tech-card border-primary/20 bg-background/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Cpu className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Technologies</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Python",
                  "Java",
                  "SQL",
                  "MongoDB",
                  "AWS",
                  "Docker",
                  "Git",
                  "REST APIs",
                ].map((tech, index) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Code className="h-4 w-4 text-primary" />
                    <span className="text-sm font-mono">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
