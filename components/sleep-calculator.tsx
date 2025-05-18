"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from 'lucide-react'

interface SleepSchedule {
  bedtime: string
  wakeupTime: string
}

export function SleepCalculator() {
  const [wakeupTime, setWakeupTime] = useState<string>("07:00")
  const [sleepCycles, setSleepCycles] = useState<string>("5")
  const [result, setResult] = useState<SleepSchedule | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const calculateSleepSchedule = () => {
    setIsCalculating(true)

    const wakeup = new Date(`2000-01-01T${wakeupTime}:00`)
    const cycleLength = 90 // minutes
    const cycles = parseInt(sleepCycles)

    let bedtime = new Date(wakeup)
    bedtime.setMinutes(bedtime.getMinutes() - (cycles * cycleLength) - 15) // 15 minutes to fall asleep

    if (bedtime > wakeup) {
      bedtime.setDate(bedtime.getDate() - 1)
    }

    // Format times in a deterministic way (24h, always en-GB)
    const formattedBedtime = bedtime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })
    const formattedWakeup = wakeup.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })

    setResult({
      bedtime: formattedBedtime,
      wakeupTime: formattedWakeup
    })

    setIsCalculating(false)
  }

  if (!isClient) return null;

  return (
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Use our AI-enhanced Sleep Calculator to quickly determine your optimal bedtime based on your desired wake-up time and the number of sleep cycles you need.</strong> This tool provides personalized recommendations to help you optimize your sleep schedule, improve sleep quality, and wake up feeling refreshed. It works by using the average 90-minute sleep cycle to identify bedtimes that align with your chosen wake-up time, aiming to help you wake up during a lighter stage of sleep. This approach helps support better overall health and cognitive function.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">AI-Powered Sleep Calculator</CardTitle>
          <CardDescription>Calculate your optimal bedtime based on your desired wake-up time and sleep cycles</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="wakeup-time">Desired Wake-up Time</Label>
              <Input
                id="wakeup-time"
                type="time"
                value={wakeupTime}
                onChange={(e) => setWakeupTime(e.target.value)}
                className="bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleep-cycles">Number of Sleep Cycles</Label>
              <Select value={sleepCycles} onValueChange={setSleepCycles}>
                <SelectTrigger id="sleep-cycles">
                  <SelectValue placeholder="Select number of sleep cycles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 cycles (4.5 hours)</SelectItem>
                  <SelectItem value="4">4 cycles (6 hours)</SelectItem>
                  <SelectItem value="5">5 cycles (7.5 hours)</SelectItem>
                  <SelectItem value="6">6 cycles (9 hours)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="button"
              onClick={calculateSleepSchedule}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate Sleep Schedule"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Optimal Sleep Schedule:</h3>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2"><strong>Recommended Bedtime:</strong> {result.bedtime}</p>
                  <p><strong>Wake-up Time:</strong> {result.wakeupTime}</p>
                </CardContent>
              </Card>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5" />
                <p>
                  This sleep schedule is based on the average 90-minute sleep cycle. Individual sleep cycles may vary. For best results, maintain a consistent sleep schedule and practice good sleep hygiene.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
