"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

interface BMRResult {
  bmr: number
  description: string
}

export function BMRCalculator() {
  const [age, setAge] = useState<string>("")
  const [gender, setGender] = useState<string>("male")
  const [height, setHeight] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [result, setResult] = useState<BMRResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateBMR = () => {
    setIsCalculating(true)
    setError(null)

    let heightInCm: number
    let weightInKg: number

    if (unitSystem === "imperial") {
      heightInCm = parseFloat(height) * 2.54
      weightInKg = parseFloat(weight) * 0.453592
    } else {
      heightInCm = parseFloat(height)
      weightInKg = parseFloat(weight)
    }

    const ageNum = parseInt(age)

    if (isNaN(heightInCm) || isNaN(weightInKg) || isNaN(ageNum)) {
      setError("Please enter valid numbers for all fields.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    let bmr: number
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * ageNum)
    } else {
      bmr = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * ageNum)
    }

    const description = `Your BMR is ${bmr.toFixed(0)} calories per day. This is an estimate of the number of calories your body burns at rest.  Factors like activity level, muscle mass, and genetics can affect your actual calorie needs.`

    setResult({ bmr: Math.round(bmr), description })
    setIsCalculating(false)
  }

  const toggleUnitSystem = () => {
    setUnitSystem(current => current === "imperial" ? "metric" : "imperial")
    if (height) {
      setHeight(h => unitSystem === "imperial" ? (parseFloat(h) * 2.54).toFixed(1) : (parseFloat(h) / 2.54).toFixed(1))
    }
    if (weight) {
      setWeight(w => unitSystem === "imperial" ? (parseFloat(w) * 0.453592).toFixed(1) : (parseFloat(w) / 0.453592).toFixed(1))
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Basal Metabolic Rate (BMR) Calculator</CardTitle>
        <CardDescription>Calculate your BMR to understand your baseline calorie needs.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="flex justify-end">
            <Button type="button" variant="outline" size="sm" onClick={toggleUnitSystem}>
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              Switch to {unitSystem === "imperial" ? "Metric" : "Imperial"}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height ({unitSystem === "imperial" ? "inches" : "cm"})</Label>
              <Input
                id="height"
                type="number"
                placeholder={`Enter height in ${unitSystem === "imperial" ? "inches" : "cm"}`}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight ({unitSystem === "imperial" ? "lbs" : "kg"})</Label>
              <Input
                id="weight"
                type="number"
                placeholder={`Enter weight in ${unitSystem === "imperial" ? "lbs" : "kg"}`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>

          <Button type="button" onClick={calculateBMR} className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white" disabled={isCalculating}>
            {isCalculating ? "Calculating..." : "Calculate BMR"}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Your BMR Result:</h3>
            <Card>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-primary">{result.bmr}</p>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </CardContent>
            </Card>

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                BMR is a measure of your metabolism at rest. It does not include calories burned through activity.  For personalized advice, consult a healthcare professional.
              </p>
            </div>
          </div>
        )}
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
