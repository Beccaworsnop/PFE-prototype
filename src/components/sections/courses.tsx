"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function CoursesSection() {
  const courses = [
    {
      title: "Electronics Repair Fundamentals",
      duration: "6 weeks",
      level: "Beginner",
      image: "/placeholder.svg?height=250&width=350",
      description: "Learn basic electronics repair skills and sustainable practices",
      students: 45,
    },
    {
      title: "Advanced Circuit Analysis",
      duration: "8 weeks",
      level: "Advanced",
      image: "/placeholder.svg?height=250&width=350",
      description: "Deep dive into complex electronic systems and troubleshooting",
      students: 28,
    },
    {
      title: "Sustainable Technology Practices",
      duration: "4 weeks",
      level: "All Levels",
      image: "/placeholder.svg?height=250&width=350",
      description: "Understanding environmental impact and sustainable tech solutions",
      students: 67,
    },
  ]

  return (
    <AnimatedSection delay={0.4}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Educational Courses</h2>
            <p className="text-xl text-gray-300">Building skills for a sustainable future</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                style={{ perspective: 1000 }}
              >
                <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden h-full">
                  <div className="relative">
                    <motion.img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-blue-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-xs font-semibold">{course.level}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <span>⏱️ {course.duration}</span>
                      <span>👥 {course.students} students</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{course.description}</p>
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