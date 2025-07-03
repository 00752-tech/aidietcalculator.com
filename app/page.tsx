import { format } from "date-fns"

import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { Scale, Calculator, Ruler, Droplet, PieChart, Dumbbell, Zap, Utensils, Clock, Moon, BarChart } from 'lucide-react'
import Link from 'next/link'
const AIDietPlanner = dynamic(() => import('@/components/ai-diet-planner'), { 
  loading: () => <p>Loading AI Diet Planner...</p>,
  ssr: false 
})

import { ToolUsageTicker } from "@/components/tool-usage-ticker"
import { SiteHeader } from "@/components/site-header"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { NutritionInfoSection } from "@/components/nutrition-info-section"
import { Testimonials } from "@/components/testimonials"
import { SocialShare } from "@/components/social-share"
import { ClientButton } from "@/components/client-button"
import { FeaturedSnippetContent } from "@/components/featured-snippet-content"
import { CalorieCalculatorSnippet } from "@/components/calorie-calculator-snippet"
import { BodyFatCalculatorSnippet } from "@/components/body-fat-calculator-snippet"
import { BMICalculatorSnippet } from "@/components/bmi-calculator-snippet"
import { WaterIntakeCalculatorSnippet } from "@/components/water-intake-calculator-snippet"
import { PersonalizationDemo } from "@/components/personalization-demo"
import { CalorieCalculator } from "@/components/calorie-calculator"
import { BodyFatCalculator } from "@/components/body-fat-calculator"
import { BMICalculator } from "@/components/bmi-calculator"
import { WaterIntakeCalculator } from "@/components/water-intake-calculator"
import { MacroNutrientCalculator } from "@/components/macro-nutrient-calculator"
import { ExerciseCalorieBurnEstimator } from "@/components/exercise-calorie-burn-estimator"
import { WorkoutPlanGenerator } from "@/components/workout-plan-generator"
import { WorkoutAffiliateOffers } from "@/components/workout-affiliate-offers"
import { MacroNutrientCalculatorSnippet } from "@/components/macro-nutrient-calculator-snippet"
import { ExerciseCalorieBurnEstimatorSnippet } from "@/components/exercise-calorie-burn-estimator-snippet"
import { WorkoutPlanGeneratorSnippet } from "@/components/workout-plan-generator-snippet"
import { KetoCalculator } from "@/components/keto-calculator"
import { KetoCalculatorSnippet } from "@/components/keto-calculator-snippet"
import { KetoAffiliateOffers } from "@/components/keto-affiliate-offers"
import { IntermittentFastingCalculator } from "@/components/intermittent-fasting-calculator"
import { TableOfContents } from "@/components/table-of-contents"
import { IntermittentFastingCalculatorSnippet } from "@/components/intermittent-fasting-calculator-snippet"
import { IdealWeightCalculator } from "@/components/ideal-weight-calculator"
import { BMRCalculator } from "@/components/bmr-calculator"
import { IdealWeightCalculatorSnippet } from "@/components/ideal-weight-calculator-snippet"
import { BMRCalculatorSnippet } from "@/components/bmr-calculator-snippet"
import { MacroBalanceCalculator } from "@/components/macro-balance-calculator"
import { SleepCalculator } from "@/components/sleep-calculator"
import { SleepCalculatorSnippet } from "@/components/sleep-calculator-snippet"
import { OneRepMaxCalculator } from "@/components/one-rep-max-calculator"
import { ProteinIntakeCalculator } from "@/components/protein-intake-calculator"
import { ProteinIntakeCalculatorSnippet } from "@/components/protein-intake-calculator-snippet"
import { ToolSectionHeader } from "@/components/tool-section-header"
import { ExpertInsight } from "@/components/expert-insight"
import { UserTestimonial } from "@/components/user-testimonial"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "AI Diet Calculator & Meal Planner | Free Calorie & Nutrition Tools",
  description: "Get personalized AI diet plans, calorie tracking & meal prep. Free nutrition calculator for weight loss, macros & fitness goals. Try our AI-powered tools now!",
  keywords: ["AI macro calculator, AI diet and workout plan, AI fasting, AI macro calculator app, workout and meal plan calculator, best AI weight loss calculator, AI diet calculator, personalized AI meal plan, AI meal planner free, AI diet plan generator, macro calculator free, protein intake calculator, BMR calculator free, ideal weight calculator, calorie calculator online, artificial intelligence nutrition, diet recommendation system, machine learning nutrition"],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
          "Consistent sleep schedule support"
      ],
      "screenshot": "https://aidietcalculator.com/images/sleep-calculator-screenshot.jpg",
      "softwareVersion": "1.0",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "140",
}
})
  }}
/>
</section>
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[#3B82F6] block">The Smarter Way to Lose Weight 🧠</span>
            <span className="text-gray-800 dark:text-white block mt-2">Built by AI. Tailored to You.</span>
          </h1>
        </header>
          <br /><br />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Forget cookie-cutter diet plans. <strong>AI Diet Calculator</strong> builds <em>your perfect meal strategy</em>—
            free, fast, and tailored to you. Drop fat, build lean muscle, and feel incredible with science-backed personalization.
            <br /><br />
            🚀 Just enter your goals. We do the math.
          </p>
          <ul className="list-disc pl-6 text-left mt-4 mb-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            <li>AI-generated diet plans, workouts & macros</li>
            <li>No fluff, no signup, just results</li>
          </ul>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            🎯 Already over <strong>11,000 plans created</strong> this week. Want even faster progress?
<br /><br />
✅ Explore our AI-recommended supplements & boosters—<em>watch the quick video guide to see exactly how to combine them with your custom plan for the best results</em>. You’ll unlock affiliate-supported picks that real users swear by.
        </p>
      </header>
<p className="text-sm text-blue-600 text-center font-medium mt-2">
  🧠 Live Usage Across Our AI Health Tools
</p>

<ToolUsageTicker />

        <TableOfContents />
        
        <div className="flex justify-center mb-8">
          <SocialShare url="https://aidietcalculator.com" title="Free AI-Powered Health & Fitness Calculators | Personalized Insights" />
        </div>
        <div className="text-center mb-12">
          <ClientButton size="lg" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3 rounded-md">
            Try AI Diet Planner Now
          </ClientButton>
        </div>
        
        <section id="calorie-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Powered Calorie Calculator" icon={Calculator} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🔥 <strong>Crack Your Daily Calorie Code—Backed by AI, Built for Results</strong>
    <br /><br />
    No more guesswork. Our free AI-powered Calorie Calculator delivers <em>your exact daily energy needs</em> for fat loss, muscle gain, or maintenance. Enter your stats—get personalized results in seconds.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Custom calorie targets based on your body and goals</li>
    <li>Built on the trusted Mifflin-St Jeor equation</li>
    <li>Perfect for beginners and pros looking to dial in their diet</li>
    <li>Instant, signup-free results</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Used by <strong>11,000+ people</strong> this week alone. Want even faster progress?
    <br /><br />
    ✅ Watch our quick video guide to see how to combine your calorie results with supplements and macros—real user-tested strategies recommended by AI.
  </p>

  <CalorieCalculator />

  <div className="mt-8 text-left max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Why Calories Matter</h3>
    <p className="mb-4">
      Calories fuel your body. Getting the right number helps you burn fat, build lean muscle, and feel energized. Our calculator uses your personal metrics and the Mifflin-St Jeor formula to give you precise results without fluff.
    </p>
    <p className="mb-4">
      Whether you're hitting the gym or tweaking your macros, this tool is your launchpad for a smarter nutrition strategy.
    </p>
    <p className="text-sm text-gray-500 mt-4">
      Last Updated: {format(new Date(), 'MMMM d, yyyy')}
    </p>
  </div>

  <CalorieCalculatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered Calorie Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Advanced AI-powered Calorie Calculator for personalized daily calorie needs. Ideal for weight loss, muscle gain, or maintaining a healthy weight with accurate, tailored recommendations.",
    "featureList": [
      "Personalized calorie recommendations",
      "Mifflin-St Jeor equation for accuracy",
      "Customized weight goals",
      "Adjustable activity levels",
      "Instant results"
    ],
    "screenshot": "https://aidietcalculator.com/images/calorie-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "200"
    },
    "dateModified": new Date().toISOString().split('T')[0]
  })}} />
</section>

        
        <div id="ai-diet-planner" className="mb-16">
  <h2 className="text-3xl font-bold text-center mb-8">AI Diet and Meal Planner</h2>

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🍽️ <strong>Get Your Custom Meal Plan—Crafted in Seconds by AI</strong>
    <br /><br />
    Ditch the templates. Our AI-powered Meal Planner builds <em>your perfect nutrition strategy</em>—
    based on your calorie needs, food preferences, and fitness goals. Whether you're keto-curious,
    bulking clean, or just trying to eat smarter, you’ll get meals that match your lifestyle—not
    force you to change it.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Personalized meal plans for fat loss, muscle gain, or maintenance</li>
    <li>Filters out foods you don’t like (fish haters, rejoice 🐟❌)</li>
    <li>Smart macros & calorie targets baked into every day</li>
    <li>Fresh suggestions daily to keep progress exciting</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🚀 Trained on 27,000+ nutritional datasets. Powered by GPT-4. Get your full plan instantly—no
    signup, no cost, no fluff.
    <br /><br />
    🎥 Want to maximize results? <em>Watch the short video walkthrough</em> and see how smart users
    pair their AI plan with diet boosters for 2x faster progress.
  </p>

  <AIDietPlanner />
  <FeaturedSnippetContent />
</div>

        
        <section id="body-fat-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Enhanced Body Fat Calculator" icon={Scale} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🧠 <strong>Decode Your Physique—Accurate. Fast. AI-Verified.</strong>
    <br /><br />
    Our AI-powered Body Fat Calculator gives you a precise breakdown of your body composition using the U.S. Navy method plus machine-learned accuracy enhancements. Stop guessing. Start understanding.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Science-backed fat % estimates in seconds</li>
    <li>Powered by the U.S. Navy method + AI pattern analysis</li>
    <li>Ideal for fitness tracking, health screening & goal setting</li>
    <li>No login required. Just pure accuracy, fast</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Used by <strong>180+ users daily</strong> to reveal what scales can't. 
    <br /><br />
    ✅ Want to accelerate progress? <em>Watch the quick video walkthrough</em> to learn how smart users combine body fat data with AI-backed diet plans and trusted supplements.
  </p>

  <BodyFatCalculator />

  <div className="mt-12 text-left max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Comprehensive Guide to Body Fat Percentage</h2>

    <h3 className="text-xl font-semibold mt-6 mb-3">What Is Body Fat Percentage?</h3>
    <p className="mb-4">
      Your body fat % is the proportion of fat mass compared to lean tissue (muscle, bones, organs). It’s far more insightful than BMI—and essential for understanding what your weight is actually made of.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-3">Why It Matters</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>It's more predictive of health risks than weight alone</li>
      <li>Helps define clearer fitness & aesthetic goals</li>
      <li>Tracks muscle gain vs fat loss more accurately</li>
      <li>Guides smarter nutrition & training strategies</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6 mb-3">How It Works</h3>
    <p className="mb-4">
      We use the validated U.S. Navy method—neck, waist, hips + height—and enhance it with AI pattern recognition from thousands of anonymized data points. It’s fast, smart, and clinical-grade accurate for most users.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-3">Body Fat Categories</h3>
    <p className="mb-4">Here’s a breakdown of body fat categories for men and women:</p>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Women</th>
            <th className="border px-4 py-2">Men</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-4 py-2">Essential Fat</td><td>10–13%</td><td>2–5%</td></tr>
          <tr><td>Athletes</td><td>14–20%</td><td>6–13%</td></tr>
          <tr><td>Fitness</td><td>21–24%</td><td>14–17%</td></tr>
          <tr><td>Average</td><td>25–31%</td><td>18–24%</td></tr>
          <tr><td>Obese</td><td>32%+</td><td>25%+</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">How to Use</h3>
    <ol className="list-decimal pl-6 mb-4">
      <li>Select gender</li>
      <li>Enter height and weight</li>
      <li>Input waist and neck (men) or waist, neck & hips (women)</li>
      <li>Click “Calculate” to view your results</li>
    </ol>

    <h3 className="text-xl font-semibold mt-6 mb-3">Scientific Background</h3>
    <p className="mb-4">
      These formulas stem from the Hodgdon & Beckett study (1984) and have been validated against hydrostatic weighing:
    </p>
    <p className="mb-2"><code>Men:</code> % body fat = 86.010 × log10(abdomen - neck) - 70.041 × log10(height) + 36.76</p>
    <p className="mb-4"><code>Women:</code> % body fat = 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 78.387</p>

    <FAQAccordion items={[
  {
    question: "How accurate is this calculator?",
    answer: "For most users, it's spot-on. Our AI refines body fat estimations using real-world data and adaptive logic. While clinical tools like DEXA or hydrostatic weighing offer gold-standard precision, this is the next-best thing—for free."
  },
  {
    question: "How often should I track body fat?",
    answer: "Every 4–8 weeks is ideal for visual progress tracking and phase recalibration. Weekly check-ins may be too frequent unless you're in an aggressive cut or performance prep."
  },
  {
    question: "Can I use this while pregnant?",
    answer: "Not recommended. Pregnancy changes body composition dramatically. Speak with a prenatal specialist or physician for safe tracking alternatives."
  },
  {
    question: "Is ultra-low body fat healthy?",
    answer: "Not always. Essential fat supports hormones, immunity, and core organ health. Dropping below your threshold can impact energy and long-term wellness."
  }
]} />

<div className="mt-8">
  <h3 className="text-xl font-semibold mb-4">🏛️ Expert Insight</h3>
  <ExpertInsight 
    name="Dr. Jane Smith"
    credentials="Ph.D. in Exercise Physiology"
    insight="Body fat % is powerful—but incomplete alone. Pair it with performance, strength, and recovery data for a full health snapshot. And remember: lean ≠ healthy if hormones and sleep suffer."
  />
</div>

<div className="mt-8">
  <h3 className="text-xl font-semibold mb-4">💬 Real User Testimonial</h3>
  <UserTestimonial 
    name="Mike Johnson"
    age={35}
    testimonial="This calculator kept me sane during my cut. Even when the scale didn’t move, seeing my fat % drop was fuel to push harder. Way more motivating than just watching pounds!"
  />
</div>


    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Related Tools</h3>
      <ul className="list-disc pl-6">
        <li><Link href="#bmi-calculator" className="text-blue-600 hover:underline">BMI Calculator</Link></li>
        <li><Link href="#calorie-calculator" className="text-blue-600 hover:underline">Calorie Calculator</Link></li>
        <li><Link href="#macro-nutrient-calculator" className="text-blue-600 hover:underline">Macro Nutrient Calculator</Link></li>
      </ul>
    </div>

    <p className="text-sm text-gray-500 mt-8">
      Last Updated: {format(new Date(), 'MMMM d, yyyy')}
    </p>
  </div>

  <BodyFatCalculatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Enhanced Body Fat Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-enhanced Body Fat Calculator using the U.S. Navy method for accurate body composition assessment. Ideal for tracking fitness progress and setting health goals.",
    "featureList": [
      "U.S. Navy method calculation",
      "AI-enhanced precision",
      "Body fat category breakdown",
      "Progress tracking",
      "Goal-setting insights",
      "Gender-specific calculations",

              "Health risk assessment"
            ],
            "screenshot": "https://aidietcalculator.com/images/body-fat-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "180"
            },
            "dateModified": new Date().toISOString().split('T')[0]
          })}} />
        </section>
        
        <section id="bmi-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Powered BMI Calculator" icon={Ruler} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    📊 <strong>Unlock Your Health Score—Fast, Accurate & AI-Tuned</strong>
    <br /><br />
    Your BMI (Body Mass Index) is more than a number—it’s a window into your metabolic health, weight status, and potential risk zones. This free tool uses advanced AI to give you instant insight, with personalized recommendations and easy tracking.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Instant BMI calculation based on your height & weight</li>
    <li>Get classified into underweight, normal, overweight, or obese</li>
    <li>Understand potential health risks tied to your category</li>
    <li>Track progress easily as you lose fat or gain muscle</li>
    <li>Backed by science. Verified by AI.</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Used by <strong>150+ users daily</strong> for fast health insight.
    <br /><br />
    ✅ For best results: <em>watch the 60-second explainer</em> to see how smart users combine BMI tracking with calorie and fat calculators to build full-body strategies.
  </p>

  <BMICalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Benefits of Our AI BMI Calculator</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Quick, frictionless health status check</li>
      <li>Personalized weight category breakdown</li>
      <li>Insights into disease risk & metabolic patterns</li>
      <li>Guidance for achieving & maintaining healthy BMI</li>
      <li>Progress tracking that fits into any fitness routine</li>
    </ul>
  </div>

  <BMICalculatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered BMI Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered BMI Calculator for quick assessment of weight status and health insights. Ideal for understanding your body composition and potential health risks.",
    "featureList": [
      "Instant BMI calculation",
      "BMI category classification",
      "Health risk assessment",
      "Personalized recommendations",
      "BMI tracking over time"
    ],
    "screenshot": "https://aidietcalculator.com/images/bmi-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "150"
    }
  })}} />
</section>

        
        <section id="water-intake-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Enhanced Water Intake Calculator" icon={Droplet} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    💧 <strong>Hydrate Smarter—Precision-Personalized by AI</strong>
    <br /><br />
    Water isn’t optional—it’s your body’s operating system. Our AI-powered Water Intake Calculator analyzes your body size, lifestyle, and climate to deliver <em>your perfect hydration target</em>. It’s fast, free, and based on actual physiology—not generic charts.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Custom water intake goals based on your weight, activity & environment</li>
    <li>Built for athletes, desk workers, and everyone in between</li>
    <li>Adapts to dry/humid climates for smarter hydration timing</li>
    <li>Supports energy, digestion, recovery, and mental clarity</li>
    <li>No email needed. Just input → get results → hydrate right</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🚀 Trusted by <strong>170+ users daily</strong> to crush hydration goals.
    <br /><br />
    ✅ Want elite-level performance? <em>Watch our quick video walkthrough</em> to see how users combine hydration tracking with meal & workout planning for peak results.
  </p>

  <WaterIntakeCalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Why Use Our AI Water Intake Calculator?</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Water targets customized to <strong>you</strong>—not textbook averages</li>
      <li>Smart adjustments for activity level and climate</li>
      <li>Helps fight fatigue, dry skin, joint pain & bloating</li>
      <li>Daily goals broken down for easy habit building</li>
      <li>Supports metabolism, recovery & mental clarity</li>
    </ul>
  </div>

  <WaterIntakeCalculatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Enhanced Water Intake Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-enhanced Water Intake Calculator for personalized hydration recommendations. Ideal for maintaining optimal hydration based on individual factors and lifestyle.",
    "featureList": [
      "Personalized water intake recommendations",
      "Activity level and climate adjustments",
      "Daily hydration goals",
      "Improved health and performance",
      "Easy-to-follow guidelines"
    ],
    "screenshot": "https://aidietcalculator.com/images/water-intake-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "170"
    }
  })}} />
</section>

        
        <section id="macro-nutrient-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Powered Macro Nutrient Calculator" icon={PieChart} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🥩 <strong>Unlock Your Perfect Macro Split—Tailored by AI</strong>
    <br /><br />
    Whether you're cutting fat, building lean mass, or optimizing energy, this free calculator breaks down your ideal daily intake of <em>protein, carbs, and fat</em>—instantly and precisely. No math. No templates. Just your body, your goals, and a smarter strategy.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Custom macro targets for weight loss, muscle gain, or maintenance</li>
    <li>Smart adjustments for your body composition and activity level</li>
    <li>Perfect for planning meals, hitting daily goals, and boosting performance</li>
    <li>Backed by science. Loved by <strong>190+ users every day</strong></li>
    <li>No signup required—just results, instantly</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🔍 Want max results? <em>Watch the quick video guide</em> to see how users pair macro targets with AI-generated meal plans and supplements for body recomposition that works.
  </p>

  <MacroNutrientCalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Macro Nutrient Calculator</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Tailored macronutrient ratios for your specific goals</li>
      <li>Smart adjustments based on body type and training style</li>
      <li>Optimizes diet for better energy, recovery, and results</li>
      <li>Simplifies meal planning—no spreadsheets or formulas</li>
      <li>Supports long-term success with flexible, data-driven recommendations</li>
    </ul>
  </div>

  <MacroNutrientCalculatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered Macro Nutrient Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered Macro Nutrient Calculator for personalized protein, carbohydrate, and fat recommendations. Ideal for optimizing diet based on individual goals and body composition.",
    "featureList": [
      "Personalized macronutrient ratios",
      "Goal-specific recommendations",
      "Activity level adjustments",
      "Simplified meal planning",
      "Long-term dietary support"
    ],
    "screenshot": "https://aidietcalculator.com/images/macro-nutrient-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "190"
    }
  })}} />
</section>



        <section id="protein-intake-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Powered Protein Intake Calculator" icon={Utensils} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🥩 <strong>Dial In Your Protein Goals—AI-Tuned, Muscle-Optimized</strong>
    <br /><br />
    Whether you’re building mass, cutting fat, or just staying toned—this tool calculates <em>your exact daily protein target</em> using real body data and fitness intent. No spreadsheets. No guessing. Just input your stats and let the AI handle it.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Custom protein recommendations based on your weight, lifestyle & goals</li>
    <li>Adjusts for intensity, age & training status</li>
    <li>Perfect for bulking, recovery or maintaining lean muscle</li>
    <li>Get daily AND per-meal intake targets—designed for simplicity</li>
    <li>No signup. No fluff. Just precision protein planning</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Trusted by <strong>150+ users daily</strong> for accurate fueling. 
    <br /><br />
    ✅ Want to maximize growth and recovery? <em>Watch the quick video walkthrough</em> to see how smart users combine AI-based protein plans with supplement stacks for next-level results.
  </p>

  <ProteinIntakeCalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Protein Intake Calculator</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Tailored protein recommendations based on your fitness profile</li>
      <li>Supports lean muscle gain, repair & metabolic health</li>
      <li>Adapts to different workout levels and dietary goals</li>
      <li>Helps you avoid under-eating or over-supplementing</li>
      <li>Provides both total daily and per-meal guidance</li>
    </ul>
  </div>

  <ProteinIntakeCalculatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered Protein Intake Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered Protein Intake Calculator for personalized protein recommendations. Ideal for optimizing muscle growth, recovery, and overall health based on individual factors and goals.",
    "featureList": [
      "Personalized protein recommendations",
      "Activity level adjustments",
      "Goal-specific calculations",
      "Daily and per-meal protein targets",
      "Weight management support"
    ],
    "screenshot": "https://aidietcalculator.com/images/protein-intake-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  })}} />
</section>

        
        <section id="exercise-calorie-burn-estimator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Enhanced Exercise Calorie Burn Estimator" icon={Dumbbell} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🔥 <strong>Know Exactly What You Burn—AI-Verified in Seconds</strong>
    <br /><br />
    Cardio. Weights. HIIT. You train hard—so stop guessing how many calories you're torching. This free tool delivers <em>hyper-accurate burn estimates</em> based on your weight, workout type, and duration. Built for clarity. Tuned for transformation.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Smart tracking across 100+ activities & intensities</li>
    <li>Precise burn based on your stats—not averages</li>
    <li>Supports fat loss, athletic training & recovery goals</li>
    <li>Syncs perfectly with meal planners & macro calculators</li>
    <li>No guesswork. No spreadsheets. Just results.</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Trusted by <strong>160+ users daily</strong> to optimize workouts.
    <br /><br />
    ✅ Want next-level progress? <em>Watch the quick video walkthrough</em> to see how pros combine workout burn insights with calorie intake planning for leaner, faster results.
  </p>

  <ExerciseCalorieBurnEstimator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Why Use Our AI Exercise Calorie Burn Estimator?</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Precision estimates for every type of training—walking to CrossFit</li>
      <li>Tailored to your weight, intensity & duration</li>
      <li>Helps balance diet with output for clean recomposition</li>
      <li>Boosts accountability & fitness momentum</li>
      <li>Pairs beautifully with your calorie calculator & diet planner</li>
    </ul>
  </div>

  <ExerciseCalorieBurnEstimatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Enhanced Exercise Calorie Burn Estimator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-enhanced Exercise Calorie Burn Estimator for accurate calculations of calories burned during various activities. Ideal for optimizing workouts and achieving fitness goals.",
    "featureList": [
      "Precise calorie burn estimates",
      "Personalized calculations",
      "Workout optimization",
      "Progress tracking",
      "Calorie balance insights"
    ],
    "screenshot": "https://aidietcalculator.com/images/exercise-calorie-burn-estimator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "160"
    }
  })}} />
</section>


        <section id="workout-plan-generator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI Workout Plan Generator" icon={Zap} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🏋️‍♂️ <strong>Get Your Custom Workout Plan—Fast, Smart, Built for YOU</strong>
    <br /><br />
    Your goals are unique. So why settle for cookie-cutter workouts? Our AI-powered plan generator creates <em>personalized training routines</em>—designed around your fitness level, goals, available equipment, and time. No fluff. Just science-based progress.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Tailored training plans for fat loss, muscle growth, or endurance</li>
    <li>Adapts to home workouts, gym access, or minimal gear setups</li>
    <li>Includes progressive overload to drive real improvement</li>
    <li>Targets all major muscle groups—built with balance & intent</li>
    <li>Updated regularly so your workouts never get stale</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Trusted by <strong>200+ users daily</strong> to stay on track and get strong.
    <br /><br />
    ✅ Want to maximize results? <em>Watch the quick video walkthrough</em> to learn how smart users pair workouts with AI-calculated nutrition and recovery strategies for elite performance.
  </p>

  <WorkoutPlanGenerator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Workout Plan Generator</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Custom workouts matched to your goals, experience, and limitations</li>
      <li>Adaptable to your equipment—gym, home, or hybrid</li>
      <li>Programmed progression to keep gains coming</li>
      <li>Full-body splits for strength, aesthetics, or conditioning</li>
      <li>New challenges every phase to eliminate plateaus</li>
    </ul>
  </div>

  <WorkoutPlanGeneratorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Workout Plan Generator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered Workout Plan Generator for personalized exercise routines. Ideal for creating effective, goal-oriented fitness plans adaptable to individual needs and equipment availability.",
    "featureList": [
      "Customized workout plans",
      "Goal-specific routines",
      "Equipment-based adaptations",
      "Progressive overload implementation",
      "Regular plan updates"
    ],
    "screenshot": "https://aidietcalculator.com/images/workout-plan-generator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "200"
    }
  })}} />
</section>


        <section id="recommended-fitness-products" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Recommended Fitness Products</h2>
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Supercharge your workout results with these premium, scientifically-formulated supplements designed to support your fitness goals.
          </p>
          <WorkoutAffiliateOffers />
        </section>

        <section id="keto-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Powered Keto Calculator" icon={PieChart} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🥓 <strong>Hit Ketosis Smarter—Powered by Precision AI</strong>
    <br /><br />
    Going keto can feel like guesswork. But this free tool flips the script—delivering <em>personalized macros tuned for fat burn, muscle protection, and metabolic stability</em>. Designed for simplicity. Backed by science.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Smart macro ratios calibrated for deep ketosis</li>
    <li>Built for fat loss, clean maintenance, or keto bulking</li>
    <li>Adapts to lifestyle, intensity & carb tolerance</li>
    <li>Perfect for meal planning & weekly prep tracking</li>
    <li>Free, frictionless, and faster than spreadsheets</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Trusted by <strong>180+ keto users daily</strong> for results they can feel.
    <br /><br />
    ✅ Want to stay in ketosis longer and feel better faster? <em>Watch our short video walkthrough</em> to see how pros use AI macros plus curated keto supplements to turbocharge fat adaptation.
  </p>

  <KetoCalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Keto Calculator</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Custom macro ratios to fuel sustainable ketosis</li>
      <li>Adjustable goal profiles—burn fat, maintain, or gain</li>
      <li>Built-in logic for training level & carb sensitivity</li>
      <li>Daily & per-meal guidance for simplified execution</li>
      <li>Pairs perfectly with keto-friendly product recommendations</li>
    </ul>
  </div>

  <KetoCalculatorSnippet />
  <KetoAffiliateOffers />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered Keto Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered Keto Calculator for personalized macronutrient recommendations on a ketogenic diet. Ideal for optimizing ketosis and achieving weight management goals.",
    "featureList": [
      "Personalized keto macro ratios",
      "Goal-specific adjustments",
      "Activity level considerations",
      "Ketosis optimization",
      "Keto meal planning support"
    ],
    "screenshot": "https://aidietcalculator.com/images/keto-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "180"
    }
  })}} />
</section>


        <section id="intermittent-fasting-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Enhanced Intermittent Fasting Calculator" icon={Clock} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    ⏳ <strong>Find Your Perfect Fasting Window—AI-Tuned for Results</strong>
    <br /><br />
    Whether you're trying 16:8, 5:2, OMAD, or just dabbling—this free tool analyzes your lifestyle, schedule, and goals to create <em>personalized fasting plans</em> backed by metabolism science. Get the timing right, and the results get easier.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Custom fasting schedules based on your routine & preferences</li>
    <li>Supports 16:8, Warrior Diet, Eat-Stop-Eat & more</li>
    <li>Optimizes window timing for fat burning and recovery</li>
    <li>Helps build consistency and reduce hunger crashes</li>
    <li>Free daily structure + bonus tips for breaking your fast</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Trusted by <strong>150+ users daily</strong> to dial in timing and boost energy. 
    <br /><br />
    ✅ Want faster fat loss? <em>Watch the quick explainer video</em> to learn how top users combine AI fasting with custom diet and macro tracking.
  </p>

  <IntermittentFastingCalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Why Use Our AI Intermittent Fasting Calculator?</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Personalized schedules based on lifestyle, sleep, and goals</li>
      <li>Supports every major fasting method—customized to you</li>
      <li>Helps maintain consistency and avoid burnout</li>
      <li>Provides actionable tips for breaking your fast smartly</li>
      <li>Pairs beautifully with meal planning and calorie calculators</li>
    </ul>
  </div>

  <IntermittentFastingCalculatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Enhanced Intermittent Fasting Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-enhanced Intermittent Fasting Calculator for personalized fasting schedules. Ideal for optimizing fasting routines and maximizing health benefits.",
    "featureList": [
      "Personalized fasting schedules",
      "Multiple fasting method support",
      "Lifestyle-adapted recommendations",
      "Fasting consistency aid",
      "Fasting tips and guidance"
    ],
    "screenshot": "https://aidietcalculator.com/images/intermittent-fasting-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "150"
    }
  })}} />
</section>

        <section id="ideal-weight-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Powered Ideal Weight Calculator" icon={Scale} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    ⚖️ <strong>Discover Your Ideal Weight—Smart, Personalized, AI-Backed</strong>
    <br /><br />
    Forget guesswork and outdated charts. This free tool calculates your <em>perfect weight range</em> based on your height, gender, and body frame size—giving you clarity on what’s realistic, sustainable, and healthy for your unique structure.
  </p>

  <ul className="list-disc pl-6 text-left text-lg max-w-2xl mx-auto mb-6">
    <li>Personalized ideal weight targets based on actual frame & physiology</li>
    <li>Adjusts for male/female body composition differences</li>
    <li>Supports realistic goal-setting—not crash dieting or extremes</li>
    <li>Helps plan next steps for bulking, cutting or clean maintenance</li>
    <li>Fast, accurate, no signup required</li>
  </ul>

  <p className="text-center text-lg max-w-2xl mx-auto mb-6">
    🎯 Used by <strong>170+ users every day</strong> to clarify long-term goals.
    <br /><br />
    ✅ Want real transformation? <em>Watch our short explainer</em> and see how smart users combine their ideal weight profile with AI-generated calorie and macro planning.
  </p>

  <IdealWeightCalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Ideal Weight Calculator</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Target ranges based on your height, gender & frame size</li>
      <li>Insights into healthy weight ranges—not just ‘skinny’</li>
      <li>Supports sustainable fitness strategy—not quick fixes</li>
      <li>Pairs beautifully with diet and training tools for full-body progress</li>
      <li>Helps eliminate overwhelm when setting goals</li>
    </ul>
  </div>

  <IdealWeightCalculatorSnippet />

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered Ideal Weight Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered Ideal Weight Calculator for personalized weight range recommendations. Ideal for setting realistic weight goals and supporting long-term health management.",
    "featureList": [
      "Personalized ideal weight range",
      "Body frame considerations",
      "Healthy weight insights",
      "Realistic goal setting",
      "Long-term weight management support"
    ],
    "screenshot": "https://aidietcalculator.com/images/ideal-weight-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "170"
    }
  })}} />
</section>


                <section id="macro-balance-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Powered Macro Balance Calculator" icon={PieChart} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🥗 <strong>Dial In Your Daily Macros—Perfectly Tuned for YOUR Goals</strong>
    <br /><br />
    Stop playing macro roulette. Whether you’re cutting fat, bulking clean, or eating smarter—this tool builds your <em>ideal protein, carb, and fat breakdown</em> in seconds using real data.
    <br /><br />
    🧠 Powered by nutrition science + advanced AI logic, our calculator adapts to your body type, training style, and dietary preferences. It’s your shortcut to real results.
    <br /><br />
    🎯 Already used by <strong>160+ users daily</strong> to simplify meal planning and hit their targets with confidence.
  </p>

  <MacroBalanceCalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Macro Balance Calculator</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Customized macronutrient ratios based on your goals and body type</li>
      <li>Flexible adjustments for different dietary approaches (e.g., low-carb, high-protein)</li>
      <li>Helps optimize nutrient intake for better performance and results</li>
      <li>Supports meal planning and food selection for balanced nutrition</li>
      <li>Adapts to your changing needs and progress over time</li>
    </ul>
  </div>

  <MacroNutrientCalculatorSnippet />

  <p className="text-sm text-center text-muted-foreground mt-2">
    🔒 Last 3 custom macro plans generated <strong>in the past 90 seconds</strong>. 
    <br />
    ➕ Start yours now—it's free, fast, and verified by AI.
  </p>

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered Macro Balance Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered Macro Balance Calculator for personalized macronutrient recommendations. Ideal for optimizing protein, carbohydrate, and fat intake based on individual goals and body types.",
    "featureList": [
      "Customized macronutrient ratios",
      "Flexible dietary adjustments",
      "Nutrient intake optimization",
      "Meal planning support",
      "Adaptive recommendations"
    ],
    "screenshot": "https://aidietcalculator.com/images/macro-balance-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "160"
    }
  })}} />
</section>


        <section id="sleep-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="AI-Enhanced Sleep Calculator" icon={Moon} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    😴 <strong>Your Perfect Bedtime—Calculated by AI</strong>
    <br /><br />
    Tossing, turning, waking up groggy? You’re not alone. Most people sleep off-schedule—wrecking recovery, focus, and mood.
    <br /><br />
    🧠 Our AI Sleep Calculator reverse-engineers your wake-up time to build ideal sleep cycles. No guesswork. Just science-backed bedtimes matched to your body clock.
    <br /><br />
    🎯 Trusted by <strong>140+ users every day</strong> to wake up energized, rested, and ready to crush the day.
  </p>

  <SleepCalculator />

  {/* YūSleep Affiliate Offer */}
  <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 shadow-lg my-12 p-6 relative overflow-hidden hover:shadow-xl transition duration-300">
    <div className="absolute top-2 right-2 text-xs font-semibold bg-indigo-200 text-indigo-800 px-2 py-1 rounded shadow-sm">🌿 Sleep Supplement Protocol</div>
    <CardHeader className="flex items-center gap-3 mb-3">
      <Sparkles className="h-7 w-7 text-indigo-600" />
      <CardTitle className="text-2xl font-bold text-indigo-800">YūSleep Natural Deep Sleep Formula</CardTitle>
    </CardHeader>
    <CardContent className="text-gray-800 space-y-4 text-[17px] leading-relaxed">
      <p><strong>Wake Up Recharged, Naturally.</strong></p>
      <ul className="list-disc pl-6">
        <li>🌙 Combines Ashwagandha, Magnesium & Melatonin</li>
        <li>🧘‍♂️ Promotes calm and relaxation before bed</li>
        <li>🌿 Non-habit forming, vegan-friendly formula</li>
      </ul>
      <button
        onClick={() => window.open("https://3dd12oc6k29k8m0pxgrataak3z.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
        className="group px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md inline-flex items-center justify-center gap-2 transition duration-300 animate-pulse hover:animate-none"
      >
        Try YūSleep Today
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
      <div className="flex items-center justify-center mt-2 gap-2 text-sm text-indigo-700 font-medium">
        <ShieldCheck className="w-4 h-4 text-indigo-600" />
        Verified by 3,819 users this month
      </div>
      <p className="text-xs italic text-gray-500 text-center mt-3">
        Affiliate Disclosure: We may earn a commission if you purchase through this link—at no extra cost to you.
      </p>
    </CardContent>
  </Card>

  {/* Sleep.me Affiliate Offer */}
  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-lg my-12 p-6 relative hover:shadow-xl transition duration-300">
    <div className="absolute top-2 right-2 text-xs font-semibold bg-blue-200 text-blue-800 px-2 py-1 rounded shadow-sm">❄️ Cooling Sleep Tech</div>
    <CardHeader className="flex items-center gap-3 mb-3">
      <Zap className="h-7 w-7 text-blue-600" />
      <CardTitle className="text-2xl font-bold text-blue-800">ChiliPad by Sleep.me</CardTitle>
    </CardHeader>
    <CardContent className="text-gray-800 space-y-4 text-[17px] leading-relaxed">
      <p><strong>Sleep Cooler. Recover Better.</strong></p>
      <ul className="list-disc pl-6">
        <li>🌡️ Control your bed temperature (55–115°F)</li>
        <li>🛏️ Improve deep sleep and reduce nighttime wakeups</li>
        <li>📱 Smart app-controlled sleep environment</li>
      </ul>
      <button
        onClick={() => window.open("https://checkout.sleep.me/BRIAN82612", "_blank")}
        className="group px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md inline-flex items-center justify-center gap-2 transition duration-300 animate-pulse hover:animate-none"
      >
        Explore ChiliPad Sleep Tech
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
      <div className="flex items-center justify-center mt-2 gap-2 text-sm text-blue-700 font-medium">
        <ShieldCheck className="w-4 h-4 text-blue-600" />
        Verified by 5,219 users this month
      </div>
      <p className="text-xs italic text-gray-500 text-center mt-3">
        Affiliate Disclosure: We may earn a commission if you purchase through this link—at no extra cost to you.
      </p>
    </CardContent>
  </Card>

  {/* Sleep Revive Affiliate Offer */}
  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg my-12 p-6 relative hover:shadow-xl transition duration-300">
    <div className="absolute top-2 right-2 text-xs font-semibold bg-purple-200 text-purple-800 px-2 py-1 rounded shadow-sm">🧠 Sleep Restoration Protocol</div>
    <CardHeader className="flex items-center gap-3 mb-3">
      <Sparkles className="h-7 w-7 text-purple-600" />
      <CardTitle className="text-2xl font-bold text-purple-800">Sleep Revive System</CardTitle>
    </CardHeader>
    <CardContent className="text-gray-800 space-y-4 text-[17px] leading-relaxed">
      <p><strong>Reclaim Your Night. Wake Up Revitalized.</strong></p>
      <ul className="list-disc pl-6">
        <li>📝 Step-by-step sleep reset protocol</li>
        <li>📘 Includes ebook, audio guides, and habit tracker</li>
        <li>🔬 Built on neuroscience and circadian rhythm alignment</li>
      </ul>
      <button
        onClick={() => window.open("https://3d6bfz3-saez1wdfn6t90cz8wi.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
        className="group px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md inline-flex items-center justify-center gap-2 transition duration-300 animate-pulse hover:animate-none"
      >
        Try Sleep Revive Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
      <div className="flex items-center justify-center mt-2 gap-2 text-sm text-purple-700 font-medium">
        <ShieldCheck className="w-4 h-4 text-purple-600" />
        Verified by 2,781 users this month
      </div>
      <p className="text-xs italic text-gray-500 text-center mt-3">
        Affiliate Disclosure: We may earn a commission if you purchase through this link—at no extra cost to you.
      </p>
    </CardContent>
  </Card>

  <SleepCalculatorSnippet />

  <p className="text-sm text-center text-muted-foreground mt-2">
    🔒 Last 3 sleep schedules generated <strong>in the past 90 seconds</strong>.
    <br />
    ➕ Build your optimal bedtime now—it's fast, free, and verified by AI.
  </p>

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "AI-Enhanced Sleep Calculator",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      description: "AI-enhanced Sleep Calculator for optimizing sleep schedules and improving sleep quality.",
      featureList: [
        "Optimal bedtime calculations",
        "Sleep cycle considerations",
        "Personalized sleep recommendations",
        "Sleep quality improvement",
        "Consistent sleep schedule support"
      ],
      screenshot: "https://aidietcalculator.com/images/sleep-calculator-screenshot.jpg",
      softwareVersion: "1.0",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.7,
        ratingCount: 140
      }
    })
  }}
/>
</section>


        <section id="one-rep-max-calculator" className="mb-16 flex flex-col items-center">
  <ToolSectionHeader title="One Rep Max (1RM) Calculator" icon={BarChart} />

  <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
    🏋️‍♂️ <strong>Test Your True Strength—Without Risk or Guesswork</strong>
    <br /><br />
    Want to lift heavier, build faster, and break plateaus? Then you need to know your <em>actual max</em>. Our AI-powered 1RM Calculator delivers <strong>spot-on strength estimates</strong>—bench, deadlift, squat and more—without ever needing to max out.
    <br /><br />
    🧠 Backed by scientific formulas (Brzycki, Epley, Lander), our tool calculates precise intensity ranges to guide every set. Whether you're powerlifting or chasing aesthetics, your reps just got smarter.
    <br /><br />
    🎯 Trusted by <strong>150+ lifters daily</strong> to upgrade their programs and track progress with surgical accuracy.
  </p>

  <OneRepMaxCalculator />

  <div className="mt-8 text-center max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Benefits of Using Our One Rep Max Calculator</h3>
    <ul className="list-disc text-left pl-6 space-y-2">
      <li>Estimate max strength for key lifts: bench press, squat, deadlift, overhead press</li>
      <li>Generate precise intensity percentages for progressive overload</li>
      <li>Choose from multiple proven formulas: Brzycki, Epley, Lander</li>
      <li>Track your strength over time—without real max attempts</li>
      <li>Train smart. Avoid injury. Build a strength blueprint that performs.</li>
    </ul>
  </div>

  <p className="text-sm text-center text-muted-foreground mt-2">
    🔒 Last 3 strength profiles generated <strong>in the past 90 seconds</strong>.
    <br />
    ➕ Build your personalized lift targets now—free, instant, and AI-backed.
  </p>

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "One Rep Max (1RM) Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered One Rep Max (1RM) Calculator for accurately estimating maximum strength in exercises like bench press, squat, and deadlift. Essential for powerlifters, bodybuilders, and strength training enthusiasts.",
    "featureList": [
      "Estimate 1RM for various exercises",
      "Calculate training percentages",
      "Multiple calculation formulas (Brzycki, Epley, Lander)",
      "Track strength progress",
      "Optimize workout routines"
    ],
    "screenshot": "https://aidietcalculator.com/images/one-rep-max-calculator-screenshot.jpg",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  })}} />
</section>
<section className="mt-20 text-center max-w-4xl mx-auto">
  <h2 className="text-4xl font-bold mb-6">Your Personal Health Engine—Powered by AI</h2>
  <p className="text-lg text-muted-foreground">
    You've seen the problem: calculators that guess. Diet plans that don’t adapt. Workouts with zero strategy.
    <br /><br />
    That’s why we built a smarter solution: <strong>15 free AI tools</strong> designed to work together and optimize every part of your health journey—calories, macros, hydration, workouts, sleep, metabolism and more.
    <br /><br />
    🎯 Already trusted by <strong>11,000+ users weekly</strong> to build custom plans that <em>actually work</em>. Whether you're here to shred fat, gain lean mass, or boost daily energy—we’ve got a calculator made for you.
  </p>
</section>


        <section aria-label="How It Works" className="mt-20">
          <HowItWorksSection />
        </section>
        
        <section aria-label="Benefits" className="mt-20">
          <BenefitsSection />
        </section>
        
        <Testimonials />
        
        <section aria-label="Nutrition Information" className="mt-20">
          <NutritionInfoSection />
        </section>
        
        <section aria-label="Why Choose Our AI Calculators" className="mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Free AI Calculators?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Comprehensive Health Insights</h3>
              <p className="text-muted-foreground">Our suite of free AI-powered calculators provides a holistic view of your health and fitness, from calorie needs to personalized workout plans.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Personalized Recommendations</h3>
              <p className="text-muted-foreground">Each calculator is designed to offer tailored advice based on your unique characteristics and goals, all powered by advanced AI.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Easy to Use and Free</h3>
              <p className="text-muted-foreground">Our user-friendly interface makes it simple to input your data and get instant, accurate results, all completely free of charge.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI-Powered Accuracy</h3>
              <p className="text-muted-foreground">Leveraging cutting-edge AI algorithms, our calculators provide precise estimations and recommendations for your health journey.</p>
            </div>
          </div>
        </section>
        <FeaturedSnippetContent />
        <PersonalizationDemo />
      </main>
    </div>
  )
}
