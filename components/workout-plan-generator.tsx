'use client'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Zap, Sparkles, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

const OldSchoolNewBodyAd = () => {
  const handleCTAClick = () => {
    window.open("https://67982p5ys98p0y9k38kqgv4s1v.hop.clickbank.net/?&traffic_source=aidietcalc", "_blank")
  }

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-lg my-12 relative p-6 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* CTA Badge */}
      <div className="absolute top-2 right-2 text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded shadow-sm">
        🔵 Age-Defying Protocol
      </div>

      <CardHeader className="flex items-center gap-3 mb-3">
        <Sparkles className="h-7 w-7 text-blue-600" />
        <CardTitle className="text-3xl font-bold text-blue-800">
          Old School New Body Program
        </CardTitle>
      </CardHeader>

      <CardContent className="text-gray-800 space-y-5 text-[17px] leading-relaxed max-w-prose">
        <p>
          <strong>For men and women 35+:</strong> Unlock the age-defying blueprint used by Hollywood trainers to tighten, energize, and rejuvenate—with minimal time and zero guesswork.
        </p>
        <ul className="list-disc pl-6">
          <li>✅ 5 science-backed principles for fat-loss & longevity</li>
          <li>🏋️‍♀️ Works at any age—40s, 50s, 60s and beyond</li>
          <li>🚫 No fad diets or long workouts</li>
          <li>📣 Featured by top fitness experts</li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="group px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md inline-flex items-center justify-center gap-2 transition-colors duration-300 shadow-md"
          aria-label="Learn more about the Old School New Body Program"
        >
          Discover the Program
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        {/* Disclaimer */}
        <p className="text-sm italic text-gray-500 text-center mt-5">
          Affiliate Disclosure: We may earn a small commission if you purchase through this link—at no extra cost to you.
        </p>
      </CardContent>
    </Card>
  )
}

export default OldSchoolNewBodyAd

;

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

      {/* First Ad Placement */}
      <OldSchoolNewBodyAd />

      <Card className="w-full max-w-2xl mx-auto bg-white shadow-sm border-blue-100">
        <CardHeader className="border-b border-blue-100">
  <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
    <Dumbbell className="h-6 w-6 text-blue-600" />
    AI-Powered Workout Plan Generator
  </CardTitle>
  <p className="text-sm text-blue-600">
    Create a personalized workout plan tailored to your fitness level and goals
  </p>
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate AI Workout Plan"}
            </Button>
          </form>

          {/* Only show workout plan if it exists */}
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

              {/* Second Ad Placement */}
              <OldSchoolNewBodyAd />
            </div>
          )}

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
            <Zap className="h-6 w-6 text-blue-600 mt-0.5" />
            <p className="text-sm text-blue-800">
              Our AI-powered Workout Plan Generator creates personalized routines based on your fitness level, goals, and available equipment. Always consult with a healthcare professional before starting any new exercise program.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
