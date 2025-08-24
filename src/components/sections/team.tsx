"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Ahmed Benali",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Environmental engineer with 15+ years in sustainable technology",
    },
    {
      name: "Fatima Khelifi",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Tech innovator specializing in recycling automation systems",
    },
    {
      name: "Omar Mansouri",
      position: "Operations Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Logistics expert ensuring efficient e-waste collection nationwide",
    },
    {
      name: "Amina Boudjema",
      position: "Sustainability Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Environmental scientist driving our green initiatives",
    },
    {
      name: "Yacine Hamidi",
      position: "Data Security Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Cybersecurity specialist ensuring complete data protection",
    },
    {
      name: "Leila Cherif",
      position: "Community Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Building bridges between technology and environmental awareness",
    },
  ]

  return (
    <AnimatedSection delay={1}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The passionate people behind Reteck Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}