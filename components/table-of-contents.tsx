'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button"

const tools = [
  { name: "Calorie Calculator", id: "calorie-calculator" },
  { name: "AI Diet and Meal Planner", id: "ai-diet-planner" },
  { name: "Body Fat Calculator", id: "body-fat-calculator" },
  { name: "BMI Calculator", id: "bmi-calculator" },
  { name: "Water Intake Calculator", id: "water-intake-calculator" },
  { name: "Macro Nutrient Calculator", id: "macro-nutrient-calculator" },
  { name: "Protein Intake Calculator", id: "protein-intake-calculator" },
  { name: "Exercise Calorie Burn Estimator", id: "exercise-calorie-burn-estimator" },
  { name: "AI Workout Plan Generator", id: "workout-plan-generator" },
  { name: "Keto Calculator", id: "keto-calculator" },
  { name: "Intermittent Fasting Calculator", id: "intermittent-fasting-calculator" },
  { name: "Ideal Weight Calculator", id: "ideal-weight-calculator" },
  { name: "BMR Calculator", id: "bmr-calculator" },
  { name: "Sleep Calculator", id: "sleep-calculator" },
  { name: "One Rep Max Calculator", id: "one-rep-max-calculator" },
]

export function TableOfContents() {
  const router = useRouter()

  const handleToolClick = (toolId: string) => {
    router.push(`/#${toolId}`)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto my-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">Our AI-Powered Health & Fitness Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Button
              key={tool.id}
              variant="outline"
              className="justify-between text-left h-auto py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={() => handleToolClick(tool.id)}
            >
              <span className="flex-grow">{tool.name}</span>
              <ArrowRight className="h-4 w-4 ml-2 text-primary" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
