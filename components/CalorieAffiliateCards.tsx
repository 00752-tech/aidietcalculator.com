'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react'

export default function CalorieAffiliateCards() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* 1. Gluco6 Advanced Formula */}
      <Card className="bg-gradient-to-br from-gray-50 to-sky-50 border border-sky-100 shadow-md p-6 relative transition duration-300 hover:shadow-lg">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-sky-100 text-sky-700 px-2 py-1 rounded shadow-sm">🧪 Blood Sugar & Metabolic Support</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Zap className="h-6 w-6 text-sky-600" />
          <CardTitle className="text-lg font-semibold text-sky-800">Gluco6 Advanced Formula</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-3 text-[15px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🔬 Supports healthy blood sugar levels and carb processing</li>
            <li>💊 Blend of vitamins, minerals & botanical extracts</li>
          </ul>
          <button
            onClick={() => window.open("https://5015b-5zh39x6y35zisk9x9z51.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Gluco6 Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex justify-center items-center gap-2 text-xs mt-2 text-sky-700">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            Verified by 3,105 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission through this link.
          </p>
        </CardContent>
      </Card>

      {/* 2. Lean Body Tonic */}
      <Card className="bg-gradient-to-br from-gray-50 to-orange-50 border border-orange-100 shadow-md p-6 relative transition duration-300 hover:shadow-lg">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-orange-100 text-orange-700 px-2 py-1 rounded shadow-sm">🧘 Belly Fat Detox Blend</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-orange-600" />
          <CardTitle className="text-lg font-semibold text-orange-800">Lean Body Tonic</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-3 text-[15px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🔥 Boosts metabolism & supports fat burning</li>
            <li>🌱 Plant-based ingredients with antioxidant effects</li>
          </ul>
          <button
            onClick={() => window.open("https://c806bvg1g26r9n0johvhs04s7d.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Lean Body Tonic
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex justify-center items-center gap-2 text-xs mt-2 text-orange-700">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            Verified by 4,271 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission through this link.
          </p>
        </CardContent>
      </Card>

      {/* 3. Ikaria Belly Juice */}
      <Card className="bg-gradient-to-br from-gray-50 to-indigo-50 border border-indigo-100 shadow-md p-6 relative transition duration-300 hover:shadow-lg">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded shadow-sm">🍇 Metabolic Restoration Elixir</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          <CardTitle className="text-lg font-semibold text-indigo-800">Ikaria Belly Juice</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-3 text-[15px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🧠 Targets fat accumulation and cellular detox</li>
            <li>💪 Supports energy, fat oxidation, and vitality</li>
          </ul>
          <button
            onClick={() => window.open("https://ed6f7x8sj81z6l66dg8hjb9z63.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Ikaria Juice
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex justify-center items-center gap-2 text-xs mt-2 text-indigo-700">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            Verified by 2,988 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission through this link.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
