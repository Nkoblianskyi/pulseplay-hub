import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Sun, Hammer, Shield, AlertTriangle, CheckCircle, Cpu, Target } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"

export const metadata = {
  title: "Care Guide - PulsePlay Hub | Wooden Game Maintenance Tips",
  description:
    "Learn how to properly care for and maintain your wooden Plinko boards and traditional games. Expert tips for material selection and longevity.",
}

export default function CareGuidePage() {
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
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center neon-cyan">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <Badge className="bg-gradient-to-r from-green-600/20 to-teal-600/20 text-green-400 border border-green-500/30 font-orbitron font-semibold tracking-wider">
                  MAINTENANCE PROTOCOLS
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight mb-8">
                <span className="holographic glitch" data-text="CARE">
                  CARE
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 animate-gradient">
                  PROTOCOLS
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Optimal maintenance algorithms ensure your quantum entertainment systems operate at peak performance
                across extended temporal cycles. Execute these protocols for maximum longevity.
              </p>
            </div>
          </div>
        </section>

        {/* Material Selection Guide */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-green-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                  <span className="holographic">MATERIAL MATRIX</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Understanding molecular wood properties enables optimal material selection for specific environmental
                parameters and usage algorithms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "OAK",
                  subtitle: "Premium Quantum Grade",
                  color: "from-purple-500 to-pink-500",
                  badge: "PREMIUM PROTOCOL",
                  badgeColor: "bg-purple-600/80 text-white border-purple-500/50",
                  features: [
                    "Maximum durability coefficient",
                    "Moisture resistance matrix",
                    "Optimal grain pattern algorithm",
                    "Superior molecular density",
                  ],
                },
                {
                  title: "WALNUT",
                  subtitle: "Luxury Enhancement System",
                  color: "from-cyan-500 to-blue-500",
                  badge: "LUXURY PROTOCOL",
                  badgeColor: "bg-cyan-600/80 text-white border-cyan-500/50",
                  features: [
                    "Advanced aesthetic properties",
                    "Enhanced workability matrix",
                    "Temporal aging optimization",
                    "Premium visual algorithms",
                  ],
                },
                {
                  title: "BIRCH",
                  subtitle: "Versatile Processing Unit",
                  color: "from-yellow-400 to-orange-500",
                  badge: "VERSATILE PROTOCOL",
                  badgeColor: "bg-yellow-600/80 text-black border-yellow-500/50",
                  features: [
                    "Optimal stain absorption",
                    "Smooth surface generation",
                    "Cost-efficiency algorithm",
                    "Multi-finish compatibility",
                  ],
                },
              ].map((material, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group card-3d"
                >
                  <div className={`h-32 bg-gradient-to-br ${material.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-2xl font-orbitron font-bold mb-1 group-hover:scale-110 transition-transform duration-300">
                          {material.title}
                        </div>
                        <div className="text-xs opacity-90 font-space-grotesk tracking-widest">{material.subtitle}</div>
                      </div>
                    </div>
                    <Badge
                      className={`absolute top-3 left-3 ${material.badgeColor} font-orbitron font-semibold tracking-wider backdrop-blur-sm text-xs`}
                    >
                      {material.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {material.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground font-space-grotesk">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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

        {/* Daily Care Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
                  <span className="holographic">DAILY PROTOCOLS</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Execute these routine maintenance algorithms to ensure optimal system performance and extended
                operational lifespan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/30 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-black" />
                    </div>
                    <CardTitle className="font-orbitron text-cyan-400 tracking-wider">CLEANING ALGORITHMS</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-orbitron font-bold text-green-400 mb-3 tracking-wider">EXECUTE:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground font-space-grotesk">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Deploy soft, dry cloth for particle removal
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Immediate liquid contamination neutralization
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Mild soap solution for persistent stains
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Complete moisture elimination protocol
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-red-400 mb-3 tracking-wider">AVOID:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground font-space-grotesk">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        Harsh chemical deployment
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        Excessive moisture saturation
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        Silicone-based surface treatments
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        Abrasive material contact
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Sun className="w-6 h-6 text-black" />
                    </div>
                    <CardTitle className="font-orbitron text-orange-400 tracking-wider">ENVIRONMENT CONTROL</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-orbitron font-bold text-green-400 mb-3 tracking-wider">OPTIMAL CONDITIONS:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground font-space-grotesk">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Temperature: 18-24°C (65-75°F)
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Humidity: 30-50% relative
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        UV radiation shielding
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Atmospheric circulation optimization
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-red-400 mb-3 tracking-wider">HAZARDOUS CONDITIONS:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground font-space-grotesk">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        Extreme temperature fluctuations
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        High humidity environments
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        Direct thermal radiation sources
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        Prolonged UV exposure
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Maintenance Schedule */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
                <span className="holographic">MAINTENANCE SCHEDULE</span>
              </h2>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Execute this temporal maintenance sequence to ensure continuous optimal performance throughout the
                system lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  period: "WEEKLY",
                  color: "border-l-green-500",
                  bgColor: "bg-green-500/10",
                  textColor: "text-green-400",
                  tasks: [
                    "Surface particle elimination protocol",
                    "Component integrity verification",
                    "Damage assessment scan",
                  ],
                },
                {
                  period: "MONTHLY",
                  color: "border-l-yellow-500",
                  bgColor: "bg-yellow-500/10",
                  textColor: "text-yellow-400",
                  tasks: [
                    "Deep cleaning algorithm execution",
                    "Wood conditioning protocol",
                    "Hardware tension optimization",
                  ],
                },
                {
                  period: "ANNUALLY",
                  color: "border-l-blue-500",
                  bgColor: "bg-blue-500/10",
                  textColor: "text-blue-400",
                  tasks: [
                    "Professional system analysis",
                    "Surface refinishing protocol",
                    "Component replacement cycle",
                  ],
                },
              ].map((schedule, index) => (
                <Card
                  key={index}
                  className={`${schedule.color} border-l-4 bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300`}
                >
                  <CardHeader className={schedule.bgColor}>
                    <CardTitle className={`${schedule.textColor} font-orbitron tracking-wider`}>
                      {schedule.period}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {schedule.tasks.map((task, i) => (
                        <li key={i} className="flex items-center text-sm font-space-grotesk">
                          <div
                            className={`w-2 h-2 ${schedule.textColor.replace("text-", "bg-")} rounded-full mr-3`}
                          ></div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 hex-pattern opacity-10"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
                <span className="holographic">ERROR RESOLUTION</span>
              </h2>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Diagnostic protocols for common system anomalies and their corresponding resolution algorithms.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: AlertTriangle,
                  title: "SURFACE DAMAGE PROTOCOL",
                  description: "Minor surface imperfections detected during routine scanning operations.",
                  color: "from-red-500 to-pink-500",
                  borderColor: "border-red-500/30",
                  steps: [
                    "Execute thorough surface decontamination",
                    "Deploy fine-grit abrasive treatment (220-grit)",
                    "Apply matching pigmentation if required",
                    "Implement protective coating restoration",
                  ],
                },
                {
                  icon: Droplets,
                  title: "MOISTURE CONTAMINATION",
                  description: "Liquid infiltration causing surface discoloration anomalies.",
                  color: "from-blue-500 to-cyan-500",
                  borderColor: "border-blue-500/30",
                  steps: [
                    "Deploy controlled thermal treatment",
                    "Execute organic compound neutralization",
                    "Implement abrasive treatment for persistent anomalies",
                    "Restore protective surface coating",
                  ],
                },
                {
                  icon: Hammer,
                  title: "STRUCTURAL INSTABILITY",
                  description: "Joint separation detected due to natural material movement.",
                  color: "from-yellow-400 to-orange-500",
                  borderColor: "border-yellow-500/30",
                  steps: [
                    "Isolate compromised connection point",
                    "Deploy molecular bonding agent",
                    "Execute pressure stabilization protocol",
                    "Remove excess bonding material",
                  ],
                },
              ].map((issue, index) => (
                <Card
                  key={index}
                  className="bg-card/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${issue.color} rounded-2xl flex items-center justify-center flex-shrink-0 neon-purple`}
                      >
                        <issue.icon className="w-8 h-8 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-orbitron font-bold text-purple-400 mb-3 tracking-wider">
                          {issue.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 font-space-grotesk leading-relaxed">
                          {issue.description}
                        </p>
                        <div className={`bg-card/50 border ${issue.borderColor} rounded-lg p-6`}>
                          <h4 className="font-orbitron font-bold text-cyan-400 mb-4 tracking-wider">
                            RESOLUTION SEQUENCE:
                          </h4>
                          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground font-space-grotesk">
                            {issue.steps.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Storage Tips */}
        <section className="py-32 relative">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
                <span className="holographic">STORAGE PROTOCOLS</span>
              </h2>
              <p className="text-xl text-muted-foreground font-space-grotesk leading-relaxed max-w-4xl mx-auto">
                Optimal preservation algorithms protect your quantum entertainment investment and ensure system
                readiness for immediate deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/30 backdrop-blur-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-orbitron text-green-400 tracking-wider">
                    SHORT-TERM STORAGE
                  </CardTitle>
                  <p className="text-muted-foreground font-space-grotesk">For regular deployment cycles</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Maintain optimal atmospheric conditions",
                      "Implement UV radiation shielding",
                      "Ensure thermal stability",
                      "Deploy breathable protective covering",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-space-grotesk">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-orbitron text-blue-400 tracking-wider">
                    LONG-TERM STORAGE
                  </CardTitle>
                  <p className="text-muted-foreground font-space-grotesk">For extended preservation cycles</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Execute complete decontamination protocol",
                      "Apply protective molecular coating",
                      "Deploy acid-free preservation materials",
                      "Implement periodic system monitoring",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-space-grotesk">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  )
}
