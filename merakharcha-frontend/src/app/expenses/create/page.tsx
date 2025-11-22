"use client"

import { ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function CreateExpensePage() {
  const [splitType, setSplitType] = useState("equal")
  const [splits, setSplits] = useState([
    { name: "You", percentage: 50 },
    { name: "John", percentage: 50 },
  ])

  const removeSplit = (index: number) => {
    const newSplits = splits.filter((_, i) => i !== index)
    setSplits(newSplits)
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
          <h1 className="text-3xl font-bold text-foreground">Add New Expense</h1>
          <p className="text-muted-foreground mt-2">Record a new expense and split it</p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Details</CardTitle>
            <CardDescription>Fill in the details of your expense</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Group Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Group</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                <option>Roommates</option>
                <option>Office Team</option>
                <option>Weekend Trip</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description</label>
              <input
                type="text"
                placeholder="e.g., Dinner, Groceries, Gas"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
            </div>

            {/* Amount */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Amount</label>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-muted-foreground mr-2">₹</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-2xl font-bold"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>
            </div>

            {/* Paid By */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Paid By</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                <option>You</option>
                <option>John</option>
                <option>Sarah</option>
              </select>
            </div>

            {/* Split Type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-4">Split Type</label>
              <div className="grid grid-cols-3 gap-3">
                {["equal", "custom", "percentage"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSplitType(type)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      splitType === type ? "border-primary bg-primary/10" : "border-border hover:border-primary"
                    }`}
                  >
                    <p className="font-medium text-foreground capitalize">{type} Split</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Split Details */}
            {(splitType === "custom" || splitType === "percentage") && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">Split Between</label>
                <div className="space-y-3">
                  {splits.map((split, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input
                        type="text"
                        value={split.name}
                        readOnly
                        className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                      />
                      <input
                        type="number"
                        value={split.percentage}
                        className="w-20 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      />
                      <span className="text-muted-foreground">%</span>
                      <button
                        onClick={() => removeSplit(index)}
                        className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                <option>Food & Dining</option>
                <option>Entertainment</option>
                <option>Travel</option>
                <option>Utilities</option>
                <option>Other</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Notes (Optional)</label>
              <textarea
                placeholder="Add any additional notes..."
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Link href="/expenses" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Cancel
                </Button>
              </Link>
              <Button className="flex-1">Add Expense</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
