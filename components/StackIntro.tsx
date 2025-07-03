'use client'

import React from 'react'

type StackIntroProps = {
  title: string
  subtitle: string
  disclaimer?: string
}

export default function StackIntro({ title, subtitle, disclaimer }: StackIntroProps) {
  return (
    <div className="w-full max-w-3xl mx-auto text-center mt-20 mb-6 px-4">
  <StackIntro
    title="Your Calorie Optimization Stack 🔥"
    subtitle="Three high-performance picks. Curated to balance blood sugar, accelerate fat burn, and restore healthy metabolism—naturally."
    disclaimer="Some links may be affiliate links. We may earn a small commission if you make a purchase—at no extra cost to you. This helps keep our tools free 💙"
  />
</div>

  )
}
