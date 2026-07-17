'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Scale, Calculator, Ruler } from 'lucide-react'

// Components
import { SiteHeader } from "@/components/site-header"
import { ToolUsageTicker } from "@/components/tool-usage-ticker" 
import { ClientButton } from "@/components/client-button"
import { TableOfContents } from "@/components/table-of-contents"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { NutritionInfoSection } from "@/components/nutrition-info-section"
import { Testimonials } from "@/components/testimonials"
import { FeaturedSnippetContent } from "@/components/featured-snippet-content"
import { PersonalizationDemo } from "@/components/personalization-demo"

// Calculators
const AIDietPlanner = dynamic(() => import('@/components/ai-diet-planner'), { 
  loading: () => <p>Loading AI Diet Planner...</p>,
  ssr: false 
})

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-20">
        
        {/* HERO */}
        <section className="py-20 bg-white rounded-2xl shadow-sm mb-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/jeans-transformation.jpeg" alt="Woman zipping jeans" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <ToolUsageTicker />

        {/* PRIMARY FUNNEL */}
        <section id="ai-diet-planner" className="mt-24 mb-20 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
          <AIDietPlanner />
        </section>

        {/* METABOLIC BRIDGE: PIVOT TO NAGANO TONIC */}
        <section className="mb-20 p-8 md:p-12 bg-[#FFF9F5] border-2 border-orange-200 rounded-2xl shadow-sm text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Missing Piece to Your Metabolic Puzzle</h3>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            You have your calorie targets. That's the science. But why do 9 out of 10 people fail to hit those numbers without feeling drained? It’s because your metabolism is <strong>dormant</strong>. Discover the 7-second morning ritual that thousands use to spark their metabolism back to life.
          </p>
          <a href="https://5e2adpgvl25m7o5jndpbrz9w04.hop.clickbank.net/?&traffic_source=aidietcalc" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg transition-transform hover:scale-105">
            See The 7-Second Ritual →
          </a>
          <p className="text-sm text-orange-800/60 mt-4 italic">Advertisement — Affiliate Disclosure</p>
        </section>

        {/* DIAGNOSTIC SUITE */}
        <section className="py-12 bg-white rounded-2xl shadow-sm border border-slate-100 mt-12 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Your Metabolic Diagnostic Suite</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            
            <div className="p-6 border border-blue-100 rounded-xl bg-blue-50/50">
              <Calculator className="mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold text-lg mb-2">AI Diet Planner</h3>
              <p className="text-sm text-slate-600 mb-4">Generate your custom nutrition blueprint.</p>
              <a href="#ai-diet-planner" className="text-blue-600 font-semibold hover:underline">Start Planner →</a>
            </div>

            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
              <Scale className="mx-auto mb-4 text-slate-600" />
              <h3 className="font-bold text-lg mb-2">Protein Calculator</h3>
              <p className="text-sm text-slate-600 mb-4">Find your optimal daily protein intake.</p>
              <a href="#protein-calculator" className="text-slate-600 font-semibold hover:text-blue-600">Calculate →</a>
            </div>

            <div className="p-6 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
              <Ruler className="mx-auto mb-4 text-slate-600" />
              <h3 className="font-bold text-lg mb-2">Body Fat Calculator</h3>
              <p className="text-sm text-slate-600 mb-4">Analyze your metabolic baseline.</p>
              <a href="#body-fat-calculator" className="text-slate-600 font-semibold hover:text-blue-600">Analyze →</a>
            </div>
          </div>
        </section>

        {/* FOOTER SECTIONS */}
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
