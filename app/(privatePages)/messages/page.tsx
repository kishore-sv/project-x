"use client"

import { useState } from "react"
import {
    IconArrowLeft,
    IconSend,
} from "@tabler/icons-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const conversations = [
    {
        id: 1,
        name: "Rohit Sharma",
        lastMessage: "Are you available tomorrow?",
        avatar: "",
    },
    {
        id: 2,
        name: "Event Manager - Wedding",
        lastMessage: "Shift starts at 8AM",
        avatar: "",
    },
]

const dummyMessages = [
    { id: 1, text: "Hello 👋", sender: "them" },
    { id: 2, text: "Hi! Yes I’m available.", sender: "me" },
]

export default function MessagesPage() {
    const [selectedUser, setSelectedUser] = useState<any>(null)
    const [message, setMessage] = useState("")

    return (
        <div className="fixed top-16 left-0 right-0 bottom-0 flex bg-background">

            {/* ===== LEFT SIDEBAR ===== */}
            <div
                className={cn(
                    "w-full md:w-1/3 border-r flex flex-col bg-background",
                    selectedUser && "hidden md:flex"
                )}
            >
                {/* Sidebar Header */}
                <div className="p-4 border-b font-semibold text-lg">
                    Messages
                </div>

                {/* Conversation List */}
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => setSelectedUser(user)}
                            className="flex items-center gap-3 p-4 cursor-pointer hover:bg-muted transition"
                        >
                            <Avatar>
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>
                                    {user.name.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex-1 min-w-0">
                                <p className="font-medium truncate">{user.name}</p>
                                <p className="text-sm text-muted-foreground truncate">
                                    {user.lastMessage}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== CHAT PANEL ===== */}
            <div
                className={cn(
                    "flex-1 flex flex-col bg-background",
                    !selectedUser && "hidden md:flex"
                )}
            >
                {selectedUser ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setSelectedUser(null)}
                            >
                                <IconArrowLeft size={20} />
                            </Button>

                            <Avatar>
                                <AvatarFallback>
                                    {selectedUser.name.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>

                            <div>
                                <p className="font-semibold">{selectedUser.name}</p>
                                <p className="text-xs text-muted-foreground">
                                    Online
                                </p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {dummyMessages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "max-w-xs px-4 py-2 rounded-lg text-sm break-words",
                                        msg.sender === "me"
                                            ? "bg-primary text-primary-foreground ml-auto"
                                            : "bg-muted"
                                    )}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-4 border-t flex gap-2">
                            <Input
                                placeholder="Type a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button>
                                <IconSend size={18} />
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="hidden md:flex flex-1 items-center justify-center text-muted-foreground">
                        Select a conversation
                    </div>
                )}
            </div>
        </div>
    )
}
