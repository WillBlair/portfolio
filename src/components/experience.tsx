import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const experiences = [
  {
    title: "Sales Porter & Logistics Coordinator",
    company: "Ford Motor Co.",
    location: "Fairfield, CA",
    duration: "Sep 2022 - Mar 2023",
    description: "Managed vehicle inventory and logistics operations for high-volume dealership. Maintained detailed inventory tracking systems and collaborated with service teams to optimize vehicle processing workflows.",
    achievements: [
      "Maintained detailed inventory tracking systems",
      "Collaborated with service teams to optimize vehicle processing workflows"
    ],
    technologies: ["Inventory Management", "Logistics Coordination", "Process Improvement"],
    featured: true
  },
  {
    title: "Member, Supply Chain Management Association",
    company: "Arizona State University",
    location: "Tempe, AZ",
    duration: "2023 - Present",
    description: "Lead case study analysis and present solutions to 50+ peers in real-world supply chain challenges. Bridge academic theory with practical logistics applications.",
    achievements: [
      "Presented logistics optimization solutions to industry professionals and academic peers.",
      "Collaborated on case study projects analyzing complex supply chain scenarios.",
    ],
    technologies: ["Case Study Analysis", "Logistics Modeling", "Team Collaboration", "Presentation Skills"]
  },
  {
    title: "Simulated Incident Response Lead",
    company: "Personal Cybersecurity Project",
    location: "Tempe, AZ",
    duration: "Spring 2024",
    description: "Led incident response simulation for multimedia company under 2-hour ICMP flood DDoS attack (>2,000 packets/sec). Applied NIST Cybersecurity Framework to identify, contain, and recover from network disruption.",
    achievements: [
      "Led comprehensive incident response simulation using NIST Cybersecurity Framework",
      "Developed incident documentation and post-breach analysis protocols",
      "Implemented risk assessment procedures"
    ],
    technologies: ["Incident Response", "DDoS Mitigation", "Firewall Configuration", "SIEM"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="neo-section neo-accent-green px-6 py-16 sm:px-8 md:px-12">
      <div className="space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl neo-text neo-border neo-shadow neo-bg-green-soft neo-rounded px-6 py-4 inline-block neo-square">
              Applied Experience & Leadership
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Practical application and technical leadership.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 300}>
              <Card className={`neo-dots border-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 md:ml-12 relative neo-border neo-rounded ${exp.featured ? 'neo-bg-blue-soft neo-shadow-lg' : ''}`}>
                {/* Timeline dot */}
                <div className={`absolute -left-14 top-6 w-4 h-4 border-2 border-background hidden md:block neo-shadow transform rotate-45 ${exp.featured ? 'bg-blue-500' : 'bg-primary'}`}></div>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      {exp.featured && (
                        <Badge variant="secondary" className="neo-bg-orange-soft neo-text neo-border neo-shadow">
                          Featured Experience
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-lg font-medium text-foreground">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:text-right gap-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className={`${techIndex % 2 === 0 ? 'neo-bg-blue-soft' : 'neo-bg-orange-soft'} neo-border neo-shadow neo-text`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
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