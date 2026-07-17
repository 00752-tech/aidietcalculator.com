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

// ... [Keep other imports exactly as they are]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-20">
        
        {/* HERO: BENSON-STYLE FUTURE PACING */}
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
              <img 
                src="/images/jeans-transformation.jpeg" 
                alt="Woman zipping jeans and smiling" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <ToolUsageTicker />

        {/* PRIMARY FUNNEL: CUSTOM NUTRITION BLUEPRINT (Added mt-20 for breathing room) */}
        <section id="ai-diet-planner" className="mt-20 mb-20 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Your Custom Nutrition Blueprint. <br />
              <span className="text-orange-600 italic">No Guesswork. Just Results.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              You’ve spent enough time calculating. It’s time to start <strong>executing</strong>. This isn’t a generic template; this is a precision-engineered nutrition strategy, calibrated to <em>your</em> metabolic signature.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl max-w-xl mx-auto">
            <AIDietPlanner />
            <div className="mt-6 text-center border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500 italic">
                🔒 Your data is encrypted and used only to build your blueprint. We value your privacy.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 font-medium">
              ⚡ 4,812+ custom plans generated this week.
            </p>
          </div>
        </section>

        {/* ... [Keep the rest of the file identical] ... */}
      </main>
    </div>
  )
}
