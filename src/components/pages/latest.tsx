"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/providers/providers"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function LatestPage() {
  const { t } = useLanguage()

  const articles = [
    {
      id: 1,
      title: "Algeria's E-Waste Management Revolution: New Policies and Opportunities",
      excerpt:
        "The Algerian government announces new regulations for electronic waste management, creating opportunities for sustainable tech companies.",
      image: "/placeholder.svg?height=300&width=400",
      category: t("latest.category.news"),
      author: "Ahmed Benali",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Latest Hardware Trends: What's Worth Recycling in 2024",
      excerpt:
        "Discover which electronic devices offer the best recycling value and environmental impact in today's market.",
      image: "/placeholder.svg?height=300&width=400",
      category: t("hardware"),
      author: "Fatima Khelifi",
      date: "March 12, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Innovative Recycling Technologies Transforming North Africa",
      excerpt:
        "How new recycling technologies are making e-waste processing more efficient and environmentally friendly across the region.",
      image: "/placeholder.svg?height=300&width=400",
      category: t("innovation"),
      author: "Omar Mansouri",
      date: "March 10, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Community Impact: How Local Recycling Programs Are Making a Difference",
      excerpt:
        "Success stories from Algerian communities that have embraced e-waste recycling and the positive changes they've experienced.",
      image: "/placeholder.svg?height=300&width=400",
      category: t("recycling"),
      author: "Amina Boudjema",
      date: "March 8, 2024",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "The Future of Sustainable Technology in Algeria",
      excerpt:
        "Exploring upcoming trends in sustainable technology and how Algeria is positioning itself as a leader in green tech.",
      image: "/placeholder.svg?height=300&width=400",
      category: t("innovation"),
      author: "Yacine Hamidi",
      date: "March 5, 2024",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Data Security in E-Waste: Best Practices for Businesses",
      excerpt:
        "Essential guidelines for businesses to ensure complete data destruction when recycling electronic equipment.",
      image: "/placeholder.svg?height=300&width=400",
      category: t(".news"),
      author: "Leila Cherif",
      date: "March 3, 2024",
      readTime: "5 min read",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case t(".hardware"):
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case t(".news"):
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case t("recycling"):
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case t("innovation"):
        return "bg-orange-500/20 text-orange-300 border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      {/* Articles Grid */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getCategoryColor(article.category)} border`}>{article.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                        >
                          {t("latest.readMore")}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
