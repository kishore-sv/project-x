"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { IconCheck, IconCircleCheckFilled, IconCircleDashed, IconCircleDashedCheck, IconPencil, IconStar, IconVersionsFilled } from "@tabler/icons-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

type ProfileProps = {
    user: {
        fullName: string
        age: number
        gender: string
        city: string
        availability: string
        avatarUrl?: string
    }
}
const user: ProfileProps = {
    user: {
        fullName: "Nikil",
        age: 24,
        gender: "Male",
        city: "Chennai",
        availability: "Full Time",
        avatarUrl: "https://github.com/shadcn.png"
    }
}
export default function ProfilePage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto py-12 space-y-10">

                {/* ===== PROFILE HEADER ===== */}
                <Card>
                    <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">

                        <Avatar className="h-24 w-24">
                            {user.user.avatarUrl ? (
                                <AvatarImage src={user.user.avatarUrl} />
                            ) : (
                                <AvatarFallback>
                                    {user.user.fullName
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")
                                        .slice(0, 2)}
                                </AvatarFallback>
                            )}
                        </Avatar>

                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-3xl font-bold">
                                    {user.user.fullName}
                                </h1>
                                <div className="flex items-center gap-2">
                                    <IconCircleDashedCheck className="size-6 text-green-500" />
                                    <Badge variant="secondary">
                                        {user.user.availability.replace("_", " ")}
                                    </Badge>
                                </div>
                            </div>

                            <RatingStars rating={4.5} max={5} />

                            <p className="text-muted-foreground max-w-xl">
                                Based in {user.user.city}. Open to {user.user.availability.replace("_", " ")} opportunities.
                            </p>

                            <div className="flex gap-3 pt-2">
                                <Button>Edit Profile</Button>
                                <Button variant="outline">Share Profile</Button>
                            </div>
                            <div className="pt-2">
                                <CreateJobDialog />
                                {/* <Button className="cursor-pointer"><IconPencil /> Create Job/Event</Button> */}
                            </div>
                        </div>

                    </CardContent>
                </Card>


                {/* ===== PERSONAL DETAILS ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Main Info */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4 text-sm">

                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Age</span>
                                    <span>{user.user.age} Years</span>
                                </div>

                                <Separator />

                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Gender</span>
                                    <span className="capitalize">
                                        {user.user.gender.replace("_", " ")}
                                    </span>
                                </div>

                                <Separator />

                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">City</span>
                                    <span>{user.user.city}</span>
                                </div>

                                <Separator />

                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Availability</span>
                                    <span className="capitalize">
                                        {user.user.availability.replace("_", " ")}
                                    </span>
                                </div>

                            </CardContent>
                        </Card>
                    </div>


                    {/* Status Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Status</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Profile Completion</span>
                                <span>80%</span>
                            </div>

                            <Separator />

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Account Type</span>
                                <span>Standard</span>
                            </div>
                        </CardContent>
                    </Card>

                </div>

            </div>
        </div >
    )
}


type RatingStarsProps = {
    rating: number //  4.5
    max?: number
}

export function RatingStars({ rating, max = 5 }: RatingStarsProps) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: max }).map((_, index) => {
                const filled = index < Math.floor(rating)

                return (
                    <IconStar
                        key={index}
                        size={18}
                        className={
                            filled
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                        }
                    />
                )
            })}
            <span className="text-sm text-muted-foreground ml-2">
                {rating.toFixed(1)}
            </span>
        </div>
    )
}


export function CreateJobDialog() {
    const [open, setOpen] = useState(false)

    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [members, setMembers] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("open")

    const resetForm = () => {
        setTitle("")
        setLocation("")
        setMembers("")
        setAmount("")
        setDate("")
        setTime("")
        setDescription("")
        setStatus("open")
    }

    const handleSubmit = () => {
        if (!title || !location || !members || !amount || !date || !time) {
            toast.error("Please fill all required fields")
            return
        }

        const jobData = {
            title: title.trim(),
            location: location.trim(),
            members: Number(members),
            remainingMembers: Number(members),
            amount: Number(amount),
            date,
            time,
            description: description.trim(),
            status,
            createdAt: new Date().toISOString(),
        }

        console.log("Created Job/Event:", jobData)

        toast.success("Job created successfully")

        resetForm()
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">
                    <IconPencil size={18} className="mr-2" />
                    Create Job/Event
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create Job / Event</DialogTitle>
                </DialogHeader>

                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                    className="space-y-4"
                >
                    <div className="space-y-2">
                        <Label>Event Name</Label>
                        <Input
                            placeholder="Marriage Catering, Corporate Event..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Location</Label>
                        <Input
                            placeholder="City / Area"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Members Needed</Label>
                        <Input
                            type="number"
                            min={1}
                            placeholder="e.g. 10"
                            value={members}
                            onChange={(e) => setMembers(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Amount (₹)</Label>
                        <Input
                            type="number"
                            min={0}
                            placeholder="e.g. 2500"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Date</Label>
                        <Input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Timing</Label>
                        <Input
                            type="text"
                            placeholder="10:00 AM - 6:00 PM"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Status</Label>
                        <Select value={status} onValueChange={setStatus}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="open">Open</SelectItem>
                                <SelectItem value="closed">Closed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Job Brief</Label>
                        <Textarea
                            placeholder="Describe responsibilities, dress code, food, etc."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                        />
                    </div>

                    <Button type="submit" className="w-full cursor-pointer">
                        Create Job
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
