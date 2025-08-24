"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { StatsSection } from "@/components/sections/stats"
import { ImageStatsSection } from "@/components/sections/image-stats"
import { AcceptedItemsSection } from "@/components/sections/accepted-items"
import { ReasonsSection } from "@/components/sections/reasons"
import { FeaturesSection } from "@/components/sections/features"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta-section"

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <HeroSection />
      <StatsSection />
      <ImageStatsSection />
      <AcceptedItemsSection />
      <ReasonsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
