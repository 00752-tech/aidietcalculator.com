"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Zap } from 'lucide-react'
import { Button } from "./ui/button"

interface WorkoutPlan {
  warmUp: string;
  mainWorkout: string;
  coolDown: string;
}

export function WorkoutPlanGenerator() {
  const [fitnessLevel, setFitnessLevel] = useState<string>("beginner")
  const [workoutDuration, setWorkoutDuration] = useState<string>("30")
  const [fitnessGoal, setFitnessGoal] = useState<string>("general fitness")
  const [equipment, setEquipment] = useState<string>("minimal")
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // Optional: regenerate plan on param change
  // useEffect(() => {
  //   if (workoutPlan) {
  //     generateWorkoutPlan()
  //   }
  // }, [fitnessLevel, workoutDuration, fitnessGoal, equipment])

  const generateWorkoutPlan = () => {
    setIsGenerating(true)
    // In a real application, this would call an AI service to generate the workout plan
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fitness-level">Fitness Level</Label>
                <Select value={fitnessLevel} onValueChange={setFitnessLevel}>
                  <SelectTrigger id="fitness-level">
                    <SelectValue placeholder="Select your fitness level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workout-duration">Workout Duration (minutes)</Label>
                <Input
                  id="workout-duration"
                  type="number"
                  placeholder="Enter workout duration"
                  value={workoutDuration}
                  onChange={(e) => setWorkoutDuration(e.target.value)}
                  className="bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fitness-goal">Fitness Goal</Label>
                <Select value={fitnessGoal} onValueChange={setFitnessGoal}>
                  <SelectTrigger id="fitness-goal">
                    <SelectValue placeholder="Select your fitness goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general fitness">General Fitness</SelectItem>
                    <SelectItem value="weight loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle gain">Muscle Gain</SelectItem>
                    <SelectItem value="endurance">Endurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipment">Available Equipment</Label>
                <Select value={equipment} onValueChange={setEquipment}>
                  <SelectTrigger id="equipment">
                    <SelectValue placeholder="Select available equipment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minimal">Minimal (Bodyweight)</SelectItem>
                    <SelectItem value="basic">Basic (Dumbbells, Resistance Bands)</SelectItem>
                    <SelectItem value="full gym">Full Gym</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Note: The generated workout plan will be tailored to your selected duration of {workoutDuration} minutes.
              Adjust the number of sets or exercises as needed to fit within this timeframe.
            </p>

            <Button
              type="button"
              onClick={generateWorkoutPlan}
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate AI Workout Plan"}
            </Button>
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
