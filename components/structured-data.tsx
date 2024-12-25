import { siteConfig } from "@/config/site"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Diet Calculator",
    url: "https://aidietcalculator.com",
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aidietcalculator.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "AI Diet Calculator",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1024"
      }
    },
    sameAs: [
      "https://www.facebook.com/AIDietCalculator",
      "https://twitter.com/AIDietCalculator",
      "https://www.instagram.com/AIDietCalculator"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
