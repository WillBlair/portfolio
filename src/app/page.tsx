"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="w-full max-w-5xl mx-auto border-2 border-foreground/20 rounded-xl my-8">
          <Hero />
          <div className="flex justify-center py-6">
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about')
                aboutSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-pulse" />
              <span className="text-xs mt-1 uppercase tracking-wider">Scroll</span>
            </button>
          </div>
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}