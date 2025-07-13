"use client"

import { motion } from "framer-motion"

function SocialResponsibilitySection() {
  const impactAreas = [
    {
      title: "ERADICATING CHILD AND FORCED LABOUR",
      description:
        "We vehemently oppose child labor and any form of forced labor across all levels of our operations. We diligently ensure that none of our labor contractors engage in such practices, upholding the highest ethical standards.",
    },
    {
      title: "MINIMIZING OUR CARBON FOOTPRINT",
      description:
        "We are resolutely dedicated to minimizing our carbon footprint across the supply chain. We not only implement eco-conscious practices within our organization but also inspire our workforce to adopt these practices in their personal lives, contributing to a more sustainable future.",
    },
    {
      title: "REDUCING ENVIRONMENTAL IMPACTS",
      description:
        "Every member of our organization is bound by a shared responsibility to reduce our environmental footprint. We've implemented stringent guidelines, encouraging energy conservation by limiting the use of air conditioners, refrigerators, and turning off electrical equipment when not in use and other such measures.",
    },
    {
      title: "EMPOWERING WOMEN AND ENSURING FAIR WAGES",
      description:
        "We believe in the immense potential of women and the importance of gender equality. Within our organization, discrimination has no place. We provide opportunities for highly skilled disadvantaged workers, focusing on empowering women through continuous development and training.",
    },
    {
      title: "CARING FOR THE ENVIRONMENT AND OUR PEOPLE",
      description:
        "Our commitment extends to actions that minimize harm to both the environment and our people. This includes meticulous waste management practices and prioritizing the health and well-being of our employees.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 italic">OUR IMPACT</h2>
          <h3 className="text-2xl md:text-3xl font-light text-gray-700 mb-6">
            SUSTAINABILITY IS AT THE CORE OF WHAT WE DO
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We have one world and that is our duty to protect the world. As a brand you don't have to choose between
            purpose and profit, you can do both - and we're here to design a for you, end to end.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Placeholder Image or Visual */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Right - List of Impact Areas */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid gap-6">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function SocialResponsibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <SocialResponsibilitySection />
    </main>
  )
}
