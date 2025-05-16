"use client"

import { useState } from "react"
import { Input, Label, RadioGroup, RadioGroupItem } from "@/components/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ArrowRightLeft, Leaf } from 'lucide-react'
import { Button } from "./ui/button"

// Mitolyn Affiliate Ad Component
const MitolynAd = () => {
  return (
    <Card className="mt-8 border-2 border-green-600 bg-gradient-to-br from-green-50 to-green-100">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="relative">
          <Leaf className="h-8 w-8 text-green-600 animate-pulse" style={{
            animationDuration: '1.5s',
            filter: 'drop-shadow(0 0 4px rgba(74, 222, 128, 0.3))'
          }} />
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 animate-ping" style={{
            animationDuration: '2s',
            animationDelay: '0.5s'
          }} />
        </div>
        <div>
          <CardTitle className="text-xl text-green-800">Natural Blood Sugar Support</CardTitle>
          <CardDescription className="text-green-700">Clinically-backed ingredients for healthy glucose metabolism</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong className="text-green-700">Mitolyn</strong> combines 9 scientifically validated botanicals to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="hover:text-green-600 transition-colors duration-200">Support healthy blood sugar levels</li>
            <li className="hover:text-green-600 transition-colors duration-200">Enhance insulin sensitivity</li>
            <li className="hover:text-green-600 transition-colors duration-200">Reduce sugar cravings naturally</li>
            <li className="hover:text-green-600 transition-colors duration-200">Promote metabolic health</li>
          </ul>
          <div className="mt-4">
            <a
              href="https://3fcfcygsrb0q0pailiuc9g4m4g.hop.clickbank.net/?&traffic_source=aidietcalc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-md shadow-lg transition-all transform hover:scale-[1.02] w-full text-center"
            >
              <Leaf className="mr-2 h-5 w-5" />
              Discover Blood Sugar Support
              <ArrowRightLeft className="ml-2 h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            *Sponsored Advertisement: We may earn a commission if you purchase through this link.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function CalorieCalculator() {
  // ... [keep all your existing state and functions exactly the same] ...

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">AI-Powered Calorie Calculator</CardTitle>
        <CardDescription>
          Discover your personalized daily calorie needs for weight loss, muscle gain, or maintaining a healthy weight...
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* ... [keep all your existing form code exactly the same] ... */}

        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Your Personalized Daily Calorie Needs:</h3>
            
            {/* ... [keep all your existing results cards exactly the same] ... */}

            {/* Mitolyn Ad Placement - After Results */}
            <MitolynAd />

            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                These AI-generated calorie calculations are estimates based on the Mifflin-St Jeor equation...
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
