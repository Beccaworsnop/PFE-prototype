"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Recycle, GraduationCap, Users } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function ActivitiesSection() {
  const activities = [
    {
      title: "Monthly Recycling Challenges",
      icon: Recycle,
      image: "/placeholder.svg?height=200&width=300",
      description: "Compete with community members to recycle the most devices each month",
    },
    {
      title: "Student Ambassador Program",
      icon: GraduationCap,
      image: "/placeholder.svg?height=200&width=300",
      description: "University students spreading e-waste awareness across campuses",
    },
    {
      title: "Corporate Partnership Events",
      icon: Users,
      image: "/placeholder.svg?height=200&width=300",
      description: "Collaborating with businesses for large-scale recycling initiatives",
    },
  ]

  return (
    <AnimatedSection delay={0.6}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Community Activities</h2>
            <p className="text-xl text-gray-300">Ongoing initiatives making a lasting impact</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                style={{ perspective: 1000 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
                  <div className="relative">
                    <motion.img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.08, rotate: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                        <activity.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{activity.description}</p>
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