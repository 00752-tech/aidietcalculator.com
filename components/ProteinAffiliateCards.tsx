'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ProteinAffiliateCards() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {[
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
            '🌱 Supports post-workout recovery',
            '🧘 Vegan-friendly & gut-conscious',
          ],
          url: 'https://greenifyshop.com/products/plant-based-protein',
          users: '2,876',
        },
        {
          title: 'Collagen + Greens Combo',
          tagline: '🧪 All-in-One',
          color: 'indigo',
          benefits: [
            '💚 Combines beauty & energy support',
            '🌸 Ideal for busy wellness seekers',
          ],
          url: 'https://greenifyshop.com/products/collagen-greens',
          users: '3,421',
        },
      ].map((product) => (
        <Card
          key={product.title}
          className={`w-[340px] h-[520px] bg-gradient-to-br from-gray-50 to-${product.color}-50 border border-${product.color}-100 shadow-md p-6 relative flex flex-col justify-between hover:shadow-lg transition`}
        >
          <div className={`absolute top-2 right-2 text-sm font-semibold bg-${product.color}-100 text-${product.color}-700 px-2 py-1 rounded`}>
            {product.tagline}
          </div>
          <CardHeader className="flex items-center gap-3 mb-3">
            <Sparkles className={`h-6 w-6 text-${product.color}-600`} />
            <CardTitle className={`text-xl font-bold text-${product.color}-800`}>
              {product.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between flex-grow text-[17px] text-gray-800 space-y-4">
            <ul className="list-disc pl-5 text-[16px]">
              {product.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col items-center space-y-2 min-h-[70px]">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full whitespace-nowrap bg-${product.color}-600 hover:bg-${product.color}-700 text-white font-semibold text-[15px] py-2 px-4 rounded flex items-center justify-center gap-2 transition`}
              >
                Try {product.title}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <div className={`flex items-center gap-1 text-sm text-${product.color}-700`}>
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
