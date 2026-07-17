import dynamic from 'next/dynamic'
import { StackIntro } from "@/components/StackIntro"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TableOfContents } from "@/components/table-of-contents"

// Standard dynamic imports with export name fixes applied
const AiDietPlanner = dynamic(() => import('@/components/ai-diet-planner').then(mod => mod.AiDietPlanner ?? mod.default), { ssr: false })
const ProteinIntakeCalculator = dynamic(() => import('@/components/protein-intake-calculator').then(mod => mod.ProteinIntakeCalculator ?? mod.default), { ssr: false })
const BodyFatPercentageCalculator = dynamic(() => import('@/components/body-fat-percentage-calculator').then(mod => mod.BodyFatCalculator ?? mod.default), { ssr: false })
const CalorieCalculator = dynamic(() => import('@/components/calorie-calculator').then(mod => mod.CalorieCalculator ?? mod.default), { ssr: false })
const BmiCalculator = dynamic(() => import('@/components/bmi-calculator').then(mod => mod.BMICalculator ?? mod.default), { ssr: false })
const WaterIntakeCalculator = dynamic(() => import('@/components/water-intake-calculator').then(mod => mod.WaterIntakeCalculator ?? mod.default), { ssr: false })
const MacroNutrientCalculator = dynamic(() => import('@/components/macro-nutrient-calculator').then(mod => mod.MacroNutrientCalculator ?? mod.default), { ssr: false })
const ExerciseCalorieBurnEstimator = dynamic(() => import('@/components/exercise-calorie-burn-estimator').then(mod => mod.ExerciseCalorieBurnEstimator ?? mod.default), { ssr: false })
const WorkoutPlanGenerator = dynamic(() => import('@/components/workout-plan-generator').then(mod => mod.WorkoutPlanGenerator ?? mod.default), { ssr: false })
const KetoCalculator = dynamic(() => import('@/components/keto-calculator').then(mod => mod.KetoCalculator ?? mod.default), { ssr: false })
const IntermittentFastingCalculator = dynamic(() => import('@/components/intermittent-fasting-calculator').then(mod => mod.IntermittentFastingCalculator ?? mod.default), { ssr: false })
const IdealWeightCalculator = dynamic(() => import('@/components/ideal-weight-calculator').then(mod => mod.IdealWeightCalculator ?? mod.default), { ssr: false })
const BmrCalculator = dynamic(() => import('@/components/bmr-calculator').then(mod => mod.BMRCalculator ?? mod.default), { ssr: false })
const SleepCalculator = dynamic(() => import('@/components/sleep-calculator').then(mod => mod.SleepCalculator ?? mod.default), { ssr: false })
const OneRepMaxCalculator = dynamic(() => import('@/components/one-rep-max-calculator').then(mod => mod.OneRepMaxCalculator ?? mod.default), { ssr: false })

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <StackIntro title="Get Your AI-Powered Personalized Diet & Metabolism Blueprint in 60 Seconds." subtitle="No generic templates. No guesswork. Just a precision-engineered nutrition strategy, calibrated to your unique metabolic signature." />
      <HowItWorksSection />
      <BenefitsSection />

      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Health & Fitness Tools</h2>
        <TableOfContents />
      </div>

      <div className="container mx-auto px-4 py-8 space-y-16">
        <div id="ai-diet-planner"><AiDietPlanner /></div>
        <div id="protein-calculator"><ProteinIntakeCalculator /></div>
        <div id="body-fat-calculator"><BodyFatPercentageCalculator /></div>
        <div id="calorie-calculator"><CalorieCalculator /></div>
        <div id="bmi-calculator"><BmiCalculator /></div>
        <div id="water-intake-calculator"><WaterIntakeCalculator /></div>
        <div id="macro-nutrient-calculator"><MacroNutrientCalculator /></div>
        <div id="exercise-calorie-burn-estimator"><ExerciseCalorieBurnEstimator /></div>
        <div id="workout-plan-generator"><WorkoutPlanGenerator /></div>
        <div id="keto-calculator"><KetoCalculator /></div>
        <div id="intermittent-fasting-calculator"><IntermittentFastingCalculator /></div>
        <div id="ideal-weight-calculator"><IdealWeightCalculator /></div>
        <div id="bmr-calculator"><BmrCalculator /></div>
        <div id="sleep-calculator"><SleepCalculator /></div>
        <div id="one-rep-max-calculator"><OneRepMaxCalculator /></div>
      </div>
    </main>
  )
}
