'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PersonalizationDemo() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [goal, setGoal] = useState('')
  const [recommendation, setRecommendation] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a simple demo. In a real application, you'd call an API or use more complex logic.
    setRecommendation(`Based on your input, ${name}, age ${age}, we recommend a personalized diet plan focused on ${goal.toLowerCase()}. Our AI will take into account your age and goals to create a tailored nutrition plan.`)
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Personalization Demo</CardTitle>
        <CardDescription>See how our AI adapts to your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="goal">Primary Goal</Label>
            <Input id="goal" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="e.g., Weight Loss, Muscle Gain" required />
          </div>
          <Button type="submit">Get Personalized Recommendation</Button>
        </form>
        {recommendation && (
          <div className="mt-4 p-4 bg-primary/10 rounded-md">
            <p>{recommendation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
