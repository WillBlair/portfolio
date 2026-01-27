import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Briefcase, Users, Shield, Terminal } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

const experiences = [
  {
    organization: "ASU Hacking Club",
    role: "Member",
    type: "Arizona State University",
    location: "Tempe, AZ",
    duration: "Jan 2026 – Present",
    summary: "Active member of the student-led cybersecurity and ethical hacking community.",
    highlights: [
      "Participating in weekly Capture The Flag (CTF) competitions",
      "Learning offensive and defensive security techniques",
      "Collaborating with peers on security research projects"
    ],
    skills: ["Ethical Hacking", "Network Security", "CTF"],
    accent: "neo-dry-green",
    icon: Terminal,
    logo: "/asuhackingclublogo.png",
  },
  {
    organization: "Ford Motor Co.",
    role: "Logistics Coordinator",
    type: "Full-time",
    location: "Fairfield, CA",
    duration: "Sep 2022 – Mar 2023",
    logo: "/compressedFord-Logo.png",
    summary: "Coordinated vehicle logistics for a high-volume dealership, managing inventory flow from delivery to customer handoff.",
    highlights: [
      "Tracked 200+ vehicles weekly using internal inventory systems",
      "Reduced misplaced vehicle incidents by streamlining lot organization",
      "Collaborated with sales and service teams to prioritize vehicle prep"
    ],
    skills: ["Vehicle Logistics", "Inventory Systems", "Cross-team Coordination"],
    accent: "neo-navy",
    icon: Briefcase,
  },
  {
    organization: "Supply Chain Management Association",
    role: "Active Member",
    type: "Arizona State University",
    location: "Tempe, AZ",
    duration: "2024 – Present",
    logo: "/compressedscmalogo.png",
    summary: "Participate in case competitions and workshops focused on real-world supply chain challenges.",
    highlights: [
      "Analyze logistics case studies and present solutions to 50+ peers",
      "Network with industry professionals at guest speaker events",
      "Collaborate on team projects involving demand forecasting and route optimization"
    ],
    skills: ["Case Competitions", "Supply Chain Strategy", "Team Collaboration"],
    accent: "neo-yellow",
    icon: Users,
  },
  {
    organization: "Incident Response Simulation",
    role: "Project Lead",
    type: "Cybersecurity Lab",
    location: "Tempe, AZ",
    duration: "Spring 2024",
    logo: "/compressedNew-Google-Logo.jpg",
    summary: "Designed and led a simulated DDoS incident response exercise using the NIST Cybersecurity Framework.",
    highlights: [
      "Built a realistic attack scenario with traffic analysis and escalation procedures",
      "Documented response playbook including containment and recovery steps",
      "Presented findings and lessons learned to peers"
    ],
    skills: ["NIST CSF", "Incident Response", "Threat Analysis"],
    accent: "neo-terracotta",
    icon: Shield,
  }
]

export function Experience() {
  return (
    <section className="pt-2 pb-6">
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const IconComponent = exp.icon
          return (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="neo-card neo-card-hover p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    {/* Logo or Icon */}
                    {exp.logo ? (
                      <div className="neo-border neo-shadow-sm bg-[var(--card)] shrink-0 w-16 h-16 relative overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`${exp.organization} logo`}
                          fill
                          sizes="64px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className={`${exp.accent} p-3 neo-border shrink-0`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-mono font-bold text-lg">{exp.organization}</h3>
                      <p className="text-foreground font-medium">{exp.role}</p>
                      <span className="text-muted-foreground text-sm">{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground ml-0 sm:ml-0">
                    <span className="flex items-center gap-2 font-medium">
                      <CalendarDays className="h-4 w-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-foreground/90 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-foreground/85 text-sm">
                      <span className={`${exp.accent} w-2 h-2 mt-1.5 shrink-0`}></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-foreground/20">
                  {exp.skills.map((skill, sIndex) => (
                    <Badge key={sIndex} variant="outline" className="neo-badge text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}