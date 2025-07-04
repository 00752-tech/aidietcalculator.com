'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ProteinAffiliateCards() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {/* 1. Beautify Collagen */}
      <Card className="w-[280px] bg-gradient-to-br from-gray-50 to-pink-50 border border-pink-100 shadow-sm p-4 transition duration-300 hover:shadow-md flex flex-col justify-between">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-pink-100 text-pink-700 px-2 py-1 rounded shadow-sm">💅 Glow Support</div>
        <CardHeader className="flex items-center gap-3 mb-2">
          <Sparkles className="h-5 w-5 text-pink-600" />
          <CardTitle className="text-[16px] font-semibold text-pink-800">Beautify Collagen</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-3">
          <ul className="list-disc pl-5">
            <li>✨ Hydrates skin & improves elasticity</li>
            <li>💪 Supports joints, nails & hair</li>
          </ul>
          <a
            href="https://greenifyshop.com/products/beautify-collagen"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Beautify Collagen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <div className="flex justify-center items-center gap-1 text-xs text-pink-700">
            <ShieldCheck className="w-4 h-4" />
            2,903 users this month
          </div>
        </CardContent>
      </Card>

      {/* 2. Daily Greens Juice */}
      <Card className="w-[280px] bg-gradient-to-br from-gray-50 to-green-50 border border-green-100 shadow-sm p-4 transition duration-300 hover:shadow-md flex flex-col justify-between">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded shadow-sm">🌿 Clean Energy</div>
        <CardHeader className="flex items-center gap-3 mb-2">
          <Sparkles className="h-5 w-5 text-green-600" />
          <CardTitle className="text-[16px] font-semibold text-green-800">Daily Greens Juice</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-3">
          <ul className="list-disc pl-5">
            <li>🍃 Detox & digestion support</li>
            <li>⚡ Boosts clean energy & metabolism</li>
          </ul>
          <a
            href="https://greenifyshop.com/products/daily-greens-juice"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Daily Greens
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <div className="flex justify-center items-center gap-1 text-xs text-green-700">
            <ShieldCheck className="w-4 h-4" />
            3,218 users this month
          </div>
        </CardContent>
      </Card>

      {/* 3. Plant-Based Protein */}
      <Card className="w-[280px] bg-gradient-to-br from-gray-50 to-purple-50 border border-purple-100 shadow-sm p-4 transition duration-300 hover:shadow-md flex flex-col justify-between">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-1 rounded shadow-sm">🥤 Lean Muscle Fuel</div>
        <CardHeader className="flex items-center gap-3 mb-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
          <CardTitle className="text-[16px] font-semibold text-purple-800">Plant-Based Protein</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-3">
          <ul className="list-disc pl-5">
            <li>🌱 Supports post-workout recovery</li>
            <li>🧘 Vegan-friendly & gut-conscious</li>
          </ul>
          <a
            href="https://greenifyshop.com/products/plant-based-protein"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Plant Protein
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <div className="flex justify-center items-center gap-1 text-xs text-purple-700">
            <ShieldCheck className="w-4 h-4" />
            2,876 users this month
          </div>
        </CardContent>
      </Card>

      {/* 4. Collagen + Greens Combo */}
      <Card className="w-[280px] bg-gradient-to-br from-gray-50 to-indigo-50 border border-indigo-100 shadow-sm p-4 transition duration-300 hover:shadow-md flex flex-col justify-between">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded shadow-sm">🧪 All-in-One</div>
        <CardHeader className="flex items-center gap-3 mb-2">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <CardTitle className="text-[16px] font-semibold text-indigo-800">Collagen + Greens Combo</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 space-y-3">
          <ul className="list-disc pl-5">
            <li>💚 Combines beauty & energy support</li>
            <li>🌸 Ideal for busy wellness seekers</li>
          </ul>
          <a
            href="https://greenifyshop.com/products/collagen-greens"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Combo Formula
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <div className="flex justify-center items-center gap-1 text-xs text-indigo-700">
            <ShieldCheck className="w-4 h-4" />
            3,421 users this month
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
