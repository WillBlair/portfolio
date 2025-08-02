"use client"

import React, { useState, useRef, useCallback } from "react"

interface DecodeTextProps {
  text: string
  className?: string
  animatingClassName?: string
}

export function DecodeText({ text, className = "", animatingClassName }: DecodeTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isDecoding, setIsDecoding] = useState(false)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
  const duration = 1500 // 1.5 seconds

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp
    }

    const elapsed = timestamp - startTimeRef.current
    const progress = Math.min(elapsed / duration, 1)

    // Calculate how many characters should be revealed
    const revealedCount = Math.floor(progress * text.length)

    let result = ""
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        result += " "
      } else if (i < revealedCount) {
        result += text[i]
      } else {
        // Add some randomness to make scrambling more chaotic at the start
        const randomIntensity = Math.max(0.3, 1 - progress)
        if (Math.random() < randomIntensity) {
          result += chars[Math.floor(Math.random() * chars.length)]
        } else {
          result += text[i]
        }
      }
    }

    setDisplayText(result)

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate)
    } else {
      setDisplayText(text)
      setIsDecoding(false)
      startTimeRef.current = null
    }
  }, [text, duration])

  const startDecoding = useCallback(() => {
    // Prevent multiple animations
    if (isDecoding) return

    // Clear any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    setIsDecoding(true)
    startTimeRef.current = null
    animationRef.current = requestAnimationFrame(animate)
  }, [isDecoding, animate])

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <h1
      className={`${isDecoding ? animatingClassName : className} cursor-pointer transition-all duration-200`}
      onMouseEnter={startDecoding}
    >
      {displayText}
    </h1>
  )
}