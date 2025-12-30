"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

// Dynamic imports for tab content - reduces initial bundle size
const Projects = dynamic(() => import("@/components/projects").then(mod => ({ default: mod.Projects })), { ssr: false })
const Experience = dynamic(() => import("@/components/experience").then(mod => ({ default: mod.Experience })), { ssr: false })
const Skills = dynamic(() => import("@/components/skills").then(mod => ({ default: mod.Skills })), { ssr: false })
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), { ssr: false })

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
    <div className="flex min-h-screen flex-col">
      {/* Main Content - narrow width */}
      <main className="relative flex-1 w-full max-w-[45rem] mx-auto px-4">
        {/* Theme toggle - positioned relative to content container */}
        <div className="absolute top-4 sm:top-10 right-0 z-50">
          <ThemeToggle />
        </div>
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
                  backgroundColor: '#ff2819', // Fixed bright red-orange
                  color: '#FFFFFF',
                  borderColor: '#1C1917', // Force black border
                  borderWidth: '3px',
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