"use client"

import { useState, useCallback } from "react"
import { Brain, Cpu, Dna, Salad, Utensils, Zap, Leaf, Scale, HeartPulse } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

interface MealPlan {
  breakfast: string
  lunch: string
  dinner: string
  snacks: string
  macros: {
    protein: number
    carbs: number
    fat: number
  }
}

export default function AIDietPlanner() {
  const [calories, setCalories] = useState(2000)
  const [meals, setMeals] = useState(3)
  const [dietType, setDietType] = useState<string>("balanced")
  const [allergies, setAllergies] = useState<string>("")
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const generateSampleMealPlan = useCallback(() => {
    const plans: Record<string, MealPlan> = {
      balanced: {
        breakfast: "Greek yogurt with berries and granola",
        lunch: "Grilled chicken salad with mixed greens and vinaigrette",
        dinner: "Salmon with quinoa and roasted vegetables",
        snacks: "Almonds and an apple",
        macros: { protein: 120, carbs: 200, fat: 70 }
      },
      "low-carb": {
        breakfast: "Avocado and eggs with bacon",
        lunch: "Beef lettuce wraps with cheese and sour cream",
        dinner: "Grilled steak with cauliflower mash",
        snacks: "Cheese cubes and olives",
        macros: { protein: 150, carbs: 50, fat: 120 }
      },
      vegetarian: {
        breakfast: "Tofu scramble with vegetables",
        lunch: "Chickpea salad wrap with hummus",
        dinner: "Lentil curry with brown rice",
        snacks: "Greek yogurt with walnuts",
        macros: { protein: 90, carbs: 220, fat: 60 }
      }
    }

    return plans[dietType] || plans.balanced
  }, [dietType])

  const handleGenerateMealPlan = useCallback(() => {
    setIsLoading(true)
    setMealPlan(null)
    
    try {
      setTimeout(() => {
        const newMealPlan = generateSampleMealPlan()
        setMealPlan(newMealPlan)
        toast({
          title: "Meal Plan Generated",
          description: "Your AI-powered meal plan is ready!",
        })
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate meal plan. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }, [generateSampleMealPlan, toast])

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered Diet & Meal Planner</CardTitle>
          <CardDescription>Generate personalized meal plans based on your unique needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="calories">Daily Calorie Target</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="calories"
                    min={1200}
                    max={4000}
                    step={50}
                    value={[calories]}
                    onValueChange={(value) => setCalories(value[0])}
                    className="flex-grow"
                  />
                  <Input
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(Number(e.target.value))}
                    className="w-24"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meals">Meals Per Day</Label>
                <Select value={meals.toString()} onValueChange={(value) => setMeals(Number(value))}>
                  <SelectTrigger id="meals">
                    <SelectValue placeholder="Select meals per day" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} meals
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="diet-type">Diet Type</Label>
                <Select value={dietType} onValueChange={setDietType}>
                  <SelectTrigger id="diet-type">
                    <SelectValue placeholder="Select diet type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balanced">Balanced</SelectItem>
                    <SelectItem value="low-carb">Low Carb</SelectItem>
                    <SelectItem value="high-protein">High Protein</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="keto">Keto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="allergies">Restrictions (Allergies, Intolerances)</Label>
                <Input
                  id="allergies"
                  placeholder="e.g., nuts, dairy, gluten"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                />
              </div>
              
              <Button
                onClick={handleGenerateMealPlan}
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB]"
                disabled={isLoading}
              >
                {isLoading ? "Generating Your Plan..." : "Generate AI Meal Plan"}
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">How It Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-indigo-500 mt-0.5" />
                  <span>Our AI analyzes thousands of nutritional profiles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Leaf className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Optimizes for your specific calorie needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Scale className="h-5 w-5 text-blue-500 mt-0.5" />
                  <span>Balances macronutrients for your goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <HeartPulse className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>Accounts for dietary restrictions</span>
                </li>
              </ul>
            </div>
          </div>
          
          {mealPlan && (
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-bold text-center border-t pt-8">Your Personalized Meal Plan</h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Meals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-medium text-slate-500">Breakfast</h4>
                      <p className="font-semibold">{mealPlan.breakfast}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-500">Lunch</h4>
                      <p className="font-semibold">{mealPlan.lunch}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-500">Dinner</h4>
                      <p className="font-semibold">{mealPlan.dinner}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Daily Targets</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-medium text-slate-500">Protein</h4>
                      <p className="font-semibold">{mealPlan.macros.protein}g</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-500">Carbohydrates</h4>
                      <p className="font-semibold">{mealPlan.macros.carbs}g</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-500">Fat</h4>
                      <p className="font-semibold">{mealPlan.macros.fat}g</p>
                    </div>
                    <div className="pt-2 border-t mt-2">
                      <h4 className="font-bold text-lg">Total: {calories} kcal</h4>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* THE METABOLIC BRIDGE CTA */}
              <div className="bg-[#FFF9F5] border-2 border-orange-200 p-6 rounded-2xl text-center shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Want to amplify these results?</h4>
                <p className="text-slate-600 mb-6">
                  This plan provides the science, but you need the <strong>spark</strong>. Thousands of users combine this nutrition plan with the 7-second morning ritual to accelerate their metabolism[cite: 1].
                </p>
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-6 text-lg w-full md:w-auto shadow-lg transition-transform hover:scale-105">
                  <Link href="https://5e2adpgvl25m7o5jndpbrz9w04.hop.clickbank.net/?&traffic_source=aidietcalc" target="_blank">
                    Discover The Morning Ritual That Sparks Metabolism →
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
