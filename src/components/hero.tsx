import Image from "next/image"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
        {/* Profile Picture - left side */}
        <div className="shrink-0">
          <div className="neo-border neo-shadow shrink-0 dark:border-transparent dark:shadow-none">
            <Image
              src="/squareprofilepicture.jpg"
              alt="William Blair"
              width={235}
              height={235}
              className="block w-[235px] h-[235px] object-cover"
              priority
              quality={85}
            />
          </div>
        </div>

        {/* Name and info - right side */}
        <div className="flex-1 space-y-3 flex flex-col items-center sm:items-start">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl tracking-tight mt-2 font-mono font-bold dark:font-semibold"
          >
            William Blair
          </h1>

          {/* Title badges */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
            <span className="neo-border neo-shadow-sm neo-brown px-4 py-2 font-mono font-bold text-base dark:bg-[#252220] dark:border-transparent dark:shadow-none dark:text-muted-foreground">
              Supply Chain
            </span>
            <span className="font-mono text-xl font-bold">×</span>
            <span className="neo-border neo-shadow-sm neo-brown px-4 py-2 font-mono font-bold text-base dark:bg-[#252220] dark:border-transparent dark:shadow-none dark:text-muted-foreground">
              Cybersecurity
            </span>
          </div>

          {/* School info - Clear hierarchy */}
          <div className="space-y-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <p className="text-foreground font-bold text-lg leading-none">
                Arizona State University
              </p>
            </div>
            <p className="text-muted-foreground italic text-sm">
              Expected Graduation May 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}