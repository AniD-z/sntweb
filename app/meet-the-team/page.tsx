"use client"

import { motion } from "framer-motion"
import Image from "next/image"

function MeetTheTeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://picsum.photos/id/1027/300/300",
      bio: "With over 15 years in the apparel industry, Sarah leads our vision for sustainable sourcing.",
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      image: "https://picsum.photos/id/1025/300/300",
      bio: "Michael oversees our global supply chain operations and quality assurance programs.",
    },
    {
      name: "Emily Rodriguez",
      position: "Sustainability Director",
      image: "https://picsum.photos/id/1024/300/300",
      bio: "Emily drives our environmental and social responsibility initiatives across all operations.",
    },
    {
      name: "David Kim",
      position: "Business Development",
      image: "https://picsum.photos/id/1023/300/300",
      bio: "David builds strategic partnerships and expands our global network of suppliers.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-800 mb-8 text-center italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Team
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our dedicated team of professionals brings together decades of experience in apparel sourcing, supply chain
          management, and sustainable business practices.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{member.position}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MeetTheTeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <MeetTheTeamSection />
    </main>
  )
}
