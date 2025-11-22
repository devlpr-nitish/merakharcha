"use client"

import { ArrowLeft, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function CreateGroupPage() {
  const [members, setMembers] = useState<string[]>([])
  const [memberInput, setMemberInput] = useState("")

  const addMember = () => {
    if (memberInput.trim() && !members.includes(memberInput.trim())) {
      setMembers([...members, memberInput.trim()])
      setMemberInput("")
    }
  }

  const removeMember = (member: string) => {
    setMembers(members.filter((m) => m !== member))
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/groups" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Groups
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Create New Group</h1>
          <p className="text-muted-foreground mt-2">Set up a new group to track shared expenses</p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Group Details</CardTitle>
            <CardDescription>Enter the basic information for your new group</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Group Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Group Name</label>
              <input
                type="text"
                placeholder="e.g., Roommates, Trip to Bali, Project Team"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
            </div>

            {/* Group Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description (Optional)</label>
              <textarea
                placeholder="What is this group for?"
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
              />
            </div>

            {/* Add Members */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Add Members</label>
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Enter email or phone"
                  value={memberInput}
                  onChange={(e) => setMemberInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addMember()}
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
                <Button type="button" onClick={addMember} variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Members List */}
              {members.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{members.length} members added</p>
                  <div className="flex flex-wrap gap-2">
                    {members.map((member) => (
                      <div
                        key={member}
                        className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full"
                      >
                        <span className="text-sm text-foreground">{member}</span>
                        <button onClick={() => removeMember(member)} className="hover:text-primary">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Link href="/groups" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Cancel
                </Button>
              </Link>
              <Button className="flex-1">Create Group</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
