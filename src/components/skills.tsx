import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExternalLink, Award } from "lucide-react"

const skillCategories = [
  {
    title: "Supply Chain",
    skills: ["Inventory Management", "Logistics Operations", "Process Improvement", "Ford Motor Co. Experience"],
    accent: "neo-navy",
  },
  {
    title: "Cybersecurity",
    skills: ["TryHackMe (157 rooms)", "Google Cybersecurity Cert", "NIST CSF", "Incident Response", "Penetration Testing", "Phishing Analysis"],
    accent: "neo-sage",
  },
  {
    title: "Automation & DevOps",
    skills: ["n8n (15+ workflows)", "Docker", "DigitalOcean", "REST APIs", "Self-Hosting"],
    accent: "neo-clay",
  },
]

export function Skills() {
  return (
    <section className="pt-2 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* --- LEFT COLUMN: ALL SKILLS --- */}
        <div className="space-y-6">
          <h3 className="font-mono font-bold text-lg flex items-center gap-2 mb-4">
            <span className="w-4 h-4 neo-brown"></span>
            Technical Skills
          </h3>
          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="neo-card neo-card-hover p-5 h-full">
                  <h3 className="font-mono font-bold mb-3 flex items-center gap-2 text-sm">
                    <span className={`w-3 h-3 ${category.accent}`}></span>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="neo-badge text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: ALL CERTIFICATIONS --- */}
        <div className="space-y-6">
          <h3 className="font-mono font-bold text-lg flex items-center gap-2 mb-4">
            <span className="w-4 h-4 neo-brown"></span>
            Certifications & Badges
          </h3>
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              <a
                href="https://www.credly.com/badges/41806b34-b911-469d-9ac0-930b0880d176/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-card neo-card-hover p-5 block relative group"
              >
                <div className="absolute top-0 right-0 p-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 shrink-0 bg-white border-2 border-black rounded-full p-1 shadow-sm overflow-hidden">
                    <img src="/compressedNew-Google-Logo.jpg" alt="Google" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Google Cybersecurity</h4>
                    <span className="text-xs font-mono bg-[#D94E36]/10 px-1.5 py-0.5 border border-[#D94E36]/20 text-[#D94E36] font-bold">PROFESSIONAL CERT</span>
                    <p className="text-muted-foreground text-xs mt-1 leading-tight">
                      Hands-on training in Python, Linux, SQL, SIEM tools, and IDS.
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://tryhackme.com/certificate/THM-FG8HCJQ8LM"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-card neo-card-hover p-5 block relative group"
              >
                <div className="absolute top-0 right-0 p-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 shrink-0 bg-[#111] border-2 border-white/20 rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                    <img src="/tryhackmelogo.jpg" alt="TryHackMe" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Jr Penetration Tester</h4>
                    <span className="text-xs font-mono bg-[#D94E36]/10 px-1.5 py-0.5 border border-[#D94E36]/20 text-[#D94E36] font-bold">TRYHACKME</span>
                    <p className="text-muted-foreground text-xs mt-1 leading-tight">
                      Practical pentesting skills: Web exploitation, privilege escalation, network security.
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://tryhackme.com/certificate/THM-7PRTHHFHTZ"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-card neo-card-hover p-5 block relative group"
              >
                <div className="absolute top-0 right-0 p-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 shrink-0 bg-[#111] border-2 border-white/20 rounded-full flex items-center justify-center shadow-sm overflow-hidden">
                    <img src="/tryhackmelogo.jpg" alt="TryHackMe" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Web App Pentesting</h4>
                    <span className="text-xs font-mono bg-[#D94E36]/10 px-1.5 py-0.5 border border-[#D94E36]/20 text-[#D94E36] font-bold">TRYHACKME</span>
                    <p className="text-muted-foreground text-xs mt-1 leading-tight">
                      OWASP Top 10, Burp Suite, XSS, SQLi, and modern web exploits.
                    </p>
                  </div>
                </div>
              </a>

              <div className="pt-4 border-t border-[var(--neo-border-color)]">
                <a
                  href="https://tryhackme.com/p/willblair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://tryhackme-badges.s3.amazonaws.com/willblair.png"
                    alt="TryHackMe Badge"
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </a>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}