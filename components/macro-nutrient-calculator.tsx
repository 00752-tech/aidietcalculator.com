"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft, HeartPulse } from "lucide-react"
import { MacroResultContext, useMacroResult, MacroResult } from "@/lib/macro-result-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const JointCareAd = () => (
  <Card className="mt-8 border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
    <CardHeader className="flex flex-row items-center gap-3">
      <div className="relative">
        <HeartPulse className="h-8 w-8 text-blue-600 animate-pulse" style={{
          animationDuration: "1.5s",
          filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.3))"
        }} />
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 animate-ping" style={{
          animationDuration: "2s",
          animationDelay: "0.5s"
        }} />
      </div>
      <div>
        <CardTitle className="text-xl text-blue-800">Advanced Joint Support Formula</CardTitle>
        <CardDescription className="text-blue-600">
          Clinically proven ingredients for joint pain relief and mobility
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <p className="text-gray-700">
          <strong className="text-blue-700">BestJointCare</strong> combines 7 scientifically validated ingredients to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li className="hover:text-blue-600 transition-colors duration-200">Reduce joint pain and stiffness within 7–14 days</li>
          <li className="hover:text-blue-600 transition-colors duration-200">Improve mobility and flexibility</li>
          <li className="hover:text-blue-600 transition-colors duration-200">Protect and repair cartilage</li>
          <li className="hover:text-blue-600 transition-colors duration-200">Reduce inflammation naturally</li>
        </ul>
        <div className="mt-4">
          <a
            href="https://8bf77q56j8by7qcivf1krczm6j.hop.clickbank.net/?&traffic_source=aidietcalc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-md shadow-lg transition-all transform hover:scale-[1.02] w-full text-center"
          >
            <HeartPulse className="mr-2 h-5 w-5" />
            Discover Joint Relief Formula
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

export function MacroNutrientCalculator() {
  const [calories, setCalories] = useState("")
  const [result, setResult] = useState<MacroResult | null>(null)

  const calculateMacros = () => {
    const cal = parseInt(calories)
    if (!isNaN(cal)) {
      const protein = Math.round((cal * 0.30) / 4)
      const carbs = Math.round((cal * 0.40) / 4)
      const fat = Math.round((cal * 0.30) / 9)
      setResult({ protein, carbs, fat })
    }
  }

  return (
    <MacroResultContext.Provider value={{ result, setResult }}>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              AI-Powered Macro Nutrient Calculator
            </span>
          </CardTitle>
          <CardDescription className="text-blue-600">
            Calculate your recommended macronutrient intake based on your calorie needs and goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-6">
            <Label htmlFor="calories">Daily Calorie Goal</Label>
            <Input
              id="calories"
              type="number"
              placeholder="e.g. 2200"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
            <Button onClick={calculateMacros} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Calculate Macro Breakdown
            </Button>
          </div>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold text-blue-800">Your Recommended Macronutrient Intake:</h3>
              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-700">Daily Macronutrients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-lg">
                      Protein: <span className="font-bold text-blue-600">{result.protein}g</span>
                      <span className="text-sm text-gray-500 ml-2">({Math.round(result.protein * 4)} calories)</span>
                    </p>
                    <p className="text-lg">
                      Carbohydrates: <span className="font-bold text-blue-600">{result.carbs}g</span>
                      <span className="text-sm text-gray-500 ml-2">({Math.round(result.carbs * 4)} calories)</span>
                    </p>
                    <p className="text-lg">
                      Fat: <span className="font-bold text-blue-600">{result.fat}g</span>
                      <span className="text-sm text-gray-500 ml-2">({Math.round(result.fat * 9)} calories)</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <JointCareAd />

              <div className="flex items-start space-x-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                <Info className="h-4 w-4 mt-0.5 text-blue-500" />
                <p>
                  These macronutrient recommendations are based on general guidelines and may need to be adjusted based on individual factors.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </MacroResultContext.Provider>
  )
}
