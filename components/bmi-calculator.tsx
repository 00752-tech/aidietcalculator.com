"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

interface BMIResult {
  bmi: number;
  category: string;
}

export function BMICalculator() {
  const [height, setHeight] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [result, setResult] = useState<BMIResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateBMI = () => {
    setIsCalculating(true)
    setError(null)

    let heightInM: number
    let weightInKg: number

    if (unitSystem === "imperial") {
      // Assume height input is in inches for imperial
      // Assume weight input is in pounds (lbs) for imperial
      heightInM = parseFloat(height) * 0.0254 // Convert inches to meters
      weightInKg = parseFloat(weight) * 0.453592 // Convert lbs to kg
    } else {
      // Assume height input is in cm for metric
      // Assume weight input is in kg for metric
      heightInM = parseFloat(height) / 100 // Convert cm to meters
      weightInKg = parseFloat(weight)
    }

    if (isNaN(heightInM) || isNaN(weightInKg) || heightInM <= 0) { // Ensure height is positive
      setError("Please enter valid numbers for height and weight.")
      setResult(null)
      setIsCalculating(false)
      return
    }

    const bmi = weightInKg / (heightInM * heightInM)
    const category = getBMICategory(bmi)

    setResult({
      bmi: parseFloat(bmi.toFixed(1)), // Round BMI to one decimal place
      category
    })

    setIsCalculating(false)
  }

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return "Underweight"
    if (bmi < 25) return "Normal weight"
    if (bmi < 30) return "Overweight"
    return "Obese"
  }

  const toggleUnitSystem = () => {
    // Convert existing values when switching units
    if (unitSystem === "imperial") {
      setUnitSystem("metric")
      // Convert inches to cm, lbs to kg
      setHeight(h => h ? (parseFloat(h) * 2.54).toFixed(1) : "")
      setWeight(w => w ? (parseFloat(w) * 0.453592).toFixed(1) : "")
    } else {
      setUnitSystem("imperial")
      // Convert cm to inches, kg to lbs
      setHeight(h => h ? (parseFloat(h) / 2.54).toFixed(1) : "")
      setWeight(w => w ? (parseFloat(w) / 0.453592).toFixed(1) : "")
    }
     // Clear result and error on unit switch
     setResult(null);
     setError(null);
  }

  return (
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Calculate your Body Mass Index (BMI) quickly and easily with our AI-powered BMI Calculator.</strong> Get instant insights into your weight status (underweight, normal weight, overweight, obese) and understand how it relates to your overall health with personalized insights and recommendations.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered BMI Calculator</CardTitle>
          <CardDescription>Calculate your Body Mass Index (BMI) and get insights into your weight category</CardDescription>
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
                <Label htmlFor="height">Height ({unitSystem === "imperial" ? "inches" : "cm"})</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder={`Enter height in ${unitSystem === "imperial" ? "inches" : "cm"}`}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                  className="bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <Button
              type="button"
              onClick={calculateBMI}
              className="w-full"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate BMI"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-6"> {/* Increased space-y for better separation */}
              <h3 className="text-lg font-semibold">Your BMI Result:</h3>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Body Mass Index (BMI)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{result.bmi}</p>
                  <p className="text-lg">Category: <span className="font-semibold">{result.category}</span></p>
                </CardContent>
              </Card>

              {/* --- Results Ad Section --- */}
              <Card className="bg-blue-50 border-blue-200"> {/* Added background/border for distinction */}
                <CardHeader className="pb-2">
                   <CardTitle className="text-lg text-blue-700">Unlock Your Health Potential</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base text-gray-800">
                    Ready to take the next step based on your BMI? Discover a revolutionary approach to optimizing your health and achieving your wellness goals.
                  </p>
                   {/* Affiliate Link Button */}
                  <a href="https://18f7ax6zjado3l9hngwk48cpfn.hop.clickbank.net/?&traffic_source=aidietcalc" target="_blank" rel="noopener noreferrer" className="block">
                     <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Learn More About Optimizing Your Health
                     </Button>
                  </a>
                </CardContent>
              </Card>
              {/* --- End Results Ad Section --- */}


              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  BMI is a simple measure of body fat based on height and weight. While it doesn't directly measure body fat, it can be a useful indicator of health risks associated with weight. For personalized health advice, consult with a healthcare professional.
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
