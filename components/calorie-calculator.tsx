"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from 'lucide-react'

export function CalorieCalculator() {
  const [gender, setGender] = useState("male")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [activity, setActivity] = useState("sedentary")
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const calculateCalories = () => {
    setError(null)
    const ageNum = parseInt(age)
    const heightNum = parseFloat(height)
    const weightNum = parseFloat(weight)

    if (isNaN(ageNum) || isNaN(heightNum) || isNaN(weightNum)) {
      setError("Please enter valid numbers for all fields.")
      setResult(null)
      return
    }

    // Mifflin-St Jeor Equation
    let bmr
    if (gender === "male") {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161
    }

    const activityFactors = {
      sedentary: 1.2,
      lightly: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryactive: 1.9,
    }
    const calories = Math.round(bmr * activityFactors[activity])
    setResult({ bmr: Math.round(bmr), calories })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Daily Calorie Calculator</CardTitle>
        <CardDescription>
          Find out your daily calorie needs based on your age, gender, height, weight, and activity level.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
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
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="Enter your height in cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter your weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Activity Level</Label>
              <Select value={activity} onValueChange={setActivity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="lightly">Lightly active (light exercise/sports 1-3 days/week)</SelectItem>
                  <SelectItem value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</SelectItem>
                  <SelectItem value="active">Active (hard exercise/sports 6-7 days/week)</SelectItem>
                  <SelectItem value="veryactive">Very active (very hard exercise & physical job)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="button" onClick={calculateCalories} className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white">
            Calculate Daily Calorie Needs
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>BMR:</strong> {result.bmr} calories/day</p>
                <p><strong>Daily Calories Needed:</strong> {result.calories} calories/day</p>
              </CardContent>
            </Card>
            <div className="flex items-start space-x-2 text-sm text-muted-foreground mt-4">
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
  )
}
