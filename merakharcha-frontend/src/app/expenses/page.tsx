"use client"

import { ArrowUpRight, Filter, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function ExpensesPage() {
  const [filterType, setFilterType] = useState("all")

  const expenses = [
    {
      id: 1,
      description: "Dinner at Restaurant",
      amount: 450,
      paid_by: "You",
      category: "Food",
      date: "Today",
      group: "Roommates",
      split_count: 3,
    },
    {
      id: 2,
      description: "Movie tickets",
      amount: 200,
      paid_by: "John",
      category: "Entertainment",
      date: "Yesterday",
      group: "Weekend Trip",
      split_count: 2,
    },
    {
      id: 3,
      description: "Grocery shopping",
      amount: 680,
      paid_by: "Sarah",
      category: "Food",
      date: "2 days ago",
      group: "Roommates",
      split_count: 2,
    },
    {
      id: 4,
      description: "Gas",
      amount: 320,
      paid_by: "You",
      category: "Travel",
      date: "3 days ago",
      group: "Weekend Trip",
      split_count: 4,
    },
  ]

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Expenses</h1>
            <p className="text-muted-foreground">View and manage all your expenses</p>
          </div>
          <Link href="/expenses/create">
            <Button size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Add Expense
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search expenses..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>
              <Button variant="outline" size="lg">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Expense List */}
        <div className="space-y-4">
          {expenses.map((expense) => (
            <Link key={expense.id} href={`/expenses/${expense.id}`}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{expense.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {expense.group} • Paid by {expense.paid_by} • Split with {expense.split_count} people
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-foreground">₹{expense.amount}</p>
                      <p className="text-xs text-muted-foreground">{expense.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
