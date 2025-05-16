"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Zap, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from "./ui/button"

interface WorkoutPlan {
  warmUp: string;
  mainWorkout: string;
  coolDown: string;
}

// Updated Blue-Themed Affiliate Ad Component
const OldSchoolNewBodyAd = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg my-8">
      <CardHeader className="flex items-center gap-3">
        <Sparkles className="h-8 w-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-blue-800">
          Age-Defying Fitness System
        </h3>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700">
          <strong>For men and women over 35:</strong> Discover the <span className="text-blue-700 font-semibold">Old School New Body</span> program—a science-backed approach to looking younger, burning fat, and regaining energy.
        </p>
        <ul className="mb-4 list-disc pl-6 text-gray-700">
          <li><strong>5 proven principles</strong> to slow aging naturally</li>
          <li>Works at any age—40s, 50s, 60s and beyond</li>
          <li>No extreme diets or marathon workouts</li>
          <li>Created by top fitness experts</li>
        </ul>
        <a
          href="https://67982p5ys98p0y9k38kqgv4s1v.hop.clickbank.net/?&traffic_source=aidietcalc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors duration-200 shadow-md"
        >
          Discover the Program <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        <p className="mt-3 text-xs text-gray-500">
          <em>Affiliate Disclosure: We may earn a commission if you purchase through this link, at no extra cost to you.</em>
        </p>
      </CardContent>
    </Card>
  );
};

export function WorkoutPlanGenerator() {
  // ... [keep all your existing state and functions exactly the same] ...

  return (
    <>
      {/* SEO-optimized intro paragraph */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Ready to transform your fitness routine and finally get a plan that works specifically for you?</strong> Discover our AI-powered Workout Plan Generator, designed to create personalized exercise plans tailored precisely to your fitness level, goals, and available equipment. Stop sifting through generic routines; with just a few simple selections like your fitness level, desired duration, fitness goal, and equipment access, you can generate your own customized workout plan in moments.
        </p>
      </div>

      {/* First Ad Placement - Above the calculator */}
      <OldSchoolNewBodyAd />

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm border-blue-100">
        <CardHeader className="border-b border-blue-100">
          <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
            <Dumbbell className="h-6 w-6 text-blue-600" />
            AI-Powered Workout Plan Generator
          </CardTitle>
          <CardDescription className="text-blue-600">
            Create a personalized workout plan tailored to your fitness level and goals
          </CardDescription>
        </CardHeader>
        
        {/* ... [keep all your existing form content exactly the same] ... */}

        {workoutPlan && (
          <div className="mt-6 space-y-4">
            {/* ... [keep all your workout plan display code the same] ... */}

            {/* Second Ad Placement - After the workout plan results */}
            <OldSchoolNewBodyAd />
          </div>
        )}

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
          <Zap className="h-6 w-6 text-blue-600 mt-0.5" />
          <p className="text-sm text-blue-800">
            Our AI-powered Workout Plan Generator creates personalized routines based on your fitness level, goals, and available equipment. Always consult with a healthcare professional before starting any new exercise program.
          </p>
        </div>
      </Card>
    </>
  )
}
