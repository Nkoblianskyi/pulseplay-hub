"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Cookie, Shield } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:left-auto md:right-6 md:max-w-md">
      <Card className="p-6 bg-card/95 backdrop-blur-xl border border-purple-500/30 neon-purple">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-black" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <h3 className="font-orbitron font-bold text-sm text-purple-400 tracking-wider">COOKIE PROTOCOL</h3>
            </div>
            <p className="text-xs text-muted-foreground font-space-grotesk mb-4 leading-relaxed">
              We use advanced cookies to enhance your experience and analyze traffic patterns. By accepting, you consent
              to our data processing protocols.{" "}
              <Link href="/cookie-policy" className="text-cyan-400 hover:text-cyan-300 underline">
                Learn more
              </Link>
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                onClick={acceptCookies}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-orbitron text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                ACCEPT
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={declineCookies}
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-orbitron text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300"
              >
                DECLINE
              </Button>
            </div>
          </div>
          <button onClick={declineCookies} className="text-muted-foreground hover:text-purple-400 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </Card>
    </div>
  )
}
