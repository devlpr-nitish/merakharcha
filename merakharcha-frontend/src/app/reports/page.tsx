"use client"

import { BarChart3, PieChart, TrendingUp, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState("month")

  const stats = {
    totalSpent: 5450,
    personalExpenses: 2100,
    sharedExpenses: 3350,
    categoryBreakdown: [
      { category: "Food & Dining", amount: 2100, percentage: 38.5 },
      { category: "Entertainment", amount: 1200, percentage: 22 },
      { category: "Travel", amount: 900, percentage: 16.5 },
      { category: "Utilities", amount: 800, percentage: 14.7 },
      { category: "Other", amount: 450, percentage: 8.3 },
    ],
    groupBreakdown: [
      { group: "Roommates", amount: 2450, percentage: 45 },
      { group: "Office Team", amount: 1800, percentage: 33 },
      { group: "Weekend Trip", amount: 1200, percentage: 22 },
    ],
    monthlyTrend: [
      { month: "Sep", amount: 4200 },
      { month: "Oct", amount: 4800 },
      { month: "Nov", amount: 5450 },
    ],
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Reports & Analytics</h1>
            <p className="text-muted-foreground">Understand your spending patterns and habits</p>
          </div>
          <Button size="lg">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Time Range Filter */}
        <div className="flex gap-3 mb-8">
          {["week", "month", "quarter", "year"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                timeRange === range
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              This {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">₹{stats.totalSpent.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-2">Across all categories</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Personal Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">₹{stats.personalExpenses.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {Math.round((stats.personalExpenses / stats.totalSpent) * 100)}% of total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Shared Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">₹{stats.sharedExpenses.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {Math.round((stats.sharedExpenses / stats.totalSpent) * 100)}% of total
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Spending by Category
              </CardTitle>
              <CardDescription>Breakdown of your expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.categoryBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium text-foreground">{item.category}</p>
                      <span className="text-sm font-semibold text-primary">₹{item.amount}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Group Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Spending by Group
              </CardTitle>
              <CardDescription>Expenses across your groups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.groupBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium text-foreground">{item.group}</p>
                      <span className="text-sm font-semibold text-primary">₹{item.amount}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Trend */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Spending Trend
              </CardTitle>
              <CardDescription>Your spending over the last 3 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-around h-64 gap-4">
                {stats.monthlyTrend.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end">
                    <div
                      className="w-full bg-primary rounded-t-lg mb-3 hover:opacity-80 transition-opacity"
                      style={{
                        height: `${(item.amount / Math.max(...stats.monthlyTrend.map((m) => m.amount))) * 200}px`,
                      }}
                    />
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">{item.month}</p>
                      <p className="text-xs text-muted-foreground">₹{item.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Spending Insights</CardTitle>
            <CardDescription>Key takeaways from your spending patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="font-medium text-foreground mb-1">Top Spending Category</p>
                <p className="text-sm text-muted-foreground">
                  Food & Dining accounts for 38.5% of your total spending (₹2,100)
                </p>
              </div>
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="font-medium text-foreground mb-1">Highest Group Spending</p>
                <p className="text-sm text-muted-foreground">
                  Roommates group has the highest expenses at ₹2,450 (45% of total)
                </p>
              </div>
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="font-medium text-foreground mb-1">Monthly Growth</p>
                <p className="text-sm text-muted-foreground">
                  Your spending has increased by 13.5% compared to last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}