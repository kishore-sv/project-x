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
import { IconMenu } from "@tabler/icons-react"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Ratings", href: "/ratings" },
    { name: "Orders", href: "/orders" },
    { name: "Profile", href: "/profile" },
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

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
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

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                "text-sm font-medium",
                                                isActive
                                                    ? "text-primary"
                                                    : "text-muted-foreground"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    )
}
