"use client"

import { ArrowLeft, Plus, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function GroupDetailPage({ params }: { params: { id: string } }) {
  const group = {
    id: params.id,
    name: "Roommates",
    members: 3,
    balance: "You owe ₹450",
    expenses: [
      { id: 1, description: "Rent", amount: 5000, paid_by: "John", your_share: 2500, date: "5 days ago" },
      { id: 2, description: "Electricity", amount: 450, paid_by: "You", your_share: 150, date: "3 days ago" },
    ],
    memberList: [
      { name: "John", amount_owed: 2500 },
      { name: "Sarah", amount_owed: 1500 },
      { name: "You", amount_owed: -4000 },
    ],
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/groups" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Groups
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{group.name}</h1>
              <p className="text-muted-foreground mt-1">{group.members} members</p>
            </div>
            <Button variant="outline" size="lg">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Group Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Group Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">{group.balance}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">₹5,450</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">{group.members}</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-8">
          <Link href={`/expenses/create?group=${group.id}`} className="flex-1">
            <Button className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Expense
            </Button>
          </Link>
          <Button variant="outline" className="flex-1 bg-transparent">
            Settle Up
          </Button>
        </div>

        {/* Group Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Members */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Members
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {group.memberList.map((member) => (
                <div key={member.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                  <p className="font-medium text-foreground">{member.name}</p>
                  <span className={`font-semibold ${member.amount_owed > 0 ? "text-destructive" : "text-primary"}`}>
                    {member.amount_owed > 0 ? "Owes" : "Gets"} ₹{Math.abs(member.amount_owed)}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Expenses */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {group.expenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div>
                    <p className="font-medium text-foreground">{expense.description}</p>
                    <p className="text-sm text-muted-foreground">
                      Paid by {expense.paid_by} • Your share: ₹{expense.your_share}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">{expense.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}