export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: "plinko" | "traditional"
  materials: string[]
  dimensions: string
  features: string[]
  fullDescription: string
}

export const projects: Project[] = [
  {
    id: "classic-plinko-deluxe",
    title: "Classic Plinko Deluxe",
    description:
      "Our flagship Plinko board featuring premium oak construction with brass pegs and multiple scoring zones.",
    image: "/classic.png",
    category: "plinko",
    materials: ["Premium Oak", "Brass Pegs", "Acrylic Scoring Zones"],
    dimensions: "90cm x 120cm",
    features: ["15 scoring slots", "Adjustable difficulty", "Premium finish"],
    fullDescription:
      "The Classic Plinko Deluxe represents the pinnacle of traditional Plinko craftsmanship. Hand-selected premium oak provides durability and beauty, while precision-placed brass pegs ensure consistent ball movement. The board features 15 distinct scoring zones with clear acrylic markers for easy visibility. Each board is individually crafted and finished with multiple coats of protective lacquer.",
  },
  {
    id: "mini-plinko-portable",
    title: "Mini Plinko Portable",
    description: "Compact travel-friendly Plinko board perfect for events and smaller spaces.",
    image: "/small.png",
    category: "plinko",
    materials: ["Birch Plywood", "Steel Pegs", "Magnetic Base"],
    dimensions: "45cm x 60cm",
    features: ["Foldable design", "Magnetic ball collection", "Carrying case included"],
    fullDescription:
      "Designed for portability without compromising on quality, the Mini Plinko Portable features a clever folding mechanism and magnetic components. The birch plywood construction keeps weight minimal while maintaining structural integrity. Perfect for trade shows, parties, or anywhere space is at a premium.",
  },
  {
    id: "led-plinko-spectacular",
    title: "LED Plinko Spectacular",
    description: "Modern Plinko board with integrated LED lighting system for enhanced visual appeal.",
    image: "/modern2.png",
    category: "plinko",
    materials: ["Walnut Wood", "LED Strip Lights", "Tempered Glass"],
    dimensions: "100cm x 130cm",
    features: ["RGB LED system", "Sound effects", "Remote control"],
    fullDescription:
      "The LED Plinko Spectacular combines traditional craftsmanship with modern technology. Embedded LED strips illuminate the ball path, while sound effects enhance the gaming experience. The walnut construction provides a sophisticated appearance, and the tempered glass front protects the electronics while maintaining visibility.",
  },
  {
    id: "vintage-skittles-set",
    title: "Vintage Skittles Set",
    description: "Traditional English skittles game with hand-turned wooden pins and leather ball.",
    image: "/engllish.png",
    category: "traditional",
    materials: ["Ash Wood", "Leather Ball", "Hemp Rope"],
    dimensions: "200cm playing area",
    features: ["9 hand-turned pins", "Regulation leather ball", "Traditional rules included"],
    fullDescription:
      "Our Vintage Skittles Set recreates the classic English pub game with authentic materials and traditional construction methods. Each pin is individually hand-turned from seasoned ash wood, and the leather ball is hand-stitched using traditional techniques. Includes a comprehensive rule book covering various regional variations of the game.",
  },
  {
    id: "ring-toss-deluxe",
    title: "Ring Toss Deluxe",
    description: "Premium ring toss game with weighted rings and adjustable post heights.",
    image: "/toss.png",
    category: "traditional",
    materials: ["Pine Base", "Rope Rings", "Brass Hardware"],
    dimensions: "80cm x 80cm base",
    features: ["Adjustable post heights", "Weighted rope rings", "Score tracking board"],
    fullDescription:
      "The Ring Toss Deluxe elevates this classic game with premium materials and thoughtful design. The solid pine base provides stability, while the adjustable posts allow for varying difficulty levels. Hand-woven rope rings are perfectly weighted for optimal throwing characteristics.",
  },
  {
    id: "cornhole-championship",
    title: "Cornhole Championship",
    description: "Tournament-grade cornhole boards with regulation dimensions and premium bean bags.",
    image: "/tour.png",
    category: "traditional",
    materials: ["Plywood Deck", "Canvas Bean Bags", "Aluminum Frame"],
    dimensions: "120cm x 60cm per board",
    features: ["Regulation tournament size", "Weather-resistant finish", "8 premium bean bags"],
    fullDescription:
      "Built to official tournament specifications, our Cornhole Championship set features precision-cut holes and perfectly balanced boards. The weather-resistant finish ensures durability for outdoor use, while the premium canvas bean bags maintain their shape and weight through countless games.",
  },
  {
    id: "giant-jenga-tower",
    title: "Giant Jenga Tower",
    description: "Oversized wooden block tower game perfect for outdoor events and parties.",
    image: "/junga.png",
    category: "traditional",
    materials: ["Pine Blocks", "Sanded Finish", "Storage Bag"],
    dimensions: "Starts at 60cm, builds to 150cm+",
    features: ["54 precision-cut blocks", "Smooth sanded finish", "Portable storage"],
    fullDescription:
      "Our Giant Jenga Tower transforms the classic block-stacking game into an exciting large-scale experience. Each of the 54 blocks is precision-cut and hand-sanded for smooth handling. The game starts at 60cm tall and can reach heights of over 150cm, creating thrilling gameplay for all ages.",
  },
  {
    id: "custom-plinko-corporate",
    title: "Custom Corporate Plinko",
    description: "Bespoke Plinko board with custom branding and corporate messaging.",
    image: "/custom.png",
    category: "plinko",
    materials: ["Custom Wood Selection", "Laser Engraving", "Custom Paint"],
    dimensions: "Variable (custom sizing)",
    features: ["Custom branding", "Bespoke design", "Corporate messaging"],
    fullDescription:
      "The Custom Corporate Plinko board is tailored specifically to your brand requirements. From wood selection to custom engraving and paint schemes, every aspect can be personalised. Perfect for trade shows, corporate events, and promotional activities. Our design team works closely with clients to create truly unique pieces that reflect their brand identity.",
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}

export const getProjectsByCategory = (category: "plinko" | "traditional"): Project[] => {
  return projects.filter((project) => project.category === category)
}
