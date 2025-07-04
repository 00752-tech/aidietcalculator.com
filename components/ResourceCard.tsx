'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'

interface ResourceCardProps {
  title: string
  url: string
  source: string
  category: string
  icon?: string
}

export default function ResourceCard({ title, url, source, category }: ResourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-5"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-1 rounded">
          {category}
        </span>
        <ExternalLink className="h-4 w-4 text-blue-600" />
      </div>
      <h3 className="text-[17px] font-medium text-blue-900 leading-snug mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{source}</p>
    </a>
  )
}
