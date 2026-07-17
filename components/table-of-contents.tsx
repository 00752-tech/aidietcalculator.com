'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from "./ui/button"

const tools = [
  { name: "AI Diet Planner", id: "ai-diet-planner" },
  { name: "Protein Calculator", id: "protein-calculator" },
  { name: "Body Fat Calculator", id: "body-fat-calculator" },
  { name: "Calorie Calculator", id: "calorie-calculator" },
  { name: "BMI Calculator", id: "bmi-calculator" },
  { name: "Water Intake Calculator", id: "water-intake-calculator" },
  { name: "Macro Nutrient Calculator", id: "macro-nutrient-calculator" },
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
  return (
    <Card className="w-full max-w-4xl mx-auto my-8 bg-transparent border-none shadow-none">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Button
              key={tool.id}
              asChild
              variant="ghost"
              className="justify-between text-left h-auto py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 border border-gray-200 transition-colors"
            >
              <Link href={`/#${tool.id}`}>
                <span className="truncate">{tool.name}</span>
                <ArrowRight className="h-4 w-4 ml-2 text-primary flex-shrink-0" />
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
