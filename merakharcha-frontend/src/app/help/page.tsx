"use client"

import { ChevronDown, Mail, MessageSquare, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function HelpPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I create a new group?",
      answer:
        "Click on the 'Create Group' button from the Groups page. Enter the group name, optional description, and add members by their email or phone number. You can add or remove members anytime.",
    },
    {
      question: "How does the expense split work?",
      answer:
        "When you add an expense, you can choose to split it equally among all participants, customize amounts for each person, or split by percentage. The app automatically calculates each person's share.",
    },
    {
      question: "Can I edit or delete an expense?",
      answer:
        "Yes, you can edit or delete expenses from the Expense Detail page. However, note that changing expenses will recalculate all related settlements and balances.",
    },
    {
      question: "How do I settle up with friends?",
      answer:
        "Go to 'Settle Up' to see all pending payments. Click 'Pay' on the amount you owe, select your payment method (UPI, Bank Transfer, or Cash), and upload a receipt if needed.",
    },
    {
      question: "Can I track spending by category?",
      answer:
        "Yes! The Reports section shows detailed breakdowns by category, group, and time period. You can analyze your spending patterns and export reports as needed.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "Merakharcha supports UPI, Bank Transfers, and Cash payments. You can record bank details and UPI ID in your profile for easy settlement.",
    },
  ]

  const contactMethods = [
    { icon: Mail, label: "Email Support", value: "support@merakharcha.com" },
    { icon: MessageSquare, label: "Live Chat", value: "Available 9 AM - 6 PM IST" },
  ]

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Help & Support</h1>
          <p className="text-muted-foreground">Find answers and get support for your questions</p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{method.label}</p>
                      <p className="text-sm text-muted-foreground mt-1">{method.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors rounded-lg text-left"
                >
                  <p className="font-medium text-foreground">{faq.question}</p>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-4 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>Send us a message and we'll get back to you shortly</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                  <option>Technical Issue</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>Account & Security</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Describe your issue in detail..."
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                />
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <div className="mt-8 pt-8 border-t border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="#" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Privacy Policy</p>
              <p className="text-sm text-muted-foreground mt-1">Read our privacy policy</p>
            </a>
            <a href="#" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Terms & Conditions</p>
              <p className="text-sm text-muted-foreground mt-1">Our terms of service</p>
            </a>
            <a href="#" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <p className="font-medium text-foreground">Blog</p>
              <p className="text-sm text-muted-foreground mt-1">Read our latest articles</p>
            </a>
            <a href="#" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <p className="font-medium text-foreground">API Documentation</p>
              <p className="text-sm text-muted-foreground mt-1">Developer resources</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}