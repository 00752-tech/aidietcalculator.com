"use client";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft } from 'lucide-react'

// Affiliate Ad Component
function OldSchoolNewBodyAd() {
  return (
    <Card className="mt-6 border-2 border-blue-500">
      <CardHeader>
        <CardTitle className="text-center text-xl font-bold text-blue-600">
          Recommended Fitness Program
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold">Old School New Body</h3>
          <p className="mt-2 text-sm text-gray-600">
            Discover the F4X Training System - a scientifically proven method for building lean muscle and burning fat in just 90 minutes per week!
          </p>
        </div>
        <a 
          href="https://67982p5ys98p0y9k38kqgv4s1v.hop.clickbank.net/?&traffic_source=aidietcalc" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
            Learn More
          </Button>
        </a>
        <div className="mt-4 text-xs text-gray-500">
          *Sponsored Advertisement
        </div>
      </CardContent>
    </Card>
  );
}

export function BodyFatCalculator() {
  const [gender, setGender] = useState<string>("male")
  // ... (Keep your existing state and logic here)

  return (
    <div id="body-fat-calculator">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Body Fat Calculator</CardTitle>
          <CardDescription>Estimate your body fat percentage.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* ... your existing JSX ... */}
          
          <OldSchoolNewBodyAd />
        </CardContent>
      </Card>
    </div>
  )
}
