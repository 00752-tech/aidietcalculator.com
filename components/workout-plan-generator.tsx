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

// Affiliate Ad Component
const OldSchoolNewBodyAd = () => {
  return (
    <Card className="bg-gradient-to-br from-pink-50 to-yellow-50 border-pink-200 shadow-lg my-8">
      <CardHeader className="flex items-center gap-3">
        <Sparkles className="h-8 w-8 text-pink-500" />
        <h3 className="text-2xl font-bold text-pink-700">
          5 Steps To Looking 10 Years Younger
        </h3>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700">
          <strong>Are you over 35 and want to look and feel younger?</strong> Discover the <span className="text-pink-700 font-semibold">Old School New Body</span> system—a proven, science-backed approach that helps you reverse the aging process, burn fat, and regain youthful energy at any age.
        </p>
        <ul className="mb-4 list-disc pl-6 text-gray-700">
          <li>Learn the <strong>5 key principles</strong> to slow aging and restore youth hormones</li>
          <li>Works for both men and women—even if you're 40, 50, 60 or beyond</li>
          <li>No extreme diets, drugs, or endless cardio required</li>
          <li>Created by fitness experts Steve & Becky Holman</li>
        </ul>
        <a
          href="https://67982p5ys98p0y9k38kqgv4s1v.hop.clickbank.net/?&traffic_source=aidietcalc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-md transition-colors duration-200"
        >
          Unlock the 5 Steps Now <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        <p className="mt-3 text-xs text-gray-500">
          <em>Affiliate Disclosure: If you purchase through this link, we may earn a commission at no extra cost to you. Thank you for supporting our site!</em>
        </p>
      </CardContent>
    </Card>
  );
};

export function WorkoutPlanGenerator() {
  const [fitnessLevel, setFitnessLevel] = useState<string>("beginner")
  const [workoutDuration, setWorkoutDuration] = useState<string>("30")
  const [fitnessGoal, setFitnessGoal] = useState<string>("general fitness")
  const [equipment, setEquipment] = useState<string>("minimal")
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateWorkoutPlan = () => {
    setIsGenerating(true)
    setTimeout(() => {
      let warmUp, mainWorkout, coolDown

      if (equipment === "minimal") {
        warmUp = "5 minutes of light cardio (jogging in place, jumping jacks, high knees)"
        mainWorkout = fitnessLevel === "beginner"
          ? "3 sets of 10 push-ups, 3 sets of 15 bodyweight squats, 3 sets of 10 lunges per leg, 3 sets of 30-second plank holds"
          : "4 sets of 15 push-ups, 4 sets of 20 bodyweight squats, 4 sets of 15 lunges per leg, 4 sets of 45-second plank holds, 3 sets of 10 burpees"
        coolDown = "5 minutes of stretching focusing on major muscle groups (legs, back, chest, arms)"
      } else if (equipment === "basic") {
        warmUp = "5 minutes of light cardio followed by dynamic stretching"
        mainWorkout = fitnessLevel === "beginner"
          ? "3 sets of 10 dumbbell rows, 3 sets of 12 dumbbell squats, 3 sets of 10 dumbbell chest press, 3 sets of 10 resistance band bicep curls"
          : "4 sets of 12 dumbbell rows, 4 sets of 15 dumbbell squats, 4 sets of 12 dumbbell chest press, 4 sets of 12 resistance band bicep curls, 3 sets of 10 dumbbell lunges per leg"
        coolDown = "5 minutes of static stretching and 2 minutes of light cardio"
      } else {
        warmUp = "10 minutes of cardio on a machine of choice (treadmill, elliptical, or stationary bike) followed by dynamic stretching"
        mainWorkout = fitnessLevel === "beginner"
          ? "3 sets of 10 barbell squats, 3 sets of 10 lat pulldowns, 3 sets of 10 bench press, 3 sets of 12 leg press, 3 sets of 10 seated cable rows"
          : "4 sets of 12 barbell squats, 4 sets of 12 lat pulldowns, 4 sets of 12 bench press, 4 sets of 15 leg press, 4 sets of 12 seated cable rows, 3 sets of 10 barbell deadlifts"
        coolDown = "5 minutes of static stretching, 5 minutes of light cardio, and 2 minutes of foam rolling"
      }

      setWorkoutPlan({ warmUp, mainWorkout, coolDown })
      setIsGenerating(false)
    }, 2000)
  }

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

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            AI-Powered Workout Plan Generator
          </CardTitle>
          <CardDescription>Create a personalized workout plan tailored to your fitness level and goals</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* ... existing form inputs ... */}
          </form>

          {workoutPlan && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Your Personalized Workout Plan:</h3>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Warm-Up (5-10 minutes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{workoutPlan.warmUp}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Main Workout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{workoutPlan.mainWorkout}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cool-Down (5-10 minutes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{workoutPlan.coolDown}</p>
                </CardContent>
              </Card>

              {/* Second Ad Placement - After the workout plan results */}
              <OldSchoolNewBodyAd />
            </div>
          )}

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
            <Zap className="h-6 w-6 text-blue-500 mt-0.5" />
            <p className="text-sm text-blue-800">
              Our AI-powered Workout Plan Generator creates personalized routines based on your fitness level, goals, and available equipment. Always consult with a healthcare professional before starting any new exercise program.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
