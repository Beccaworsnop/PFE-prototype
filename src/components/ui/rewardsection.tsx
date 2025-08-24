"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RewardsSectionProps {
  user: any
}

export function RewardsSection({ user }: RewardsSectionProps) {
  const availableRewards = [
    { name: "Amazon Gift Card", points: 1000, value: "$10" },
    { name: "Eco-friendly Water Bottle", points: 500, value: "$15" },
    { name: "Plant a Tree", points: 200, value: "Environmental Impact" },
    { name: "Cash Withdrawal", points: 2000, value: "$20" },
  ]

  return (
    <Card className="border-blue-200">
      <CardHeader>
        <CardTitle className="text-blue-900">Available Rewards</CardTitle>
        <CardDescription className="text-blue-700">Redeem your points for amazing rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableRewards.map((reward, index) => (
            <div key={index} className="p-4 border border-blue-100 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-blue-900">{reward.name}</h3>
                <Badge className="bg-blue-100 text-blue-700">{reward.value}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600">{reward.points} points</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700" disabled={user.points < reward.points}>
                  {user.points >= reward.points ? "Redeem" : "Need more points"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}