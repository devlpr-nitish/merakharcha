"use client"

import { Bell, Check, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New expense added",
      message: "John added ₹450 to Roommates group",
      time: "5 minutes ago",
      type: "expense",
      read: false,
    },
    {
      id: 2,
      title: "Settlement reminder",
      message: "You owe Sarah ₹1,200. Settle up?",
      time: "1 hour ago",
      type: "settlement",
      read: false,
    },
    {
      id: 3,
      title: "Added to group",
      message: "You've been added to Weekend Trip by Mike",
      time: "2 hours ago",
      type: "group",
      read: true,
    },
    {
      id: 4,
      title: "Payment received",
      message: "John paid you ₹500 for dinner",
      time: "Yesterday",
      type: "payment",
      read: true,
    },
  ])

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const getNotificationIcon = (type: string) => {
    return <Bell className="w-5 h-5 text-primary" />
  }

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with all your activities</p>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`cursor-pointer transition-colors ${!notification.read ? "bg-secondary/30" : "bg-card"}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="pt-1">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{notification.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!notification.read && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                        title="Mark as read"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeNotification(notification.id)}
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