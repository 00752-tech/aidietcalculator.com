'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

type CTAButtonProps = {
  label: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
}

export function CTAButton({
  label,
  onClick,
  href,
  variant = 'primary',
  fullWidth = true,
}: CTAButtonProps) {
  const baseStyles = 'group py-3 px-5 rounded-md flex items-center justify-center gap-2 font-semibold transition duration-300'
  const width = fullWidth ? 'w-full' : ''
  const variantStyles = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-blue-100 hover:bg-blue-200 text-blue-800'

  const buttonClass = `${baseStyles} ${width} ${variantStyles}`

  const content = (
    <>
      {label}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
    </>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={buttonClass}>
      {content}
    </button>
  )
}
