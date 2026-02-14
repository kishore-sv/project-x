"use client"

import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import {
    IconUser,
    IconLogout,
} from "@tabler/icons-react"

export function ProfileDropdown() {
    const user = {
        name: "Kishore",
        avatar: "https://github.com/shadcn.png",
    }

    const handleLogout = () => {
        console.log("logout logic here")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-9 w-9 rounded-full p-0"
                >
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                            {user.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">

                {/* Name Label */}
                <DropdownMenuLabel className="text-muted-foreground text-sm">
                    {user.name}
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Profile Link */}
                <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center gap-2">
                        <IconUser size={18} />
                        Profile
                    </Link>
                </DropdownMenuItem>

                {/* Logout */}
                <Link href="/">
                    <DropdownMenuItem
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-red-500 focus:text-red-500"
                    >
                        <IconLogout size={18} />
                        Logout
                    </DropdownMenuItem>
                </Link>

            </DropdownMenuContent>
        </DropdownMenu >
    )
}
