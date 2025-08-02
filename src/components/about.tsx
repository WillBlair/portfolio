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
              I solve security problems in global logistics. I build systems that protect supply chains and the technology behind them.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal delay={100}>
            <Card className="border-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Educational Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pursuing a Bachelor&apos;s degree in Global Logistics Management from Arizona State University&apos;s W.P. Carey School of Business. Previously earned 60 college credits in high school through dual enrollment.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <Card className="border-foreground/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Core Interests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I focus on securing the technology that runs supply chains. I solve complex problems where cybersecurity meets logistics infrastructure and build systems that protect critical operations.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}