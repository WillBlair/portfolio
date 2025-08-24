"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="w-full max-w-5xl mx-auto border-2 border-foreground/20 rounded-xl mt-8 mb-0 overflow-hidden neo-content-frame">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}