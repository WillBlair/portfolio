"use client"

import { TabId } from "./tab-navigation"
import { About } from "./about"
import { Projects } from "./projects"
import { Experience } from "./experience"
import { Skills } from "./skills"
import { Achievements } from "./achievements"
import { Contact } from "./contact"

interface TabContentProps {
    activeTab: TabId
}

export function TabContent({ activeTab }: TabContentProps) {
    return (
        <div className="w-full">
            {activeTab === "about" && <About />}
            {activeTab === "projects" && <Projects />}
            {activeTab === "experience" && <Experience />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "achievements" && <Achievements />}
            {activeTab === "contact" && <Contact />}
        </div>
    )
}
