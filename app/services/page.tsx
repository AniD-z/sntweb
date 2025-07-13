"use client"

import { motion } from "framer-motion"

function ServicesSection() {
  const services = [
    {
      title: "Product & Fabric Innovation",
      backgroundImage: "https://picsum.photos/id/1043/1200/600",
      services: ["Trend Forecasting", "Product Design", "Product Development"],
    },
    {
      title: "Fabric Sourcing & Innovation",
      backgroundImage: "https://picsum.photos/id/1074/1200/600",
      services: [
        "Premium Fabric Selection",
        "Sustainable Material Sourcing",
        "Technical Textile Innovation",
        "Quality Testing & Certification",
      ],
    },
    {
      title: "Supply Chain Management",
      backgroundImage: "https://picsum.photos/id/1076/1200/600",
      services: [
        "Global Product Sourcing",
        "Supplier Partner Management",
        "Programme and Order Management",
        "Quality Assurance",
      ],
    },
    {
      title: "Logistics",
      backgroundImage: "https://picsum.photos/id/1078/1200/600",
      services: [
        "Global Freight Management",
        "Sea Freight Services",
        "Air Freight Services",
        "Warehousing facility at destination",
      ],
    },
  ]

  return (
    <section className="w-full">
      <motion.div
        className="text-center py-16 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 italic">Our Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto px-4">
          Comprehensive solutions for every stage of your apparel sourcing journey
        </p>
      </motion.div>

      {services.map((service, index) => (
        <motion.div
          key={index}
          className="relative w-full h-[60vh] min-h-[500px] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 * index }}
          viewport={{ once: true }}
        >
          {/* Background Image with Grey Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <motion.h3
                  className="text-3xl md:text-4xl font-light text-white mb-8 italic"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-200">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesSection />
    </main>
  )
}
