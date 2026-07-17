'use client'

import { format } from "date-fns"
import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Scale, Calculator, Zap, Ruler, Droplet, PieChart, Dumbbell, Utensils, Clock, Moon, BarChart } from 'lucide-react'

// Components
import { SiteHeader } from "@/components/site-header"
import { ToolUsageTicker } from "@/components/tool-usage-ticker"
import { ClientButton } from "@/components/client-button"
import { TableOfContents } from "@/components/table-of-contents"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { NutritionInfoSection } from "@/components/nutrition-info-section"
import { Testimonials } from "@/components/testimonials"
import { FAQAccordion } from "@/components/faq-accordion"
import { FeaturedSnippetContent } from "@/components/featured-snippet-content"
import { PersonalizationDemo } from "@/components/personalization-demo"

// Calculators
const AIDietPlanner = dynamic(() => import('@/components/ai-diet-planner'), { 
  loading: () => <p>Loading AI Diet Planner...</p>,
  ssr: false 
})

import { CalorieCalculator } from "@/components/calorie-calculator"
import { BodyFatCalculator } from "@/components/body-fat-calculator"
import { BMICalculator } from "@/components/bmi-calculator"
import { WaterIntakeCalculator } from "@/components/water-intake-calculator"
import { MacroNutrientCalculator } from "@/components/macro-nutrient-calculator"
import { ExerciseCalorieBurnEstimator } from "@/components/exercise-calorie-burn-estimator"
import { WorkoutPlanGenerator } from "@/components/workout-plan-generator"
import { KetoCalculator } from "@/components/keto-calculator"
import { IntermittentFastingCalculator } from "@/components/intermittent-fasting-calculator"
import { IdealWeightCalculator } from "@/components/ideal-weight-calculator"
import { SleepCalculator } from "@/components/sleep-calculator"
import { OneRepMaxCalculator } from "@/components/one-rep-max-calculator"
import { ProteinIntakeCalculator } from "@/components/protein-intake-calculator"

// Snippets (Keep these for SEO)
import { CalorieCalculatorSnippet } from "@/components/calorie-calculator-snippet"
import { BodyFatCalculatorSnippet } from "@/components/body-fat-calculator-snippet"
import { BMICalculatorSnippet } from "@/components/bmi-calculator-snippet"
import { WaterIntakeCalculatorSnippet } from "@/components/water-intake-calculator-snippet"
import { MacroNutrientCalculatorSnippet } from "@/components/macro-nutrient-calculator-snippet"
import { ProteinIntakeCalculatorSnippet } from "@/components/protein-intake-calculator-snippet"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-20">
        
        {/* HERO: BENSON-STYLE FUTURE PACING WITH VISUAL ANCHOR */}
        <section className="py-20 bg-white rounded-2xl shadow-sm mb-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT COLUMN: THE HOOK */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Imagine Sliding Into Your Favorite Jeans... <span className="text-orange-600">Without Tucking Your Stomach In.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                You've been "doing the work." Counting the calories. Skipping the carbs. But that dormant metabolism is still working <em>against</em> you. It's time to stop the struggle and start the ritual.
              </p>
              <div className="flex flex-col items-center md:items-start gap-4">
                <ClientButton size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
                  Build My Custom Plan & Start The Ritual
                </ClientButton>
                <p className="text-sm text-slate-400 mt-2">Join 11,000+ users this week who stopped counting and started transforming.</p>
              </div>
            </div>

            {/* RIGHT COLUMN: THE VISUAL ANCHOR */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/jeans-transformation.jpeg" 
                alt="Woman zipping jeans and smiling" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <ToolUsageTicker />

        {/* PRIMARY FUNNEL: AI DIET PLANNER */}
        <section id="ai-diet-planner" className="mb-20 bg-white p-8 rounded-xl shadow-md border-t-4 border-[#3B82F6]">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Custom Meal Plan</h2>
          <AIDietPlanner />
        </section>

        {/* METABOLIC BRIDGE: PIVOT TO NAGANO TONIC */}
        <section className="mb-20 p-8 bg-[#FFF9F5] border-2 border-orange-200 rounded-2xl shadow-sm text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            The Missing Piece to Your Metabolic Puzzle
          </h3>
          <p className="text-xl text-slate-700 mb-6 max-w-2xl mx-auto">
            You have your calorie targets. That's the science. But why do 9 out of 10 people fail to hit those numbers without feeling drained? It’s because your metabolism is <strong>dormant</strong>. Before you stress over every gram, see the 7-second morning ritual that thousands of others use to spark their metabolism back to life.
          </p>
          <a 
            href="https://5e2adpgvl25m7o5jndpbrz9w04.hop.clickbank.net/?&traffic_source=aidietcalc" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg transition-transform hover:scale-105"
          >
            See The Morning Elixir That Sparks Metabolism →
          </a>
          <p className="text-sm text-orange-800/60 mt-4 italic">Editorial Recommendation: See why this tonic is our #1 pick for metabolic support.</p>
        </section>

        {/* DEMOTED DIRECTORY: "MORE TOOLS" FOR SEO */}
        <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Need Specialized Insights?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg mb-2 flex items-center"><Calculator className="mr-2"/> Calorie Calculator</h3>
                    <Link href="#calorie-calculator" className="text-blue-600 hover:underline">Get your energy targets →</Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg mb-2 flex items-center"><Scale className="mr-2"/> Body Fat Calculator</h3>
                    <Link href="#body-fat-calculator" className="text-blue-600 hover:underline">Decode your body composition →</Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg mb-2 flex items-center"><Ruler className="mr-2"/> BMI Calculator</h3>
                    <Link href="#bmi-calculator" className="text-blue-600 hover:underline">Unlock health scores →</Link>
                </div>
            </div>
        </section>

        {/* KEEP EXISTING SECTIONS FOR SEO */}
        <TableOfContents />
        <section aria-label="How It Works" className="mt-20"><HowItWorksSection /></section>
        <section aria-label="Benefits" className="mt-20"><BenefitsSection /></section>
        <Testimonials />
        <section aria-label="Nutrition Information" className="mt-20"><NutritionInfoSection /></section>
        <FeaturedSnippetContent />
        <PersonalizationDemo />

      </main>
    </div>
  )
}
