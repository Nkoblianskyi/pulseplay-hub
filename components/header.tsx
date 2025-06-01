"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, Phone, Zap } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false)

    // If navigating to the same page, scroll to top
    if (pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      router.push(href)
    }
  }

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/workshops", label: "WORKSHOPS" },
    { href: "/care-guide", label: "CARE GUIDE" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handleNavigation("/")} className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-400 rounded-xl flex items-center justify-center neon-purple animate-pulse-glow">
                <Zap className="w-6 h-6 text-black animate-neon-flicker" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div>
              <span className="text-2xl font-orbitron font-bold holographic">PulsePlay</span>
              <div className="text-xs font-space-grotesk text-cyan-400 tracking-widest">HUB</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`relative font-orbitron text-sm font-medium transition-all duration-300 group ${
                  pathname === item.href ? "text-purple-400" : "text-muted-foreground hover:text-purple-400"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+447924195426"
              className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-space-grotesk"
            >
              <Phone className="w-4 h-4 mr-2" />
              +44 7924 195 426
            </a>
            <button
              onClick={() => handleNavigation("/contact")}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-orbitron font-semibold px-6 py-2 rounded-lg neon-purple transition-all duration-300 hover:scale-105"
            >
              GET QUOTE
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-purple-400 hover:text-purple-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-purple-500/20 bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-left font-orbitron text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-purple-400" : "text-muted-foreground hover:text-purple-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-purple-500/20">
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-orbitron font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                >
                  GET QUOTE
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
