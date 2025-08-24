"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp, Recycle } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does the e-waste recycling process work?",
      answer:
        "We collect your electronic devices, safely extract valuable materials, securely destroy data, and process components through certified recycling methods. You earn points for each device based on its type and condition.",
    },
    {
      question: "What types of devices do you accept?",
      answer:
        "We accept smartphones, laptops, tablets, monitors, CPUs, batteries, and most electronic devices. Each device type has different point values based on materials and processing complexity.",
    },
    {
      question: "How do I earn and redeem points?",
      answer:
        "You earn points by recycling devices with us. Points can be redeemed for cash, gift cards, eco-friendly products, or donated to environmental causes. Check your dashboard to track your points balance.",
    },
    {
      question: "Is my data completely secure during recycling?",
      answer:
        "Yes, we provide certified data destruction services. All storage devices undergo complete data wiping using industry-standard methods, and we provide certificates of data destruction for your records.",
    },
    {
      question: "Do you offer pickup services?",
      answer:
        "Yes, we offer convenient pickup services for both individual customers and businesses. You can schedule a pickup through our website or app, and we'll collect your e-waste at your preferred time.",
    },
  ]

  return (
    <AnimatedSection delay={1.2}>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text and Decorative Element */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Find answers to common questions about our e-waste recycling services and rewards program.
              </p>

              {/* Decorative Element */}
              <div className="relative">
                <motion.div
                  className="w-32 h-64 bg-gradient-to-t from-green-600/20 to-green-400/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Recycle className="w-16 h-16 text-green-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Q&A */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
                    <Collapsible
                      open={openQuestion === index}
                      onOpenChange={() => setOpenQuestion(openQuestion === index ? null : index)}
                    >
                      <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-800/60 transition-colors">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                          <motion.div
                            animate={{ rotate: openQuestion === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {openQuestion === index ? (
                              <ChevronUp className="w-5 h-5 text-blue-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-blue-400" />
                            )}
                          </motion.div>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6">
                        <motion.p
                          className="text-gray-300 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
