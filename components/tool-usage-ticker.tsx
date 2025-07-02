"use client"
import { useState, useEffect } from "react"
const trendingLabels = [
  "Body Fat Calculator",
  "BMI Calculator",
  "Keto Calculator"
]

const tools = [
  { label: "Calorie Calculator", base: 287, emoji: "🔥" },
  { label: "AI Diet & Meal Planner", base: 211, emoji: "🍽️" },
  { label: "Body Fat Calculator", base: 193, emoji: "⚖️" },
  { label: "BMI Calculator", base: 168, emoji: "📊" },
  { label: "Water Intake Calculator", base: 182, emoji: "💧" },
  { label: "Macro Nutrient Calculator", base: 175, emoji: "🥗" },
  { label: "Protein Intake Calculator", base: 154, emoji: "🥩" },
  { label: "Exercise Burn Estimator", base: 197, emoji: "🔥" },
  { label: "Workout Plan Generator", base: 312, emoji: "🏋️‍♂️" },
  { label: "Keto Calculator", base: 204, emoji: "🥓" },
  { label: "Intermittent Fasting Calculator", base: 163, emoji: "⏳" },
  { label: "Ideal Weight Calculator", base: 178, emoji: "🎯" },
  { label: "BMR Calculator", base: 194, emoji: "⚡" },
  { label: "Sleep Calculator", base: 147, emoji: "😴" },
  { label: "One Rep Max Calculator", base: 166, emoji: "💪" }
]

export function ToolUsageTicker() {
  const [usageData, setUsageData] = useState([])

  useEffect(() => {
    const generateRandomUsage = () => {
      const randomized = tools.map(tool => {
        const offset = Math.floor(Math.random() * 13) - 6
        return { ...tool, count: tool.base + offset }
      })
      setUsageData(randomized)
    }

    generateRandomUsage()
    const interval = setInterval(generateRandomUsage, 9000)
    return () => clearInterval(interval)
  }, [])

  const totalUsers = usageData.reduce((sum, tool) => sum + tool.count, 0)

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 border-y border-blue-200 py-2 overflow-hidden">
      {/* ✅ Summary Display */}
      <p className="text-center text-xs text-muted-foreground mb-1">
        🔥 <strong>{totalUsers.toLocaleString()}</strong> total tool interactions today
      </p>

      {/* 🔁 Scrolling Tool Stats */}
      <div className="flex space-x-6 px-4 text-base md:text-lg font-semibold tracking-wide text-blue-800 animate-scroll whitespace-nowrap">
        {usageData.map(tool => (
          <span key={tool.label} className="relative">
  {tool.emoji} {tool.label}: <strong>{tool.count}</strong> users today
  {trendingLabels.includes(tool.label) && (
    <span className="ml-1 text-xs text-red-600 font-semibold">🔥 Trending</span>
  )}
</span>

        ))}
      </div>
    </div>
  )
}
