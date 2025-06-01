import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, Target, Gamepad2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects, getProjectById } from "@/data/projects"
import { notFound } from "next/navigation"
import { PageWrapper } from "@/components/page-wrapper"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: "Project Not Found - PulsePlay Hub",
    }
  }

  return {
    title: `${project.title} - PulsePlay Hub`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute inset-0 hex-pattern opacity-10"></div>
          <div className="absolute inset-0 scanlines"></div>

          <div className="relative container mx-auto px-4">
            <div className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-space-grotesk group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Project Archive
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative transform-3d">
                <div className="relative animate-float">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.category === "plinko"
                        ? "from-purple-500 via-cyan-500 to-pink-500"
                        : "from-yellow-500 via-orange-500 to-red-500"
                      } rounded-3xl blur-3xl opacity-30 animate-pulse-glow`}
                  ></div>
                  <div
                    className={`relative bg-gradient-to-br from-card via-card to-muted rounded-3xl p-8 border ${project.category === "plinko"
                        ? "border-purple-500/30 neon-purple"
                        : "border-yellow-500/30 neon-yellow"
                      } card-3d`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={500}
                      className="w-full h-auto rounded-2xl"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${project.category === "plinko"
                          ? "bg-purple-600/80 text-white border-purple-500/50"
                          : "bg-yellow-600/80 text-black border-yellow-500/50"
                        } font-orbitron font-semibold tracking-wider backdrop-blur-sm`}
                    >
                      {project.category === "plinko" ? "PLINKO MATRIX" : "LEGACY PROTOCOL"}
                    </Badge>
                    <div className="absolute bottom-4 right-4">
                      <div
                        className={`w-4 h-4 ${project.category === "plinko" ? "bg-cyan-400" : "bg-orange-400"
                          } rounded-full animate-pulse`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${project.category === "plinko" ? "from-purple-500 to-cyan-500" : "from-yellow-400 to-orange-500"
                        } rounded-lg flex items-center justify-center`}
                    >
                      {project.category === "plinko" ? (
                        <Target className="w-4 h-4 text-black" />
                      ) : (
                        <Gamepad2 className="w-4 h-4 text-black" />
                      )}
                    </div>
                    <Badge
                      className={`bg-gradient-to-r ${project.category === "plinko"
                          ? "from-purple-600/20 to-cyan-600/20 text-purple-400 border-purple-500/30"
                          : "from-yellow-600/20 to-orange-600/20 text-yellow-400 border-yellow-500/30"
                        } font-orbitron font-semibold tracking-wider`}
                    >
                      {project.category === "plinko" ? "QUANTUM ENTERTAINMENT" : "TRADITIONAL ALGORITHM"}
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-orbitron font-bold leading-tight">
                    <span className="holographic">{project.title}</span>
                  </h1>
                </div>

                <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="space-y-6">
                  <Card className="bg-card/30 backdrop-blur-xl border border-purple-500/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-orbitron font-bold text-purple-400 mb-4 tracking-wider">
                        SPECIFICATIONS
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-cyan-400 font-space-grotesk">Dimensions:</span>
                          <span className="font-medium text-muted-foreground">{project.dimensions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-400 font-space-grotesk">Category:</span>
                          <span className="font-medium text-muted-foreground capitalize">{project.category}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/30 backdrop-blur-xl border border-cyan-500/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-orbitron font-bold text-cyan-400 mb-4 tracking-wider">MATERIALS</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.materials.map((material, index) => (
                          <Badge
                            key={index}
                            className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-space-grotesk"
                          >
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/30 backdrop-blur-xl border border-yellow-500/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-orbitron font-bold text-yellow-400 mb-4 tracking-wider">FEATURES</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-muted-foreground font-space-grotesk">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-orbitron font-bold neon-purple transition-all duration-300 hover:scale-105"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        REQUEST QUANTUM QUOTE
                      </Button>
                    </Link>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2 font-space-grotesk">
                        Or initiate direct communication:
                      </p>
                      <a
                        href="tel:+447924195426"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium font-space-grotesk transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        +44 7924 195 426
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8">
                <span className="holographic">RELATED PROTOCOLS</span>
              </h2>
              <p className="text-lg text-muted-foreground font-space-grotesk max-w-3xl mx-auto">
                Explore similar quantum entertainment systems from our digital archive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => p.id !== project.id && p.category === project.category)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Card
                    key={relatedProject.id}
                    className="overflow-hidden bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group card-3d"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <Badge
                        className={`absolute top-4 left-4 ${relatedProject.category === "plinko"
                            ? "bg-purple-600/80 text-white border-purple-500/50"
                            : "bg-yellow-600/80 text-black border-yellow-500/50"
                          } font-orbitron font-semibold tracking-wider backdrop-blur-sm text-xs`}
                      >
                        {relatedProject.category === "plinko" ? "PLINKO MATRIX" : "LEGACY PROTOCOL"}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3
                        className={`text-lg font-orbitron font-bold mb-2 tracking-wider ${relatedProject.category === "plinko" ? "text-purple-400" : "text-yellow-400"
                          }`}
                      >
                        {relatedProject.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 font-space-grotesk">
                        {relatedProject.description}
                      </p>
                      <Link href={`/projects/${relatedProject.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`w-full ${relatedProject.category === "plinko"
                              ? "border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                              : "border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                            } font-orbitron font-semibold transition-all duration-300 hover:scale-105`}
                        >
                          ACCESS DATA
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
