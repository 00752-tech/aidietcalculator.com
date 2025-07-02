'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Leaf, ArrowRight } from 'lucide-react'

const offers = [
  {
    title: "🔥 Unlock Your Custom Keto Plan",
    description: "Personalized macros, meals, and daily targets. No generic templates—just precision keto built for your body.",
    link: "https://tinyurl.com/start-keto-today",
    icon: Check,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    image: "/images/keto-plan-thumbnail.jpg", // new image of vibrant food grid
    activation: "Activated by 2,347 users this month"
  },
  {
    title: "☕ JavaBurn: Burn Fat With Your Morning Coffee",
    description: "Boost metabolism while enjoying your favorite brew. JavaBurn’s unique formula transforms your daily coffee into a fat-burning protocol.",
    link: "https://bb203zctf9ey5mc9cujx7jqzf0.hop.clickbank.net/?&traffic_source=ai_diet_calc",
    icon: Sparkles,
    color: "bg-gradient-to-br from-indigo-500 to-blue-400",
    image: "/images/javaburn-thumbnail.jpg",
    activation: "Activated by 3,912 users this month"
  },
  {
    title: "🌿 Mitolyn: All-Natural Keto Companion",
    description: "Amplify fat oxidation, reduce cravings, and support hormonal health using plant-based bioactives.",
    link: "https://tinyurl.com/burn-calories-today",
    icon: Leaf,
    color: "bg-gradient-to-br from-yellow-500 to-orange-400",
    image: "/images/mitolyn-thumbnail.jpg",
    activation: "Activated by 1,884 users this month"
  },
]

export function KetoAffiliateOffers() {
  return (
    <div className="mt-20">
      <section className="text-center max-w-3xl mx-auto mb-8 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Your Keto Accelerator Stack 🔥</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          These science-backed affiliate protocols were handpicked to help you burn fat, fuel energy, and stay in deep ketosis—naturally. Trusted by 11,000+ users this month.
        </p>
      </section>

      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200 text-center">
          <strong>Crush cravings, accelerate fat-loss, and stay in ketosis longer—these affiliate-supported resources can help.</strong>
          <br /><br />
          <span className="text-sm text-blue-600 font-semibold">
            Disclaimer: We may earn a small commission when purchases are made—at no extra cost to you. This supports the site and keeps our tools free.
          </span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <Card key={index} className="overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <CardHeader className={`${offer.color} text-white p-6`}>
              <offer.icon className="w-10 h-10 mb-4" />
              <CardTitle className="text-xl font-bold leading-tight text-center">{offer.title}</CardTitle>
              {offer.image && (
                <div className="mt-4">
                  <Image
                    src={offer.image}
                    alt={`${offer.title} product image`}
                    width={100}
                    height={100}
                    className="rounded-md mx-auto shadow-md"
                  />
                </div>
              )}
            </CardHeader>

            <CardContent className="p-6 flex flex-col justify-between space-y-4 h-full">
              <p className="text-gray-600 text-sm">{offer.description}</p>
              <p className="text-xs text-muted-foreground text-center">{offer.activation}</p>

              <button
                onClick={() => window.open(offer.link, "_blank")}
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
              >
                View Protocol <ArrowRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
