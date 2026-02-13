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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
    const [step, setStep] = useState<"details" | "otp">("details")
    const [open, setOpen] = useState(false)
    const [role, setRole] = useState<"giver" | "receiver">("receiver")
    const router = useRouter()

    const handleOtpSuccess = () => {
        setOpen(true)
    }

    const handleCompleteProfile = () => {
        setOpen(false)
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
                                <Input placeholder="Full Name" />
                                <Input placeholder="Mobile Number" type="tel" />

                                <div className="space-y-2">
                                    <Label>I want to join as</Label>
                                    <RadioGroup
                                        defaultValue="receiver"
                                        onValueChange={(value: "giver" | "receiver") =>
                                            setRole(value)
                                        }
                                        className="flex gap-6"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="receiver" id="receiver" />
                                            <Label htmlFor="receiver">Job Receiver</Label>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="giver" id="giver" />
                                            <Label htmlFor="giver">Job Giver</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

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

                    <div className="space-y-4 pt-4">

                        {role === "receiver" && (
                            <>
                                <Input placeholder="Age" type="number" />
                                <Input placeholder="Gender" />
                                <Input placeholder="City" />
                                <Input placeholder="Years of Experience" type="number" />
                                <Input placeholder="Primary Skill (Hospitality / Tech Ops / Security)" />
                                <Input placeholder="Availability (Full-time / Part-time / Freelance)" />
                            </>
                        )}

                        {role === "giver" && (
                            <>
                                <Input placeholder="Company Name" />
                                <Input placeholder="Industry (Events / Corporate / Tech / Media)" />
                                <Input placeholder="Company Registration ID" />
                                <Input placeholder="Official Email Address" type="email" />
                                <Input placeholder="Head Office City" />
                                <Input placeholder="Number of Employees" type="number" />
                            </>
                        )}

                        <Button
                            className="w-full"
                            onClick={handleCompleteProfile}
                        >
                            Save & Continue
                        </Button>

                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}
