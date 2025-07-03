'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react'

export default function SleepAffiliateCards() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* Each Card goes inside here */}
      {/* YūSleep */}
      <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 shadow-lg p-6 relative hover:shadow-xl transition duration-300">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-indigo-200 text-indigo-800 px-2 py-1 rounded shadow-sm">🌿 Sleep Supplement Protocol</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-7 w-7 text-indigo-600" />
          <CardTitle className="text-xl font-bold text-indigo-800">YūSleep Natural Deep Sleep Formula</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-800 space-y-3 text-[16px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🌙 Ashwagandha, Magnesium & Melatonin blend</li>
            <li>🧘‍♂️ Encourages pre-bed calm</li>
            <li>🌿 Vegan and non-habit forming</li>
          </ul>
          <button
            onClick={() => window.open("https://3dd12oc6k29k8m0pxgrataak3z.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try YūSleep Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex items-center justify-center mt-2 gap-2 text-xs text-indigo-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            Verified by 3,819 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission if you purchase through this link.
          </p>
        </CardContent>
      </Card>

      {/* ChiliPad */}
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-lg p-6 relative hover:shadow-xl transition duration-300">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-blue-200 text-blue-800 px-2 py-1 rounded shadow-sm">❄️ Cooling Sleep Tech</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Zap className="h-7 w-7 text-blue-600" />
          <CardTitle className="text-xl font-bold text-blue-800">ChiliPad by Sleep.me</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-800 space-y-3 text-[16px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>🌡️ Control your bed temperature (55–115°F)</li>
            <li>🛏️ Improve deep sleep and reduce wakeups</li>
            <li>📱 Smart app-controlled environment</li>
          </ul>
          <button
            onClick={() => window.open("https://checkout.sleep.me/BRIAN82612", "_blank")}
            className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Explore ChiliPad Tech
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex items-center justify-center mt-2 gap-2 text-xs text-blue-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Verified by 5,219 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission if you purchase through this link.
          </p>
        </CardContent>
      </Card>

      {/* Sleep Revive */}
      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg p-6 relative hover:shadow-xl transition duration-300">
        <div className="absolute top-2 right-2 text-xs font-semibold bg-purple-200 text-purple-800 px-2 py-1 rounded shadow-sm">🧠 Sleep Restoration Protocol</div>
        <CardHeader className="flex items-center gap-3 mb-3">
          <Sparkles className="h-7 w-7 text-purple-600" />
          <CardTitle className="text-xl font-bold text-purple-800">Sleep Revive System</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-800 space-y-3 text-[16px] leading-relaxed">
          <ul className="list-disc pl-6 text-sm">
            <li>📝 Step-by-step sleep reset protocol</li>
            <li>📘 Ebook, audio guides, and habit tracker</li>
            <li>🔬 Neuroscience-driven rhythm alignment</li>
          </ul>
          <button
            onClick={() => window.open("https://3d6bfz3-saez1wdfn6t90cz8wi.hop.clickbank.net/?&traffic_source=ai_diet_calc", "_blank")}
            className="group w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
          >
            Try Sleep Revive
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <div className="flex items-center justify-center mt-2 gap-2 text-xs text-purple-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            Verified by 2,781 users this month
          </div>
          <p className="text-[11px] italic text-gray-500 text-center mt-2">
            Affiliate Disclosure: We may earn a commission if you purchase through this link.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
