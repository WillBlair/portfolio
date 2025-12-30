import { ScrollReveal } from "@/components/scroll-reveal"
import { Image as ImageIcon } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section className="pt-2 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-1.5">
        {/* Main Bio - Wide landscape */}
        <ScrollReveal className="sm:col-span-7 sm:row-span-1">
          <div className="neo-card h-full overflow-hidden group transition-colors flex">
            <div className="w-2/5 shrink-0 relative overflow-hidden">
              <Image
                src="/beachsmilecloudyWillBlair(1).jpg"
                alt="Will at the beach"
                fill
                sizes="(max-width: 768px) 40vw, 300px"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4 flex items-center">
              <p className="leading-relaxed font-medium text-foreground text-lg">
                I&apos;m 21 years old, studying logistics and cybersecurity at ASU, and graduating in 2026.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Builder Interest - Vertical card */}
        <ScrollReveal delay={100} className="sm:col-span-5 sm:row-span-1">
          <div className="neo-card h-[300px] overflow-hidden group transition-colors flex flex-col">
            <div className="p-4 flex-1 flex items-center">
              <p className="leading-relaxed font-medium text-foreground text-lg">
                Outside of school, I love playing piano and chess, and I ran the 2025 Austin Marathon.
              </p>
            </div>
            <div className="w-full h-[130px] shrink-0 flex bg-muted/10">
              <div className="w-[70%] h-full relative overflow-hidden">
                <Image
                  src="/justthebib.jpg"
                  alt="Marathon bib"
                  fill
                  sizes="200px"
                  className="object-contain object-left"
                  loading="lazy"
                />
              </div>
              <div className="w-[30%] h-full relative overflow-hidden">
                <Image
                  src="/medalmarathon-removebg-preview.png"
                  alt="Marathon medal"
                  fill
                  sizes="100px"
                  className="object-contain -translate-x-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Hobbies - Wide landscape with marathon image */}
        <ScrollReveal delay={200} className="sm:col-span-8 sm:row-span-1">
          <div className="neo-card h-[300px] overflow-hidden group transition-colors flex flex-col">
            <div className="h-[130px] shrink-0 relative overflow-hidden">
              <Image
                src="/outwardbound.jpg"
                alt="Outward Bound"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex-1 flex items-center">
              <p className="leading-relaxed font-medium text-foreground text-lg">
                I really enjoy building things, especially web apps and automations.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Taekwondo - Vertical card */}
        <ScrollReveal delay={300} className="sm:col-span-4 sm:row-span-1">
          <div className="neo-card h-[300px] overflow-hidden group transition-colors flex flex-col">
            <div className="h-[130px] shrink-0 relative overflow-hidden">
              <Image
                src="/tkwbelt.png"
                alt="Taekwondo belt"
                fill
                sizes="250px"
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex-1 flex items-center">
              <p className="leading-relaxed font-medium text-foreground text-lg">
                I&apos;ve practiced Taekwondo since childhood and currently hold a black belt.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}