'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react'

export default function BodyFatAffiliateCards() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* 1. Sumatratonic Blueprint */}
      <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 shadow-lg p-6 relative hover:shadow-xl transition duration-300">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-teal-200 text-teal-800 px-2 py-1 rounded shadow-sm">💊 Inflammation Reset Formula</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Zap className="h-7 w-7 text-teal-600" />
          <CardTitle className="text-xl font-bold text-teal-800">Sumatratonic Blueprint</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-800 space-y-3 text-[16px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🧬 Anti-inflammatory protocol for belly fat loss</li>
            <li>🔬 Targets leptin resistance and metabolic slowdown</li>
            <li>🧘‍♀️ Holistic support for energy and hormonal balance</li>
          </ul>
          <button
            onClick={() => window.open("https://33d13ud5nycobs8i-ljeqhw19n.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Sumatratonic Protocol
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex items-center justify-center mt-2 gap-2 text-xs text-teal-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            Verified by 2,416 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission if you purchase through this link.
          </p>
        </CardContent>
      </Card>

      {/* 2. HepatoBurn Protocol */}
      <Card className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 shadow-lg p-6 relative hover:shadow-xl transition duration-300">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-red-200 text-red-800 px-2 py-1 rounded shadow-sm">🧬 Liver Fat Flush</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-7 w-7 text-red-600" />
          <CardTitle className="text-xl font-bold text-red-800">HepatoBurn Protocol</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-800 space-y-3 text-[16px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🫀 Supports liver detox for stubborn fat reduction</li>
            <li>🌿 Plant-based metabolic boosting ingredients</li>
            <li>⚙️ Addresses hormonal bottlenecks linked to weight retention</li>
          </ul>
          <button
            onClick={() => window.open("https://02769pfzd49z6k9dmkgrr59mo9.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try HepatoBurn Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex items-center justify-center mt-2 gap-2 text-xs text-red-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            Verified by 4,837 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission if you purchase through this link.
          </p>
        </CardContent>
      </Card>

      {/* 3. Liv Pure System */}
      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg p-6 relative hover:shadow-xl transition duration-300">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-purple-200 text-purple-800 px-2 py-1 rounded shadow-sm">🔥 Metabolism Reset Stack</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-7 w-7 text-purple-600" />
          <CardTitle className="text-xl font-bold text-purple-800">Liv Pure System</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-800 space-y-3 text-[16px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🔥 Thermogenic blend for rapid fat mobilization</li>
            <li>🧠 Focuses on cellular detox and metabolic renewal</li>
            <li>💊 Combines minerals, botanicals, and adaptogens</li>
          </ul>
          <button
            onClick={() => window.open("https://4f9b7p31nz6l3rc8uq2s2a5xba.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Liv Pure System
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex items-center justify-center mt-2 gap-2 text-xs text-purple-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            Verified by 3,281 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission if you purchase through this link.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
