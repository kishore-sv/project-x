import Link from "next/link"
import { Button } from "./ui/button"

export default function PublicNavbar() {
    return (
        <header className="border-b">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 font-semibold">
                    <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
                        GS
                    </div>
                    GSHUB
                </div>

                <div className="flex gap-3">
                    <Link href="/login">
                        <Button variant="ghost" className="cursor-pointer">Login</Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="cursor-pointer">Join Now</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}