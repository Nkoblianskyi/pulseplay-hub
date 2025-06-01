import Link from "next/link"
import { Phone, Mail, MapPin, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-black border-t border-purple-500/20">
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-400 rounded-xl flex items-center justify-center neon-purple">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-xl font-orbitron font-bold holographic">PulsePlay</span>
                <div className="text-xs font-space-grotesk text-cyan-400 tracking-widest">HUB</div>
              </div>
            </div>
            <p className="text-muted-foreground font-space-grotesk leading-relaxed">
              Crafting premium wooden games and Plinko boards with futuristic precision and traditional excellence.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-orbitron font-bold text-purple-400 mb-6 tracking-wider">NAVIGATION</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/workshops", label: "Workshops" },
                { href: "/care-guide", label: "Care Guide" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors font-space-grotesk relative group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron font-bold text-purple-400 mb-6 tracking-wider">LEGAL</h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/cookie-policy", label: "Cookie Policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors font-space-grotesk relative group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron font-bold text-purple-400 mb-6 tracking-wider">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 group-hover:text-yellow-400 transition-colors" />
                <div className="font-space-grotesk text-sm text-muted-foreground">
                  <div>St Ann's Street 22</div>
                  <div>Manchester, M2 7LF</div>
                  <div>United Kingdom</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:text-yellow-400 transition-colors" />
                <a
                  href="tel:+447924195426"
                  className="font-space-grotesk text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  +44 7924 195 426
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-yellow-400 transition-colors" />
                <a
                  href="mailto:info@pulseplayhub.com"
                  className="font-space-grotesk text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  info@pulseplayhub.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground font-space-grotesk text-sm">
              &copy; 2025 PulsePlay Hub. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground font-space-grotesk">Powered by</span>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-xs text-cyan-400 font-orbitron">INNOVATION</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
