'use client'

import React from 'react'
import { Button, ButtonProps } from "@/components/ui/button"

export function ClientButton({ children, ...props }: ButtonProps) {
  const handleClick = () => {
    document.getElementById('ai-diet-planner')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
