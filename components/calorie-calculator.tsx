"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'
import { Button } from "./ui/button"

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
      setError("Please enter valid numbers for all fields.")
      setResult(null)
      setIsCalculating(false)
      return
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
    setIsCalculating(false)
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
        <CardDescription>Calculate your personalized daily calorie needs for weight loss, maintenance, or gain</CardDescription>
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
              <Label htmlFor="age">Age (15-80)</Label>
              <Input
                id="age"
                type="number"
                min="15"
                max="80"
                placeholder="Enter your age (15-80)"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup
                value={gender}
                onValueChange={setGender}
                className="flex space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" className="border-gray-300" />
                  <Label htmlFor="male" className="font-normal">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" className="border-gray-300" />
                  <Label htmlFor="female" className="font-normal">Female</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="height">
                Height ({unitSystem === "imperial" ? "feet,inches" : "cm"})
              </Label>
              <Input
                id="height"
                type="text"
                placeholder={unitSystem === "imperial" ? "Enter height (e.g., 5,10)" : "Enter height in cm"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <p className="text-sm text-muted-foreground">
                {unitSystem === "imperial" ? "Format: feet,inches (e.g., 5,10)" : "Enter height in centimeters"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight ({unitSystem === "imperial" ? "lbs" : "kg"})</Label>
              <Input
                id="weight"
                type="number"
                placeholder={unitSystem === "imperial" ? "Enter weight in lbs" : "Enter weight in kg"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="activity">Activity Level</Label>
              <Select value={activity} onValueChange={setActivity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                  <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                  <SelectItem value="veryActive">Very Active (intense exercise daily)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="button"
            onClick={calculateCalories}
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
          >
            {isCalculating ? "Calculating..." : "Calculate Daily Calorie Needs"}
          </Button>
        </form>

        {result && (
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
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Weight Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Maintain current weight: {result.maintenance} calories/day</p>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Weight Gain Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">Mild gain: {result.mildGain} calories/day</p>
                    <p className="text-sm">Moderate gain: {result.weightGain} calories/day</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                These AI-generated calorie calculations are estimates based on the Mifflin-St Jeor equation. Individual needs may vary. For personalized nutrition advice, consult with a healthcare professional or registered dietitian.
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
