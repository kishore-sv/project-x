"use client"

import { useState } from "react"
import Link from "next/link"
import AuthLayout from "@/components/auth-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import OTPInput from "@/components/otp-input"

export default function LoginPage() {
    const [step, setStep] = useState<"phone" | "otp">("phone")

    return (
        <AuthLayout>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>Login with OTP</CardTitle>
                    <CardDescription>
                        Enter your mobile number to continue
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">

                    {step === "phone" && (
                        <>
                            <Input
                                placeholder="Enter 10-digit mobile number"
                                type="tel"
                            />
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
                            <Link href="/jobs">
                                <Button className="w-full">
                                    Login
                                </Button>
                            </Link>
                        </>
                    )}

                    <div className="text-center text-sm">
                        New user?{" "}
                        <Link href="/signup" className="underline">
                            Create account
                        </Link>
                    </div>

                </CardContent>
            </Card>
        </AuthLayout>
    )
}
