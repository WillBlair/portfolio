"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Download, Copy, Check } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Contact() {
  const [isCopied, setIsCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("willblair47@gmail.com")
      setIsCopied(true)
      toast.success("Email copied!", { duration: 2000 })
      setTimeout(() => setIsCopied(false), 2000)
    } catch {
      toast.error("Failed to copy")
    }
  }

  return (
    <section className="pt-2 pb-6">
      <ScrollReveal delay={100}>
        <div className="neo-card p-5 sm:p-6 space-y-5">
          {/* Email */}
          <div className="flex items-center justify-between gap-3 p-4 neo-border bg-[var(--card)] text-[#1C1917] dark:bg-card dark:text-foreground">
            <div className="flex items-center gap-3 min-w-0">
              <Mail className="h-5 w-5 shrink-0" />
              <span className="font-mono text-sm truncate">willblair47@gmail.com</span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={copyEmail}
              className={`shrink-0 hover:bg-transparent hover:text-neutral-600 dark:hover:text-neutral-300 ${isCopied ? "text-green-600 dark:text-green-400" : ""}`}
            >
              {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>

          {/* Actions */}
          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              className="neo-button w-full font-mono font-bold h-12 bg-[#1C1917] text-[#F5F1E8] hover:bg-[#1C1917]/90 dark:bg-[#F5F1E8] dark:text-[#1C1917] border-3 border-[var(--neo-border-color)]"
              onClick={() => {
                copyEmail()
                window.location.href = "mailto:willblair47@gmail.com"
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>

            <Button
              variant="outline"
              className="neo-button w-full font-mono font-bold h-12 bg-[var(--card)] text-[#1C1917] hover:bg-[#C9B896] dark:bg-[#322E2A] dark:text-[#F5F1E8] dark:hover:bg-[#44403c]"
              asChild
            >
              <a href="/WilliamCBlair-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-3">
            <Button variant="outline" className="neo-button bg-[var(--card)] text-[#1C1917] hover:bg-[#C9B896] dark:bg-[#322E2A] dark:text-[#F5F1E8] dark:hover:bg-[#44403c]" asChild>
              <a href="https://www.linkedin.com/in/williamcblair/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="neo-button bg-[var(--card)] text-[#1C1917] hover:bg-[#C9B896] dark:bg-[#322E2A] dark:text-[#F5F1E8] dark:hover:bg-[#44403c]" asChild>
              <a href="https://github.com/willblair" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}