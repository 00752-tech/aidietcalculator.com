"use client"

import { useState, useCallback } from "react"
import { Brain, Cpu, Dna, Salad, Utensils, Zap } from 'lucide-react'
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
import { MealPlanDisplay } from "@/components/meal-plan-display"
import { AffiliateOffers } from "@/components/affiliate-offers"
import { useToast } from "@/components/ui/use-toast"
import { generateMealPlan } from "@/utils/mealPlanGenerator"
import { DietType, MealPlan } from "@/types/mealPlan"

export default function AIDietPlanner() {
  const [calories, setCalories] = useState(2000)
  const [meals, setMeals] = useState(3)
  const [dietType, setDietType] = useState<DietType>("balanced")
  const [allergies, setAllergies] = useState<string[]>([])
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleGenerateMealPlan = useCallback(() => {
    setIsLoading(true)
    try {
      const newMealPlan = generateMealPlan(calories, meals, dietType, allergies)
      setMealPlan(newMealPlan)
      toast({
        title: "Meal Plan Generated",
        description: "Your personalized meal plan is ready!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred while generating the meal plan.",
        variant: "destructive",
      })
      setMealPlan(null)
    } finally {
      setIsLoading(false)
    }
  }, [calories, meals, dietType, allergies, toast])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          AI-Powered Diet & Meal Planner
        </h1>
        <p className="text-xl text-muted-foreground">
          Transform your body with our personalized meal plans and recipes, powered by artificial intelligence.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
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
                className="flex-grow accent-[rgb(59,130,246)]"
              />
              <Input
                type="number"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                className="w-20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="meals">Number of Meals</Label>
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
            <Select value={dietType} onValueChange={(value) => setDietType(value as DietType)}>
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
            <Label htmlFor="allergies">Allergies & Intolerances</Label>
            <Input
              id="allergies"
              placeholder="e.g., nuts, dairy (comma-separated)"
              value={allergies.join(", ")}
              onChange={(e) => setAllergies(e.target.value.split(",").map((item) => item.trim()))}
            />
          </div>
          <Button onClick={handleGenerateMealPlan} className="w-full bg-[rgb(59,130,246)] hover:bg-[rgb(29,100,216)] text-white" disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate AI Meal Plan"}
          </Button>
        </div>
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="text-2xl font-bold">AI-Powered Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <Brain className="h-6 w-6 text-indigo-500" />
              <span>Smart Nutrient Balancing</span>
            </li>
            <li className="flex items-start space-x-3">
              <Dna className="h-6 w-6 text-green-500" />
              <span>Personalized Macro Optimization</span>
            </li>
            <li className="flex items-start space-x-3">
              <Salad className="h-6 w-6 text-yellow-500" />
              <span>Diverse Recipe Suggestions</span>
            </li>
            <li className="flex items-start space-x-3">
              <Utensils className="h-6 w-6 text-red-500" />
              <span>Adaptive Meal Scheduling</span>
            </li>
            <li className="flex items-start space-x-3">
              <Cpu className="h-6 w-6 text-purple-500" />
              <span>Continuous Learning & Improvement</span>
            </li>
            <li className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-blue-500" />
              <span>Real-time Diet Adjustments</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <MealPlanDisplay mealPlan={mealPlan} />
      </div>
      <AffiliateOffers />
    </div>
  )
}
