"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // No mounted check needed - inline script in layout.tsx handles initial theme
  // Removing the mounted check prevents hydration mismatches
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}