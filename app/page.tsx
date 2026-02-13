import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PublicNavbar from "@/components/public-navbar"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <PublicNavbar />
            {/* Hero */}
            <main className="container mx-auto flex flex-col items-center justify-center text-center py-32">
                <h1 className="text-4xl font-bold tracking-tight">
                    Connect. Learn. Grow.
                </h1>
                <p className="mt-4 text-muted-foreground max-w-xl">
                    A professional hub built for people who want real growth.
                </p>

                <div className="mt-8 flex gap-4">
                    <Link href="/signup">
                        <Button size="lg" className="cursor-pointer">Get Started</Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="outline" size="lg" className="cursor-pointer">
                            Login
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}
