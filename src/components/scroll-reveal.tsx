"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "up",
  className = ""
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        if (delay > 0) {
          setTimeout(() => setIsVisible(true), delay)
        } else {
          setIsVisible(true)
        }
      }
    },
    [delay]
  )

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    })

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [handleIntersection])

  const transform = isVisible 
    ? "translate3d(0, 0, 0)" 
    : direction === "up" 
      ? "translate3d(0, 30px, 0)"
      : direction === "down"
        ? "translate3d(0, -30px, 0)"
        : direction === "left"
          ? "translate3d(30px, 0, 0)"
          : "translate3d(-30px, 0, 0)"

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      data-scroll-reveal
      style={{
        opacity: isVisible ? 1 : 0,
        transform,
        transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}