import Image from "next/image"

export function Hero() {
  return (
    <section className="py-8 sm:py-10">
      <div className="flex items-start gap-6">
        {/* Profile Picture - left side */}
        <div className="shrink-0">
          <div className="neo-border neo-shadow-lg neo-sage p-2 dark:bg-transparent dark:border-transparent dark:shadow-none dark:p-2">
            <Image
              src="/fixedprofile.png"
              alt="William Blair"
              width={200}
              height={200}
              className="block"
              priority
              quality={85}
            />
          </div>
        </div>

        {/* Name and info - right side */}
        <div className="flex-1 space-y-3">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl tracking-tight mt-2 font-mono font-bold dark:font-semibold"
          >
            William Blair
          </h1>

          {/* Title badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="neo-border neo-shadow-sm neo-brown px-4 py-2 font-mono font-bold text-base dark:bg-[#252220] dark:border-transparent dark:shadow-none dark:text-muted-foreground">
              Supply Chain
            </span>
            <span className="font-mono text-xl font-bold">×</span>
            <span className="neo-border neo-shadow-sm neo-brown px-4 py-2 font-mono font-bold text-base dark:bg-[#252220] dark:border-transparent dark:shadow-none dark:text-muted-foreground">
              Cybersecurity
            </span>
          </div>

          {/* School info - Clear hierarchy */}
          <div className="space-y-1">
            <p className="text-foreground font-bold text-lg">
              Arizona State University
            </p>
            <p className="text-muted-foreground italic text-sm">
              Expected Graduation May 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}