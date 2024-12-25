'use client'

import { useEffect } from 'react'

interface BlogContentProcessorProps {
  content: string;
  affiliateOffer?: {
    title: string;
    description: string;
    link: string;
  };
}

export function BlogContentProcessor({ content, affiliateOffer }: BlogContentProcessorProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const contentElement = document.querySelector('.blog-content')
      if (contentElement) {
        // First, parse the content to find all h2 tags and their positions
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = content
        const h2Elements = tempDiv.querySelectorAll('h2')
        
        if (h2Elements.length === 0) {
          // If no h2 elements, split at roughly half the content length
          const midPoint = Math.floor(content.length / 2)
          const firstHalf = content.substring(0, midPoint)
          const secondHalf = content.substring(midPoint)
          
          // Clear existing content
          contentElement.innerHTML = ''
          
          // Add first half
          const firstHalfElement = document.createElement('div')
          firstHalfElement.innerHTML = firstHalf
          contentElement.appendChild(firstHalfElement)
          
          // Add affiliate offer if exists
          if (affiliateOffer) {
            const offerElement = document.createElement('div')
            offerElement.innerHTML = `
              <div class="my-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100 shadow-lg">
                <div class="flex flex-col md:flex-row items-center gap-6">
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-purple-900 mb-2">🌟 ${affiliateOffer.title}</h3>
                    <p class="text-lg text-purple-800 mb-4">${affiliateOffer.description}</p>
                    <a 
                      href="${affiliateOffer.link}"
                      class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            `
            contentElement.appendChild(offerElement)
          }
          
          // Add second half
          const secondHalfElement = document.createElement('div')
          secondHalfElement.innerHTML = secondHalf
          contentElement.appendChild(secondHalfElement)
        } else {
          // If h2 elements exist, split at the middle h2
          const midIndex = Math.floor(h2Elements.length / 2)
          const splitPoint = h2Elements[midIndex]
          
          // Get the content before and after the split point
          let firstHalf = ''
          let secondHalf = ''
          let currentNode = tempDiv.firstChild
          let foundSplit = false
          
          while (currentNode) {
            const clonedNode = currentNode.cloneNode(true)
            if (currentNode === splitPoint) {
              foundSplit = true
            }
            if (!foundSplit) {
              firstHalf += clonedNode.outerHTML || clonedNode.textContent
            } else {
              secondHalf += clonedNode.outerHTML || clonedNode.textContent
            }
            currentNode = currentNode.nextSibling
          }
          
          // Clear existing content
          contentElement.innerHTML = ''
          
          // Add first half
          const firstHalfElement = document.createElement('div')
          firstHalfElement.innerHTML = firstHalf
          contentElement.appendChild(firstHalfElement)
          
          // Add affiliate offer if exists
          if (affiliateOffer) {
            const offerElement = document.createElement('div')
            offerElement.innerHTML = `
              <div class="my-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100 shadow-lg">
                <div class="flex flex-col md:flex-row items-center gap-6">
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold text-purple-900 mb-2">🌟 ${affiliateOffer.title}</h3>
                    <p class="text-lg text-purple-800 mb-4">${affiliateOffer.description}</p>
                    <a 
                      href="${affiliateOffer.link}"
                      class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            `
            contentElement.appendChild(offerElement)
          }
          
          // Add second half
          const secondHalfElement = document.createElement('div')
          secondHalfElement.innerHTML = secondHalf
          contentElement.appendChild(secondHalfElement)
        }
        
        // Add IDs to all headings for TOC
        const headings = contentElement.querySelectorAll('h2, h3')
        headings.forEach((heading, index) => {
          heading.id = `heading-${index}`
        })
      }
    }
  }, [content, affiliateOffer])

  return <div className="blog-content prose prose-gray max-w-none dark:prose-invert" />
}
