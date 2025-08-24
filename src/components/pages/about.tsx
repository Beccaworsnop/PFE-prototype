"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/sections/about-hero"
import { MissionSection } from "@/components/sections/mission"
import { VisionSection } from "@/components/sections/vision"
import { ValuesSection } from "@/components/sections/values"
import { ImpactSection } from "@/components/sections/impact"
import { TeamSection } from "@/components/sections/team"

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <AboutHero />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <ImpactSection />
      <TeamSection />
      <Footer />
    </div>
  )
}
