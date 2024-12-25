import { ReactNode } from 'react'

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="blog-post-layout">
      {children}
    </div>
  )
}
