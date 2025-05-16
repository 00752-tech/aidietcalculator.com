"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft, HeartPulse } from 'lucide-react'

interface MacroResult {
  protein: number;
  carbs: number;
  fat: number;
}

const JointCareAd = () => {
  return (
    <Card className="mt-8 border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="relative">
          <HeartPulse className="h-8 w-8 text-blue-600 animate-pulse" />
        </div>
        <div>
          <CardTitle className="text-xl text-blue-800">Advanced Joint Support Formula</CardTitle>
          <CardDescription className="text-blue-700">Clinically proven ingredients for joint pain relief and mobility</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong className="text-blue-700">BestJointCare</strong> combines 7 scientifically validated ingredients to:
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
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-md transition-colors w-full text-center"
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
          {/* Form fields remain the same */}
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            {/* Results display */}
            <JointCareAd />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
