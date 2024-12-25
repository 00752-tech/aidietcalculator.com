import Link from "next/link"
import { Utensils } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Utensils className="h-6 w-6 text-[#3B82F6]" />
          <span className="text-xl font-bold">AI Diet Calculator</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-[#3B82F6]"
          >
            How It Works
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-medium text-gray-600 hover:text-[#3B82F6]"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-600 hover:text-[#3B82F6]"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
