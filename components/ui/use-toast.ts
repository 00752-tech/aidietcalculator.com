// This is a simplified version. You may need to implement a full toast system
// or use a library like react-hot-toast for a more robust solution.

import { useState } from 'react'

interface Toast {
  title: string
  description: string
  variant?: 'default' | 'destructive'
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = (newToast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, newToast])
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1))
    }, 3000)
  }

  return { toast, toasts }
}
