"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute inset-0 hex-pattern opacity-10"></div>
          <div className="absolute inset-0 scanlines"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative animate-float mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto neon-cyan">
                  <Send className="w-10 h-10 text-black" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
                <span className="holographic">TRANSMISSION COMPLETE</span>
              </h1>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed mb-12">
                Your quantum message has been successfully transmitted to our neural network. Our response protocol will
                initiate within 24 temporal units.
              </p>
              <Card className="bg-card/30 backdrop-blur-xl border border-green-500/30 neon-cyan">
                <CardContent className="p-8">
                  <h3 className="font-orbitron font-bold text-green-400 mb-6 tracking-wider text-lg">
                    NEXT PROTOCOL SEQUENCE:
                  </h3>
                  <ul className="text-left space-y-4 max-w-md mx-auto">
                    <li className="flex items-center font-space-grotesk">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-4 animate-pulse"></div>
                      Neural network analysis of requirements
                    </li>
                    <li className="flex items-center font-space-grotesk">
                      <div
                        className="w-3 h-3 bg-cyan-400 rounded-full mr-4 animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      Quantum quote generation protocol
                    </li>
                    <li className="flex items-center font-space-grotesk">
                      <div
                        className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                      Direct communication channel activation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="absolute inset-0 hex-pattern opacity-10"></div>
        <div className="absolute inset-0 scanlines"></div>

        <div className="relative container mx-auto px-4 py-32">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center neon-cyan">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <Badge className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 font-orbitron font-semibold tracking-wider">
                COMMUNICATION PORTAL
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight mb-8">
              <span className="holographic glitch" data-text="INITIATE">
                INITIATE
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                CONTACT
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
              Ready to materialize your quantum vision? Establish communication protocols for personalized project
              specifications and advanced manufacturing quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/10 to-background"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative transform-3d">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-30 animate-pulse-glow"></div>
                <Card className="relative bg-card/30 backdrop-blur-xl border border-cyan-500/30 neon-cyan card-3d">
                  <CardHeader>
                    <CardTitle className="text-2xl font-orbitron font-bold text-cyan-400 tracking-wider">
                      TRANSMISSION INTERFACE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-purple-400 font-space-grotesk font-semibold">
                            Identity Code *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="mt-1 bg-background/50 border-purple-500/30 text-muted-foreground focus:border-cyan-400 transition-colors"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-purple-400 font-space-grotesk font-semibold">
                            Communication Channel *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="mt-1 bg-background/50 border-purple-500/30 text-muted-foreground focus:border-cyan-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-purple-400 font-space-grotesk font-semibold">
                          Direct Link Protocol
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1 bg-background/50 border-purple-500/30 text-muted-foreground focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <Label htmlFor="projectType" className="text-purple-400 font-space-grotesk font-semibold">
                          Project Classification *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger className="mt-1 bg-background/50 border-purple-500/30 text-muted-foreground focus:border-cyan-400">
                            <SelectValue placeholder="Select quantum protocol type" />
                          </SelectTrigger>
                          <SelectContent className="bg-card/95 backdrop-blur-xl border-purple-500/30">
                            <SelectItem value="classic-plinko">Classic Plinko Matrix</SelectItem>
                            <SelectItem value="led-plinko">LED Quantum Plinko</SelectItem>
                            <SelectItem value="mini-plinko">Nano Plinko System</SelectItem>
                            <SelectItem value="custom-plinko">Custom Plinko Algorithm</SelectItem>
                            <SelectItem value="skittles">Legacy Skittles Protocol</SelectItem>
                            <SelectItem value="ring-toss">Ring Targeting System</SelectItem>
                            <SelectItem value="cornhole">Trajectory Calculation Boards</SelectItem>
                            <SelectItem value="giant-jenga">Structural Stability Matrix</SelectItem>
                            <SelectItem value="other">Alternative Gaming Protocol</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-purple-400 font-space-grotesk font-semibold">
                          Project Specifications *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          placeholder="Transmit your project requirements including dimensional parameters, material preferences, temporal constraints, and specialized features..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="mt-1 bg-background/50 border-purple-500/30 text-muted-foreground focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-orbitron font-bold neon-cyan transition-all duration-300 hover:scale-105"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "TRANSMITTING..." : "INITIATE TRANSMISSION"}
                        <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-orbitron font-bold text-purple-400 mb-6 tracking-wider">
                    COMMUNICATION PROTOCOLS
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-orbitron font-bold text-cyan-400 tracking-wider">QUANTUM FACILITY</p>
                        <p className="text-muted-foreground font-space-grotesk">
                          St Ann's Street 22
                          <br />
                          Manchester, M2 7LF
                          <br />
                          United Kingdom
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-orbitron font-bold text-cyan-400 tracking-wider">DIRECT LINK</p>
                        <a
                          href="tel:+447924195426"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors font-space-grotesk"
                        >
                          +44 7924 195 426
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-orbitron font-bold text-cyan-400 tracking-wider">DATA STREAM</p>
                        <a
                          href="mailto:info@pulseplayhub.com"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors font-space-grotesk"
                        >
                          info@pulseplayhub.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="font-orbitron font-bold text-cyan-400 tracking-wider">OPERATIONAL CYCLES</p>
                        <p className="text-muted-foreground font-space-grotesk">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: System Maintenance
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-6 tracking-wider">
                    SYSTEM ADVANTAGES
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Quantum-grade material selection",
                      "Neural network craftsmanship",
                      "Infinite customization protocols",
                      "Accelerated production cycles",
                      "Competitive pricing algorithms",
                    ].map((advantage, index) => (
                      <li key={index} className="flex items-center group">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-muted-foreground font-space-grotesk">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-orbitron font-bold text-yellow-400 mb-6 tracking-wider">
                    RESPONSE PROTOCOL
                  </h3>
                  <p className="text-muted-foreground mb-6 font-space-grotesk leading-relaxed">
                    Our neural network processes all transmissions within 24 temporal cycles during operational periods.
                    For urgent protocols, initiate direct communication link.
                  </p>
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-yellow-400 mt-1" />
                      <div>
                        <p className="text-yellow-400 text-sm font-orbitron font-bold mb-1">OPTIMIZATION TIP:</p>
                        <p className="text-muted-foreground text-sm font-space-grotesk">
                          Include maximum detail specifications in your transmission to accelerate quote generation
                          protocols.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
