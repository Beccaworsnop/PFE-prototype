"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, LogOut, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { DashboardStats } from "@/components/ui/dashboardstats"
import { RecentActivity } from "@/components/ui/recentactivity"
import { RewardsSection } from "@/components/ui/rewardsection"
import { RecycleSection } from "@/components/ui/recycle"

export function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900">Reteck Solutions</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-600" />
                <span className="text-blue-900 font-medium">{user.name || user.email}</span>
              </div>
              <Button variant="ghost" onClick={handleLogout} className="text-blue-700">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Welcome back, {user.name?.split(" ")[0] || "User"}!</h1>
          <p className="text-blue-700">Track your recycling progress and redeem rewards.</p>
        </div>

        <DashboardStats user={user} />

        {/* Main Content */}
        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="recycle">Recycle Now</TabsTrigger>
          </TabsList>

          <TabsContent value="activity" className="space-y-6">
            <RecentActivity />
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <RewardsSection user={user} />
          </TabsContent>

          <TabsContent value="recycle" className="space-y-6">
            <RecycleSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
