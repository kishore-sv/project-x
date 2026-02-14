"use client"

import { useState } from "react"
import {
    IconSearch,
    IconMapPin,
    IconUsers,
    IconCurrencyRupee,
    IconClock,
    IconBookmark,
} from "@tabler/icons-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"


const jobs = [
    {
        id: 1,
        title: "Marriage Function - Catering Support",
        location: "Bengaluru",
        totalMembers: 12,
        remaining: 4,
        amount: 2500,
        timing: "10:00 AM - 6:00 PM",
        expiresIn: "6h 20m",
        status: "Open",
    },
    {
        id: 2,
        title: "Corporate Event - Stage Setup",
        location: "Hyderabad",
        totalMembers: 8,
        remaining: 0,
        amount: 3500,
        timing: "8:00 AM - 2:00 PM",
        expiresIn: "Expired",
        status: "Closed",
    },
]


export default function JobsPage() {
    const [search, setSearch] = useState("")
    const [location, setLocation] = useState("")
    const [sort, setSort] = useState("latest")

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto py-10 space-y-8">

                {/* ===== Search & Filters ===== */}
                <div className="space-y-4">

                    <h1 className="text-3xl font-bold">Search Jobs</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="relative">
                            <InputGroup>
                                <InputGroupAddon>
                                    <IconSearch size={18} />
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Search event name"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </InputGroup>
                        </div>

                        <div className="relative">
                            <InputGroup>
                                <InputGroupAddon>
                                    <IconMapPin size={18} />
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </InputGroup>
                        </div>

                        <Select value={sort} onValueChange={setSort}>
                            <SelectTrigger>
                                <SelectValue placeholder="Sort By" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="latest">Latest</SelectItem>
                                <SelectItem value="amount_high">Amount: High to Low</SelectItem>
                                <SelectItem value="amount_low">Amount: Low to High</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                </div>


                {/* ===== Job List ===== */}
                <div className="space-y-6">
                    {jobs.map((job) => (
                        <Card key={job.id} className="hover:shadow-md transition">
                            <CardContent className="p-6 space-y-4">

                                {/* Top Row */}
                                <div className="flex justify-between items-start flex-wrap gap-4">

                                    <div className="space-y-1">
                                        <h2 className="text-xl font-semibold">
                                            {job.title}
                                        </h2>

                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <IconMapPin size={16} />
                                            {job.location}
                                        </div>
                                    </div>

                                    <Badge
                                        variant={job.status === "Open" ? "default" : "destructive"}
                                    >
                                        {job.status}
                                    </Badge>
                                </div>


                                {/* Details Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

                                    <div className="flex items-center gap-2">
                                        <IconUsers size={16} />
                                        {job.remaining}/{job.totalMembers} Needed
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <IconCurrencyRupee size={16} />
                                        {job.amount}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <IconClock size={16} />
                                        {job.timing}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <IconClock size={16} />
                                        Expires in {job.expiresIn}
                                    </div>

                                </div>


                                {/* Actions */}
                                <div className="flex justify-between items-center flex-wrap gap-4">

                                    <Button variant="outline">
                                        View Brief
                                    </Button>

                                    <div className="flex gap-3">
                                        <Button variant="ghost">
                                            <IconBookmark size={18} />
                                        </Button>

                                        <Button
                                            disabled={job.remaining === 0}
                                        >
                                            Apply
                                        </Button>
                                    </div>

                                </div>

                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    )
}