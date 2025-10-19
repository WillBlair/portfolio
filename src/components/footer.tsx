import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm font-medium text-muted-foreground">
              Check out my new game!! ↓
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a 
              href="https://palmrally.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-border neo-shadow neo-rounded neo-bg-purple-soft overflow-hidden hover:neo-shadow-lg transition-all duration-300 hover:-translate-y-1 shrink-0 relative"
              style={{ width: '240px', height: '180px' }}
            >
              <iframe
                src="https://palmrally.com"
                className="pointer-events-none absolute top-0 left-0 origin-top-left"
                style={{
                  width: '960px',
                  height: '720px',
                  transform: 'scale(0.25)',
                  border: 'none'
                }}
                title="PalmRally Preview"
                scrolling="no"
              />
            </a>
            <div className="text-center md:text-left space-y-1">
              <a 
                href="https://palmrally.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base font-medium hover:underline block"
              >
                PalmRally
              </a>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <p className="text-sm text-muted-foreground">
                  Hand-tracking Pong via MediaPipe
                </p>
                <a
                  href="https://github.com/WillBlair/palmrally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View source on GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="w-full max-w-md" />
          
          <div className="text-sm text-muted-foreground">
            Last updated October 2025. Built with Next.js and Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  )
}