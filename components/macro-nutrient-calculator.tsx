"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft, HeartPulse } from 'lucide-react'

interface MacroResult {
  protein: number;
  carbs: number;
  fat: number;
}

// Joint Care Affiliate Ad Component
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft, HeartPulse } from 'lucide-react'

interface MacroResult {
  protein: number;
  carbs: number;
  fat: number;
}

// Joint Care Affiliate Ad Component
const JointCareAd = () => {
  return (
    <Card className="mt-8 border-2 border-green-600 bg-gradient-to-br from-green-50 to-green-100">
      <CardHeader className="flex flex-row items-center gap-3">
        <HeartPulse className="h-8 w-8 text-green-600" />
        <div>
          <CardTitle className="text-xl text-green-800">Advanced Joint Support Formula</CardTitle>
          <CardDescription className="text-green-700">Clinically proven ingredients for joint pain relief and mobility</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>BestJointCare</strong> combines 7 scientifically validated ingredients to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduce joint pain and stiffness within 7-14 days</li>
            <li>Improve mobility and flexibility</li>
            <li>Protect and repair cartilage</li>
            <li>Reduce inflammation naturally</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://8bf77q56j8by7qcivf1krczm6j.hop.clickbank.net/?&traffic_source=aidietcalc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md shadow-md transition-colors w-full text-center"
            >
              Learn About Joint Relief Formula <ArrowRightLeft className="ml-2 h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            *Sponsored Advertisement: We may earn a commission if you purchase through this link.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export function MacroNutrientCalculator() {
  const [calories, setCalories] = useState<string>("")
  const [goal, setGoal] = useState<string>("maintain")
  const [activityLevel, setActivityLevel] = useState<string>("moderate")
  const [result, setResult] = useState<MacroResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateMacros = () => {
    setIsCalculating(true)
    setError(null)

    const caloriesNum = parseInt(calories)

    if (isNaN(caloriesNum)) {
      setError("Please enter a valid number for calories.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    let proteinPercentage: number
    let carbPercentage: number
    let fatPercentage: number

    switch (goal) {
      case "lose":
        proteinPercentage = 0.4
        carbPercentage = 0.3
        fatPercentage = 0.3
        break
      case "maintain":
        proteinPercentage = 0.3
        carbPercentage = 0.4
        fatPercentage = 0.3
        break
      case "gain":
        proteinPercentage = 0.3
        carbPercentage = 0.5
        fatPercentage = 0.2
        break
      default:
        proteinPercentage = 0.3
        carbPercentage = 0.4
        fatPercentage = 0.3
    }

    // Adjust based on activity level
    if (activityLevel === "sedentary") {
      carbPercentage -= 0.05
      fatPercentage += 0.05
    } else if (activityLevel === "very active") {
      carbPercentage += 0.05
      fatPercentage -= 0.05
    }

    const protein = Math.round((caloriesNum * proteinPercentage) / 4)
    const carbs = Math.round((caloriesNum * carbPercentage) / 4)
    const fat = Math.round((caloriesNum * fatPercentage) / 9)

    setResult({ protein, carbs, fat })
    setIsCalculating(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Macro Nutrient Calculator</CardTitle>
        <CardDescription>Calculate your recommended macronutrient intake based on your calorie needs and goals</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="calories">Daily Calorie Target</Label>
              <Input
                id="calories"
                type="number"
                placeholder="Enter your daily calorie target"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal">Goal</Label>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger id="goal" className="bg-gray-50">
                  <SelectValue placeholder="Select your goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lose">Lose Weight</SelectItem>
                  <SelectItem value="maintain">Maintain Weight</SelectItem>
                  <SelectItem value="gain">Gain Weight</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="activity">Activity Level</Label>
              <Select value={activityLevel} onValueChange={setActivityLevel}>
                <SelectTrigger id="activity" className="bg-gray-50">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                  <SelectItem value="very active">Very Active (exercise 6-7 days/week)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="button"
            onClick={calculateMacros}
            className="w-full"
            disabled={isCalculating}
          >
            {isCalculating ? "Calculating..." : "Calculate Macronutrients"}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Your Recommended Macronutrient Intake:</h3>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Daily Macronutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg">Protein: <span className="font-bold text-primary">{result.protein}g</span> ({Math.round(result.protein * 4)} calories)</p>
                  <p className="text-lg">Carbohydrates: <span className="font-bold text-primary">{result.carbs}g</span> ({Math.round(result.carbs * 4)} calories)</p>
                  <p className="text-lg">Fat: <span className="font-bold text-primary">{result.fat}g</span> ({Math.round(result.fat * 9)} calories)</p>
                </div>
              </CardContent>
            </Card>

            {/* Joint Care Ad Placement - After Results */}
            <JointCareAd />

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                These macronutrient recommendations are based on general guidelines and may need to be adjusted based on individual factors such as specific health conditions or athletic performance goals. Always consult with a registered dietitian or healthcare professional for personalized advice.
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

export function MacroNutrientCalculator() {
  const [calories, setCalories] = useState<string>("")
  const [goal, setGoal] = useState<string>("maintain")
  const [activityLevel, setActivityLevel] = useState<string>("moderate")
  const [result, setResult] = useState<MacroResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateMacros = () => {
    setIsCalculating(true)
    setError(null)

    const caloriesNum = parseInt(calories)

    if (isNaN(caloriesNum)) {
      setError("Please enter a valid number for calories.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    let proteinPercentage: number
    let carbPercentage: number
    let fatPercentage: number

    switch (goal) {
      case "lose":
        proteinPercentage = 0.4
        carbPercentage = 0.3
        fatPercentage = 0.3
        break
      case "maintain":
        proteinPercentage = 0.3
        carbPercentage = 0.4
        fatPercentage = 0.3
        break
      case "gain":
        proteinPercentage = 0.3
        carbPercentage = 0.5
        fatPercentage = 0.2
        break
      default:
        proteinPercentage = 0.3
        carbPercentage = 0.4
        fatPercentage = 0.3
    }

    // Adjust based on activity level
    if (activityLevel === "sedentary") {
      carbPercentage -= 0.05
      fatPercentage += 0.05
    } else if (activityLevel === "very active") {
      carbPercentage += 0.05
      fatPercentage -= 0.05
    }

    const protein = Math.round((caloriesNum * proteinPercentage) / 4)
    const carbs = Math.round((caloriesNum * carbPercentage) / 4)
    const fat = Math.round((caloriesNum * fatPercentage) / 9)

    setResult({ protein, carbs, fat })
    setIsCalculating(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Macro Nutrient Calculator</CardTitle>
        <CardDescription>Calculate your recommended macronutrient intake based on your calorie needs and goals</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="calories">Daily Calorie Target</Label>
              <Input
                id="calories"
                type="number"
                placeholder="Enter your daily calorie target"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal">Goal</Label>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger id="goal" className="bg-gray-50">
                  <SelectValue placeholder="Select your goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lose">Lose Weight</SelectItem>
                  <SelectItem value="maintain">Maintain Weight</SelectItem>
                  <SelectItem value="gain">Gain Weight</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="activity">Activity Level</Label>
              <Select value={activityLevel} onValueChange={setActivityLevel}>
                <SelectTrigger id="activity" className="bg-gray-50">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                  <SelectItem value="very active">Very Active (exercise 6-7 days/week)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="button"
            onClick={calculateMacros}
            className="w-full"
            disabled={isCalculating}
          >
            {isCalculating ? "Calculating..." : "Calculate Macronutrients"}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Your Recommended Macronutrient Intake:</h3>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Daily Macronutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg">Protein: <span className="font-bold text-primary">{result.protein}g</span> ({Math.round(result.protein * 4)} calories)</p>
                  <p className="text-lg">Carbohydrates: <span className="font-bold text-primary">{result.carbs}g</span> ({Math.round(result.carbs * 4)} calories)</p>
                  <p className="text-lg">Fat: <span className="font-bold text-primary">{result.fat}g</span> ({Math.round(result.fat * 9)} calories)</p>
                </div>
              </CardContent>
            </Card>

            {/* Joint Care Ad Placement - After Results */}
            <JointCareAd />

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                These macronutrient recommendations are based on general guidelines and may need to be adjusted based on individual factors such as specific health conditions or athletic performance goals. Always consult with a registered dietitian or healthcare professional for personalized advice.
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
