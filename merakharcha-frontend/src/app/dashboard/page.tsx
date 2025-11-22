"use client"

import { CreditCard, Plus, TrendingDown, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Dashboard() {
  // Mock data
  const balance = 2450.5
  const youOwe = 1200
  const youAreOwed = 3650.5
  const recentExpenses = [
    { id: 1, description: "Dinner at Restaurant", amount: 450, paid_by: "You", split_count: 3, date: "Today" },
    { id: 2, description: "Movie tickets", amount: 200, paid_by: "John", split_count: 2, date: "Yesterday" },
    { id: 3, description: "Grocery shopping", amount: 680, paid_by: "Sarah", split_count: 2, date: "2 days ago" },
  ]

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
        </div>

        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance */}
          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <CreditCard className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">₹{balance.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">Your net balance</p>
            </CardContent>
          </Card>

          {/* You Owe */}
          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">You Owe</CardTitle>
              <TrendingDown className="w-4 h-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold text-destructive">₹{youOwe.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">To be paid</p>
            </CardContent>
          </Card>

          {/* You Are Owed */}
          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">You Are Owed</CardTitle>
              <TrendingUp className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl sm:text-3xl font-bold text-primary">₹{youAreOwed.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground mt-1">To receive</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your expenses and groups</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button className="w-full" size="lg">
                <Plus className="w-4 h-4 mr-2" />
                Add Expense
              </Button>
              <Button variant="outline" className="w-full bg-transparent" size="lg">
                <Users className="w-4 h-4 mr-2" />
                Add Group
              </Button>
              <Link href="/settle-up" className="w-full">
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Settle Up
                </Button>
              </Link>
              <Link href="/reports" className="w-full">
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Reports
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Upcoming */}
          <Card>
            <CardHeader>
              <CardTitle>Your Groups</CardTitle>
              <CardDescription>Active groups you're part of</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                <div>
                  <p className="font-medium text-foreground">Roommates</p>
                  <p className="text-sm text-muted-foreground">3 members</p>
                </div>
                <span className="text-sm font-semibold text-primary">You owe ₹450</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                <div>
                  <p className="font-medium text-foreground">Office Team</p>
                  <p className="text-sm text-muted-foreground">5 members</p>
                </div>
                <span className="text-sm font-semibold text-primary">Settled</span>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View All Groups
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Expenses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <CardDescription>Your latest transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentExpenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{expense.description}</p>
                    <p className="text-sm text-muted-foreground">
                      Paid by {expense.paid_by} • Split with {expense.split_count} people
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">₹{expense.amount}</p>
                    <p className="text-xs text-muted-foreground">{expense.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
