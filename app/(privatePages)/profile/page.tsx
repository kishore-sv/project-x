import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto py-12 space-y-10">

                {/* ===== PROFILE HEADER ===== */}
                <Card>
                    <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">

                        {/* Avatar */}
                        <Avatar className="h-24 w-24">
                            <AvatarFallback>NO</AvatarFallback>
                        </Avatar>

                        {/* Info */}
                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-3xl font-bold">
                                    Nexus Operative
                                </h1>
                                <Badge>Verified Worker</Badge>
                            </div>

                            <p className="text-muted-foreground max-w-xl">
                                Elite level operative specializing in technical deployment and
                                digital architecture. Built for high-performance ecosystems.
                            </p>

                            <div className="flex gap-3 pt-2">
                                <Button>Edit Profile</Button>
                                <Button variant="outline">Share Catalog</Button>
                            </div>
                        </div>

                    </CardContent>
                </Card>


                {/* ===== STATS + PERSONAL SPECS ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Stats Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm text-muted-foreground">
                                    Reliability
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">98%</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm text-muted-foreground">
                                    Skill Matrix
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">Elite</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm text-muted-foreground">
                                    Avg Rating
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">4.95</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm text-muted-foreground">
                                    Completed Gigs
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">142</p>
                            </CardContent>
                        </Card>

                    </div>


                    {/* Right Personal Specs */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Specs</CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4 text-sm">

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Age</span>
                                <span>24 Years</span>
                            </div>

                            <Separator />

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Gender</span>
                                <span>Male</span>
                            </div>

                            <Separator />

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Experience</span>
                                <span>3+ Years</span>
                            </div>

                        </CardContent>
                    </Card>

                </div>


                {/* ===== NETWORK CREDENTIALS (Optional Section) ===== */}
                <Card>
                    <CardHeader>
                        <CardTitle>Network Credentials</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Add certifications, affiliations, and credentials here.
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
