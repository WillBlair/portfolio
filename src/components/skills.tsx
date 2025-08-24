import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const skillCategories = [
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
    <section className="neo-section neo-accent-orange px-6 py-16 sm:px-8 md:px-12">
      <div className="space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl neo-text neo-border neo-shadow-lg neo-bg-blue-soft neo-rounded px-6 py-4 inline-block neo-circle">
              Skills & Technologies
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg neo-text">
              Development, security, and automation technologies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {skillCategories.map((category, index) => {
            const colorSchemes = [
              'neo-bg-blue-soft neo-border neo-shadow-lg neo-dots',
              'neo-bg-green-soft neo-border neo-shadow-lg neo-dots',
              'neo-bg-purple-soft neo-border neo-shadow-lg neo-dots',
              'neo-bg-orange-soft neo-border neo-shadow-lg neo-dots'
            ];
            const badgeColors = [
              'neo-bg-green-soft neo-text neo-border neo-shadow',
              'neo-bg-blue-soft neo-text neo-border neo-shadow',
              'neo-bg-orange-soft neo-text neo-border neo-shadow',
              'neo-bg-purple-soft neo-text neo-border neo-shadow'
            ];

            return (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className={`${colorSchemes[index]} neo-text hover:neo-shadow-lg transition-all duration-300 hover:-translate-y-1 neo-rounded`}>
                <CardHeader>
                  <CardTitle className="text-xl neo-text">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className={`${badgeColors[index % badgeColors.length]} neo-text neo-border neo-shadow`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                              </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  )
}