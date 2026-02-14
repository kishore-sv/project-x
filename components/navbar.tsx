"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { IconBell, IconMenu, IconNotification } from "@tabler/icons-react"
import { ProfileDropdown } from "./profile-button"
import {
    IconHome,
    IconBriefcase,
    IconMessage,
    IconShoppingCart,
} from "@tabler/icons-react"

const navLinks = [
    { name: "Home", href: "/", icon: IconHome },
    { name: "Jobs", href: "/jobs", icon: IconBriefcase },
    { name: "Messages", href: "/messages", icon: IconMessage },
    { name: "Notifications", href: "/notifications", icon: IconBell },
    { name: "Orders", href: "/orders", icon: IconShoppingCart },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <header className="border-b bg-background sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between">


                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
                        GS
                    </div>
                    GSHUB
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        const Icon = link.icon

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <Icon size={18} />
                                {link.name}
                            </Link>
                        )
                    })}
                    <ProfileDropdown />
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <IconMenu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-64 px-4">
                            <div className="mt-8 flex flex-col gap-4">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href
                                    const Icon = link.icon

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                "flex items-center gap-2 text-sm font-medium transition-colors",
                                                isActive
                                                    ? "text-primary"
                                                    : "text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            <Icon size={18} />
                                            {link.name}
                                        </Link>
                                    )
                                })}
                                <ProfileDropdown />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    )
}
