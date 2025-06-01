import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { ScrollToTop } from "@/components/scroll-to-top"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PulsePlay Hub - Premium Plinko Board Manufacturers | UK",
  description:
    "Discover handcrafted wooden Plinko boards and traditional games. Expert craftsmanship, premium materials, and custom designs from Manchester, UK.",
  keywords: "Plinko boards, wooden games, handcrafted boards, traditional games, Manchester, UK",
  openGraph: {
    title: "PulsePlay Hub - Premium Plinko Board Manufacturers",
    description: "Handcrafted wooden Plinko boards and traditional games from Manchester, UK",
    url: "https://pulseplayhub.com",
    siteName: "PulsePlay Hub",
    locale: "en_GB",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-space-grotesk">
        {children}
        <CookieConsent />
        <ScrollToTop />
      </body>
    </html>
  )
}
