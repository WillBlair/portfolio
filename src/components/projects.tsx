import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const projects = [
  {
    title: "Theme Switcher - Dark/Light Mode",
    description: "Built and shipped a Chrome extension with 5-star rating and hundreds of users. Active on 100+ websites daily using Canvas API for smart logo detection.",
    techStack: ["JavaScript", "HTML/CSS", "Canvas API", "Chrome Extension APIs"],
    liveUrl: "https://chromewebstore.google.com/detail/mjpdmbjkgcolagnnfljmjmifeainflio",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "ExamSim AI App",
    description: "Created AI study tool that generates 20+ custom questions in under 30 seconds from course materials. Integrated GPT-4o to automatically analyze documents.",
    techStack: ["React Native", "OpenAI API (GPT-4o)", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "'Morning Brief' News Automation Engine", 
    description: "Automated daily business intelligence by aggregating 5 major news sources into 10-minute audio briefings. Eliminates 2+ hours of manual reading daily.",
    techStack: ["N8n", "RSS APIs", "Google Cloud TTS API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-16 sm:px-8 md:px-12">
      <div className="space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Real products with real users. From published software to enterprise-level automation systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className={`${project.featured ? "border-primary/50" : "border-foreground/20"} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="w-fit">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
                          </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}