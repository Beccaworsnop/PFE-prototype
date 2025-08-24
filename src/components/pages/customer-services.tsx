"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Laptop, Monitor, Battery, Shield, Truck, MapPin, Award, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function CustomerServicesPage() {
  const services = [
    {
      icon: Truck,
      title: "Free Pickup Service",
      description: "We'll come to your location to collect your e-waste at no extra cost",
      features: ["Scheduled pickup", "Same-day service available", "No minimum quantity"],
      price: "Free",
    },
    {
      icon: MapPin,
      title: "Drop-off Locations",
      description: "Convenient drop-off points across Algeria for your electronic waste",
      features: ["Multiple locations", "Extended hours", "Instant point calculation"],
      price: "Free",
    },
    {
      icon: Shield,
      title: "Data Destruction",
      description: "Certified secure data wiping for all storage devices",
      features: ["DOD 5220.22-M standard", "Certificate provided", "100% data security"],
      price: "Included",
    },
    {
      icon: Award,
      title: "Rewards Program",
      description: "Earn points for every device you recycle with us",
      features: ["Instant points", "Multiple redemption options", "Bonus campaigns"],
      price: "Earn Points",
    },
  ]

  const acceptedItems = [
    { icon: Smartphone, name: "Smartphones", points: "50-200", condition: "Any condition" },
    { icon: Laptop, name: "Laptops", points: "200-500", condition: "Working or broken" },
    { icon: Monitor, name: "Monitors", points: "100-300", condition: "LCD/LED/CRT" },
    { icon: Battery, name: "Batteries", points: "10-50", condition: "All types" },
  ]

  const process = [
    {
      step: 1,
      title: "Schedule or Drop-off",
      description: "Book a pickup or visit our drop-off location",
    },
    {
      step: 2,
      title: "Device Assessment",
      description: "We evaluate your devices and calculate points",
    },
    {
      step: 3,
      title: "Data Destruction",
      description: "Secure wiping of all personal data",
    },
    {
      step: 4,
      title: "Earn Rewards",
      description: "Points added to your account instantly",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Customer
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Services
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Convenient e-waste recycling services for individuals. Turn your old devices into rewards while
                protecting the environment.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{service.price}</Badge>
                      </div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Accepted Items */}
      <AnimatedSection delay={0.4}>
        <section className="py-20 px-4 bg-gray-800/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">What We Accept</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {acceptedItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
                    <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-2">{item.points} pts</Badge>
                    <p className="text-sm text-gray-400">{item.condition}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection delay={0.6}>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.8}>
        <section className="py-20 px-4 bg-blue-600/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Recycling?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of customers who are making a difference while earning rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-full">
                Schedule Pickup
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full bg-transparent"
              >
                Find Drop-off Location
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  )
}