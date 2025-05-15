"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from 'lucide-react'

interface OneRepMaxResult {
  oneRepMax: number
  percentages: { [key: string]: number }
}

export function OneRepMaxCalculator() {
  const [weight, setWeight] = useState<string>("")
  const [reps, setReps] = useState<string>("")
  const [formula, setFormula] = useState<string>("brzycki")
  const [result, setResult] = useState<OneRepMaxResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateOneRepMax = () => {
    setIsCalculating(true)
    setError(null)

    const weightNum = parseFloat(weight)
    const repsNum = parseInt(reps)

    if (isNaN(weightNum) || isNaN(repsNum)) {
      setError("Please enter valid numbers for weight and reps.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    let oneRepMax: number

    switch (formula) {
      case "brzycki":
        oneRepMax = weightNum / (1.0278 - 0.0278 * repsNum)
        break
      case "epley":
        oneRepMax = weightNum * (1 + 0.0333 * repsNum)
        break
      case "lander":
        oneRepMax = (100 * weightNum) / (101.3 - 2.67123 * repsNum)
        break
      default:
        oneRepMax = weightNum / (1.0278 - 0.0278 * repsNum) // Default to Brzycki
    }

    const percentages = {
      "95%": oneRepMax * 0.95,
      "90%": oneRepMax * 0.90,
      "85%": oneRepMax * 0.85,
      "80%": oneRepMax * 0.80,
      "75%": oneRepMax * 0.75,
      "70%": oneRepMax * 0.70,
      "65%": oneRepMax * 0.65,
      "60%": oneRepMax * 0.60,
    }

    setResult({
      oneRepMax: Math.round(oneRepMax),
      percentages: Object.fromEntries(
        Object.entries(percentages).map(([key, value]) => [key, Math.round(value)])
      ),
    })

    setIsCalculating(false)
  }

  return (
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Unlock your strength potential instantly with our AI-powered One Rep Max (1RM) Calculator, designed for effective strength training and progressive overload.</strong> Simply enter the weight you lifted and the number of repetitions to accurately estimate your maximum strength for key exercises like the bench press, squat, and deadlift. Our tool helps you calculate precise training percentages to optimize your workout routine and safely plan your strength program without the risks of actual 1RM testing. It uses scientifically-backed formulas like Brzycki, Epley, and Lander for increased accuracy.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered One Rep Max (1RM) Calculator</CardTitle>
          <CardDescription>Calculate your estimated one-rep max and training percentages</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="weight">Weight Lifted</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter weight lifted"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reps">Repetitions</Label>
              <Input
                id="reps"
                type="number"
                placeholder="Enter number of reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="formula">Calculation Formula</Label>
              <Select value={formula} onValueChange={setFormula}>
                <SelectTrigger id="formula">
                  <SelectValue placeholder="Select formula" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brzycki">Brzycki</SelectItem>
                  <SelectItem value="epley">Epley</SelectItem>
                  <SelectItem value="lander">Lander</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="button"
              onClick={calculateOneRepMax}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate One Rep Max"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Estimated One Rep Max:</h3>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-primary">{result.oneRepMax} lbs</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {Object.entries(result.percentages).map(([percentage, weight]) => (
                      <p key={percentage}>
                        <span className="font-semibold">{percentage}:</span> {weight} lbs
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  This is an estimate based on the {formula.charAt(0).toUpperCase() + formula.slice(1)} formula. Your actual one-rep max may vary. Always prioritize safety and proper form when attempting maximal lifts.
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
