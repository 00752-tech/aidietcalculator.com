import { BlogPost } from "@/types/blog"

interface BlogStructuredDataProps {
  post: BlogPost
}

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": "https://aidietcalculator.com/about-us"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "AI Diet Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aidietcalculator.com/logo.png" // Or your actual logo URL
      }
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aidietcalculator.com/blog/${post.slug}`
    },
    // Remove the nested FAQPage here - FAQs are already on the page
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
