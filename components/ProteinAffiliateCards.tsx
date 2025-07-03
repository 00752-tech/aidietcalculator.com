'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

export default function ProteinAffiliateCards() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* 5. ClickBank Protein Protocol */}
      <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 shadow-md p-6 relative transition duration-300 hover:shadow-lg flex flex-col justify-between">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded shadow-sm">🧬 AI-Recommended Stack</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <CardTitle className="text-lg font-semibold text-blue-800">Protein Protocol by ClickBank</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-full text-gray-700 text-[15px] leading-relaxed space-y-3">
          <div>
            <ul className="list-disc pl-6 text-sm mb-4">
              <li>💥 Supports lean muscle growth & recovery</li>
              <li>🔬 Crafted for macro-optimized nutrition plans</li>
            </ul>
          </div>
          <div>
            <a
              href="https://f027f-8yn3ay1u5153hhk-zi3l.hop.clickbank.net/?&traffic_source=ai_diet_calc"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300"
            >
              Try This Protein Protocol
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex justify-center items-center gap-2 text-xs mt-2 text-blue-700">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Recommended by 3,784 users this month
            </div>
            <p className="text-[11px] italic text-gray-500 text-center mt-2">
              Affiliate Disclosure: We may earn a commission through this link.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
