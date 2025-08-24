"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function EventsSection() {
  const events = [
    {
      title: "E-Waste Awareness Workshop",
      date: "March 15, 2024",
      location: "Algiers University",
      image: "/placeholder.svg?height=300&width=400",
      description: "Educational workshop on proper e-waste disposal and environmental impact",
      attendees: 150,
    },
    {
      title: "Community Cleanup Drive",
      date: "February 28, 2024",
      location: "Oran City Center",
      image: "/placeholder.svg?height=300&width=400",
      description: "Volunteers collected over 2 tons of electronic waste from local neighborhoods",
      attendees: 200,
    },
    {
      title: "Tech Repair Café",
      date: "February 10, 2024",
      location: "Constantine Tech Hub",
      image: "/placeholder.svg?height=300&width=400",
      description: "Free device repair services and electronics education for the community",
      attendees: 80,
    },
  ]

  return (
    <AnimatedSection delay={0.2}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Community Events</h2>
            <p className="text-xl text-gray-300">Bringing people together for environmental action</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
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
                <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden h-full">
                  <div className="relative">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-sm font-semibold">{event.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-blue-400 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                    <div className="text-gray-400 text-sm">📍 {event.location}</div>
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