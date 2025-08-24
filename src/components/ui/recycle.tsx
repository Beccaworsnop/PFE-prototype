"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Monitor, Smartphone, Laptop, Battery } from "lucide-react"

export function RecycleSection() {
  return (
    <Card className="border-blue-200">
      <CardHeader>
        <CardTitle className="text-blue-900">Recycle E-Waste</CardTitle>
        <CardDescription className="text-blue-700">Schedule a pickup or find a drop-off location</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-blue-100">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-900 mb-2">Schedule Pickup</h3>
              <p className="text-sm text-blue-700 mb-4">We'll come to your location to collect your e-waste</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule Now</Button>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6 text-center">
              <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-900 mb-2">Drop-off Location</h3>
              <p className="text-sm text-blue-700 mb-4">Find the nearest collection point to drop off your devices</p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 bg-transparent">
                Find Locations
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Quick Points Reference</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700">Phones: 50-200 pts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Laptop className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700">Laptops: 200-500 pts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Monitor className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700">Monitors: 100-300 pts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Battery className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700">Batteries: 10-50 pts</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
