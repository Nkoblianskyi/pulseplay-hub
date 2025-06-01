import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Gamepad2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"
import { PageWrapper } from "@/components/page-wrapper"

export const metadata = {
  title: "Our Projects - PulsePlay Hub | Handcrafted Plinko Boards & Games",
  description:
    "Explore our portfolio of handcrafted Plinko boards and traditional wooden games. Each piece showcases premium materials and expert craftsmanship.",
}

export default function ProjectsPage() {
  const plinkoProjects = projects.filter((p) => p.category === "plinko")
  const traditionalProjects = projects.filter((p) => p.category === "traditional")

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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center neon-purple">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <Badge className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-400 border border-purple-500/30 font-orbitron font-semibold tracking-wider">
                  PROJECT ARCHIVE
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight mb-8">
                <span className="holographic glitch" data-text="OUR">
                  OUR
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 animate-gradient">
                  PROJECTS
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Discover our digital portfolio of handcrafted artifacts, each representing a unique fusion of
                traditional craftsmanship and futuristic innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Plinko Boards Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                  <span className="holographic">PLINKO MATRIX</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                From classic algorithms to quantum-enhanced systems, our Plinko board matrix represents the pinnacle of
                precision entertainment engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plinkoProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group card-3d"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-purple-600/80 text-white border-purple-500/50 font-orbitron font-semibold tracking-wider backdrop-blur-sm">
                      PLINKO MATRIX
                    </Badge>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-orbitron font-bold text-purple-400 mb-3 tracking-wider">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-space-grotesk mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-cyan-400 font-space-grotesk">Dimensions:</span>
                        <span className="font-medium text-muted-foreground">{project.dimensions}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.materials.slice(0, 2).map((material, materialIndex) => (
                          <Badge
                            key={materialIndex}
                            className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs font-space-grotesk"
                          >
                            {material}
                          </Badge>
                        ))}
                        {project.materials.length > 2 && (
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs font-space-grotesk">
                            +{project.materials.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Link href={`/projects/${project.id}`}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-orbitron font-semibold transition-all duration-300 hover:scale-105 group">
                        ACCESS DATA
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Traditional Games Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                  <span className="holographic">LEGACY PROTOCOLS</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Ancient gaming algorithms reimagined with quantum precision. These traditional protocols bridge
                millennia of entertainment evolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {traditionalProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden bg-card/30 backdrop-blur-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 group card-3d"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-yellow-600/80 text-black border-yellow-500/50 font-orbitron font-semibold tracking-wider backdrop-blur-sm">
                      LEGACY PROTOCOL
                    </Badge>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-orbitron font-bold text-yellow-400 mb-3 tracking-wider">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-space-grotesk mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-orange-400 font-space-grotesk">Dimensions:</span>
                        <span className="font-medium text-muted-foreground">{project.dimensions}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.materials.slice(0, 2).map((material, materialIndex) => (
                          <Badge
                            key={materialIndex}
                            className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xs font-space-grotesk"
                          >
                            {material}
                          </Badge>
                        ))}
                        {project.materials.length > 2 && (
                          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs font-space-grotesk">
                            +{project.materials.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Link href={`/projects/${project.id}`}>
                      <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-black font-orbitron font-semibold transition-all duration-300 hover:scale-105 group">
                        ACCESS DATA
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}
