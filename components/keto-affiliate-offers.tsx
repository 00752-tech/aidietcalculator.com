'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Leaf, ArrowRight } from 'lucide-react'

const offers = [
  {
    title: "🔥 Unlock Your Custom Keto Plan",
    description: "Personalized macros, meals, and daily targets. No generic templates—just precision keto built for your body.",
    link: "https://tinyurl.com/start-keto-today",
    icon: Check,
    color: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    title: "💊 Puravive: Fat Burn While You Sleep",
    description: "Clinically supported ingredients designed to boost metabolism and regulate blood sugar overnight.",
    link: "https://tinyurl.com/liquify-fat-as-you-sleep",
    icon: Sparkles,
    color: "bg-gradient-to-br from-purple-500 to-pink-400",
  },
  {
    title: "🌿 Mitolyn: All-Natural Keto Companion",
    description: "Amplify fat oxidation, reduce cravings, and support hormonal health using plant-based bioactives.",
    link: "https://tinyurl.com/burn-calories-today",
    icon: Leaf,
    color: "bg-gradient-to-br from-yellow-500 to-orange-400",
  },
]

export function KetoAffiliateOffers() {
  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg text-gray-800">
      <h2 className="mb-6 text-3xl font-bold text-center">🔥 Recommended Keto Tools</h2>
      <div className="max-w-2xl mx-auto mb-8">
        <p className="text-base text-gray-700 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200 text-center">
          <strong>Crush cravings, accelerate fat-loss, and stay in ketosis longer—these affiliate-supported resources can help.</strong>
          <br />
          <span className="text-sm text-blue-600 font-semibold">
            Disclaimer: We may earn a small commission when purchases are made—at no extra cost to you. Thank you for supporting the AI Diet Calculator ecosystem.
          </span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className={`${offer.color} text-white p-6`}>
              <offer.icon className="w-12 h-12 mb-4" />
              <CardTitle className="text-2xl font-bold leading-tight">{offer.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">{offer.description}</p>
              <Button 
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white transition-colors duration-300 pointer-events-none" 
                asChild
              >
                <span className="flex items-center justify-center gap-2" onClick={() => window.open(offer.link, '_blank')}>
                  View Protocol <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
