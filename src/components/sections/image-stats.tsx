"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function ImageStatsSection() {
  return (
    <AnimatedSection delay={0.4}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2">
                <img
                  src="/keyboard.png"
                  alt="E-waste recycling facility"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/30 rounded-full blur-lg"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
            </motion.div>

            {/* Right Side - Content and Stats */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Transforming E-Waste Into
                <span className="block text-blue-400">Sustainable Solutions</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Even business environments should be sustainable. That's why we create unique projects that help
                increase your employees' productivity while protecting the environment.
              </p>

              {/* Stats Cards */}
              <div className="space-y-4">
                {[
                  { label: "10 years", desc: "in the market" },
                  { label: "500+", desc: "completed projects" },
                  { label: "99%", desc: "satisfied customers" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 p-4 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">{stat.label}</span>
                        <span className="text-gray-400">{stat.desc}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
