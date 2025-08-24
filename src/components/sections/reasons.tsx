"use client"

import { Card } from "@/components/ui/card"
import { Award, Smartphone, Laptop, Monitor } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function ReasonsSection() {
  const reasons = [
    {
      number: "1",
      title: "Quality",
      description: "We use only the best materials and equipment, maintaining our reputation for over 10 years",
      icon: Award,
    },
    {
      number: "2",
      title: "Speed",
      description: "We value your time and guarantee fast results while maintaining high quality standards",
      icon: Smartphone,
    },
    {
      number: "3",
      title: "Variety",
      description: "We offer a wide selection of equipment with consideration for all your needs and budget",
      icon: Laptop,
    },
    {
      number: "4",
      title: "Accessibility",
      description: "Ready to implement projects of any complexity anywhere in the country",
      icon: Monitor,
    },
  ]

  return (
    <AnimatedSection delay={0.8}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            4 reasons why it's convenient
            <span className="block text-blue-400">and reliable to work with us</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 h-full">
                  <div className="text-center">
                    <motion.div
                      className="text-6xl font-bold text-gray-600 mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {item.number}
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                    >
                      <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}