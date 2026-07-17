'use client'

import dynamic from 'next/dynamic'
import { SiteHeader } from "@/components/site-header"
import { ToolUsageTicker } from "@/components/tool-usage-ticker" 
import { ClientButton } from "@/components/client-button"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

// Lazy load the planner to keep initial page load snappy
const AIDietPlanner = dynamic(() => import('@/components/ai-diet-planner'), { 
  loading: () => <p className="text-center py-10">Loading AI Diet Planner...</p>,
  ssr: false 
})

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      {/* 
         UX NOTE: Consider simplifying SiteHeader in the future 
         to remove 'Blog'/'Resources' to prevent exit ramps.
      */}
      <SiteHeader />
      
      <main className="container mx-auto px-4 py-8 pt-20">
        
        {/* HERO: The Transformation Promise */}
        <section className="py-12 md:py-20 bg-white rounded-2xl shadow-sm mb-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Get Your Personalized <span className="text-orange-600">Metabolism Blueprint</span> in 60 Seconds.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              No generic templates. No guesswork. Just a precision-engineered nutrition strategy, calibrated to your unique metabolic signature.
            </p>
            <div className="flex flex-col items-center gap-4">
              <ClientButton size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
                Start My Diagnostic
              </ClientButton>
              <p className="text-sm text-slate-400">Join 11,000+ users this week.</p>
            </div>
          </div>
        </section>

        <ToolUsageTicker />

        {/* PRIMARY FUNNEL: Diagnostic Suite */}
        <section id="ai-diet-planner" className="mt-12 mb-12">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 max-w-3xl mx-auto">
            <AIDietPlanner />
          </div>
        </section>

        {/* BRIDGE: The Pivot */}
        <section className="mb-20 p-8 md:p-12 bg-[#FFF9F5] border-2 border-orange-200 rounded-2xl shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">The Missing Piece to Your Metabolic Puzzle</h3>
          <p className="text-xl text-slate-700 mb-8">
            You have your targets. But why do most fail? Because metabolism is a <strong>signaling problem</strong>, not just a math problem. See the 7-second morning ritual thousands use to jumpstart their results.
          </p>
          <a href="https://5e2adpgvl25m7o5jndpbrz9w04.hop.clickbank.net/?&traffic_source=aidietcalc" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg transition-transform hover:scale-105">
            See The 7-Second Ritual →
          </a>
        </section>

        {/* SOCIAL PROOF */}
        <Testimonials />

        {/* EDUCATIONAL DEPTH (Placed after conversion to keep intent focused) */}
        <section className="mt-20 space-y-20">
          <HowItWorksSection />
          <BenefitsSection />
        </section>

      </main>

      {/* SEO HOARDING ZONE: Move all tool links here */}
      <Footer />
    </div>
  )
}
