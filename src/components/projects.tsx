"use client"

import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Project {
  title: string
  tagline: string
  liveUrl: string
  githubUrl?: string
  techStack: string[]
  hasPreview: boolean
  videoUrl?: string
  previewImage?: string
  accent: string
}

const projects: Project[] = [
  {
    title: "ExamSim",
    tagline: "Full-stack study platform with Stripe payments, Google auth, Neon Postgres, and Gemini API for AI-generated practice exams",
    liveUrl: "https://www.examsim.io",
    githubUrl: "https://github.com/WillBlair/examsim",
    techStack: ["Next.js", "Gemini API", "Neon DB", "Stripe"],
    hasPreview: false,
    previewImage: "/examsim-preview.png",
    accent: "neo-purple",
  },
  {
    title: "PalmRally",
    tagline: "Hand-tracking Pong via MediaPipe",
    liveUrl: "https://palmrally.com",
    githubUrl: "https://github.com/WillBlair/palmrally",
    techStack: ["MediaPipe", "JavaScript", "Canvas API"],
    hasPreview: true,
    accent: "neo-olive",
  },
  {
    title: "n8n Automation Server",
    tagline: "Self-hosted workflow automation running 24/7 on DigitalOcean with Docker",
    liveUrl: "https://n8n.williamcblair.com",
    techStack: ["n8n", "Docker", "DigitalOcean", "Nginx"],
    hasPreview: false,
    previewImage: "/digitaloceanblurred.jpg",
    accent: "neo-clay",
  },
  {
    title: "Morning Brief",
    tagline: "Automated news aggregation into audio briefings",
    liveUrl: "#",
    techStack: ["N8n", "RSS APIs", "Google Cloud TTS"],
    hasPreview: false,
    videoUrl: "https://youtu.be/ueVGAXJ1Khw",
    accent: "neo-green",
  },
  {
    title: "Theme Switcher",
    tagline: "Chrome extension with smart logo detection • 5★ rating",
    liveUrl: "https://chromewebstore.google.com/detail/mjpdmbjkgcolagnnfljmjmifeainflio",
    techStack: ["JavaScript", "Canvas API", "Chrome APIs"],
    hasPreview: false,
    previewImage: "/themeswitcherimage.png",
    accent: "neo-yellow",
  },
]

function ProjectPreview({ project }: { project: Project }) {
  // Static image preview (fast loading)
  if (project.previewImage) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="neo-border neo-shadow overflow-hidden hover:-translate-y-1 transition-transform shrink-0 relative block bg-muted"
        style={{ width: '180px', height: '135px' }}
      >
        <img
          src={project.previewImage}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover object-top"
        />
      </a>
    )
  }

  // Live iframe preview
  if (project.hasPreview && project.liveUrl !== "#") {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="neo-border neo-shadow overflow-hidden hover:-translate-y-1 transition-transform shrink-0 relative block bg-muted"
        style={{ width: '180px', height: '135px' }}
      >
        <iframe
          src={project.liveUrl}
          className="pointer-events-none absolute top-0 left-0 origin-top-left"
          style={{
            width: '720px',
            height: '540px',
            transform: 'scale(0.25)',
            border: 'none'
          }}
          title={`${project.title} Preview`}
          scrolling="no"
        />
      </a>
    )
  }

  if (project.videoUrl) {
    // Extract video ID from youtu.be or youtube.com URL
    const videoId = project.videoUrl.includes('youtu.be/')
      ? project.videoUrl.split('youtu.be/')[1]
      : project.videoUrl.split('v=')[1]?.split('&')[0]
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

    return (
      <a
        href={project.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="neo-border neo-shadow overflow-hidden shrink-0 hover:-translate-y-1 transition-transform relative block"
        style={{ width: '180px', height: '135px' }}
      >
        <img
          src={thumbnailUrl}
          alt={`${project.title} Demo`}
          className="w-full h-full object-cover"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 rounded-lg px-3 py-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`neo-border neo-shadow ${project.accent} overflow-hidden hover:-translate-y-1 transition-transform shrink-0 flex items-center justify-center`}
      style={{ width: '180px', height: '135px' }}
    >
      <div className="text-center p-4">
        <div className="text-lg font-mono font-black mb-1">{project.title}</div>
        <ExternalLink className="h-4 w-4 mx-auto" />
      </div>
    </a>
  )
}

export function Projects() {
  return (
    <section className="pt-2 pb-6">
      <div className="space-y-5">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="neo-card neo-card-hover p-4 sm:p-5 relative group">
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-0"
                  aria-label={`View ${project.title}`}
                />
              )}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                <div className="relative z-10">
                  <ProjectPreview project={project} />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2 pointer-events-none">
                  <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                    <span className={`w-3 h-3 ${project.accent}`}></span>
                    <a
                      href={project.liveUrl !== "#" ? project.liveUrl : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-mono font-bold hover:underline relative z-10 pointer-events-auto"
                    >
                      {project.title}
                    </a>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground relative z-10 pointer-events-auto">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground relative z-10 pointer-events-auto">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-foreground/90 text-sm leading-relaxed">{project.tagline}</p>

                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="neo-badge text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}