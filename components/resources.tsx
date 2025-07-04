<nav className="sticky top-0 z-10 bg-white border-b border-gray-200 py-3 mb-6">
  <div className="flex gap-4 justify-center text-sm text-blue-800 font-semibold">
    <a href="#nutrition" className="hover:text-blue-600 transition">🥦 Nutrition</a>
    <a href="#recovery" className="hover:text-blue-600 transition">🏋️‍♂️ Recovery</a>
    <a href="#sleep" className="hover:text-blue-600 transition">😴 Sleep</a>
    <a href="#supplements" className="hover:text-blue-600 transition">🧬 Supplements</a>
  </div>
</nav>

<EeatResourceLinks />
'use client'

import React from 'react'
import EeatResourceLinks from '@/components/EeatResourceLinks'

export default function ResourcesPage() {
  return (
    <main className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Page Badge */}
        <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded mb-4">
          Editor-Curated • High Authority Sources
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Curated Resource Hub</h1>

        {/* Intro */}
        <p className="text-[16px] text-gray-700 mb-8">
          These trusted guides, clinical reviews, and science-backed articles are selected from top-tier health institutions, researchers, and organizations. Use them to deepen your wellness knowledge across topics like protein intake, sleep, aging, recovery, and supplement use. We do not alter or monetize these links—only editorial curation.
        </p>

        {/* Resource Section Component */}
        <EeatResourceLinks />

        {/* Callout Note */}
        <div className="mt-10 text-center text-sm text-gray-500 italic">
          Want us to add your favorite trusted source? Reach out and we’ll review it for inclusion.
        </div>
      </div>
    </main>
  )
}
