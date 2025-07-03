'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react'

export default function BodyFatAffiliateCards() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* Sumatratonic Blueprint */}
      <Card className="bg-gradient-to-br from-gray-50 to-teal-50 border border-teal-100 shadow-md p-6 relative transition duration-300 hover:shadow-lg">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-teal-100 text-teal-700 px-2 py-1 rounded shadow-sm">💊 Inflammation Reset Formula</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Zap className="h-6 w-6 text-teal-600" />
          <CardTitle className="text-lg font-semibold text-teal-800">Sumatratonic Blueprint</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-3 text-[15px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🧬 Targets leptin resistance & stubborn belly fat</li>
            <li>🧘‍♀️ Supports inflammation reduction & hormone balance</li>
          </ul>
          <button
            onClick={() => window.open("https://33d13ud5nycobs8i-ljeqhw19n.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Sumatratonic Blueprint
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex justify-center items-center gap-2 text-xs mt-2 text-teal-700">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            Verified by 2,416 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission through this link.
          </p>
        </CardContent>
      </Card>

      {/* HepatoBurn Protocol */}
      <Card className="bg-gradient-to-br from-gray-50 to-rose-50 border border-rose-100 shadow-md p-6 relative transition duration-300 hover:shadow-lg">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-rose-100 text-rose-700 px-2 py-1 rounded shadow-sm">🧬 Liver Fat Flush</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-rose-600" />
          <CardTitle className="text-lg font-semibold text-rose-800">HepatoBurn Protocol</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-3 text-[15px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🫀 Supports liver detoxification & fat metabolism</li>
            <li>🌿 Includes natural thermogenics & adaptogens</li>
          </ul>
          <button
            onClick={() => window.open("https://02769pfzd49z6k9dmkgrr59mo9.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try HepatoBurn Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex justify-center items-center gap-2 text-xs mt-2 text-rose-700">
            <ShieldCheck className="w-4 h-4 text-rose-600" />
            Verified by 4,837 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission through this link.
          </p>
        </CardContent>
      </Card>

      {/* Liv Pure System */}
      <Card className="bg-gradient-to-br from-gray-50 to-indigo-50 border border-indigo-100 shadow-md p-6 relative transition duration-300 hover:shadow-lg">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded shadow-sm">🔥 Metabolic Restoration</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          <CardTitle className="text-lg font-semibold text-indigo-800">Liv Pure System</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-3 text-[15px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🔥 Thermogenic blend for clean fat mobilization</li>
            <li>💊 Combines minerals, botanicals, and detox agents</li>
          </ul>
          <button
            onClick={() => window.open("https://4f9b7p31nz6l3rc8uq2s2a5xba.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Liv Pure System
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex justify-center items-center gap-2 text-xs mt-2 text-indigo-700">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            Verified by 3,281 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission through this link.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
