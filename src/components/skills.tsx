import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "React Native", "Swift", "HTML/CSS"],
  },
  {
    title: "Cybersecurity & Frameworks",
    skills: ["Penetration Testing", "Incident Response", "NIST CSF", "ISO 27001", "Firewall Configuration", "SIEM Implementation"],
  },
  {
    title: "Automation & Integration",
    skills: ["N8n (15+ workflows)", "REST API Integration", "RSS Feed Processing", "HTTP Request Handling", "JSON Data Manipulation", "OpenAI API"],
  },
  {
    title: "Logistics & Supply Chain",
    skills: ["Supply Chain Modeling", "Inventory Management", "Operational Frameworks"],
  },
]

export function Skills() {
  return (
    <section className="px-6 py-16 sm:px-8 md:px-12 bg-muted/50">
      <div className="space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Technologies
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Development, security, and automation technologies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
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