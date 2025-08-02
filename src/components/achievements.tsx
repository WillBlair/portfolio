import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Book, GanttChart, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const achievements = [
  {
    icon: ShieldCheck,
    title: "Google Cybersecurity Certificate",
    description: "Comprehensive cybersecurity training covering incident response, threat detection, and security frameworks.",
    badge: "Certified",
    metric: "180+ Hours",
  },
  {
    icon: Award,
    title: "TryHackMe Diamond League",
    description: "Mastered penetration testing through realistic hacking exercises. Advanced through 50+ security challenges.",
    badge: "Top 1%",
    metric: "Diamond Rank",
  },
  {
    icon: GanttChart,
    title: "Published Chrome Extension",
    description: "Live product with active user base and perfect rating. Demonstrates ability to ship and maintain software.",
    badge: "Live Product",
    metric: "5★ Rating",
  },
  {
    icon: Book,
    title: "Athletic Achievements",
    description: "TaeKwonDo black belt and marathon finisher. Proven discipline in achieving demanding long-term goals.",
    badge: "Discipline",
    metric: "26.2 Miles",
  },
]

export function Achievements() {
  return (
    <section className="px-6 py-16 sm:px-8 md:px-12">
      <ScrollReveal>
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements & Certifications
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Technical accomplishments and certifications.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <Card className="border-foreground/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">{item.title}</CardTitle>
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
              {item.metric && (
                <div className="text-xl font-bold text-foreground">{item.metric}</div>
              )}
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
