'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ProteinAffiliateCards() {
  const products = [
    {
      title: 'Beautify Collagen',
      tagline: '💅 Glow Support',
      color: 'pink',
      benefits: ['✨ Improves skin hydration', '💪 Supports joints, hair & nails'],
      url: 'https://greenifyshop.com/products/beautify-collagen',
      users: '2,903',
    },
    {
      title: 'Daily Greens Juice',
      tagline: '🌿 Clean Energy',
      color: 'green',
      benefits: ['🍃 Detox & digestion support', '⚡ Boosts clean energy & metabolism'],
      url: 'https://greenifyshop.com/products/daily-greens-juice',
      users: '3,218',
    },
    {
      title: 'Plant-Based Protein',
      tagline: '🥤 Lean Muscle Fuel',
      color: 'purple',
      benefits: ['🌱 Post-workout recovery', '🧘 Vegan & gut-friendly'],
      url: 'https://greenifyshop.com/products/plant-based-protein',
      users: '2,876',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 mt-10">
      {products.map((product) => (
        <Card
          key={product.title}
          className={`w-full bg-white border border-${product.color}-100 shadow-md rounded-md p-6 relative flex flex-col justify-between`}
        >
          {/* Badge */}
          <div className={`absolute top-2 right-2 text-xs font-semibold bg-${product.color}-100 text-${product.color}-700 px-2 py-1 rounded`}>
            {product.tagline}
          </div>

          <CardHeader className="flex items-center gap-3 mb-4">
            <Sparkles className={`h-6 w-6 text-${product.color}-600`} />
            <CardTitle className={`text-lg font-semibold text-${product.color}-800`}>
              {product.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-sm text-gray-700 space-y-4">
            <ul className="list-disc pl-5 space-y-1">
              {product.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col items-center gap-2">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full bg-${product.color}-600 hover:bg-${product.color}-700 text-white font-semibold py-3 px-5 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 whitespace-nowrap`}
              >
                Try {product.title}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <div className={`flex items-center gap-1 text-xs text-${product.color}-700`}>
                <ShieldCheck className={`w-4 h-4 text-${product.color}-600`} />
                {product.users} users this month
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
