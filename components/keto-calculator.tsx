"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

interface KetoResult {
  calories: number
  protein: number
  carbs: number
  fat: number
}

export function KetoCalculator() {
  const [gender, setGender] = useState<string>("female")
  const [age, setAge] = useState<string>("")
  const [height, setHeight] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [activityLevel, setActivityLevel] = useState<string>("sedentary")
  const [bodyFat, setBodyFat] = useState<number>(20)
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [result, setResult] = useState<KetoResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateKeto = () => {
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

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr
    if (gender === "male") {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageNum + 5
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageNum - 161
    }

    // Adjust BMR based on activity level
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    }
    const tdee = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]

    // Calculate macros for keto diet
    const proteinPerKg = 1.6 // grams of protein per kg of lean body mass
    const carbsPercent = 0.05 // 5% of calories from carbs
    const fatPercent = 0.75 // 75% of calories from fat

    const leanMass = weightInKg * (1 - bodyFat / 100)
    const proteinGrams = leanMass * proteinPerKg
    const proteinCalories = proteinGrams * 4

    const carbsCalories = tdee * carbsPercent
    const carbsGrams = carbsCalories / 4

    const fatCalories = tdee * fatPercent
    const fatGrams = fatCalories / 9

    setResult({
      calories: Math.round(tdee),
      protein: Math.round(proteinGrams),
      carbs: Math.round(carbsGrams),
      fat: Math.round(fatGrams)
    })

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
          <strong>Use our AI-Powered Keto Calculator to quickly determine your personalized keto macros, scientifically optimized for maximizing results and achieving sustainable ketosis.</strong> By analyzing your unique data including age, gender, height, weight, activity level, and body fat percentage, our advanced algorithms provide accurate calorie and nutrient calculations adjusted for your goals, supporting weight loss and maintaining proper nutrient balance.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered Keto Calculator</CardTitle>
          <CardDescription>Calculate your personalized keto macros for optimal results</CardDescription>
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
                <RadioGroup
                  value={gender}
                  onValueChange={setGender}
                  className="flex space-x-4"
                >
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
              <div className="space-y-2">
                <Label htmlFor="activity">Activity Level</Label>
                <Select value={activityLevel} onValueChange={setActivityLevel}>
                  <SelectTrigger id="activity">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                    <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                    <SelectItem value="veryActive">Very Active (hard exercise daily)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bodyFat">Body Fat Percentage</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="bodyFat"
                    min={5}
                    max={50}
                    step={1}
                    value={[bodyFat]}
                    onValueChange={(value) => setBodyFat(value[0])}
                    className="flex-grow"
                  />
                  <span className="text-sm font-medium">{bodyFat}%</span>
                </div>
              </div>
            </div>

            <Button
              type="button"
              onClick={calculateKeto}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate Keto Macros"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Personalized Keto Macros:</h3>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Daily Macronutrient Targets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Calories:</p>
                      <p className="text-2xl font-bold text-primary">{result.calories}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Protein:</p>
                      <p className="text-2xl font-bold text-primary">{result.protein}g</p>
                    </div>
                    <div>
                      <p className="font-semibold">Carbs:</p>
                      <p className="text-2xl font-bold text-primary">{result.carbs}g</p>
                    </div>
                    <div>
                      <p className="font-semibold">Fat:</p>
                      <p className="text-2xl font-bold text-primary">{result.fat}g</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  These keto macros are calculated based on your personal information and activity level. Adjust your intake as needed and consult with a healthcare professional before starting any new diet.
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
