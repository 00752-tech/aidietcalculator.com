'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calculator, Scale, Ruler } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button"

const tools = [
  { name: "AI Diet Planner", id: "ai-diet-planner", icon: Calculator },
  { name: "Protein Calculator", id: "protein-calculator", icon: Scale },
  { name: "Body Fat Calculator", id: "body-fat-calculator", icon: Ruler },
]

export function TableOfContents() {
  const router = useRouter()

  const handleToolClick = (toolId: string) => {
    router.push(`/#${toolId}`)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto my-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          Your Metabolic Diagnostic Suite
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Button
                key={tool.id}
                variant="outline"
                className="flex flex-col items-center justify-center h-auto py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 space-y-3"
                onClick={() => handleToolClick(tool.id)}
              >
                <Icon className="h-8 w-8 text-primary" />
                <span className="font-semibold text-center">{tool.name}</span>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
