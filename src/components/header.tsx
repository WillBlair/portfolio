"use client"

import { useState, useEffect } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { User, FolderOpen, Briefcase, Mail, Menu, X } from "lucide-react"

const navigationItems = [
  {
    name: "About",
    href: "#about",
    icon: User,
    description: "My story"
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderOpen,
    description: "Featured work"
  },
  {
    name: "Experience",
    href: "#experience",
    icon: Briefcase,
    description: "Career path"
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
    description: "Let's connect"
  },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're near the bottom of the page (contact section)
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection("contact")
        return
      }

      // Check other sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop

          if (scrollPosition >= offsetTop - 50) {
            setActiveSection(section)
            break
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">

        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="font-bold text-lg hover:text-primary transition-colors"
        >
          Portfolio
        </button>

        {/* Desktop Navigation - Unique Pill Layout */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-2 p-1 bg-muted/50 rounded-full border">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    relative group rounded-full px-4 py-2 transition-colors duration-300
                    ${isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-background/80 shadow-none"
                    }
                  `}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  <span className="font-medium">{item.name}</span>

                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {item.description}
                  </div>
                </Button>
              )
            })}
          </div>
        </nav>

        {/* Right Side - Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-3">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <Button
                    key={item.name}
                    variant={isActive ? "default" : "outline"}
                    onClick={() => scrollToSection(item.href)}
                    className="h-auto flex-col gap-2 p-4"
                  >
                    <item.icon className="h-5 w-5" />
                    <div className="text-center">
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs opacity-70">{item.description}</div>
                    </div>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}