import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Hammer,
  Palette,
  Layers,
  Wrench,
  Paintbrush,
  Package,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"

export const metadata = {
  title: "Our Workshops - PulsePlay Hub | Manufacturing Excellence",
  description:
    "Discover our state-of-the-art workshops in Manchester. From material selection to final finishing, explore our precision manufacturing processes.",
}

export default function WorkshopsPage() {
  const workshops = [
    {
      id: "material-selection",
      title: "MATERIAL SELECTION LAB",
      subtitle: "Quantum Material Analysis",
      description: "Advanced material testing and selection using cutting-edge analysis protocols",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      image: "/mater.png",
      processes: [
        "Molecular density analysis",
        "Grain pattern optimization",
        "Moisture content calibration",
        "Hardness testing protocols",
        "Sustainability verification",
      ],
      equipment: [
        "Digital moisture meters",
        "Hardness testing apparatus",
        "Grain analysis scanners",
        "Quality control systems",
      ],
    },
    {
      id: "processing",
      title: "PROCESSING UNIT",
      subtitle: "Precision Manufacturing",
      description: "State-of-the-art machinery combined with traditional craftsmanship techniques",
      icon: Hammer,
      color: "from-cyan-500 to-blue-500",
      image: "/proc.png",
      processes: [
        "CNC precision cutting",
        "Traditional hand shaping",
        "Joint preparation",
        "Surface smoothing",
        "Dimensional verification",
      ],
      equipment: ["CNC routing machines", "Traditional hand planes", "Precision measuring tools", "Sanding systems"],
    },
    {
      id: "coating",
      title: "COATING STATION",
      subtitle: "Surface Protection Matrix",
      description: "Advanced coating application for durability and aesthetic enhancement",
      icon: Paintbrush,
      color: "from-yellow-400 to-orange-500",
      image: "/coating.png",
      processes: [
        "Surface preparation",
        "Primer application",
        "Base coat layering",
        "Protective sealing",
        "Quality inspection",
      ],
      equipment: ["Spray booth systems", "Environmental controls", "Coating thickness meters", "Drying chambers"],
    },
    {
      id: "design",
      title: "DESIGN STUDIO",
      subtitle: "Creative Innovation Hub",
      description: "Where artistic vision meets technical precision in our design laboratory",
      icon: Palette,
      color: "from-green-400 to-teal-500",
      image: "/designe.png",
      processes: [
        "Concept development",
        "3D modeling and simulation",
        "Prototype creation",
        "Design optimization",
        "Client collaboration",
      ],
      equipment: ["CAD workstations", "3D printers", "Design software suite", "Virtual reality systems"],
    },
    {
      id: "assembly",
      title: "ASSEMBLY BAY",
      subtitle: "Precision Integration",
      description: "Expert assembly where individual components become extraordinary games",
      icon: Wrench,
      color: "from-red-500 to-pink-500",
      image: "/expert.png",
      processes: [
        "Component verification",
        "Precision assembly",
        "Hardware installation",
        "Mechanism testing",
        "Quality assurance",
      ],
      equipment: ["Assembly workstations", "Precision tools", "Testing equipment", "Quality control systems"],
    },
    {
      id: "finishing",
      title: "FINISHING LAB",
      subtitle: "Final Enhancement Protocol",
      description: "The final stage where products receive their distinctive appearance and protection",
      icon: Package,
      color: "from-indigo-500 to-purple-500",
      image: "/final.png",
      processes: [
        "Final surface preparation",
        "Color application",
        "Protective coating",
        "Detail enhancement",
        "Final inspection",
      ],
      equipment: [
        "Professional spray systems",
        "Color matching technology",
        "Polishing equipment",
        "Quality control stations",
      ],
    },
  ]

  return (
    <PageWrapper>
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center neon-yellow">
                  <Hammer className="w-6 h-6 text-black" />
                </div>
                <Badge className="bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-400 border border-orange-500/30 font-orbitron font-semibold tracking-wider">
                  MANCHESTER FACILITY
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight mb-8">
                <span className="holographic glitch" data-text="OUR">
                  OUR
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 animate-gradient">
                  WORKSHOPS
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Journey through our quantum manufacturing facility where traditional craftsmanship algorithms merge with
                cutting-edge technology to create extraordinary wooden gaming experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Overview */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Users,
                  title: "EXPERT CRAFTSMEN",
                  description: "15+ years average experience",
                  value: "12",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Clock,
                  title: "PRODUCTION TIME",
                  description: "Average project completion",
                  value: "7-14 DAYS",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  icon: Award,
                  title: "QUALITY RATING",
                  description: "Customer satisfaction score",
                  value: "99.8%",
                  color: "from-green-400 to-teal-500",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group card-3d"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 neon-purple`}
                    >
                      <stat.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-orbitron font-bold text-purple-400 mb-2">{stat.value}</div>
                    <h3 className="text-lg font-orbitron font-bold text-orange-400 mb-2 tracking-wider">
                      {stat.title}
                    </h3>
                    <p className="text-muted-foreground font-space-grotesk text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Details */}
        <section className="py-20 relative">
          <div className="relative container mx-auto px-4">
            <div className="space-y-32">
              {workshops.map((workshop, index) => (
                <div
                  key={workshop.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`relative transform-3d ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative animate-float">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${workshop.color} rounded-3xl blur-3xl opacity-30 animate-pulse-glow`}
                      ></div>
                      <div className="relative bg-gradient-to-br from-card via-card to-muted rounded-3xl p-8 border border-orange-500/30 neon-yellow card-3d">
                        <Image
                          src={workshop.image || "/placeholder.svg"}
                          alt={workshop.title}
                          width={600}
                          height={400}
                          className="rounded-2xl w-full"
                        />
                        <div className="absolute top-4 left-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${workshop.color} rounded-xl flex items-center justify-center`}
                          >
                            <workshop.icon className="w-6 h-6 text-black" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="space-y-4">
                      <Badge
                        className={`bg-gradient-to-r ${workshop.color.replace("from-", "from-").replace("to-", "to-")}/20 text-orange-400 border border-orange-500/30 font-orbitron font-semibold tracking-wider w-fit`}
                      >
                        WORKSHOP {String(index + 1).padStart(2, "0")}
                      </Badge>
                      <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                        <span className="holographic">{workshop.title}</span>
                      </h2>
                      <div className="text-lg text-cyan-400 font-space-grotesk tracking-wider">{workshop.subtitle}</div>
                      <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed">
                        {workshop.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card className="bg-card/30 backdrop-blur-xl border border-purple-500/20">
                        <CardHeader>
                          <CardTitle className="font-orbitron text-purple-400 tracking-wider">PROCESSES</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {workshop.processes.map((process, i) => (
                              <li
                                key={i}
                                className="flex items-center text-sm text-muted-foreground font-space-grotesk"
                              >
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                {process}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-card/30 backdrop-blur-xl border border-cyan-500/20">
                        <CardHeader>
                          <CardTitle className="font-orbitron text-cyan-400 tracking-wider">EQUIPMENT</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {workshop.equipment.map((equipment, i) => (
                              <li
                                key={i}
                                className="flex items-center text-sm text-muted-foreground font-space-grotesk"
                              >
                                <Zap className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                                {equipment}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-32 relative">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8">
                <span className="holographic">MANUFACTURING FLOW</span>
              </h2>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Our streamlined production pipeline ensures every project flows seamlessly from concept to completion.
              </p>
            </div>

            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                {workshops.map((workshop, index) => (
                  <div key={workshop.id} className="flex flex-col items-center text-center group">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${workshop.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 neon-purple`}
                    >
                      <workshop.icon className="w-10 h-10 text-black" />
                    </div>
                    <div className="text-sm font-orbitron font-bold text-orange-400 mb-2 tracking-wider">
                      STEP {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-muted-foreground font-space-grotesk max-w-24 leading-tight">
                      {workshop.title.split(" ")[0]}
                    </div>
                    {index < workshops.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-1/2 transform -translate-x-1/2">
                        <ArrowRight className="w-6 h-6 text-purple-400" style={{ left: `${(index + 1) * 16.66}%` }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
                <span className="holographic">READY TO CREATE?</span>
              </h2>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed mb-12">
                Experience our workshop excellence firsthand. Contact us to discuss your custom project and see how our
                manufacturing matrix can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-orbitron font-bold px-8 py-4 rounded-xl neon-yellow transition-all duration-300 hover:scale-105 group"
                  >
                    START YOUR PROJECT
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-orbitron font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    VIEW PORTFOLIO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}
