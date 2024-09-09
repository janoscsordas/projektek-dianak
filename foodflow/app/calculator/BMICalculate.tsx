"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function BMICalculate() {
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [countedBmi, setCountedBmi] = useState(0)

    const calculateBMI = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (weight && height) {
            const bmi = Number(weight) / (Number(height) / 100) ** 2
            setCountedBmi(Number((bmi).toFixed(2)))
        }
    }

    return (
        <div className="relative p-8 bg-background shadow-md rounded-md w-[90%] lg:w-[65%]">
            <h2 className="text-xl font-semibold mb-1">Adja meg teststatisztikáit</h2>
            <p className="text-sm text-gray-500 mb-5">A számítások indikatívak</p>
            <form onSubmit={calculateBMI} className="mb-32 lg:mb-16">
                <Label htmlFor="weight">
                    <span>Testtömeg (kg)</span>
                    <Input
                        name="weight"
                        id="weight"
                        type="number"
                        className="mb-5 w-[85%] sm:w-[65%] md:w-1/2"
                        placeholder="Testtömeg (kg)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </Label>
                <Label htmlFor="height">
                    <span>Magasság (cm)</span>
                    <Input
                        name="height"
                        id="height"
                        type="number"
                        className="mb-5 w-[85%] sm:w-[65%] md:w-1/2"
                        placeholder="Testtömeg (kg)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </Label>
                <Button variant="outline" type="submit">
                    Számítás
                </Button>
            </form>
            <div className="bg-primary absolute bottom-0 left-0 w-full p-5 rounded-bl-md rounded-br-md">
                <p className="text-xl font-semibold text-white">A testtömegindexe: {countedBmi}</p>
            </div>
        </div>
    )
}
