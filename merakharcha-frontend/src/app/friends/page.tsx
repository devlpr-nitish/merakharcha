"use client"

import { Plus, Trash2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { useFriendService } from "@/services/friendService"

export default function FriendsPage() {
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friendInput, setFriendInput] = useState({ name: "", phone: "" })
  const [friends, setFriends] = useState([])

  const { getFriends, addFriend: addFriendApi, removeFriend: removeFriendApi } =
    useFriendService()

  
  useEffect(() => {
    fetchFriends()
  }, []);

  const fetchFriends = async () => {
    const { ok, data } = await getFriends()
    if (ok) setFriends(data || [])
  }

  const addFriend = async () => {
    if (!friendInput.id) return

    const { ok, data } = await addFriendApi({
      other_user: friendInput.id,
    })

    if (ok) {
      setFriends((prev) => [...prev, data])
      setFriendInput({ id: 0, name: "", phone: "" })
      setShowAddFriend(false)
    }
  }

  const removeFriend = async (other_user: number) => {
    const { ok } = await removeFriendApi(other_user)
    if (ok) {
      setFriends((prev) => prev.filter((f) => f.id !== other_user))
    }
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
                {/* name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter friend's name"
                    value={friendInput.name}
                    onChange={(e) => setFriendInput({ ...friendInput, name: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>

                {/* phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email or Phone</label>
                  <input
                    type="text"
                    placeholder="Enter email or phone number"
                    value={friendInput.phone}
                    onChange={(e) => setFriendInput({ ...friendInput, phone: e.target.value })}
                    onKeyDown={(e) => e.key === "Enter" && addFriend()}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  />
                </div>

                {/* buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowAddFriend(false)} className="flex-1">
                    Cancel
                  </Button>
                  <Button onClick={addFriend} className="flex-1">
                    Add Friend
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Friends List */}
        <div className="grid gap-4">
          {friends.map((friend: any) => (
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
