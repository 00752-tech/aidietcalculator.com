"use client"

import { useState } from "react"
import { Input, Label, RadioGroup, RadioGroupItem } from "@/components/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft, Leaf } from 'lucide-react'
import { Button } from "./ui/button"

// Mitolyn Affiliate Ad Component
const MitolynAd = () => {
  return (
    <Card className="mt-8 border-2 border-green-600 bg-gradient-to-br from-green-50 to-green-100">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="relative">
          <Leaf className="h-8 w-8 text-green-600 animate-pulse" style={{
            animationDuration: '1.5s',
            filter: 'drop-shadow(0 0 4px rgba(74, 222, 128, 0.3))'
          }} />
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 animate-ping" style={{
            animationDuration: '2s',
            animationDelay: '0.5s'
          }} />
        </div>
        <div>
          <CardTitle className="text-xl text-green-800">Natural Blood Sugar Support</CardTitle>
          <CardDescription className="text-green-700">Clinically-backed ingredients for healthy glucose metabolism</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong className="text-green-700">Mitolyn</strong> combines 9 scientifically validated botanicals to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="hover:text-green-600 transition-colors duration-200">Support healthy blood sugar levels</li>
            <li className="hover:text-green-600 transition-colors duration-200">Enhance insulin sensitivity</li>
            <li className="hover:text-green-600 transition-colors duration-200">Reduce sugar cravings naturally</li>
            <li className="hover:text-green-600 transition-colors duration-200">Promote metabolic health</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://3fcfcygsrb0q0pailiuc9g4m4g.hop.clickbank.net/?&traffic_source=aidietcalc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-md shadow-lg transition-all transform hover:scale-[1.02] w-full text-center"
            >
              <Leaf className="mr-2 h-5 w-5" />
              Discover Blood Sugar Support
              <ArrowRightLeft className="ml-2 h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            *Sponsored Advertisement: We may earn a commission if you purchase through this link.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

interface CalorieResult {
  maintenance: number;
  mildLoss: number;
  weightLoss: number;
  extremeLoss: number;
  mildGain: number;
  weightGain: number;
}

export function CalorieCalculator() {
  const [age, setAge] = useState<string>("")
  const [gender, setGender] = useState<string>("male")
  const [height, setHeight] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [activity, setActivity] = useState<string>("moderate")
  const [result, setResult] = useState<CalorieResult | null>(null)
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const activityLevels = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  }

  const calculateCalories = () => {
    setIsCalculating(true)
    setError(null)
    
    try {
      let heightInCm: number
      let weightInKg: number

      if (unitSystem === "imperial") {
        const [feet, inches] = height.split(",").map(Number)
        heightInCm = ((feet * 12) + (inches || 0)) * 2.54
        weightInKg = parseFloat(weight) * 0.453592
      } else {
        heightInCm = parseFloat(height)
        weightInKg = parseFloat(weight)
      }

      const ageNum = parseInt(age)

      if (isNaN(heightInCm) || isNaN(weightInKg) || isNaN(ageNum)) {
        throw new Error("Please enter valid numbers for all fields.")
      }

      let bmr
      if (gender === "male") {
        bmr = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * ageNum)
      } else {
        bmr = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * ageNum)
      }

      const maintenance = Math.round(bmr * activityLevels[activity as keyof typeof activityLevels])
      
      setResult({
        maintenance,
        mildLoss: maintenance - 250,
        weightLoss: maintenance - 500,
        extremeLoss: maintenance - 750,
        mildGain: maintenance + 250,
        weightGain: maintenance + 500
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      setResult(null)
    } finally {
      setIsCalculating(false)
    }
  }

  const toggleUnitSystem = () => {
    if (unitSystem === "imperial") {
      setUnitSystem("metric")
      if (height) {
        const [feet, inches] = height.split(",").map(Number)
        setHeight(((feet * 12 + inches) * 2.54).toFixed(1))
      }
      if (weight) {
        setWeight((parseFloat(weight) * 0.453592).toFixed(1))
      }
    } else {
      setUnitSystem("imperial")
      if (height) {
        const totalInches = Math.round(parseFloat(height) / 2.54)
        const feet = Math.floor(totalInches / 12)
        const inches = totalInches % 12
        setHeight(`${feet},${inches}`)
      }
      if (weight) {
        setWeight((parseFloat(weight) / 0.453592).toFixed(1))
      }
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Calorie Calculator</CardTitle>
        <CardDescription>
          Discover your personalized daily calorie needs for weight loss, muscle gain, or maintaining a healthy weight...
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="flex justify-end">
            <Button type="button" variant="outline" size="sm" onClick={toggleUnitSystem}>
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              Switch to {unitSystem === "imperial" ? "Metric" : "Imperial"}
            </Button>
          </div>
          {/* ... [rest of your form inputs] ... */}
          <Button
            type="button"
            onClick={calculateCalories}
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
          >
            {isCalculating ? "Calculating..." : "Calculate Daily Calorie Needs"}
          </Button>
        </form>

        {/* Safely check for results before rendering */}
        {result !== null && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Your Personalized Daily Calorie Needs:</h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Weight Loss Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">Extreme loss: {result.extremeLoss} calories/day</p>
                    <p className="text-sm">Moderate loss: {result.weightLoss} calories/day</p>
                    <p className="text-sm">Mild loss: {result.mildLoss} calories/day</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* ... [other result cards] ... */}
            </div>

            <MitolynAd />

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                These AI-generated calorie calculations are estimates based on the Mifflin-St Jeor equation...
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
