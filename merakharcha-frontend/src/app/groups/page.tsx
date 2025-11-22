"use client"

import { Plus, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function GroupsPage() {
  const groups = [
    { id: 1, name: "Roommates", members: 3, balance: "You owe ₹450", color: "bg-primary" },
    { id: 2, name: "Office Team", members: 5, balance: "Settled", color: "bg-green-500" },
    { id: 3, name: "Weekend Trip", members: 4, balance: "You are owed ₹200", color: "bg-blue-500" },
    { id: 4, name: "Project Alpha", members: 6, balance: "You owe ₹1200", color: "bg-purple-500" },
  ]

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Groups</h1>
            <p className="text-muted-foreground">Manage and track expenses across your groups</p>
          </div>
          <Link href="/groups/create">
            <Button size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Create Group
            </Button>
          </Link>
        </div>

        {/* Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Link key={group.id} href={`/groups/${group.id}`}>
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`${group.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle>{group.name}</CardTitle>
                  <CardDescription>{group.members} members</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground text-lg">{group.balance}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
