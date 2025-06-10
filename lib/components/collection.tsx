"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import CategoryCarousel, { categories } from "@/components/path"

export default function CollectionSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  // Auto-cycle through categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length)
    }, 5000) // Change category every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 relative overflow-hidden min-h-screen flex items-center transition-colors duration-500"
      style={{ backgroundColor: categories[activeIndex].color }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={categories[activeIndex].image || "/placeholder.svg"}
                alt={`${categories[activeIndex].name} Category`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </motion.div>
          <div className="md:w-1/2 md:pl-12 h-[400px] flex flex-col justify-between">
            <CategoryCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-light text-gray-800 mb-6 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8 }}
                key={`title-${activeIndex}`}
              >
                {categories[activeIndex].subtitle}
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                key={`description-${activeIndex}`}
              >
                {categories[activeIndex].description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
