import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const projects = [
  {
    title: "'Morning Brief' News Automation Engine", 
    description: "Automated news aggregation from 5 sources into 10-minute audio briefings. Saves 30 minutes daily.",
    techStack: ["N8n", "RSS APIs", "Google Cloud TTS API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    hasVideo: true,
    videoUrl: "https://youtu.be/ueVGAXJ1Khw",
  },
  {
    title: "Theme Switcher - Dark/Light Mode",
    description: "Chrome extension with 5-star rating and active user base. Canvas API for smart logo detection.",
    techStack: ["JavaScript", "HTML/CSS", "Canvas API", "Chrome Extension APIs"],
    liveUrl: "https://chromewebstore.google.com/detail/mjpdmbjkgcolagnnfljmjmifeainflio",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "ExamSim AI App",
    description: "AI study tool generating 20+ questions in 30 seconds. GPT-4o integration for document analysis.",
    techStack: ["OpenAI API (GPT-4o)"],
    liveUrl: "https://studio.pickaxe.co/STUDIOLOZ27FRJZ0WIGI1/NMB075NXOG",
    githubUrl: "#",
    featured: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="neo-section neo-accent-purple px-6 py-16 sm:px-8 md:px-12">
      <div className="space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl neo-text neo-border neo-shadow-lg neo-bg-purple-soft neo-rounded px-6 py-4 inline-block neo-diamond">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg neo-text">
              Real products with real users and measurable impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8">
          {/* First row: Morning Brief centered */}
          {projects.slice(0, 1).map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  <Card className={`${project.featured ? "neo-bg-green-soft neo-border neo-shadow-lg neo-text" : "neo-border neo-shadow neo-text"} hover:neo-shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col neo-rounded neo-dots`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                              {project.featured && (
                        <Badge variant="secondary" className="w-fit neo-bg-purple-soft neo-text neo-border neo-shadow">
                          Featured
                        </Badge>
                      )}
                      </div>
                      {/* Only show external link button if project doesn't have embedded video */}
                      {!project.hasVideo && (
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" className="neo-bg-blue-soft neo-border neo-shadow" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              <span className="sr-only">Live Demo</span>
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <CardDescription className="mb-4 leading-relaxed flex-1">
                      {project.description}
                    </CardDescription>
                    
                    {/* Video player for Morning Brief */}
                    {project.hasVideo && project.videoUrl && (
                      <div className="mb-4">
                        {project.videoUrl.includes('youtu') ? (
                          <iframe
                            className="w-full aspect-video rounded-lg neo-border neo-shadow"
                            src={project.videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                            title="Morning Brief Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video 
                            controls 
                            className="w-full rounded-lg neo-border neo-shadow"
                            preload="metadata"
                          >
                            <source src={project.videoUrl} type="video/quicktime" />
                            <source src={project.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className={`neo-border neo-shadow neo-text ${techIndex % 3 === 0 ? 'neo-bg-orange-soft' : techIndex % 3 === 1 ? 'neo-bg-purple-soft' : 'neo-bg-blue-soft'}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                              </Card>
                </div>
              </div>
            </ScrollReveal>
          ))}
          
          {/* Second row: Theme Switcher and ExamSim AI */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.slice(1, 3).map((project, index) => (
              <ScrollReveal key={index + 1} delay={(index + 1) * 200}>
                <Card className={`${project.featured ? "neo-bg-blue-soft neo-border neo-shadow-lg neo-text" : "neo-border neo-shadow neo-text"} hover:neo-shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col neo-rounded neo-dots`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl neo-text">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge variant="secondary" className="w-fit neo-bg-orange-soft neo-text neo-border neo-shadow">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="neo-bg-purple-soft neo-border neo-shadow" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Live Demo</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="mb-4 leading-relaxed flex-1">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className={`neo-border neo-shadow neo-text ${techIndex % 3 === 0 ? 'neo-bg-green-soft' : techIndex % 3 === 1 ? 'neo-bg-blue-soft' : 'neo-bg-orange-soft'}`}>
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
      </div>
    </section>
  )
}