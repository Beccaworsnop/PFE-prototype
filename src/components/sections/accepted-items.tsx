"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Laptop, Monitor, Battery, Cpu, Shield } from "lucide-react"
import { useLanguage } from "@/components/providers/providers"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function AcceptedItemsSection() {
  const { t } = useLanguage()

  const items = [
    { icon: Smartphone, name: t("smartphones"), points: "50-200 pts" },
    { icon: Laptop, name: t("laptops"), points: "200-500 pts" },
    { icon: Monitor, name: t("monitors"), points: "100-300 pts" },
    { icon: Battery, name: t("batteries"), points: "10-50 pts" },
    { icon: Cpu, name: t("cpus"), points: "150-400 pts" },
    { icon: Shield, name: t("tablets"), points: "75-250 pts" },
  ]

  return (
    <AnimatedSection delay={0.6}>
      <section className="py-16 px-4 bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("whatWeAccept")}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow border-gray-700 bg-gray-800/40 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    >
                      <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    </motion.div>
                    <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {item.points}
                    </Badge>
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