'use client'

import { Twitter, Facebook, Linkedin, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  url: string
  title: string
}

export function SocialShare({ url, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const handleShare = (platform: string) => {
    let shareUrl = ''
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
        break
    }
    window.open(shareUrl, '_blank')
  }

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share</span>
      <div className="flex space-x-2">
        <Button variant="outline" size="icon" onClick={() => handleShare('twitter')} className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90">
          <Twitter className="w-4 h-4" />
          <span className="sr-only">Share on Twitter</span>
        </Button>
        <Button variant="outline" size="icon" onClick={() => handleShare('facebook')} className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90">
          <Facebook className="w-4 h-4" />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button variant="outline" size="icon" onClick={() => handleShare('linkedin')} className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90">
          <Linkedin className="w-4 h-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>
      </div>
      <Share2 className="w-4 h-4 text-gray-500 dark:text-gray-400 transform rotate-90" />
    </div>
  )
}
