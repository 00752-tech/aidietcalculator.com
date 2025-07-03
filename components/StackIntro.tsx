'use client'

import React from 'react'

type StackIntroProps = {
  title: string
  subtitle: string
  disclaimer?: string
}

export default function StackIntro({ title, subtitle, disclaimer }: StackIntroProps) {
  return (
    <div className="w-full max-w-3xl mx-auto text-center mb-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-[17px] text-gray-700 leading-relaxed">{subtitle}</p>
      {disclaimer && (
        <p className="text-xs italic text-gray-500 mt-4">
          {disclaimer}
        </p>
      )}
    </div>
  )
}
