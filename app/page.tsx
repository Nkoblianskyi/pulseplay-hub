import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Cpu, Shield, Users, Clock, Sparkles, Target, Gamepad2, Layers, Hammer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"
import { PageWrapper } from "@/components/page-wrapper"

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="absolute inset-0 hex-pattern"></div>
          <div className="absolute inset-0 scanlines"></div>

          {/* Floating Particles */}
          <div className="particles">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>

          <div className="relative container mx-auto px-4 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-400 border border-purple-500/30 font-orbitron font-semibold tracking-wider">
                    CRAFTED IN MANCHESTER
                  </Badge>

                  <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
                    <span className="holographic glitch" data-text="PREMIUM">
                      PREMIUM
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 animate-gradient">
                      PLINKO
                    </span>
                    <br />
                    <span className="text-white">BOARDS</span>
                  </h1>

                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                </div>

                <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-lg">
                  Experience the fusion of traditional craftsmanship and futuristic design. We create extraordinary
                  wooden Plinko boards and games that transcend ordinary entertainment.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/projects">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-orbitron font-bold px-8 py-4 rounded-xl neon-purple transition-all duration-300 hover:scale-105 group"
                    >
                      EXPLORE PROJECTS
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-orbitron font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
                    >
                      GET CUSTOM QUOTE
                      <Zap className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative transform-3d">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-400 rounded-3xl blur-3xl opacity-30 animate-pulse-glow"></div>
                  <div className="relative bg-gradient-to-br from-card via-card to-muted rounded-3xl p-8 border border-purple-500/30 neon-purple card-3d">
                    <Image
                      src="/hero.png"
                      alt="Premium Plinko Board"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Plinko Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold">
                  <span className="holographic">WHAT IS PLINKO?</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Plinko is a mesmerizing fusion of physics and chance, where spheres cascade through a matrix of
                precision-placed pegs, creating unpredictable trajectories that culminate in scoring zones below. This
                quantum entertainment experience combines mathematical probability with pure excitement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "QUANTUM MECHANICS",
                  description:
                    "Each ball follows unique quantum paths through our precision-engineered peg matrix, creating infinite possibilities.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Users,
                  title: "SOCIAL FUSION",
                  description:
                    "Transform any gathering into an electrifying experience with our interactive entertainment systems.",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  icon: Shield,
                  title: "TIMELESS PROTOCOL",
                  description:
                    "A classic algorithm that transcends generations, combining traditional mechanics with modern innovation.",
                  color: "from-yellow-400 to-orange-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group card-3d"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 neon-purple`}
                    >
                      <item.icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-purple-400 mb-4 tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-space-grotesk leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board Variations Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Layers className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold">
                  <span className="holographic">BOARD MATRIX</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                From classic algorithms to quantum-enhanced systems, our Plinko board matrix adapts to every dimensional
                requirement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "CLASSIC PROTOCOL",
                  subtitle: "Traditional Matrix",
                  gradient: "from-purple-600 via-purple-500 to-pink-500",
                  features: ["Premium oak construction", "Brass peg matrix", "15 scoring zones"],
                  glow: "neon-purple",
                },
                {
                  title: "QUANTUM LED",
                  subtitle: "Light-Speed Experience",
                  gradient: "from-cyan-600 via-blue-500 to-purple-500",
                  features: ["RGB photon system", "Audio synthesis", "Remote control"],
                  glow: "neon-cyan",
                },
                {
                  title: "NANO PORTABLE",
                  subtitle: "Compact Design",
                  gradient: "from-yellow-500 via-orange-500 to-red-500",
                  features: ["Foldable architecture", "Magnetic components", "Transport case"],
                  glow: "neon-yellow",
                },
              ].map((board, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group card-3d"
                >
                  <div className={`h-64 bg-gradient-to-br ${board.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl font-orbitron font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                          {board.title.split(" ")[0]}
                        </div>
                        <div className="text-sm opacity-90 font-space-grotesk tracking-widest">{board.subtitle}</div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-orbitron font-bold text-purple-400 mb-4 tracking-wider">
                      {board.title}
                    </h3>
                    <p className="text-muted-foreground font-space-grotesk mb-6 leading-relaxed">
                      Advanced {board.subtitle.toLowerCase()} with cutting-edge materials and precision engineering.
                    </p>
                    <ul className="space-y-2">
                      {board.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground font-space-grotesk">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Traditional Games Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold">
                  <span className="holographic">LEGACY GAMES</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Beyond Plinko, we engineer a spectrum of traditional wooden games that bridge ancient wisdom with modern
                precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "SKITTLES",
                  description: "Ancient pub protocol",
                  icon: "🎳",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  name: "RING TOSS",
                  description: "Precision targeting system",
                  icon: "🎯",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  name: "CORNHOLE",
                  description: "Trajectory calculation game",
                  icon: "🌽",
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  name: "GIANT JENGA",
                  description: "Structural stability matrix",
                  icon: "🏗️",
                  color: "from-green-400 to-teal-500",
                },
              ].map((game, index) => (
                <Card
                  key={index}
                  className="bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group card-3d"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${game.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl`}
                    >
                      {game.icon}
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-purple-400 mb-3 tracking-wider">{game.name}</h3>
                    <p className="text-muted-foreground font-space-grotesk text-sm leading-relaxed">
                      {game.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 hex-pattern opacity-10"></div>
          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-black" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                      <span className="holographic">CRAFT PROTOCOL</span>
                    </h2>
                  </div>
                  <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed">
                    Our manufacturing process fuses ancient woodworking algorithms with quantum precision engineering,
                    creating artifacts that transcend traditional boundaries.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      icon: Cpu,
                      title: "PRECISION JOINERY",
                      description:
                        "Hand-calculated mortise and tenon joints ensure structural integrity across multiple dimensions.",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: Sparkles,
                      title: "QUANTUM MATERIALS",
                      description:
                        "We source premium hardwoods including oak, walnut, and ash, each selected for optimal molecular properties.",
                      color: "from-cyan-500 to-blue-500",
                    },
                    {
                      icon: Clock,
                      title: "TEMPORAL SEASONING",
                      description:
                        "All timber undergoes extended seasoning protocols to prevent dimensional instability across time.",
                      color: "from-yellow-400 to-orange-500",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-6 group">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 neon-purple`}
                      >
                        <item.icon className="w-8 h-8 text-black" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-orbitron font-bold text-purple-400 tracking-wider">{item.title}</h3>
                        <p className="text-muted-foreground font-space-grotesk leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative transform-3d">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl blur-3xl opacity-30 animate-pulse-glow"></div>
                  <div className="relative bg-gradient-to-br from-card via-card to-muted rounded-3xl p-8 border border-orange-500/30 neon-yellow card-3d">
                    <Image
                      src="/material.png"
                      alt="Craftsmanship and Materials"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {[1, 2, 3, 4].map((i) => (
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
            </div>
          </div>
        </section>

        {/* Workshop Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Hammer className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold">
                  <span className="holographic">OUR WORKSHOPS</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Step inside our quantum manufacturing facility where traditional craftsmanship meets cutting-edge
                technology. Each workshop is a specialized laboratory dedicated to perfecting every aspect of our
                creations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="relative transform-3d">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 rounded-3xl blur-3xl opacity-30 animate-pulse-glow"></div>
                  <div className="relative bg-gradient-to-br from-card via-card to-muted rounded-3xl p-8 border border-orange-500/30 neon-yellow card-3d">
                    <Image
                      src="/workshops.png"
                      alt="PulsePlay Hub Workshop"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-orbitron font-bold text-orange-400 tracking-wider">
                    MANUFACTURING MATRIX
                  </h3>
                  <p className="text-lg text-muted-foreground font-space-grotesk leading-relaxed">
                    Our Manchester facility houses six specialized workshops, each engineered for precision
                    manufacturing and quality control. From material selection to final assembly, every process is
                    optimized for excellence.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Material Lab", count: "01" },
                    { name: "Processing Unit", count: "02" },
                    { name: "Coating Station", count: "03" },
                    { name: "Design Studio", count: "04" },
                    { name: "Assembly Bay", count: "05" },
                    { name: "Finishing Lab", count: "06" },
                  ].map((workshop, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-black font-orbitron font-bold text-xs">{workshop.count}</span>
                      </div>
                      <span className="text-sm font-space-grotesk text-muted-foreground group-hover:text-orange-400 transition-colors">
                        {workshop.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link href="/workshops">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-orbitron font-bold px-8 py-4 rounded-xl neon-yellow transition-all duration-300 hover:scale-105 group"
                    >
                      EXPLORE WORKSHOPS
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "PRECISION ENGINEERING",
                  description: "Advanced CNC machinery and traditional hand tools work in harmony",
                  icon: "⚙️",
                  color: "from-orange-500 to-red-500",
                },
                {
                  title: "QUALITY CONTROL",
                  description: "Every component undergoes rigorous testing and inspection protocols",
                  icon: "🔬",
                  color: "from-red-500 to-pink-500",
                },
                {
                  title: "SUSTAINABLE PRACTICES",
                  description: "Eco-friendly processes and responsible material sourcing",
                  icon: "🌱",
                  color: "from-yellow-400 to-orange-500",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-card/30 backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 group card-3d"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-orbitron font-bold text-orange-400 mb-4 tracking-wider">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-space-grotesk text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold">
                  <span className="holographic">PROJECT ARCHIVE</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Explore our digital portfolio of handcrafted artifacts, each representing a unique fusion of traditional
                craftsmanship and futuristic innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="overflow-hidden bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group card-3d mb-6"
                >
                  <div className="relative h-64 overflow-hidden ">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge
                      className={`absolute top-4 left-4 ${
                        project.category === "plinko"
                          ? "bg-purple-600/80 text-white border-purple-500/50"
                          : "bg-cyan-600/80 text-white border-cyan-500/50"
                      } font-orbitron font-semibold tracking-wider backdrop-blur-sm`}
                    >
                      {project.category === "plinko" ? "PLINKO MATRIX" : "LEGACY PROTOCOL"}
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
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-400 font-space-grotesk">{project.dimensions}</span>
                      <Link href={`/projects/${project.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-orbitron font-semibold transition-all duration-300 hover:scale-105 group"
                        >
                          ACCESS
                          <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-orbitron font-bold px-8 py-4 rounded-xl neon-cyan transition-all duration-300 hover:scale-105 group"
                >
                  ACCESS FULL ARCHIVE
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

                {/* Fun Facts Sections */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                    <span className="holographic">PHYSICS ENGINE</span>
                  </h2>
                  <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed">
                    Plinko demonstrates advanced physics algorithms in real-time, creating a perfect simulation of chaos
                    theory and quantum mechanics in action.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      number: "1",
                      title: "GRAVITATIONAL FORCE",
                      description: "Primary vector pulling spheres through the peg matrix system",
                    },
                    {
                      number: "2",
                      title: "MOMENTUM TRANSFER",
                      description: "Each collision redistributes kinetic energy through the system",
                    },
                    {
                      number: "3",
                      title: "PROBABILITY DISTRIBUTION",
                      description: "Final positions follow advanced bell curve algorithms",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-cyan">
                        <span className="text-black font-orbitron font-bold text-sm">{item.number}</span>
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-cyan-400 tracking-wider">{item.title}</h3>
                        <p className="text-muted-foreground font-space-grotesk text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative transform-3d mt-8 lg:mt-0">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 rounded-3xl blur-3xl opacity-30 animate-pulse-glow"></div>
                  <div className="relative bg-gradient-to-br from-card via-card to-muted rounded-3xl p-8 border border-cyan-500/30 neon-cyan card-3d">
                    <Image
                      src="/demonstrates.png"
                      alt="Physics of Plinko"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 relative">
          <div className="absolute inset-0 hex-pattern opacity-10"></div>
          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative transform-3d order-2 lg:order-1">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse-glow"></div>
                  <div className="relative bg-gradient-to-br from-card via-card to-muted rounded-3xl p-8 border border-green-500/30 neon-yellow card-3d">
                    <Image
                      src="/legacy.png"
                      alt="Historical Games"
                      width={600}
                      height={500}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                    <span className="holographic">LEGACY PROTOCOLS</span>
                  </h2>
                  <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed">
                    Traditional wooden games represent ancient algorithms that have connected civilizations across
                    temporal dimensions for millennia.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "ANCIENT ORIGINS",
                      description:
                        "Gaming protocols similar to modern Plinko trace back to ancient civilizations, used for both entertainment and quantum divination.",
                    },
                    {
                      title: "CULTURAL MATRIX",
                      description:
                        "Traditional games formed the social backbone of community networks across European territories for centuries.",
                    },
                    {
                      title: "DIGITAL RENAISSANCE",
                      description:
                        "Modern revival reflects humanity's desire to reconnect with tactile, analog experiences in our quantum age.",
                    },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      className="bg-card/30 backdrop-blur-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
                    >
                      <CardContent className="p-6">
                        <h3 className="font-orbitron font-bold text-green-400 mb-3 tracking-wider">{item.title}</h3>
                        <p className="text-muted-foreground font-space-grotesk text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </PageWrapper>
  )
}
