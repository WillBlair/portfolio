import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Download, Linkedin, ChevronDown } from "lucide-react"
import { CopyEmailButton } from "./copy-email-button"
import { DecodeText } from "./decode-text"

export function Hero() {
  return (
    <section className="flex min-h-[50vh] items-center justify-center px-6 pt-20 pb-16 sm:px-8 sm:pt-24 sm:pb-20 md:px-12 md:pt-28 md:pb-24 rounded-t-xl">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-4">
          <Badge variant="outline" className="text-sm px-3 py-1">
            Available for opportunities
          </Badge>
          <DecodeText
            text="William Blair"
            className="block font-mono text-center text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none"
            animatingClassName="block font-mono text-center text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none"
          />
          <div className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            [Global Logistics] • [Cybersecurity]
          </div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            I secure supply chains and the digital systems that run them. Proven results in cybersecurity, automation, and logistics technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CopyEmailButton />
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://www.linkedin.com/in/williamcblair/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>

        <div className="pt-6">
                    <Image 
            src="/fixedprofile.png" 
            alt="A picture of William Blair" 
            width={192} 
            height={192} 
            className="mx-auto rounded-lg brightness-125 hue-rotate-[-15deg]" 
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

      </div>
    </section>
  )
}