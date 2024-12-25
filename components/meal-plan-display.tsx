import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MealPlan } from "@/types/mealPlan"
import { Utensils, Clock, FlameIcon as Fire } from 'lucide-react'

interface MealPlanDisplayProps {
  mealPlan: MealPlan | null
}

export function MealPlanDisplay({ mealPlan }: MealPlanDisplayProps) {
  if (!mealPlan) return null

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-2xl font-bold">Your AI-Generated Meal Plan</h2>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Total Calories: {mealPlan.totalCalories}</p>
        <div className="space-y-6">
          {mealPlan.meals.map((meal, index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center">
                  <Utensils className="mr-2 h-5 w-5 text-primary" />
                  {meal.name}
                </h3>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <p className="mb-2">{meal.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      Prep: {meal.prepTime}
                    </span>
                    <span className="flex items-center">
                      <Fire className="mr-1 h-4 w-4" />
                      Cook: {meal.cookTime}
                    </span>
                  </div>
                  <p className="font-semibold">Quick Instructions:</p>
                  <p>{meal.instructions}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <p>Calories: {meal.calories}</p>
                    <p>Protein: {meal.protein}g</p>
                    <p>Carbs: {meal.carbs}g</p>
                    <p>Fat: {meal.fat}g</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
