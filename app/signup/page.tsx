"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import AuthLayout from "@/components/auth-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import OTPInput from "@/components/otp-input"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { FieldDescription, FieldError } from "@/components/ui/field"
import { toast } from "sonner"

export default function SignupPage() {
    const [step, setStep] = useState<"details" | "otp">("details")
    const [open, setOpen] = useState(false)
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("")
    const [dob, setDob] = useState("")
    const [age, setAge] = useState<number | null>(null)
    const [availability, setAvailability] = useState("")
    const router = useRouter()

    const calculateAge = (birthDate: string) => {
        const today = new Date()
        const birth = new Date(birthDate)

        let calculatedAge = today.getFullYear() - birth.getFullYear()
        const monthDiff = today.getMonth() - birth.getMonth()

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            calculatedAge--
        }

        return calculatedAge
    }

    const handleDobChange = (value: string) => {
        setDob(value)

        if (!value) {
            setAge(null)
            return
        }

        const computedAge = calculateAge(value)
        setAge(computedAge)
    }


    const handleOtpSuccess = () => {
        setOpen(true)
    }

    const handleCompleteProfile = () => {
        setOpen(false)
        if (age !== null && age < 18) {
            toast.error("You must be at least 18 years old")
            return
        }
        router.push("/jobs")
    }

    return (
        <>
            <AuthLayout>
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle>Create Account</CardTitle>
                        <CardDescription>
                            Register using your mobile number
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-5">

                        {step === "details" && (
                            <>
                                <Input placeholder="Mobile Number" type="tel" maxLength={10}
                                    minLength={10} />
                                <Button
                                    className="w-full"
                                    onClick={() => setStep("otp")}
                                >
                                    Send OTP
                                </Button>
                            </>
                        )}

                        {step === "otp" && (
                            <>
                                <OTPInput />
                                <Button
                                    className="w-full"
                                    onClick={handleOtpSuccess}
                                >
                                    Verify OTP
                                </Button>
                            </>
                        )}

                        <div className="text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="underline">
                                Login
                            </Link>
                        </div>

                    </CardContent>
                </Card>
            </AuthLayout>


            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Complete Your Profile</DialogTitle>
                        <DialogDescription>
                            Provide required details to activate your account
                        </DialogDescription>
                    </DialogHeader>

                    <form
                        className="space-y-6 pt-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleCompleteProfile();
                        }}
                    >
                        {/* Avatar Section */}
                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Button type="button" className="cursor-pointer">
                                Upload Photo
                            </Button>
                        </div>

                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name<sup className="text-red-500 tracking-tighter -translate-x-1.5">*</sup></Label>
                            <Input
                                id="fullName"
                                name="fullName"
                                placeholder="Full Name"
                                required
                            />
                        </div>

                        {/* Age */}
                        <div className="space-y-2">
                            <Label htmlFor="dob">
                                Date of Birth
                                <sup className="text-red-500 tracking-tighter -translate-x-1.5">*</sup>
                            </Label>

                            <Input
                                id="dob"
                                name="dob"
                                type="date"
                                value={dob}
                                onChange={(e) => handleDobChange(e.target.value)}
                                required
                            />

                            {age !== null && (
                                <p className="text-sm text-muted-foreground">
                                    Age: {age} years
                                </p>
                            )}

                            {age !== null && age < 18 && (
                                <FieldError>Minimum age must be 18</FieldError>
                            )}
                        </div>


                        {/* Gender */}
                        <div className="space-y-2">
                            <Label>Gender<sup className="text-red-500 tracking-tighter -translate-x-1.5">*</sup></Label>
                            <Select value={gender} onValueChange={setGender}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                    <SelectItem value="prefer_not_say">Prefer not to say</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* City */}
                        <div className="space-y-2">
                            <Label>Select City<sup className="text-red-500 tracking-tighter -translate-x-1.5">*</sup></Label>
                            <Select value={city} onValueChange={setCity}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select City" />
                                </SelectTrigger>
                                <SelectContent className="max-h-72">
                                    <SelectItem value="mumbai">Mumbai</SelectItem>
                                    <SelectItem value="delhi">Delhi</SelectItem>
                                    <SelectItem value="bangalore">Bangalore</SelectItem>
                                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                                    <SelectItem value="chennai">Chennai</SelectItem>
                                    <SelectItem value="kolkata">Kolkata</SelectItem>
                                    <SelectItem value="pune">Pune</SelectItem>
                                    <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                                    <SelectItem value="jaipur">Jaipur</SelectItem>
                                    <SelectItem value="lucknow">Lucknow</SelectItem>
                                    <SelectItem value="chandigarh">Chandigarh</SelectItem>
                                    <SelectItem value="bhopal">Bhopal</SelectItem>
                                    <SelectItem value="kochi">Kochi</SelectItem>
                                    <SelectItem value="indore">Indore</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Availability */}
                        <div className="space-y-2">
                            <Label>Availability<sup className="text-red-500 tracking-tighter -translate-x-1.5">*</sup></Label>
                            <Select value={availability} onValueChange={setAvailability}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Availability" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="full_time">Full-time</SelectItem>
                                    <SelectItem value="part_time">Part-time</SelectItem>
                                    <SelectItem value="freelance">Freelance</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Submit */}
                        <Button type="submit" className="w-full cursor-pointer">
                            Save & Continue
                        </Button>
                    </form>

                </DialogContent>
            </Dialog>

        </>
    )
}
