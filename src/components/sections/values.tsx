"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Award, Users, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function ValuesSection() {
  const values = [
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Committed to protecting our planet through responsible recycling practices",
    },
    {
      icon: Award,
      title: "Innovation Excellence",
      description: "Pioneering cutting-edge solutions for waste management and resource recovery",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building strong partnerships with communities for environmental education",
    },
    {
      icon: CheckCircle,
      title: "Transparency & Trust",
      description: "Maintaining open processes and fair reward systems for all stakeholders",
    },
  ]

  return (
    <AnimatedSection delay={0.6}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl font-bold text-white">Our Values</h2>
            </div>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
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