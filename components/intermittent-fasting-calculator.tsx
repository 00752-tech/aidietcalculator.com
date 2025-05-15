"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from 'lucide-react'

interface FastingSchedule {
  fastingHours: number;
  eatingHours: number;
  recommendedStartTime: string;
  recommendedEndTime: string;
}

export function IntermittentFastingCalculator() {
  const [fastingMethod, setFastingMethod] = useState<string>("16/8")
  const [wakeUpTime, setWakeUpTime] = useState<string>("07:00")
  const [result, setResult] = useState<FastingSchedule | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateFastingSchedule = () => {
    setIsCalculating(true)
    
    const [fastingHours, eatingHours] = fastingMethod.split('/').map(Number)
    const wakeUp = new Date(`2000-01-01T${wakeUpTime}:00`)
    
    let fastingStart = new Date(wakeUp)
    fastingStart.setHours(wakeUp.getHours() + eatingHours)
    
    let fastingEnd = new Date(fastingStart)
    fastingEnd.setHours(fastingStart.getHours() + fastingHours)
    
    setResult({
      fastingHours,
      eatingHours,
      recommendedStartTime: fastingStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      recommendedEndTime: fastingEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
    
    setIsCalculating(false)
  }

  return (
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Instantly discover your optimal intermittent fasting schedule with our AI-Powered Intermittent Fasting Calculator.</strong> Get personalized recommendations tailored to your lifestyle by simply selecting your preferred fasting method (such as 16/8) and entering your wake-up time, and calculate your ideal fasting window. Use this tool to find your optimal fasting schedule based on your preferred method and daily routine.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered Intermittent Fasting Calculator</CardTitle>
          <CardDescription>Calculate your optimal fasting schedule based on your preferred method and wake-up time</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fasting-method">Fasting Method</Label>
              <Select value={fastingMethod} onValueChange={setFastingMethod}>
                <SelectTrigger id="fasting-method">
                  <SelectValue placeholder="Select fasting method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16/8">16/8 Method</SelectItem>
                  <SelectItem value="18/6">18/6 Method</SelectItem>
                  <SelectItem value="20/4">20/4 Method</SelectItem>
                  <SelectItem value="14/10">14/10 Method (Beginner Friendly)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="wake-up-time">Wake-up Time</Label>
              <Input
                id="wake-up-time"
                type="time"
                value={wakeUpTime}
                onChange={(e) => setWakeUpTime(e.target.value)}
                className="bg-gray-50"
              />
            </div>
            <Button
              type="button"
              onClick={calculateFastingSchedule}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate Fasting Schedule"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Intermittent Fasting Schedule:</h3>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2"><strong>Fasting Period:</strong> {result.fastingHours} hours</p>
                  <p className="mb-2"><strong>Eating Window:</strong> {result.eatingHours} hours</p>
                  <p className="mb-2"><strong>Recommended Fasting Start Time:</strong> {result.recommendedStartTime}</p>
                  <p><strong>Recommended Fasting End Time:</strong> {result.recommendedEndTime}</p>
                </CardContent>
              </Card>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  This fasting schedule is a suggestion based on your inputs. Always consult with a healthcare professional before starting any new diet or fasting regimen.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
