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
}

export function BMRCalculator() {
  const [gender, setGender] = useState<string>("male")
  const [age, setAge] = useState<string>("")
  const [height, setHeight] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [result, setResult] = useState<BMRResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateBMR = () => {
    setIsCalculating(true)
    setError(null)

    let heightCm: number
    let weightKg: number

    if (unitSystem === "imperial") {
      heightCm = parseFloat(height) * 2.54
      weightKg = parseFloat(weight) * 0.453592
    } else {
      heightCm = parseFloat(height)
      weightKg = parseFloat(weight)
    }

    const ageNum = parseInt(age)

    if (isNaN(heightCm) || isNaN(weightKg) || isNaN(ageNum)) {
      setError("Please enter valid numbers for all fields.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    // Mifflin-St Jeor Equation
    let bmr: number
    if (gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum + 5
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum - 161
    }

    setResult({ bmr: Math.round(bmr) })
    setIsCalculating(false)
  }

  const toggleUnitSystem = () => {
    if (unitSystem === "imperial") {
      setUnitSystem("metric")
      setHeight(h => h ? (parseFloat(h) * 2.54).toFixed(1) : "")
      setWeight(w => w ? (parseFloat(w) * 0.453592).toFixed(1) : "")
    } else {
      setUnitSystem("imperial")
      setHeight(h => h ? (parseFloat(h) / 2.54).toFixed(1) : "")
      setWeight(w => w ? (parseFloat(w) / 0.453592).toFixed(1) : "")
    }
  }

  return (
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Quickly understand your baseline calorie needs by using our AI-Enhanced Basal Metabolic Rate (BMR) Calculator.</strong> Your BMR represents the number of calories your body burns at rest to maintain basic functions. Knowing this figure is a crucial factor in weight management and helps you make informed decisions about your diet and exercise plan, supporting effective weight loss or gain strategies. Our AI-powered calculator provides accurate, personalized results based on your age, gender, height, and weight, giving you insights into your body's requirements to set realistic goals.
        </p>
      </div>
      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Enhanced BMR Calculator</CardTitle>
          <CardDescription>Calculate your Basal Metabolic Rate (BMR) based on your age, gender, height, and weight.</CardDescription>
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
                  className="bg-gray-50"
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
                  className="bg-gray-50"
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
                  className="bg-gray-50"
                />
              </div>
            </div>
            <Button
              type="button"
              onClick={calculateBMR}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate BMR"}
            </Button>
          </form>
          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Basal Metabolic Rate (BMR):</h3>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">BMR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{result.bmr} calories/day</p>
                  <p className="text-sm text-muted-foreground">
                    This is the estimated number of calories your body needs at rest. Adjust your calorie intake based on your goals and activity level.
                  </p>
                </CardContent>
              </Card>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  These calculations are estimates based on standard formulas. For personalized advice, consult a healthcare professional.
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
    </>
  )
}
