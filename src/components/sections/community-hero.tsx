"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function CommunityHero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      ></motion.div>
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-green-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            >
              Our
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Community
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Join thousands of eco-conscious individuals making a real difference in Algeria's environmental future
            </motion.p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}