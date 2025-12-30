"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

type TabId = "about" | "projects" | "experience" | "skills" | "contact"

const tabs: { id: TabId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Work Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("about")

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content - narrow width */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4">
        {/* Hero Section */}
        <Hero />

        {/* Tab Navigation - directly after hero */}
        <nav className="pb-2">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="neo-nav-link"
                style={activeTab === tab.id ? {
                  backgroundColor: 'var(--earth-clay)',
                  color: '#FFFFFF',
                  boxShadow: '9px 9px 0px var(--neo-shadow-color)',
                  transform: 'translate(-6px, -6px)'
                } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content - shows ONLY the active tab's section */}
        <div className="min-h-[400px]">
          {activeTab === "about" && <About />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "contact" && <Contact />}
        </div>
      </main>

      <Footer />
    </div>
  )
}