import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const jobs = [
    {
        id: "ORD-7721",
        status: "Confirmed",
        title: "Elite Corporate Gala",
        client: "Nexus Events",
        area: "JW Marriott, Bangalore",
        date: "Feb 25, 2026",
        time: "18:00 – 23:00",
        amount: "₹2,500",
    },
    {
        id: "ORD-8902",
        status: "Pending Verification",
        title: "Tech Summit 2026",
        client: "Innovate Hub",
        area: "Convention Center, Zone A",
        date: "March 02, 2026",
        time: "09:00 – 17:00",
        amount: "₹1,800",
    },
    {
        id: "ORD-9912",
        status: "Confirmed",
        title: "Startup Investor Meetup",
        client: "Angel Circle",
        area: "ITC Gardenia, Bangalore",
        date: "March 10, 2026",
        time: "10:00 – 15:00",
        amount: "₹3,200",
    },
]

export default function JobsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto py-16 space-y-12">
                {/* Header */}
                {/* <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight">Active Deployments</h1>
                    <p className="text-muted-foreground">
                        Tracking your accepted missions and upcoming schedules
                    </p>
                </div> */}

                {/* Job Cards */}
                <div className="space-y-6">
                    {jobs.map((job) => (
                        <Card key={job.id} className="transition-all hover:shadow-lg">
                            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                {/* Left */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Badge variant="outline">{job.id}</Badge>

                                        <Badge
                                            variant={
                                                job.status === "Confirmed" ? "default" : "secondary"
                                            }
                                        >
                                            {job.status}
                                        </Badge>
                                    </div>

                                    <h2 className="text-2xl font-semibold">{job.title}</h2>

                                    <div className="text-sm text-muted-foreground space-y-1">
                                        <p>
                                            <span className="font-medium text-foreground">Client:</span>{" "}
                                            {job.client}
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Area:</span>{" "}
                                            {job.area}
                                        </p>
                                    </div>
                                </div>

                                {/* Right */}
                                <div className="space-y-3 text-right">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Deployment Date
                                        </p>
                                        <p className="font-medium">{job.date}</p>
                                        <p className="text-sm text-muted-foreground">{job.time}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Expected Yield
                                        </p>
                                        <p className="text-2xl font-semibold">{job.amount}</p>
                                    </div>

                                    <Button variant="outline" size="sm">
                                        View Brief
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
