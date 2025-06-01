"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Add a small delay for smooth transition
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return <div className={`page-transition ${loaded ? "loaded" : ""}`}>{children}</div>
}
