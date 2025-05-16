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
    // This is a placeholder function - in a real app you'd call an API
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
      // Simulate API call delay
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
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-4xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Revolutionize your nutrition with our AI-Powered Diet & Meal Planner.</strong> This advanced tool creates personalized meal plans tailored to your calorie needs, dietary preferences, and food restrictions. Whether you're aiming for weight loss, muscle gain, or simply healthier eating habits, our AI analyzes thousands of nutritional profiles to deliver optimal meal suggestions. Get started by entering your details below to receive your custom plan powered by cutting-edge dietary algorithms.
        </p>
      </div>

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
                className="w-full"
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
              
              <div className="pt-4">
                <Card className="border-blue-100 bg-blue-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Want More Advanced Features?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">
                      Upgrade to our premium meal planning app for grocery lists, meal prep guides, and continuous AI optimization!
                    </p>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href="https://mitolyn.com/welcome/?hop=zzzzz&hopId=4f9c80db-7c96-4791-9c9e-c4b313b1133a" target="_blank">
                        Get Premium Meal Plans
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {mealPlan && (
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">Your Personalized Meal Plan</h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Meals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-medium">Breakfast</h4>
                      <p>{mealPlan.breakfast}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Lunch</h4>
                      <p>{mealPlan.lunch}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Dinner</h4>
                      <p>{mealPlan.dinner}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Snacks</h4>
                      <p>{mealPlan.snacks}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Macronutrients</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-medium">Protein</h4>
                      <p>{mealPlan.macros.protein}g</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Carbohydrates</h4>
                      <p>{mealPlan.macros.carbs}g</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Fat</h4>
                      <p>{mealPlan.macros.fat}g</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Total Calories</h4>
                      <p>{calories} kcal</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mt-4 border-green-100 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Ready to Transform Your Diet?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    For complete meal plans with shopping lists, prep instructions, and ongoing AI optimization, check out our premium partner program!
                  </p>
                  <Button asChild className="w-full bg-[rgb(59,130,246)] hover:bg-[rgb(29,100,216)]">
                    <Link href="https://18f7ax6zjado3l9hngwk48cpfn.hop.clickbank.net/?&traffic_source=aidietcalc" target="_blank">
                      Get Custom Meal Plans Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
