"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Always wrap children in NextThemesProvider to ensure useTheme() works
  // The inline script in layout.tsx handles initial theme class application
  return (
    <NextThemesProvider {...props}>
      {!mounted ? (
        <div style={{ visibility: "hidden" }}>
          {children}
        </div>
      ) : (
        children
      )}
    </NextThemesProvider>
  )
}