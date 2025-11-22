"use client"

import { Plus, Trash2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function FriendsPage() {
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friends, setFriends] = useState([
    { id: 1, name: "John Doe", phone: "+91-9876543210", balance: "You owe ₹450" },
    { id: 2, name: "Sarah Smith", phone: "+91-9876543211", balance: "You are owed ₹200" },
    { id: 3, name: "Mike Johnson", phone: "+91-9876543212", balance: "Settled" },
    { id: 4, name: "Emma Wilson", phone: "+91-9876543213", balance: "You owe ₹1200" },
  ])

  const removeFriend = (id: number) => {
    setFriends(friends.filter((f) => f.id !== id))
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Friends</h1>
            <p className="text-muted-foreground">Manage your friends and individual balances</p>
          </div>
          <Button size="lg" onClick={() => setShowAddFriend(!showAddFriend)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Friend
          </Button>
        </div>

        {/* Add Friend Form */}
        {showAddFriend && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New Friend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email or Phone</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter email or phone number"
                      className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                    <Button>Add</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Friends List */}
        <div className="grid gap-4">
          {friends.map((friend) => (
            <Card key={friend.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{friend.name}</p>
                      <p className="text-sm text-muted-foreground">{friend.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{friend.balance}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFriend(friend.id)}
                      className="hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
