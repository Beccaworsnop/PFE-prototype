"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, Shield, FileText, Users, BarChart3, CheckCircle, Clock, Award, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function CompanyServicesPage() {
  const services = [
    {
      icon: Truck,
      title: "Bulk Collection Service",
      description: "Large-scale e-waste collection for businesses and organizations",
      features: ["Scheduled regular pickups", "Volume-based pricing", "Fleet of specialized vehicles"],
      price: "Custom Quote",
    },
    {
      icon: Shield,
      title: "Enterprise Data Destruction",
      description: "Military-grade data destruction with full compliance certification",
      features: ["NIST 800-88 compliance", "Chain of custody documentation", "On-site destruction available"],
      price: "From $50/device",
    },
    {
      icon: FileText,
      title: "Compliance Reporting",
      description: "Detailed environmental impact and compliance reports",
      features: ["Monthly/quarterly reports", "Carbon footprint analysis", "Regulatory compliance tracking"],
      price: "Included",
    },
    {
      icon: BarChart3,
      title: "Asset Recovery",
      description: "Maximize value recovery from your IT assets",
      features: ["Asset valuation", "Refurbishment services", "Revenue sharing options"],
      price: "Revenue Share",
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: "Corporate Rewards",
      description: "Enhanced point multipliers and exclusive corporate benefits",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal support for all your e-waste management needs",
    },
    {
      icon: Clock,
      title: "Priority Service",
      description: "Fast-track processing and priority scheduling",
    },
    {
      icon: Zap,
      title: "Custom Solutions",
      description: "Tailored programs to meet your specific requirements",
    },
  ]

  const industries = [
    { name: "Healthcare", description: "HIPAA-compliant medical device recycling" },
    { name: "Financial Services", description: "Secure destruction of financial data systems" },
    { name: "Education", description: "School and university IT equipment recycling" },
    { name: "Government", description: "Public sector compliance and security standards" },
    { name: "Manufacturing", description: "Industrial equipment and machinery recycling" },
    { name: "Retail", description: "POS systems and retail technology disposal" },
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
                Enterprise
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Comprehensive e-waste management solutions for businesses. Secure, compliant, and sustainable disposal
                of your corporate IT assets.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Enterprise Services</h2>
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
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-400 rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{service.price}</Badge>
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

      {/* Benefits */}
      <AnimatedSection delay={0.4}>
        <section className="py-20 px-4 bg-gray-800/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Corporate Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center h-full">
                    <benefit.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-300">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries */}
      <AnimatedSection delay={0.6}>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-300">{industry.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection delay={0.8}>
        <section className="py-20 px-4 bg-purple-600/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Corporate Clients" },
                { number: "1M+", label: "Devices Processed" },
                { number: "99.9%", label: "Data Destruction Rate" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={1}>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your business achieve its sustainability goals while ensuring complete data
              security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 rounded-full">
                Request Quote
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  )
}