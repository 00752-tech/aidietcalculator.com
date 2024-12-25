"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

interface WaterIntakeResult {
  dailyIntake: number;
}

export function WaterIntakeCalculator() {
  const [weight, setWeight] = useState<string>("")
  const [activityLevel, setActivityLevel] = useState<string>("moderate")
  const [climate, setClimate] = useState<string>("moderate")
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [result, setResult] = useState<WaterIntakeResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateWaterIntake = () => {
    setIsCalculating(true)
    setError(null)

    let weightInKg: number

    if (unitSystem === "imperial") {
      weightInKg = parseFloat(weight) * 0.453592 // Convert lbs to kg
    } else {
      weightInKg = parseFloat(weight)
    }

    if (isNaN(weightInKg)) {
      setError("Please enter a valid number for weight.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    // Base calculation: 30ml per kg of body weight
    let dailyIntake = weightInKg * 30

    // Adjust for activity level
    switch (activityLevel) {
      case "sedentary":
        dailyIntake *= 0.9
        break
      case "active":
        dailyIntake *= 1.1
        break
      case "very active":
        dailyIntake *= 1.2
        break
    }

    // Adjust for climate
    switch (climate) {
      case "hot":
        dailyIntake *= 1.1
        break
      case "cold":
        dailyIntake *= 0.95
        break
    }

    setResult({
      dailyIntake: Math.round(dailyIntake / 1000 * 100) / 100 // Convert to liters and round to 2 decimal places
    })

    setIsCalculating(false)
  }

  const toggleUnitSystem = () => {
    if (unitSystem === "imperial") {
      setUnitSystem("metric")
      setWeight(w => w ? (parseFloat(w) * 0.453592).toFixed(1) : "")
    } else {
      setUnitSystem("imperial")
      setWeight(w => w ? (parseFloat(w) / 0.453592).toFixed(1) : "")
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Water Intake Calculator</CardTitle>
        <CardDescription>Calculate your recommended daily water intake based on your weight, activity level, and climate</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="flex justify-end">
            <Button type="button" variant="outline" size="sm" onClick={toggleUnitSystem}>
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              Switch to {unitSystem === "imperial" ? "Metric" : "Imperial"}
            </Button>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Weight ({unitSystem === "imperial" ? "lbs" : "kg"})</Label>
              <Input
                id="weight"
                type="number"
                placeholder={`Enter weight in ${unitSystem === "imperial" ? "lbs" : "kg"}`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="activity">Activity Level</Label>
              <Select value={activityLevel} onValueChange={setActivityLevel}>
                <SelectTrigger id="activity">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                  <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                  <SelectItem value="very active">Very Active (intense exercise daily)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="climate">Climate</Label>
              <Select value={climate} onValueChange={setClimate}>
                <SelectTrigger id="climate">
                  <SelectValue placeholder="Select climate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cold">Cold</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="hot">Hot</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="button"
            onClick={calculateWaterIntake}
            className="w-full"
            disabled={isCalculating}
          >
            {isCalculating ? "Calculating..." : "Calculate Water Intake"}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Your Recommended Daily Water Intake:</h3>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Daily Water Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{result.dailyIntake} liters</p>
                <p className="text-lg">or about {Math.round(result.dailyIntake * 33.814)} fl oz</p>
              </CardContent>
            </Card>

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                This calculation is an estimate based on your weight, activity level, and climate. Individual needs may vary. Factors like pregnancy, breastfeeding, or certain medical conditions may increase your water needs. Always consult with a healthcare professional for personalized advice.
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
