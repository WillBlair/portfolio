import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Download, Linkedin, ChevronDown } from "lucide-react"
import { CopyEmailButton } from "./copy-email-button"
import { DecodeText } from "./decode-text"

export function Hero() {
  return (
    <section className="neo-section neo-accent-blue neo-dots flex min-h-[50vh] items-center justify-center px-6 pt-20 pb-16 sm:px-8 sm:pt-24 sm:pb-16 md:px-12 md:pt-28 md:pb-16 rounded-t-xl">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-4">
          <Badge variant="outline" className="text-sm px-3 py-1 neo-bg-purple-soft neo-text neo-border neo-shadow">
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
            Proven results in cybersecurity, automation, and logistics technology.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Badge
              variant="outline"
              className="text-xs px-2 py-1 flex-col sm:flex-row whitespace-normal sm:whitespace-nowrap text-center"
            >
              <span className="block sm:inline">Pursuing Bachelor&apos;s in Global Logistics Management</span>
              <span className="hidden sm:inline mx-1">•</span>
              <span className="block sm:inline">ASU</span>
              <span className="hidden sm:inline mx-1">•</span>
              <span className="block sm:inline">June 2026</span>
            </Badge>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CopyEmailButton />
          <Button variant="outline" size="lg" className="w-full sm:w-auto neo-bg-green-soft neo-text neo-button-3d-lg" asChild>
            <a href="/WilliamBlair-Resume-1.pdf" download="WilliamBlair-Resume-1.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="neo-bg-purple-soft neo-button-3d">
            <a href="https://www.linkedin.com/in/williamcblair/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>

        <div className="pt-3">
          <div className="mx-auto neo-border neo-shadow neo-rounded inline-block neo-dots neo-bg-green-soft">
            <Image
              src="/fixedprofile.png"
              alt="A picture of William Blair"
              width={192}
              height={192}
              className="neo-rounded brightness-125 hue-rotate-[-15deg]"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>

      </div>
    </section>
  )
}