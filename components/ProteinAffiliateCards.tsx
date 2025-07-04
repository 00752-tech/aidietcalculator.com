'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ProteinAffiliateCards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {/* 1. Beautify Collagen */}
      <Card className="w-[340px] bg-gradient-to-br from-gray-50 to-pink-50 border border-pink-100 shadow-md p-6 relative hover:shadow-lg transition flex flex-col">
        <div className="absolute top-2 right-2 text-sm font-semibold bg-pink-100 text-pink-700 px-2 py-1 rounded shadow-sm">💅 Glow Support</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-pink-600" />
          <CardTitle className="text-xl font-bold text-pink-800">Beautify Collagen</CardTitle>
        </CardHeader>
        <CardContent className="text-[17px] text-gray-800 space-y-4 flex flex-col flex-grow">
          <ul className="list-disc pl-5 text-[16px]">
            <li>✨ Hydrates skin & improves elasticity</li>
            <li>💪 Supports joints, nails & hair</li>
          </ul>
          <div className="mt-auto flex flex-col items-center space-y-2">
            <a
              href="https://greenifyshop.com/products/beautify-collagen"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full whitespace-nowrap bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition"
            >
              Try Beautify Collagen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex items-center gap-1 text-sm text-pink-700">
              <ShieldCheck className="w-4 h-4" />
              2,903 users this month
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Daily Greens Juice */}
      <Card className="w-[340px] bg-gradient-to-br from-gray-50 to-green-50 border border-green-100 shadow-md p-6 relative hover:shadow-lg transition flex flex-col">
        <div className="absolute top-2 right-2 text-sm font-semibold bg-green-100 text-green-700 px-2 py-1 rounded shadow-sm">🌿 Clean Energy</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-green-600" />
          <CardTitle className="text-xl font-bold text-green-800">Daily Greens Juice</CardTitle>
        </CardHeader>
        <CardContent className="text-[17px] text-gray-800 space-y-4 flex flex-col flex-grow">
          <ul className="list-disc pl-5 text-[16px]">
            <li>🍃 Detox & digestion support</li>
            <li>⚡ Boosts clean energy & metabolism</li>
          </ul>
          <div className="mt-auto flex flex-col items-center space-y-2">
            <a
              href="https://greenifyshop.com/products/daily-greens-juice"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full whitespace-nowrap bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition"
            >
              Try Daily Greens
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex items-center gap-1 text-sm text-green-700">
              <ShieldCheck className="w-4 h-4" />
              3,218 users this month
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Plant-Based Protein */}
      <Card className="w-[340px] bg-gradient-to-br from-gray-50 to-purple-50 border border-purple-100 shadow-md p-6 relative hover:shadow-lg transition flex flex-col">
        <div className="absolute top-2 right-2 text-sm font-semibold bg-purple-100 text-purple-700 px-2 py-1 rounded shadow-sm">🥤 Lean Muscle Fuel</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <CardTitle className="text-xl font-bold text-purple-800">Plant-Based Protein</CardTitle>
        </CardHeader>
        <CardContent className="text-[17px] text-gray-800 space-y-4 flex flex-col flex-grow">
          <ul className="list-disc pl-5 text-[16px]">
            <li>🌱 Supports post-workout recovery</li>
            <li>🧘 Vegan-friendly & gut-conscious</li>
          </ul>
          <div className="mt-auto flex flex-col items-center space-y-2">
            <a
              href="https://greenifyshop.com/products/plant-based-protein"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full whitespace-nowrap bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition"
            >
              Try Plant Protein
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex items-center gap-1 text-sm text-purple-700">
              <ShieldCheck className="w-4 h-4" />
              2,876 users this month
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 4. Collagen + Greens Combo */}
      <Card className="w-[340px] bg-gradient-to-br from-gray-50 to-indigo-50 border border-indigo-100 shadow-md p-6 relative hover:shadow-lg transition flex flex-col">
        <div className="absolute top-2 right-2 text-sm font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded shadow-sm">🧪 All-in-One</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          <CardTitle className="text-xl font-bold text-indigo-800">Collagen + Greens Combo</CardTitle>
        </CardHeader>
        <CardContent className="text-[17px] text-gray-800 space-y-4 flex flex-col flex-grow">
          <ul className="list-disc pl-5 text-[16px]">
            <li>💚 Combines beauty & energy support</li>
            <li>🌸 Ideal for busy wellness seekers</li>
          </ul>
          <div className="mt-auto flex flex-col items-center space-y-2">
            <a
              href="https://greenifyshop.com/products/collagen-greens"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition"
            >
              Try Combo Formula
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex items-center gap-1 text-sm text-indigo-700">
              <ShieldCheck className="w-4 h-4" />
              3,421 users this month
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
