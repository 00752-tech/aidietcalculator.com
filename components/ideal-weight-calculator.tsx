"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

interface IdealWeightResult {
  idealWeightRange: string
  description: string
}

export function IdealWeightCalculator() {
  const [gender, setGender] = useState<string>("male")
  const [age, setAge] = useState<string>("")
  const [height, setHeight] = useState<string>("")
  const [frameSize, setFrameSize] = useState<string>("medium")
  const [unitSystem, setUnitSystem] = useState<"imperial" | "metric">("imperial")
  const [result, setResult] = useState<IdealWeightResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateIdealWeight = () => {
    setIsCalculating(true)
    setError(null)

    let heightInCm: number
    if (unitSystem === "imperial") {
      const [feet, inches] = height.split(",").map(Number)
      if (isNaN(feet) || isNaN(inches || 0)) {
        setError("Please enter valid numbers for height.")
        setResult(null)
        setIsCalculating(false)
        return;
      }
      heightInCm = (feet * 12 + (inches || 0)) * 2.54
    } else {
      heightInCm = parseFloat(height)
      if (isNaN(heightInCm)) {
        setError("Please enter a valid number for height.")
        setResult(null)
        setIsCalculating(false)
        return;
      }
    }

    const idealWeightKg = getIdealWeight(heightInCm, frameSize, gender)
    const [minWeight, maxWeight] = calculateRange(idealWeightKg)

    let idealWeightRange: string
    let description: string

    if (unitSystem === "imperial") {
      idealWeightRange = `${minWeight.toFixed(0)} - ${maxWeight.toFixed(0)} lbs`
      description = `Your ideal weight range is between ${minWeight.toFixed(0)} and ${maxWeight.toFixed(0)} pounds. This is based on the ${gender === 'male' ? 'Devine' : 'Robinson'} formula, adjusted for your frame size.  Remember, this is an estimate, and other factors like muscle mass can affect your ideal weight.`
    } else {
      idealWeightRange = `${(minWeight * 2.20462).toFixed(0)} - ${(maxWeight * 2.20462).toFixed(0)} kg`
      description = `Your ideal weight range is between ${(minWeight * 2.20462).toFixed(0)} and ${(maxWeight * 2.20462).toFixed(0)} kilograms. This is based on the ${gender === 'male' ? 'Devine' : 'Robinson'} formula, adjusted for your frame size. Remember, this is an estimate, and other factors like muscle mass can affect your ideal weight.`
    }

    setResult({ idealWeightRange, description })
    setIsCalculating(false)
  }

  const getIdealWeight = (heightCm: number, frameSize: string, gender: string): number => {
    let idealWeightKg: number

    if (gender === "male") {
      // Devine formula for men
      idealWeightKg = 50 + 2.3 * ((heightCm / 2.54) - 60)
    } else {
      // Robinson formula for women
      idealWeightKg = 49 + 1.7 * ((heightCm / 2.54) - 60)
    }

    // Adjust for frame size
    switch (frameSize) {
      case "small":
        idealWeightKg *= 0.9;
        break;
      case "large":
        idealWeightKg *= 1.1;
        break;
    }

    return idealWeightKg
  }

  const calculateRange = (idealWeightKg: number): [number, number] => {
    const minWeight = idealWeightKg * 0.95
    const maxWeight = idealWeightKg * 1.05
    return [minWeight * 2.20462, maxWeight * 2.20462] // Convert to lbs
  }

  const toggleUnitSystem = () => {
    setUnitSystem(current => current === "imperial" ? "metric" : "imperial")
    if (height) {
      if (unitSystem === "imperial") {
        const [feet, inches] = height.split(",").map(Number)
        setHeight(((feet * 12 + inches) * 2.54).toFixed(1))
      } else {
        const totalInches = Math.round(parseFloat(height) / 2.54)
        const feet = Math.floor(totalInches / 12)
        const inches = totalInches % 12
        setHeight(`${feet},${inches}`)
      }
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Ideal Weight Calculator</CardTitle>
        <CardDescription>Estimate your ideal weight range based on your height, gender, age, and frame size.</CardDescription>
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
              <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-4">
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">
                Height ({unitSystem === "imperial" ? "feet,inches" : "cm"})
              </Label>
              <Input
                id="height"
                type="text"
                placeholder={unitSystem === "imperial" ? "e.g., 5,10" : "Enter height in cm"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                {unitSystem === "imperial" ? "Format: feet,inches (e.g., 5,10)" : "Enter height in centimeters"}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="frame">Frame Size</Label>
              <Select value={frameSize} onValueChange={setFrameSize}>
                <SelectTrigger id="frame">
                  <SelectValue placeholder="Select frame size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="button" onClick={calculateIdealWeight} className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white" disabled={isCalculating}>
            {isCalculating ? "Calculating..." : "Calculate Ideal Weight"}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Your Ideal Weight Range:</h3>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Ideal Weight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{result.idealWeightRange}</p>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </CardContent>
            </Card>

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                These calculations are estimates based on standard formulas.  For personalized advice, consult a healthcare professional.
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
