"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Globe, Shield, Truck } from "lucide-react"

function WhatWeOfferSection() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-gray-600" />,
      title: "Global Sourcing",
      description: "Access to a worldwide network of vetted suppliers and manufacturers",
    },
    {
      icon: <Shield className="w-8 h-8 text-gray-600" />,
      title: "Quality Assurance",
      description: "Comprehensive quality control and inspection services",
    },
    {
      icon: <Truck className="w-8 h-8 text-gray-600" />,
      title: "Logistics Management",
      description: "End-to-end supply chain and logistics coordination",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gray-600" />,
      title: "Compliance Support",
      description: "Ensuring all products meet industry standards and regulations",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-800 mb-8 text-center italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h2>

        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Left: Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://picsum.photos/id/1043/600/400"
              alt="What We Offer"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Right: Paragraphs */}
          <div className="md:w-1/2">
            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We provide comprehensive apparel sourcing and supply chain solutions tailored to meet your specific
              business needs. Our expertise spans across multiple categories and markets.
            </motion.p>
            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From initial concept development to final delivery, we handle every aspect of the sourcing process,
              ensuring quality, compliance, and timely delivery while maintaining cost-effectiveness.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WhatWeOfferPage() {
  return (
    <main className="min-h-screen bg-white">
      <WhatWeOfferSection />
    </main>
  )
}
