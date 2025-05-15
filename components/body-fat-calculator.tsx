"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

interface BodyFatResult {
  bodyFatPercentage: number;
  category: string;
}

export function BodyFatCalculator() {
  const [gender, setGender] = useState<string>("male")
  const [age, setAge] = useState<string>("")
  const [height, setHeight] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [neck, setNeck] = useState<string>("")
  const [waist, setWaist] = useState<string>("")
  const [hip, setHip] = useState<string>("")
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [result, setResult] = useState<BodyFatResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateBodyFat = () => {
    setIsCalculating(true)
    setError(null)

    const ageNum = parseInt(age)
    let heightCm: number
    let weightKg: number
    let neckCm: number
    let waistCm: number
    let hipCm: number

    if (unitSystem === "imperial") {
      heightCm = parseFloat(height) * 2.54
      weightKg = parseFloat(weight) * 0.453592
      neckCm = parseFloat(neck) * 2.54
      waistCm = parseFloat(waist) * 2.54
      hipCm = parseFloat(hip) * 2.54
    } else {
      heightCm = parseFloat(height)
      weightKg = parseFloat(weight)
      neckCm = parseFloat(neck)
      waistCm = parseFloat(waist)
      hipCm = parseFloat(hip)
    }

    if (
      isNaN(ageNum) ||
      isNaN(heightCm) ||
      isNaN(weightKg) ||
      isNaN(neckCm) ||
      isNaN(waistCm) ||
      (gender === "female" && isNaN(hipCm))
    ) {
      setError("Please enter valid numbers for all fields.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    let bodyFatPercentage: number

    if (gender === "male") {
      bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450
    } else {
      bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450
    }

    const category = getBodyFatCategory(bodyFatPercentage, gender)

    setResult({
      bodyFatPercentage: parseFloat(bodyFatPercentage.toFixed(1)),
      category
    })

    setIsCalculating(false)
  }

  const getBodyFatCategory = (percentage: number, gender: string): string => {
    if (gender === "male") {
      if (percentage < 6) return "Essential Fat"
      if (percentage < 14) return "Athletes"
      if (percentage < 18) return "Fitness"
      if (percentage < 25) return "Average"
      return "Obese"
    } else {
      if (percentage < 14) return "Essential Fat"
      if (percentage < 21) return "Athletes"
      if (percentage < 25) return "Fitness"
      if (percentage < 32) return "Average"
      return "Obese"
    }
  }

  const toggleUnitSystem = () => {
    if (unitSystem === "imperial") {
      setUnitSystem("metric")
      setHeight(h => h ? (parseFloat(h) * 2.54).toFixed(1) : "")
      setWeight(w => w ? (parseFloat(w) * 0.453592).toFixed(1) : "")
      setNeck(n => n ? (parseFloat(n) * 2.54).toFixed(1) : "")
      setWaist(w => w ? (parseFloat(w) * 2.54).toFixed(1) : "")
      setHip(h => h ? (parseFloat(h) * 2.54).toFixed(1) : "")
    } else {
      setUnitSystem("imperial")
      setHeight(h => h ? (parseFloat(h) / 2.54).toFixed(1) : "")
      setWeight(w => w ? (parseFloat(w) / 0.453592).toFixed(1) : "")
      setNeck(n => n ? (parseFloat(n) / 2.54).toFixed(1) : "")
      setWaist(w => w ? (parseFloat(w) / 2.54).toFixed(1) : "")
      setHip(h => h ? (parseFloat(h) / 2.54).toFixed(1) : "")
    }
  }

  return (
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Use our advanced AI-powered Body Fat Calculator to instantly estimate your body fat percentage with exceptional accuracy.</strong> Leveraging cutting-edge AI algorithms and the scientifically validated U.S. Navy method, this tool delivers a reliable assessment of your body composition-far more insightful than weight or BMI alone. Simply enter your gender, age, height, weight, neck, waist, and hip measurements below to calculate your body fat and unlock personalized health and fitness insights.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered Body Fat Calculator</CardTitle>
          <CardDescription>Calculate your body fat percentage and get personalized insights</CardDescription>
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
                <Label htmlFor="neck">Neck Circumference ({unitSystem === "imperial" ? "inches" : "cm"})</Label>
                <Input
                  id="neck"
                  type="number"
                  placeholder={`Enter neck circumference in ${unitSystem === "imperial" ? "inches" : "cm"}`}
                  value={neck}
                  onChange={(e) => setNeck(e.target.value)}
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waist">Waist Circumference ({unitSystem === "imperial" ? "inches" : "cm"})</Label>
                <Input
                  id="waist"
                  type="number"
                  placeholder={`Enter waist circumference in ${unitSystem === "imperial" ? "inches" : "cm"}`}
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className="bg-gray-50"
                />
              </div>
              {gender === "female" && (
                <div className="space-y-2">
                  <Label htmlFor="hip">Hip Circumference ({unitSystem === "imperial" ? "inches" : "cm"})</Label>
                  <Input
                    id="hip"
                    type="number"
                    placeholder={`Enter hip circumference in ${unitSystem === "imperial" ? "inches" : "cm"}`}
                    value={hip}
                    onChange={(e) => setHip(e.target.value)}
                    className="bg-gray-50"
                  />
                </div>
              )}
            </div>

            <Button
              type="button"
              onClick={calculateBodyFat}
              className="w-full"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate Body Fat Percentage"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Body Fat Calculation Results:</h3>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Body Fat Percentage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{result.bodyFatPercentage}%</p>
                  <p className="text-lg">Category: <span className="font-semibold">{result.category}</span></p>
                </CardContent>
              </Card>

              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  This AI-generated body fat calculation is an estimate based on the U.S. Navy method. For the most accurate results, consult with a healthcare professional or use specialized measurement techniques.
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
