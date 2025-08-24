"use client"

import { Shield, Leaf, Users } from "lucide-react"
import { useLanguage } from "@/components/providers/providers"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t("secureData"),
      description: t("secureDataDesc"),
    },
    {
      icon: Leaf,
      title: t("ecoFriendly"),
      description: t("ecoFriendlyDesc"),
    },
    {
      icon: Users,
      title: t("communityImpact"),
      description: t("communityImpactDesc"),
    },
  ]

  return (
    <AnimatedSection delay={1}>
      <section className="py-16 px-4 bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("whyChoose")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
