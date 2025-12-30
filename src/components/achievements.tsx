import { Badge } from "@/components/ui/badge"
import { Award, Book, GanttChart, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const achievements = [
  {
    icon: ShieldCheck,
    title: "Google Cybersecurity Certificate",
    description: "Comprehensive training covering incident response, threat detection, and security frameworks.",
    badge: "180+ Hours",
    accentColor: "neo-navy",
  },
  {
    icon: Award,
    title: "TryHackMe Diamond League",
    description: "Mastered penetration testing through 95+ realistic security challenges.",
    badge: "Top 1%",
    accentColor: "neo-gold",
  },
  {
    icon: GanttChart,
    title: "Published Chrome Extension",
    description: "Live product with active user base and perfect 5-star rating.",
    badge: "Live Product",
    accentColor: "neo-rust",
  },
  {
    icon: Book,
    title: "Athletic Achievements",
    description: "TaeKwonDo black belt and marathon finisher. Proven discipline.",
    badge: "26.2 Miles",
    accentColor: "neo-sage",
  },
]

export function Achievements() {
  return (
    <section className="neo-section neo-section-sage">
      <div className="max-w-4xl mx-auto space-y-8">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="inline-block font-mono text-2xl sm:text-3xl font-black neo-border neo-shadow neo-sage px-6 py-3">
              Achievements
            </h2>
            <p className="text-muted-foreground text-lg">
              Certifications and accomplishments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="neo-card neo-card-hover p-5 h-full">
                <div className="flex items-start gap-4">
                  <div className={`${item.accentColor} neo-border p-3 shrink-0`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-mono font-bold text-sm leading-tight">{item.title}</h3>
                      <Badge variant="outline" className="neo-badge shrink-0">
                        {item.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="neo-divider-accent mt-12 max-w-xs mx-auto"></div>
    </section>
  )
}
