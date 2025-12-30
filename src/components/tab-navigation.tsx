"use client"

import { User, FolderOpen, Briefcase, Award, Wrench, Mail } from "lucide-react"

export type TabId = "about" | "projects" | "experience" | "skills" | "achievements" | "contact"

interface TabItem {
  id: TabId
  name: string
  icon: React.ComponentType<{ className?: string }>
  activeColor: string
}

const tabs: TabItem[] = [
  { id: "about", name: "About", icon: User, activeColor: "bg-[#D94E36] text-white" },
  { id: "projects", name: "Projects", icon: FolderOpen, activeColor: "neo-rust" },
  { id: "experience", name: "Work Experience", icon: Briefcase, activeColor: "neo-navy" },
  { id: "skills", name: "Skills", icon: Wrench, activeColor: "neo-gold" },
  { id: "contact", name: "Contact", icon: Mail, activeColor: "neo-rust" },
]

interface TabNavigationProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="w-full py-4 px-4 bg-background/95">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const Icon = tab.icon

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                group flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3
                font-mono font-bold text-xs sm:text-sm uppercase tracking-wide
                neo-border-thin neo-shadow-sm
                transition-all duration-100
                ${isActive
                  ? `${tab.activeColor}`
                  : "bg-card hover:-translate-x-0.5 hover:-translate-y-0.5"
                }
              `}
            >
              <Icon className={`h-4 w-4 transition-transform ${isActive ? '' : 'group-hover:scale-110'}`} />
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
