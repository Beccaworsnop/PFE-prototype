"use client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CommunityHero } from "@/components/sections/community-hero"
import { EventsSection } from "@/components/sections/events"
import { CoursesSection } from "@/components/sections/courses"
import { ActivitiesSection } from "@/components/sections/activities-section"
import { JoinCommunitySection } from "@/components/sections/join-community"

export function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <CommunityHero />
      <EventsSection />
      <CoursesSection />
      <ActivitiesSection />
      <JoinCommunitySection />
      <Footer />
    </div>
  )
}
