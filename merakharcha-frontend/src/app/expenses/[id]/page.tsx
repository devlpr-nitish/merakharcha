"use client"

import { ArrowLeft, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ExpenseDetailPage({ params }: { params: { id: string } }) {
  const expense = {
    id: params.id,
    description: "Dinner at Restaurant",
    amount: 450,
    paid_by: "You",
    category: "Food & Dining",
    date: "November 23, 2025",
    group: "Roommates",
    notes: "Great dinner with the team",
    splits: [
      { name: "You", amount: 150 },
      { name: "John", amount: 150 },
      { name: "Sarah", amount: 150 },
    ],
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/expenses" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Expenses
          </Link>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{expense.description}</h1>
              <p className="text-muted-foreground mt-1">{expense.group}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="lg">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-destructive/10 bg-transparent">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>

        {/* Amount Card */}
        <Card className="mb-8 border-primary border-2">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Total Amount</p>
              <p className="text-5xl font-bold text-primary">₹{expense.amount}</p>
            </div>
          </CardContent>
        </Card>

        {/* Expense Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium text-foreground">{expense.date}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Paid By</p>
                <p className="font-medium text-foreground">{expense.paid_by}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Category</p>
                <p className="font-medium text-foreground">{expense.category}</p>
              </div>
              {expense.notes && (
                <div>
                  <p className="text-sm text-muted-foreground">Notes</p>
                  <p className="font-medium text-foreground">{expense.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Split Details */}
          <Card>
            <CardHeader>
              <CardTitle>Split Between</CardTitle>
              <CardDescription>{expense.splits.length} people</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {expense.splits.map((split, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                  <p className="font-medium text-foreground">{split.name}</p>
                  <p className="font-semibold text-primary">₹{split.amount}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
