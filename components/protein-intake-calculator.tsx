"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

interface ProteinIntakeResult {
  dailyProtein: number
  proteinPerMeal: number
}

export function ProteinIntakeCalculator() {
  const [weight, setWeight] = useState<string>("")
  const [activityLevel, setActivityLevel] = useState<string>("moderate")
  const [goal, setGoal] = useState<string>("maintain")
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [gender, setGender] = useState<string>("male")
  const [result, setResult] = useState<ProteinIntakeResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateProteinIntake = () => {
    setIsCalculating(true)
    setError(null)

    let weightInKg: number

    if (unitSystem === "imperial") {
      weightInKg = parseFloat(weight) * 0.453592 // Convert lbs to kg
    } else {
      weightInKg = parseFloat(weight)
    }

    if (isNaN(weightInKg) || weightInKg <= 0) {
      setError("Please enter a valid number for weight.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    let proteinMultiplier: number

    switch (activityLevel) {
      case "sedentary":
        proteinMultiplier = 0.8
        break
      case "moderate":
        proteinMultiplier = 1.2
        break
      case "active":
        proteinMultiplier = 1.6
        break
      case "veryActive":
        proteinMultiplier = 2.0
        break
      default:
        proteinMultiplier = 1.2
    }

    if (goal === "gain") {
      proteinMultiplier += 0.3
    } else if (goal === "lose") {
      proteinMultiplier += 0.1
    }

    // Adjust for gender
    if (gender === "female") {
      proteinMultiplier *= 0.9
    }

    const dailyProtein = Math.round(weightInKg * proteinMultiplier)
    const proteinPerMeal = Math.round(dailyProtein / 4) // Assuming 4 meals per day

    setResult({ dailyProtein, proteinPerMeal })
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
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Calculate your optimal daily protein intake instantly with our AI-powered tool.</strong> Get personalized recommendations tailored to your weight, activity level, and fitness goals. Use this calculator to help optimize muscle growth, recovery, and overall health, and support your weight management efforts by finding your specific daily and per-meal protein targets. Simply enter your information below to start.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered Protein Intake Calculator</CardTitle>
          <CardDescription>Calculate your optimal daily protein intake based on your weight, activity level, and goals.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="flex justify-end">
              <Button type="button" variant="outline" size="sm" onClick={toggleUnitSystem}>
                <ArrowRightLeft className="mr-2 h-4 w-4" />
                Switch to {unitSystem === "imperial" ? "Metric" : "Imperial"}
              </Button>
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
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
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
              <Label htmlFor="activity">Activity Level</Label>
              <Select value={activityLevel} onValueChange={setActivityLevel}>
                <SelectTrigger id="activity">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                  <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                  <SelectItem value="veryActive">Very Active (intense exercise daily)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal">Goal</Label>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger id="goal">
                  <SelectValue placeholder="Select your goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lose">Lose Weight</SelectItem>
                  <SelectItem value="maintain">Maintain Weight</SelectItem>
                  <SelectItem value="gain">Gain Muscle</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="button"
              onClick={calculateProteinIntake}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate Protein Intake"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Recommended Protein Intake:</h3>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-primary">{result.dailyProtein}g per day</p>
                  <p className="text-xl mt-2">Approximately {result.proteinPerMeal}g per meal (assuming 4 meals per day)</p>
                </CardContent>
              </Card>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  This recommendation is based on your weight, activity level, and goals. Adjust your intake as needed and consult with a healthcare professional or registered dietitian for personalized advice.
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
