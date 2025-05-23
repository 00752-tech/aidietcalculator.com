'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Leaf, ArrowRight } from 'lucide-react'

const offers = [
  {
    title: "Custom Keto Diet",
    description: "Get a personalized keto diet plan tailored to your body, goals, and preferences.",
    link: "https://tinyurl.com/start-keto-today",
    icon: Check,
    color: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    title: "Puravive Keto Supplement",
    description: "Boost your weight loss with Puravive, fully backed by clinical research for healthy weight management.",
    link: "https://tinyurl.com/liquify-fat-as-you-sleep",
    icon: Sparkles,
    color: "bg-gradient-to-br from-purple-500 to-pink-400",
  },
  {
    title: "Mitolyn Keto Supplement",
    description: "Supports healthy weight loss with advanced, all-natural ingredients designed for the keto lifestyle.",
    link: "https://tinyurl.com/burn-calories-today",
    icon: Leaf,
    color: "bg-gradient-to-br from-yellow-500 to-orange-400",
  },
]

export function KetoAffiliateOffers() {
  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg text-gray-800">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Recommended Keto Products</h2>
      {/* SEO-optimized subheadline and affiliate disclaimer */}
      <div className="max-w-2xl mx-auto mb-8">
        <p className="text-base text-gray-700 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200 text-center">
          <strong>Accelerate your keto journey with these top-rated, science-backed products, curated to help you achieve ketosis and support healthy weight management.</strong>
          <br />
          <span className="text-blue-600 font-semibold">
            Please note: Some links below are affiliate links. We may earn a small commission if you make a purchase through them-at no extra cost to you. This helps support our site and allows us to keep providing valuable keto resources. Thank you for your support!
          </span>
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className={`${offer.color} text-white p-6`}>
              <offer.icon className="w-12 h-12 mb-4" />
              <CardTitle className="text-2xl font-bold">{offer.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">{offer.description}</p>
              <Button 
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white transition-colors duration-300" 
                asChild
              >
                <a href={offer.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
