"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from 'lucide-react'

interface MacroBalanceResult {
  protein: number;
  carbs: number;
  fat: number;
}


export function MacroBalanceCalculator() {
  const [calories, setCalories] = useState<string>("")
  const [proteinPercent, setProteinPercent] = useState<string>("")
  const [carbPercent, setCarbPercent] = useState<string>("")
  const [fatPercent, setFatPercent] = useState<string>("")
  const [result, setResult] = useState<MacroBalanceResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateMacros = () => {
    setIsCalculating(true)
    setError(null)

    const caloriesNum = parseInt(calories)
    const proteinP = parseInt(proteinPercent)
    const carbP = parseInt(carbPercent)
    const fatP = parseInt(fatPercent)

    if (isNaN(caloriesNum) || isNaN(proteinP) || isNaN(carbP) || isNaN(fatP)) {
      setError("Please enter valid numbers for all fields.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    if (proteinP + carbP + fatP !== 100) {
      setError("Percentages must add up to 100%.")
      setResult(null)
      setIsCalculating(false)
      return;
    }

    const protein = Math.round((caloriesNum * (proteinP / 100)) / 4)
    const carbs = Math.round((caloriesNum * (carbP / 100)) / 4)
    const fat = Math.round((caloriesNum * (fatP / 100)) / 9)

    setResult({ protein, carbs, fat })
    setIsCalculating(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Macro Balance Calculator</CardTitle>
        <CardDescription>Fine-tune your macronutrient ratios for specific fitness goals.</CardDescription>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="protein">Protein (%)</Label>
                <Input
                  id="protein"
                  type="number"
                  placeholder="Enter protein percentage"
                  value={proteinPercent}
                  onChange={(e) => setProteinPercent(e.target.value)}
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbs">Carbs (%)</Label>
                <Input
                  id="carbs"
                  type="number"
                  placeholder="Enter carb percentage"
                  value={carbPercent}
                  onChange={(e) => setCarbPercent(e.target.value)}
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fat">Fat (%)</Label>
                <Input
                  id="fat"
                  type="number"
                  placeholder="Enter fat percentage"
                  value={fatPercent}
                  onChange={(e) => setFatPercent(e.target.value)}
                  className="bg-gray-50"
                />
              </div>
            </div>
          </div>

          <Button
            type="button"
            onClick={calculateMacros}
            className="w-full"
            disabled={isCalculating}
          >
            {isCalculating ? "Calculating..." : "Calculate Macros"}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Your Macronutrient Breakdown:</h3>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Daily Macronutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg">Protein: <span className="font-bold text-primary">{result.protein}g</span></p>
                  <p className="text-lg">Carbohydrates: <span className="font-bold text-primary">{result.carbs}g</span></p>
                  <p className="text-lg">Fat: <span className="font-bold text-primary">{result.fat}g</span></p>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                These macronutrient calculations are based on your provided percentages and calorie target.  Adjust your intake as needed and consult with a healthcare professional or registered dietitian for personalized advice.
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
