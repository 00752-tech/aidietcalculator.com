export type DietType = "balanced" | "low-carb" | "high-protein" | "vegetarian" | "vegan" | "keto"

export interface Meal {
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  description: string
  instructions: string
}

export interface MealPlan {
  totalCalories: number
  meals: Meal[]
}

export interface MealDatabaseEntry {
  name: string
  type: DietType[]
  calories: number
  protein: number
  carbs: number
  fat: number
  description: string
  instructions: string
}
