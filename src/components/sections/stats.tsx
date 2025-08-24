"use client"

import { useLanguage } from "@/components/providers/providers"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <AnimatedSection delay={0.2}>
      <section className="py-16 px-4 bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "50K+", label: t("devicesRecycled") },
              { number: "25K+", label: t("activeUsers") },
              { number: "1M+", label: t("pointsEarned") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
