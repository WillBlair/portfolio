"use client"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function ScrollReveal({ 
  children, 
  className = ""
}: ScrollRevealProps) {
  // Animation disabled - just return children wrapped in a div
  return (
    <div className={className}>
      {children}
    </div>
  )
}