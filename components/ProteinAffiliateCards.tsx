'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ProteinAffiliateCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 mt-10">
      {/* Beautify Collagen */}
      <Card className="w-full bg-white border border-pink-100 shadow-md rounded-md p-6 relative flex flex-col justify-between">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-pink-100 text-pink-700 px-2 py-1 rounded">💅 Glow Support</div>
        <CardHeader className="flex items-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-pink-600" />
          <CardTitle className="text-lg font-semibold text-pink-800">Beautify Collagen</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>✨ Improves skin hydration</li>
            <li>💪 Supports joints, hair & nails</li>
          </ul>
          <div className="mt-6 flex flex-col items-center gap-2">
            <a
              href="https://greenifyshop.com/products/beautify-collagen"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-5 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 whitespace-nowrap"
            >
              Try Beautify Collagen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex items-center gap-1 text-xs text-pink-700">
              <ShieldCheck className="w-4 h-4 text-pink-600" />
              2,903 users this month
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Greens Juice */}
      <Card className="w-full bg-white border border-green-100 shadow-md rounded-md p-6 relative flex flex-col justify-between">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">🌿 Clean Energy</div>
        <CardHeader className="flex items-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-green-600" />
          <CardTitle className="text-lg font-semibold text-green-800">Daily Greens Juice</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>🍃 Detox & digestion support</li>
            <li>⚡ Boosts clean energy & metabolism</li>
          </ul>
          <div className="mt-6 flex flex-col items-center gap-2">
            <a
              href="https://greenifyshop.com/products/daily-greens-juice"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 whitespace-nowrap"
            >
              Try Daily Greens Juice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex items-center gap-1 text-xs text-green-700">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              3,218 users this month
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plant-Based Protein */}
      <Card className="w-full bg-white border border-purple-100 shadow-md rounded-md p-6 relative flex flex-col justify-between">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-1 rounded">🥤 Lean Muscle Fuel</div>
        <CardHeader className="flex items-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <CardTitle className="text-lg font-semibold text-purple-800">Plant-Based Protein</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>🌱 Post-workout recovery</li>
            <li>🧘 Vegan & gut-friendly</li>
          </ul>
          <div className="mt-6 flex flex-col items-center gap-2">
            <a
              href="https://greenifyshop.com/products/plant-based-protein"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-5 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 whitespace-nowrap"
            >
              Try Plant-Based Protein
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex items-center gap-1 text-xs text-purple-700">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              2,876 users this month
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
