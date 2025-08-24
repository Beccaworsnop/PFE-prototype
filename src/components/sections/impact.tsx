"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function ImpactSection() {
  const stats = [
    { number: "50K+", label: "Devices Recycled", icon: "📱" },
    { number: "25K+", label: "Active Users", icon: "👥" },
    { number: "100+", label: "Partner Companies", icon: "🏢" },
    { number: "500T", label: "CO₂ Saved", icon: "🌱" },
  ]

  return (
    <AnimatedSection delay={0.8}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">Making a difference in Algeria's environmental future</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}