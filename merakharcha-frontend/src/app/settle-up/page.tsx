"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

export default function SettleUpPage() {
  const [settlements, setSettlements] = useState([
    {
      id: 1,
      person: "John Doe",
      amount: 450,
      type: "owe",
      date: "Due today",
      group: "Roommates",
    },
    {
      id: 2,
      person: "Sarah Smith",
      amount: 200,
      type: "owed",
      date: "Due in 2 days",
      group: "Weekend Trip",
    },
    {
      id: 3,
      person: "Mike Johnson",
      amount: 1200,
      type: "owe",
      date: "Overdue",
      group: "Office Team",
    },
  ])

  const settledTransactions = [
    { id: 1, person: "Emma Wilson", amount: 500, date: "Nov 20, 2025", method: "UPI" },
    { id: 2, person: "David Lee", amount: 300, date: "Nov 15, 2025", method: "Bank Transfer" },
  ]

  const totalOwed = settlements.filter((s) => s.type === "owe").reduce((sum, s) => sum + s.amount, 0)
  const totalOwedToYou = settlements.filter((s) => s.type === "owed").reduce((sum, s) => sum + s.amount, 0)

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settle Up</h1>
          <p className="text-muted-foreground">Manage your payments and settlements</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">You Owe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-destructive">₹{totalOwed}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Across {settlements.filter((s) => s.type === "owe").length} people
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">You Are Owed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">₹{totalOwedToYou}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Across {settlements.filter((s) => s.type === "owed").length} people
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Pending Settlements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pending Settlements</CardTitle>
            <CardDescription>Amounts to be paid or received</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {settlements.map((settlement) => (
                <div
                  key={settlement.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground">{settlement.person}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          settlement.type === "owe"
                            ? "bg-destructive/10 text-destructive"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {settlement.type === "owe" ? "You Owe" : "Owed to You"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {settlement.group} • {settlement.date}
                    </p>
                  </div>
                  <div className="text-right mr-4">
                    <p
                      className={`text-2xl font-bold ${
                        settlement.type === "owe" ? "text-destructive" : "text-primary"
                      }`}
                    >
                      ₹{settlement.amount}
                    </p>
                  </div>
                  {settlement.type === "owe" && (
                    <Link href={`/settle-up/${settlement.id}`}>
                      <Button size="sm">Pay</Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Settlement History */}
        <Card>
          <CardHeader>
            <CardTitle>Settlement History</CardTitle>
            <CardDescription>Your recent transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {settledTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/20">
                  <div>
                    <p className="font-medium text-foreground">{transaction.person}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.date} • {transaction.method}
                    </p>
                  </div>
                  <p className="font-semibold text-primary">₹{transaction.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}