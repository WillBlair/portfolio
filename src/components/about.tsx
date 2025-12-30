import { ScrollReveal } from "@/components/scroll-reveal"
import { Image as ImageIcon } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section className="pt-2 pb-6">
      <div className="grid grid-cols-12 gap-3">
        {/* Main Bio - Wide landscape */}
        <ScrollReveal className="col-span-7 row-span-1">
          <div className="neo-card h-full overflow-hidden group transition-colors flex">
            <div className="w-2/5 shrink-0 relative overflow-hidden">
              <Image
                src="/beachsmilecloudyWillBlair(1).jpg"
                alt="Will at the beach"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex items-center">
              <p className="leading-relaxed font-medium text-foreground">
                I&apos;m 21 years old, studying logistics and cybersecurity at ASU, and graduating in 2026.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Builder Interest - Vertical card */}
        <ScrollReveal delay={100} className="col-span-5 row-span-1">
          <div className="neo-card h-[300px] overflow-hidden group transition-colors flex flex-col">
            <div className="p-4 flex-1 flex items-center">
              <p className="leading-relaxed font-medium text-foreground">
                Outside of school, I love playing piano and chess, and I ran the 2025 Austin Marathon.
              </p>
            </div>
            <div className="w-full h-[130px] shrink-0 flex bg-muted/10">
              <div className="w-[70%] h-full relative overflow-hidden">
                <Image
                  src="/justthebib.jpg"
                  alt="Marathon bib"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="w-[30%] h-full relative overflow-hidden">
                <Image
                  src="/medalmarathon-removebg-preview.png"
                  alt="Marathon medal"
                  fill
                  className="object-contain -translate-x-2"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Hobbies - Wide landscape with marathon image */}
        <ScrollReveal delay={200} className="col-span-8 row-span-1">
          <div className="neo-card h-[300px] overflow-hidden group transition-colors flex flex-col">
            <div className="h-[130px] shrink-0 relative overflow-hidden">
              <Image
                src="/outwardbound.jpg"
                alt="Outward Bound"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex items-center">
              <p className="leading-relaxed font-medium text-foreground">
                I really enjoy building things, especially web apps and automations.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Taekwondo - Vertical card */}
        <ScrollReveal delay={300} className="col-span-4 row-span-1">
          <div className="neo-card h-[300px] overflow-hidden group transition-colors flex flex-col">
            <div className="h-[130px] shrink-0 relative overflow-hidden">
              <Image
                src="/tkwbelt.png"
                alt="Taekwondo belt"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 flex-1 flex items-center">
              <p className="leading-relaxed font-medium text-foreground">
                I&apos;ve also been doing Taekwondo since I was a kid and have my black belt.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}