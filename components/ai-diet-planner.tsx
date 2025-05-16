"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, Scale, Ruler, Venus, Mars } from 'lucide-react'
import Link from "next/link"

interface BodyFatResult {
  bodyFatPercentage: number;
  category: string;
}

export function BodyFatPercentageCalculator() {
  const [gender, setGender] = useState<string>("male")
  const [age, setAge] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [height, setHeight] = useState<string>("")
  const [neck, setNeck] = useState<string>("")
  const [waist, setWaist] = useState<string>("")
  const [hip, setHip] = useState<string>("")
  const [result, setResult] = useState<BodyFatResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateBodyFat = () => {
    setIsCalculating(true)
    setError(null)

    const ageNum = parseFloat(age)
    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(height)
    const neckNum = parseFloat(neck)
    const waistNum = parseFloat(waist)
    const hipNum = parseFloat(hip)

    if (isNaN(ageNum)) {
      setError("Please enter a valid age")
      setIsCalculating(false)
      return
    }

    if (isNaN(weightNum) || isNaN(heightNum) || isNaN(neckNum) || isNaN(waistNum)) {
      setError("Please enter valid measurements for all required fields")
      setIsCalculating(false)
      return
    }

    if (gender === "female" && isNaN(hipNum)) {
      setError("Hip measurement is required for females")
      setIsCalculating(false)
      return
    }

    let bodyFatPercentage: number;
    let category: string;

    if (gender === "male") {
      bodyFatPercentage = 86.010 * Math.log10(waistNum - neckNum) - 70.041 * Math.log10(heightNum) + 36.76
    } else {
      bodyFatPercentage = 163.205 * Math.log10(waistNum + hipNum - neckNum) - 97.684 * Math.log10(heightNum) - 78.387
    }

    if (gender === "male") {
      if (ageNum < 20) {
        category = bodyFatPercentage < 8 ? "Essential fat" :
          bodyFatPercentage < 20 ? "Athletic" :
          bodyFatPercentage < 25 ? "Fitness" :
          bodyFatPercentage < 30 ? "Average" : "Obese"
      } else {
        category = bodyFatPercentage < 8 ? "Essential fat" :
          bodyFatPercentage < 14 ? "Athletic" :
          bodyFatPercentage < 18 ? "Fitness" :
          bodyFatPercentage < 25 ? "Average" : "Obese"
      }
    } else {
      if (ageNum < 20) {
        category = bodyFatPercentage < 15 ? "Essential fat" :
          bodyFatPercentage < 24 ? "Athletic" :
          bodyFatPercentage < 30 ? "Fitness" :
          bodyFatPercentage < 35 ? "Average" : "Obese"
      } else {
        category = bodyFatPercentage < 15 ? "Essential fat" :
          bodyFatPercentage < 21 ? "Athletic" :
          bodyFatPercentage < 25 ? "Fitness" :
          bodyFatPercentage < 32 ? "Average" : "Obese"
      }
    }

    setResult({
      bodyFatPercentage: parseFloat(bodyFatPercentage.toFixed(1)),
      category
    })
    setIsCalculating(false)
  }

  return (
    <>
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Use our AI-Powered Body Fat Percentage Calculator</strong> to accurately estimate your body composition. This tool uses the US Navy method to calculate body fat based on your measurements, providing a more accurate assessment than BMI alone. Understanding your body fat percentage helps you track fitness progress, set realistic goals, and optimize your health.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Scale className="h-6 w-6" />
            AI-Powered Body Fat Percentage Calculator
          </CardTitle>
          <CardDescription>Get an accurate estimate of your body composition using the US Navy method</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant={gender === "male" ? "default" : "outline"}
                      onClick={() => setGender("male")}
                      className="flex items-center gap-2"
                    >
                      <Mars className="h-4 w-4" /> Male
                    </Button>
                    <Button
                      type="button"
                      variant={gender === "female" ? "default" : "outline"}
                      onClick={() => setGender("female")}
                      className="flex items-center gap-2"
                    >
                      <Venus className="h-4 w-4" /> Female
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age (years)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="bg-gray-50"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter your weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (inches)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Enter your height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-gray-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="neck">Neck (inches)</Label>
                  <Input
                    id="neck"
                    type="number"
                    placeholder="Neck circumference"
                    value={neck}
                    onChange={(e) => setNeck(e.target.value)}
                    className="bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="waist">Waist (inches)</Label>
                  <Input
                    id="waist"
                    type="number"
                    placeholder="Waist circumference"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    className="bg-gray-50"
                  />
                </div>
                {gender === "female" && (
                  <div className="space-y-2">
                    <Label htmlFor="hip">Hip (inches)</Label>
                    <Input
                      id="hip"
                      type="number"
                      placeholder="Hip circumference"
                      value={hip}
                      onChange={(e) => setHip(e.target.value)}
                      className="bg-gray-50"
                    />
                  </div>
                )}
              </div>
            </div>

            <Button
              type="button"
              onClick={calculateBodyFat}
              className="w-full"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate Body Fat %"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Body Composition Results:</h3>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Ruler className="h-5 w-5" />
                    Body Fat Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-lg">Body Fat Percentage: <span className="font-bold text-primary">{result.bodyFatPercentage}%</span></p>
                    <p className="text-lg">Category: <span className="font-bold text-primary">{result.category}</span></p>
                    
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h4 className="font-medium mb-2">What This Means:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Essential fat:</strong> Minimum needed for basic physiological functions</li>
                        <li>• <strong>Athletic:</strong> Typical for athletes and very fit individuals</li>
                        <li>• <strong>Fitness:</strong> Healthy range for active individuals</li>
                        <li>• <strong>Average:</strong> Typical for general population</li>
                        <li>• <strong>Obese:</strong> Increased health risks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  This calculation uses the US Navy body fat formula. For more accurate results, consider professional testing like DEXA scans or hydrostatic weighing. 
                  <Link href="https://mitolyn.com/welcome/?hop=zzzzz&hopId=4f9c80db-7c96-4791-9c9e-c4b313b1133a" className="text-blue-500 hover:underline ml-1">
                    Learn about advanced body composition tracking
                  </Link>
                </p>
              </div>
            </div>
          )}
          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Recommended Products</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Premium Body Fat Calipers</h4>
                  <p className="text-sm text-muted-foreground mb-3">Get more accurate measurements at home with professional-grade calipers.</p>
                  <Button asChild className="w-full">
                    <Link href="https://18f7ax6zjado3l9hngwk48cpfn.hop.clickbank.net/?&traffic_source=aidietcalc">
                      View Options
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Smart Scale with Body Composition</h4>
                  <p className="text-sm text-muted-foreground mb-3">Track body fat, muscle mass, and more with advanced smart scales.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://mitolyn.com/welcome/?hop=zzzzz&hopId=4f9c80db-7c96-4791-9c9e-c4b313b1133a">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
