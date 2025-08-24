"use client"

import { Card } from "@/components/ui/card"
import { Target } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function MissionSection() {
  return (
    <AnimatedSection delay={0.2}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 lg:order-1" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  We are dedicated to creating a sustainable future by transforming electronic waste into valuable
                  resources while rewarding our community for their environmental consciousness. Our mission extends
                  beyond recycling - we're building a circular economy that benefits both people and planet.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through cutting-edge technology and community engagement, we're making e-waste recycling accessible,
                  rewarding, and impactful for every Algerian citizen and business.
                </p>
              </Card>
            </motion.div>
            <motion.div className="order-1 lg:order-2" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="relative">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mission Image"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
