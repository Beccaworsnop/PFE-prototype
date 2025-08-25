"use client"

import { Card } from "@/components/ui/card"
import { Eye } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function VisionSection() {
  return (
    <AnimatedSection delay={0.4}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="relative">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2">
                  <img
                    src="/fix.png"
                    alt="Vision Image"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/30 rounded-full blur-lg"
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-blue-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To become the leading e-waste recycling platform in Algeria, fostering environmental responsibility
                  and technological sustainability across North Africa. We envision a future where every electronic
                  device has a second life.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  While we aim to build the largest tech community of e-waste awareness and robotics anthusiasts
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
