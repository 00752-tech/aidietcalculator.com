'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

const products = [
  {
    title: 'Beautify Collagen',
    tagline: '💅 Glow Support',
    color: 'pink',
    benefits: [
      '✨ Hydrates skin & improves elasticity',
      '💪 Supports joints, nails & hair',
    ],
    url: 'https://greenifyshop.com/products/beautify-collagen',
    users: '2,903',
  },
  {
    title: 'Daily Greens Juice',
    tagline: '🌿 Clean Energy',
    color: 'green',
    benefits: [
      '🍃 Detox & digestion support',
      '⚡ Boosts clean energy & metabolism',
    ],
    url: 'https://greenifyshop.com/products/daily-greens-juice',
    users: '3,218',
  },
  {
    title: 'Plant-Based Protein',
    tagline: '🥤 Lean Muscle Fuel',
    color: 'purple',
    benefits: [
      '🌱 Post-workout recovery',
      '🧘 Vegan & gut-friendly',
    ],
    url: 'https://greenifyshop.com/products/plant-based-protein',
    users: '2,876',
  },
  {
    title: 'Collagen + Greens Combo',
    tagline: '🧪 All-in-One',
    color: 'indigo',
    benefits: [
      '💚 Beauty + energy blend',
      '🌸 Perfect for morning wellness',
    ],
    url: 'https://greenifyshop.com/products/collagen-greens',
    users: '3,421',
  },
]

export default function ProteinAffiliateCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mt-10 px-4">
      {products.map((product) => (
        <Card
          key={product.title}
          className={`flex flex-col justify-between bg-gradient-to-br from-white to-${product.color}-50 rounded-xl shadow-md p-5 relative`}
        >
          {/* Tagline Badge */}
          <div className={`absolute top-2 right-2 text-[13px] font-semibold bg-${product.color}-100 text-${product.color}-700 px-2 py-1 rounded`}>
            {product.tagline}
          </div>

          {/* Header */}
          <CardHeader className="flex items-center gap-2 mb-3">
            <Sparkles className={`h-5 w-5 text-${product.color}-600`} />
            <CardTitle className={`text-lg font-semibold text-${product.color}-800`}>
              {product.title}
            </CardTitle>
          </CardHeader>

          {/* Content */}
          <CardContent className="flex flex-col justify-between flex-grow text-[15px] text-gray-800">
            <ul className="list-disc pl-5 space-y-1 mb-4">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            {/* CTA Zone */}
            <div className="mt-auto flex flex-col items-center gap-1">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group whitespace-nowrap w-full bg-${product.color}-600 hover:bg-${product.color}-700 text-white font-semibold text-[15px] py-2 px-4 rounded-md flex items-center justify-center gap-2 transition`}
              >
                Try {product.title}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <div className={`flex items-center gap-1 text-[13px] text-${product.color}-700`}>
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
