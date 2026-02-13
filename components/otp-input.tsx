"use client"

import { useRef } from "react"
import { Input } from "@/components/ui/input"

export default function OTPInput() {
    const inputs = useRef<Array<HTMLInputElement | null>>([])

    const handleChange = (value: string, index: number) => {
        if (!value) return

        if (index < 5) {
            inputs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            inputs.current[index - 1]?.focus()
        }
    }

    return (
        <div className="flex justify-between gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
                <Input
                    key={i}
                    maxLength={1}
                    ref={(el) => (inputs.current[i] = el)}
                    onChange={(e) => handleChange(e.target.value, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className="text-center text-lg"
                />
            ))}
        </div>
    )
}
