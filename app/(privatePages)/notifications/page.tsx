"use client"

import { useState } from "react"
import {
    IconBell,
    IconCheck,
    IconBriefcase,
    IconMessage,
    IconClock,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const dummyNotifications = [
    {
        id: 1,
        type: "job",
        title: "New Job Posted",
        message: "Marriage catering event in Bengaluru.",
        time: "2 minutes ago",
        read: false,
    },
    {
        id: 2,
        type: "message",
        title: "New Message",
        message: "Rohit Sharma sent you a message.",
        time: "1 hour ago",
        read: false,
    },
    {
        id: 3,
        type: "system",
        title: "Application Approved",
        message: "Your job application was approved.",
        time: "Yesterday",
        read: true,
    },
]

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(dummyNotifications)

    const markAllAsRead = () => {
        setNotifications((prev) =>
            prev.map((n) => ({ ...n, read: true }))
        )
    }

    const getIcon = (type: string) => {
        switch (type) {
            case "job":
                return <IconBriefcase size={20} />
            case "message":
                return <IconMessage size={20} />
            default:
                return <IconBell size={20} />
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto py-10 space-y-6">

                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Notifications</h1>
                    <Button variant="outline" onClick={markAllAsRead}>
                        <IconCheck size={18} className="mr-2" />
                        Mark all as read
                    </Button>
                </div>

                {/* Notifications List */}
                <div className="space-y-4">
                    {notifications.length === 0 ? (
                        <Card className="p-8 text-center text-muted-foreground">
                            <IconBell size={32} className="mx-auto mb-3" />
                            No notifications yet
                        </Card>
                    ) : (
                        notifications.map((notification) => (
                            <Card
                                key={notification.id}
                                className={cn(
                                    "p-4 flex gap-4 items-start cursor-pointer transition hover:shadow-sm",
                                    !notification.read && "bg-muted/40"
                                )}
                            >
                                <div className="text-muted-foreground">
                                    {getIcon(notification.type)}
                                </div>

                                <div className="flex-1 space-y-1">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold">
                                            {notification.title}
                                        </p>
                                        {!notification.read && (
                                            <span className="h-2 w-2 rounded-full bg-primary" />
                                        )}
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        {notification.message}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <IconClock size={14} />
                                        {notification.time}
                                    </div>
                                </div>
                            </Card>
                        ))
                    )}
                </div>

            </div>
        </div>
    )
}
