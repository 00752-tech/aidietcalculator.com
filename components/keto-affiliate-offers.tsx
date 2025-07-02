'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Leaf, ArrowRight } from 'lucide-react'

const offers = [
  {
    title: "🔥 Unlock Your Custom Keto Plan",
    description: "Tailored macros and meals built for your metabolism. No generic templates—just results.",
    link: "https://tinyurl.com/start-keto-today",
    icon: Check,
    activation: "✅ Activated by 2,347 users this month",
    badge: "🔥 Trending Protocol",
    cta: "Start My Plan"
  },
  {
    title: "☕ JavaBurn: Burn Fat With Your Morning Coffee",
    description: "Boost metabolism with clinically backed coffee enhancers—pour and burn.",
    link: "https://bb203zctf9ey5mc9cujx7jqzf0.hop.clickbank.net/?&traffic_source=ai_diet_calc",
    icon: Sparkles,
    activation: "✅ Activated by 3,912 users this month",
    badge: "☕ Coffee Protocol",
    cta: "View Blueprint"
  },
  {
    title: "🌿 Mitolyn: All-Natural Keto Companion",
    description: "Supports fat oxidation, cravings, and hormonal balance with plant-based bioactives.",
    link: "https://tinyurl.com/burn-calories-today",
    icon: Leaf,
    activation: "✅ Activated by 1,884 users this month",
    badge: "🌿 Clean Keto Stack",
    cta: "View Protocol"
  },
]

export function KetoAffiliateOffers() {
  return (
    <div className="mt-20 px-4">
      {/* Section Intro */}
      <section className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Your Keto Accelerator Stack 🔥</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Three hyper-targeted protocols. Curated to boost metabolism, reduce cravings, and lock in ketosis—naturally.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200 text-center">
          <strong>These tools may contain affiliate links—when you purchase, we may earn a small commission at no extra cost to you. This funds the free AI diet planning ecosystem you’re using 💙</strong>
        </p>
      </div>

      {/* Offer Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <Card key={index} className="relative overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-200 ease-in-out border border-gray-200 rounded-lg p-6 bg-white">
            
            {/* Badge */}
            <div className="absolute top-2 right-2 text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              {offer.badge}
            </div>
            
            <div className="mb-4">
              <offer.icon className="w-6 h-6 text-gray-600 mb-2" />
              <CardTitle className="text-xl font-bold text-gray-900 leading-snug">{offer.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">{offer.description}</p>
            </div>
            
            <div className="mt-4">
              <p className="text-xs text-muted-foreground text-center mb-3">
                {offer.activation}
              </p>
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
