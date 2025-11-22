"use client"

import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function SettlePaymentPage({ params }: { params: { id: string } }) {
  const [paymentMethod, setPaymentMethod] = useState("upi")
  const [hasScreenshot, setHasScreenshot] = useState(false)

  const settlement = {
    id: params.id,
    person: "John Doe",
    amount: 450,
    description: "Dinner + Movie at Roommates group",
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/settle-up" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Settlements
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Pay {settlement.person}</h1>
          <p className="text-muted-foreground mt-2">{settlement.description}</p>
        </div>

        {/* Amount Card */}
        <Card className="mb-8 border-primary border-2">
          <CardContent className="pt-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Amount to Pay</p>
              <p className="text-5xl font-bold text-primary mb-4">₹{settlement.amount}</p>
              <p className="text-sm text-muted-foreground">Make sure to record the payment to mark it settled</p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Choose how you want to pay</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { value: "upi", label: "UPI", description: "Pay via UPI ID" },
                { value: "bank", label: "Bank Transfer", description: "Direct bank transfer" },
                { value: "cash", label: "Cash", description: "Hand over cash" },
              ].map((method) => (
                <button
                  key={method.value}
                  onClick={() => setPaymentMethod(method.value)}
                  className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                    paymentMethod === method.value
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary"
                  }`}
                >
                  <p className="font-medium text-foreground">{method.label}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Details */}
        {paymentMethod === "upi" && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>UPI Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Recipient UPI ID</label>
                <input
                  type="text"
                  value="john@upi"
                  readOnly
                  className="w-full px-4 py-2 border border-border rounded-lg bg-secondary/20 text-foreground"
                />
              </div>
              <Button className="w-full" size="lg">
                Pay Now via UPI
              </Button>
            </CardContent>
          </Card>
        )}

        {paymentMethod === "bank" && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Bank Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Account Holder</p>
                <p className="font-medium text-foreground">John Doe</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Number</p>
                <p className="font-medium text-foreground">1234567890</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">IFSC Code</p>
                <p className="font-medium text-foreground">HDFC0000123</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Upload Receipt */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload Receipt (Optional)</CardTitle>
            <CardDescription>Attach a screenshot or receipt of the payment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
              <p className="font-medium text-foreground mb-1">Upload payment receipt</p>
              <p className="text-sm text-muted-foreground">PNG, JPG or PDF (Max 5MB)</p>
              <input type="file" className="hidden" onChange={() => setHasScreenshot(true)} />
            </div>
          </CardContent>
        </Card>

        {/* Notes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add Note (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              placeholder="Any additional notes about this payment..."
              rows={3}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
            />
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link href="/settle-up" className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              Cancel
            </Button>
          </Link>
          <Button className="flex-1">Mark as Settled</Button>
        </div>
      </div>
    </main>
  )
}