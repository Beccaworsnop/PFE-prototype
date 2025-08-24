"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone } from "lucide-react"

export function RecentActivity() {
  const recentRecycling = [
    { device: "iPhone 12", points: 150, date: "2024-01-20", status: "Processed" },
    { device: "Dell Laptop", points: 300, date: "2024-01-18", status: "Processed" },
    { device: "Samsung Monitor", points: 200, date: "2024-01-15", status: "Processing" },
    { device: "iPad Air", points: 120, date: "2024-01-12", status: "Processed" },
  ]

  return (
    <Card className="border-blue-200">
      <CardHeader>
        <CardTitle className="text-blue-900">Recent Recycling Activity</CardTitle>
        <CardDescription className="text-blue-700">Your latest e-waste recycling submissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentRecycling.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-blue-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-blue-900">{item.device}</p>
                  <p className="text-sm text-blue-600">{item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-blue-900">+{item.points} pts</p>
                <Badge
                  variant={item.status === "Processed" ? "default" : "secondary"}
                  className={
                    item.status === "Processed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
