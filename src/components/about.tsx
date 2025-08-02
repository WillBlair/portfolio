import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export function About() {
  return (
    <section id="about" className="px-6 py-16 sm:px-8 md:px-12">
      <div className="space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Security-focused logistics professional building resilient supply chain systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal delay={100}>
            <Card className="border-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Educational Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bachelor&apos;s in Global Logistics Management, Arizona State University. 60 college credits completed in high school.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <Card className="border-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Core Interests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cybersecurity + logistics infrastructure. Building secure systems for critical supply chain operations.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}