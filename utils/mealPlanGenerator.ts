import { DietType, Meal, MealPlan, MealDatabaseEntry } from "@/types/mealPlan"
import { Utensils, Clock, FlameIcon as Fire } from 'lucide-react'

const mealDatabase: MealDatabaseEntry[] = [
  {
    name: "Grilled Chicken Salad",
    type: ["balanced", "high-protein", "low-carb"],
    calories: 350,
    protein: 30,
    carbs: 10,
    fat: 22,
    description: "A light and nutritious salad with grilled chicken breast, mixed greens, and a variety of colorful vegetables.",
    instructions: "1. Grill seasoned chicken breast for 6-8 minutes per side. 2. Chop lettuce, tomatoes, and cucumbers. 3. Mix greens and vegetables in a large bowl. 4. Slice chicken and add to salad. 5. Drizzle with olive oil and balsamic vinegar dressing.",
    prepTime: "15 minutes",
    cookTime: "15 minutes",
  },
  {
    name: "Vegetable Stir Fry",
    type: ["balanced", "vegetarian", "vegan"],
    calories: 300,
    protein: 15,
    carbs: 40,
    fat: 10,
    description: "A colorful and flavorful mix of stir-fried vegetables with tofu, perfect for a quick and healthy meal.",
    instructions: "1. Press and cube firm tofu. 2. Chop broccoli, bell peppers, and carrots. 3. Stir-fry tofu in oil until golden. 4. Add vegetables and stir-fry for 5-7 minutes. 5. Season with soy sauce and serve over brown rice.",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
  },
  {
    name: "Salmon with Quinoa",
    type: ["balanced", "high-protein"],
    calories: 400,
    protein: 35,
    carbs: 30,
    fat: 15,
    description: "Omega-3 rich salmon fillet served with fluffy quinoa and steamed vegetables.",
    instructions: "1. Cook quinoa according to package instructions. 2. Season salmon fillet with lemon, dill, and pepper. 3. Bake salmon at 400°F (200°C) for 12-15 minutes. 4. Steam broccoli and carrots. 5. Serve salmon over quinoa with vegetables on the side.",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
  },
  {
    name: "Greek Yogurt Parfait",
    type: ["balanced", "vegetarian"],
    calories: 250,
    protein: 20,
    carbs: 30,
    fat: 8,
    description: "A protein-packed parfait with layers of Greek yogurt, fresh berries, and crunchy granola.",
    instructions: "1. In a glass, add a layer of Greek yogurt. 2. Add a layer of mixed berries (strawberries, blueberries, raspberries). 3. Sprinkle a layer of low-sugar granola. 4. Repeat layers. 5. Top with a drizzle of honey if desired.",
    prepTime: "5 minutes",
    cookTime: "0 minutes",
  },
  {
    name: "Lentil Soup",
    type: ["balanced", "vegetarian", "vegan"],
    calories: 200,
    protein: 12,
    carbs: 35,
    fat: 2,
    description: "A hearty and nutritious soup made with lentils, vegetables, and aromatic spices.",
    instructions: "1. Sauté diced onions, carrots, and celery in a pot. 2. Add rinsed lentils and vegetable broth. 3. Simmer for 20-25 minutes until lentils are tender. 4. Season with cumin, coriander, and black pepper. 5. Blend partially for a creamier texture if desired.",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
  },
  {
    name: "Tofu Scramble",
    type: ["balanced", "vegetarian", "vegan"],
    calories: 280,
    protein: 20,
    carbs: 15,
    fat: 18,
    description: "A protein-rich vegan alternative to scrambled eggs, made with crumbled tofu and vegetables.",
    instructions: "1. Crumble firm tofu into a bowl. 2. Sauté diced bell peppers and onions in a pan. 3. Add crumbled tofu to the pan. 4. Season with turmeric, nutritional yeast, salt, and pepper. 5. Cook for 5-7 minutes, stirring occasionally.",
    prepTime: "10 minutes",
    cookTime: "10 minutes",
  },
  {
    name: "Keto Bacon and Eggs",
    type: ["keto", "low-carb"],
    calories: 400,
    protein: 25,
    carbs: 2,
    fat: 35,
    description: "A classic keto breakfast with crispy bacon and fluffy scrambled eggs.",
    instructions: "1. Cook bacon in a pan until crispy, about 5-7 minutes. 2. In a bowl, whisk 3 eggs with a splash of heavy cream. 3. In the same pan, scramble eggs over low heat. 4. Season with salt and pepper. 5. Serve bacon and eggs together with sliced avocado.",
    prepTime: "5 minutes",
    cookTime: "10 minutes",
  },
  {
    name: "Avocado and Egg Toast",
    type: ["balanced", "vegetarian"],
    calories: 300,
    protein: 15,
    carbs: 25,
    fat: 20,
    description: "Creamy avocado spread on whole grain toast, topped with a perfectly poached egg.",
    instructions: "1. Toast 1 slice of whole grain bread. 2. Mash 1/2 ripe avocado and spread on toast. 3. Poach an egg for 3-4 minutes. 4. Place poached egg on avocado toast. 5. Season with salt, pepper, and red pepper flakes if desired.",
    prepTime: "5 minutes",
    cookTime: "5 minutes",
  },
  {
    name: "Spinach and Feta Omelette",
    type: ["balanced", "vegetarian", "low-carb"],
    calories: 320,
    protein: 22,
    carbs: 5,
    fat: 25,
    description: "A fluffy omelette filled with sautéed spinach and tangy feta cheese.",
    instructions: "1. Whisk 3 eggs in a bowl. 2. Sauté a handful of spinach in a non-stick pan. 3. Pour eggs into the hot, oiled pan. 4. When eggs are nearly set, add spinach and crumbled feta to one half. 5. Fold omelette and cook for another minute before serving.",
    prepTime: "5 minutes",
    cookTime: "10 minutes",
  },
  {
    name: "Protein Smoothie Bowl",
    type: ["balanced", "high-protein", "vegetarian"],
    calories: 350,
    protein: 30,
    carbs: 45,
    fat: 8,
    description: "A thick and creamy smoothie bowl packed with protein powder, fruits, and topped with nuts and seeds.",
    instructions: "1. Blend 1 scoop protein powder, 1 frozen banana, 1/2 cup frozen berries, and 1/2 cup almond milk. 2. Pour into a bowl. 3. Top with sliced fresh fruits like strawberries and banana. 4. Sprinkle with 1 tbsp each of chia seeds and sliced almonds. 5. Add a drizzle of almond butter if desired.",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
  },
]

export function generateMealPlan(
  totalCalories: number,
  mealsPerDay: number,
  dietType: DietType,
  allergies: string[]
): MealPlan {
  const filteredMeals = mealDatabase.filter(
    (meal) => 
      meal.type.includes(dietType) && 
      !allergies.some(allergy => 
        meal.name.toLowerCase().includes(allergy.toLowerCase()) ||
        meal.description.toLowerCase().includes(allergy.toLowerCase()) ||
        meal.instructions.toLowerCase().includes(allergy.toLowerCase())
      )
  )

  if (filteredMeals.length === 0) {
    throw new Error("No suitable meals found for the given diet type and allergies.")
  }

  if (filteredMeals.length < mealsPerDay) {
    throw new Error("Not enough variety of meals for the given diet type and allergies. Please adjust your criteria.")
  }

  const generatedMeals: Meal[] = []
  let remainingCalories = totalCalories

  // Shuffle the filtered meals to ensure randomness
  const shuffledMeals = [...filteredMeals].sort(() => Math.random() - 0.5)

  for (let i = 0; i < mealsPerDay; i++) {
    const targetCalories = Math.round(remainingCalories / (mealsPerDay - i))
    const meal = findClosestMeal(shuffledMeals.filter(m => !generatedMeals.some(gm => gm.name === m.name)), targetCalories)
    
    if (!meal) {
      throw new Error("Unable to generate a complete meal plan. Please try again or adjust your criteria.")
    }

    generatedMeals.push(meal)
    remainingCalories -= meal.calories
  }

  return {
    totalCalories,
    meals: generatedMeals,
  }
}

function findClosestMeal(meals: MealDatabaseEntry[], targetCalories: number): Meal | null {
  if (meals.length === 0) return null

  return meals.reduce((closest, current) => {
    return Math.abs(current.calories - targetCalories) < Math.abs(closest.calories - targetCalories) ? current : closest
  })
}
