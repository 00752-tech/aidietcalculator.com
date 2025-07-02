'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Zap, Sparkles, ArrowRight } from 'lucide-react'

const offers = [
  {
    title: "🍓 Smoothie Diet: Drop Inches in 21 Days",
    description: "A rapid fat-loss blueprint using nutrient-rich smoothies, optimized for satiety and metabolism.",
    link: "https://tinyurl.com/21-day-diet-drink",
    icon: Dumbbell,
    activation: "✅ Over 12,400 activations this month",
    badge: "🍓 3-Phase Detox Protocol",
    cta: "Start My Smoothie Plan",
    gradient: "from-blue-50 to-cyan-100"
  },
  {
    title: "🩺 Gluco Extend: Blood Sugar Balance Support",
    description: "Clinically-informed formula supporting insulin sensitivity, metabolism, and energy regulation.",
    link: "https://tinyurl.com/gluco-extend-now",
    icon: Zap,
    activation: "✅ Trusted by 8,921 users",
    badge: "🩺 Doctor-Inspired Stack",
    cta: "View Formula",
    gradient: "from-purple-50 to-pink-100"
  },
  {
    title: "🔥 HepatoBurn: Burn Fat + Detox Naturally",
    description: "Supports liver health and fat metabolism using plant-based actives like turmeric and milk thistle.",
    link: "https://tinyurl.com/hepatoburn-now",
    icon: Sparkles,
    activation: "✅ Featured in Top 5 Natural Burners",
    badge: "🔥 Clean Fat Flush",
    cta: "Activate My Burn",
    gradient: "from-yellow-50 to-orange-100"
  },
]

export function WorkoutAffiliateOffers() {
  return (
    <div className="mt-20 px-4">
      {/* Section Heading */}
      <section className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Optimize Your Fitness Journey 🏋️</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Metabolism boosters. Detox pathways. Blood sugar harmony. These affiliate-backed stacks fuel results.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200 text-center">
          <strong>Some links may be affiliate links—when you buy, we earn a small commission at no extra cost. That keeps our fitness tools free 💙</strong>
        </p>
      </div>

      {/* Offer Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <Card key={index} className={`bg-gradient-to-br ${offer.gradient} overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-200 ease-in-out border border-gray-200 rounded-lg p-6`}>
            
            {/* Badge */}
            <div className="absolute top-2 right-2 text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded shadow-sm">
              {offer.badge}
            </div>

            <div className="mb-4">
              <offer.icon className="w-6 h-6 text-gray-600 mb-2" />
              <CardTitle className="text-xl font-bold text-gray-900 leading-snug">{offer.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">{offer.description}</p>
            </div>

            <div className="mt-4">
              <p className="text-xs text-muted-foreground text-center mb-3">{offer.activation}</p>
              <button
                onClick={() => window.open(offer.link, "_blank")}
                className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
              >
                {offer.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
