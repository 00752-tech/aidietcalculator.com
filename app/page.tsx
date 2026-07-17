import dynamic from 'next/dynamic'
import { StackIntro } from "@/components/StackIntro"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TableOfContents } from "@/components/table-of-contents"

// A helper to make the build tell us which file is failing
const safeDynamic = (importFn: () => Promise<any>, name: string) => 
  dynamic(() => importFn().then((mod) => {
    const comp = mod[name] || mod.default;
    if (!comp) {
      console.error(`🚨 CRITICAL ERROR: Component ${name} could not be loaded from module.`);
      throw new Error(`Failed to load component: ${name}. Check your exports in the source file.`);
    }
    return comp;
  }), { ssr: false });

const AiDietPlanner = safeDynamic(() => import('@/components/ai-diet-planner'), 'AiDietPlanner')
const ProteinIntakeCalculator = safeDynamic(() => import('@/components/protein-intake-calculator'), 'ProteinIntakeCalculator')
const BodyFatPercentageCalculator = safeDynamic(() => import('@/components/body-fat-percentage-calculator'), 'BodyFatPercentageCalculator')
const CalorieCalculator = safeDynamic(() => import('@/components/calorie-calculator'), 'CalorieCalculator')
const BmiCalculator = safeDynamic(() => import('@/components/bmi-calculator'), 'BmiCalculator')
const WaterIntakeCalculator = safeDynamic(() => import('@/components/water-intake-calculator'), 'WaterIntakeCalculator')
const MacroNutrientCalculator = safeDynamic(() => import('@/components/macro-nutrient-calculator'), 'MacroNutrientCalculator')
const ExerciseCalorieBurnEstimator = safeDynamic(() => import('@/components/exercise-calorie-burn-estimator'), 'ExerciseCalorieBurnEstimator')
const WorkoutPlanGenerator = safeDynamic(() => import('@/components/workout-plan-generator'), 'WorkoutPlanGenerator')
const KetoCalculator = safeDynamic(() => import('@/components/keto-calculator'), 'KetoCalculator')
const IntermittentFastingCalculator = safeDynamic(() => import('@/components/intermittent-fasting-calculator'), 'IntermittentFastingCalculator')
const IdealWeightCalculator = safeDynamic(() => import('@/components/ideal-weight-calculator'), 'IdealWeightCalculator')
const BmrCalculator = safeDynamic(() => import('@/components/bmr-calculator'), 'BmrCalculator')
const SleepCalculator = safeDynamic(() => import('@/components/sleep-calculator'), 'SleepCalculator')
const OneRepMaxCalculator = safeDynamic(() => import('@/components/one-rep-max-calculator'), 'OneRepMaxCalculator')

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
