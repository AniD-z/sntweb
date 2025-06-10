"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { SaladIcon as Dress, ShoppingBag, Shirt, FootprintsIcon as Shoe, Watch } from "lucide-react"

// Update the categories array to use grey color palette
export const categories = [
  {
    name: "Dresses",
    icon: Dress,
    color: "#F5F5F5", // Light grey
    image: "https://picsum.photos/id/1011/600/400",
    subtitle: "Elegance in Every Stitch",
    description:
      "Our dresses blend timeless silhouettes with modern details, creating pieces that make you feel confident and beautiful. Each design celebrates femininity with thoughtful craftsmanship and premium fabrics that move with grace.",
  },
  {
    name: "Bags",
    icon: ShoppingBag,
    color: "#E0E0E0", // Medium light grey
    image: "https://picsum.photos/id/1012/600/400",
    subtitle: "Carry Your Style",
    description:
      "More than accessories, our bags are statements of intention and taste. Crafted with precision and an eye for detail, each piece balances functionality with sophisticated design, becoming a trusted companion for your daily journey.",
  },
  {
    name: "Tops",
    icon: Shirt,
    color: "#CCCCCC", // Medium grey
    image: "https://picsum.photos/id/1013/600/400",
    subtitle: "Express Your Essence",
    description:
      "Our tops are designed to be versatile canvases for self-expression. From structured silhouettes to flowing fabrics, each piece is created to enhance your natural presence while providing comfort that lasts throughout the day.",
  },
  {
    name: "Shoes",
    icon: Shoe,
    color: "#BDBDBD", // Medium dark grey
    image: "https://picsum.photos/id/1014/600/400",
    subtitle: "Walk in Confidence",
    description:
      "Every step matters in our carefully crafted footwear. Balancing aesthetics with ergonomics, our shoes support your journey with subtle elegance and lasting comfort, grounding your style with purpose and intention.",
  },
  {
    name: "Accessories",
    icon: Watch,
    color: "#A9A9A9", // Dark grey
    image: "https://picsum.photos/id/1015/600/400",
    subtitle: "Details that Dazzle",
    description:
      "The finishing touches that complete your look. Our accessories are minimal yet impactful, designed to accentuate rather than overwhelm, adding that perfect note of refinement to any ensemble with thoughtful design and quality materials.",
  },
]

interface CategoryCarouselProps {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export default function CategoryCarousel({ activeIndex, setActiveIndex }: CategoryCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = activeIndex * (carouselRef.current.offsetWidth / 5)
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" })
    }
  }, [activeIndex])

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-8">
      <div ref={carouselRef} className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            className="flex-none w-1/5 snap-center"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{
              opacity: index === activeIndex ? 1 : 0.5,
              scale: index === activeIndex ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center p-2">
              <motion.button
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
                animate={{
                  width: index === activeIndex ? 56 : 48,
                  height: index === activeIndex ? 56 : 48,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => handleClick(index)}
              >
                <category.icon className={`${index === activeIndex ? "w-7 h-7" : "w-6 h-6"} text-gray-600`} />
              </motion.button>
              <motion.p
                className="mt-2 text-sm text-gray-600 h-5 overflow-hidden"
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  y: index === activeIndex ? 0 : 10,
                  height: index === activeIndex ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {category.name}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
