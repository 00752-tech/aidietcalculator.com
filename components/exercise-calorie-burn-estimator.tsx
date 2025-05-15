"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

interface CalorieBurnResult {
  caloriesBurned: number;
}

const exerciseData = {
  "running": 11.4,
  "cycling": 7.5,
  "swimming": 8.3,
  "walking": 4.3,
  "weightlifting": 3.8,
  "yoga": 3,
  "dancing": 6.5,
  "basketball": 8,
  "soccer": 9.8,
  "tennis": 7.3
}

export function ExerciseCalorieBurnEstimator() {
  const [weight, setWeight] = useState<string>("")
  const [duration, setDuration] = useState<string>("")
  const [exercise, setExercise] = useState<string>("running")
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [result, setResult] = useState<CalorieBurnResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateCalorieBurn = () => {
    setIsCalculating(true)
    setError(null)

    let weightKg: number
    const durationHours = parseFloat(duration) / 60

    if (unitSystem === "imperial") {
      weightKg = parseFloat(weight) * 0.453592
    } else {
      weightKg = parseFloat(weight)
    }

    if (isNaN(weightKg) || weightKg <= 0 || isNaN(durationHours) || durationHours <= 0) {
      setError("Please enter valid numbers for weight and duration.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    const metValue = exerciseData[exercise as keyof typeof exerciseData]
    const caloriesBurned = metValue * weightKg * durationHours

    setResult({
      caloriesBurned: Math.round(caloriesBurned)
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
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Get precise estimates of the calories burned during various exercises with our AI-powered Exercise Calorie Burn Estimator.</strong> This tool offers personalized calculations based on your weight and exercise duration, helping you plan more effective workouts, track progress, and optimize your fitness goals like weight loss or maintenance.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered Exercise Calorie Burn Estimator</CardTitle>
          <CardDescription>Estimate the number of calories burned during various exercises</CardDescription>
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
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="Enter exercise duration in minutes"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="exercise">Exercise Type</Label>
                <Select value={exercise} onValueChange={setExercise}>
                  <SelectTrigger id="exercise" className="bg-gray-50">
                    <SelectValue placeholder="Select exercise type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(exerciseData).map((ex) => (
                      <SelectItem key={ex} value={ex}>
                        {ex.charAt(0).toUpperCase() + ex.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="button"
              onClick={calculateCalorieBurn}
              className="w-full"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Estimate Calorie Burn"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Estimated Calorie Burn:</h3>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Calories Burned</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{result.caloriesBurned} calories</p>
                </CardContent>
              </Card>

              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  This calorie burn estimate is based on average values and may vary depending on individual factors such as fitness level, age, and gender. For more accurate results, consider using a heart rate monitor or consulting with a fitness professional.
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
