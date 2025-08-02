"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, Download, Copy, Check } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

// Removed contactMethods array to eliminate duplication

export function Contact() {
  const [isCopied, setIsCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("willblair47@gmail.com")
      setIsCopied(true)
      toast.success("Email copied to clipboard!", {
        description: "willblair47@gmail.com",
        duration: 3000,
      })
      
      // Reset the checkmark after 2 seconds
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch {
      toast.error("Failed to copy email", {
        description: "Please try again",
        duration: 3000,
      })
    }
  }

  return (
    <section id="contact" className="px-6 py-16 sm:px-8 md:px-12 bg-muted/50 rounded-b-xl">
      <div className="space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <h2 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Open to cybersecurity and logistics opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <Card className="border-foreground/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Ready to collaborate on security and logistics projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">willblair47@gmail.com</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyEmail}
                      className={`h-8 w-8 p-0 transition-colors ${
                        isCopied 
                          ? "text-green-600 hover:text-green-700" 
                          : "hover:bg-primary/10"
                      }`}
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg" 
                    onClick={() => {
                      copyEmail()
                      window.location.href = "mailto:willblair47@gmail.com"
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Compose Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="border-foreground/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader>
                <CardTitle>Connect & Download</CardTitle>
                <CardDescription>
                  Professional connections and resume download. Quick response time.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://www.linkedin.com/in/williamcblair/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://github.com/willblair" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                  
                  <Button variant="secondary" className="w-full" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}