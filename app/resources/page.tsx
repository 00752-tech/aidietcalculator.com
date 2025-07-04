import Head from 'next/head'
import { Metadata, Viewport } from 'next'
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Trusted Resource Hub | AI Diet Calculator",
  description: "Browse expert-backed articles supporting AI-driven diet tools including sleep, macros, weight loss, hydration, and goal tracking.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Trusted Resource Hub",
              "url": "https://aidietcalculator.com/resources",
              "description": "Browse expert-backed articles supporting AI-driven diet tools including sleep, macros, weight loss, hydration, and goal tracking.",
              "publisher": {
                "@type": "Organization",
                "name": "AI Diet Calculator",
                "url": "https://aidietcalculator.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://aidietcalculator.com/images/logo.png"
                }
              },
              "author": {
                "@type": "Organization",
                "name": "AI Diet Calculator Editorial Team"
              },
              "mainEntityOfPage": "https://aidietcalculator.com/resources"
            })
          }}
        />
      </Head>

      <SiteHeader />

      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">
          Trusted Resource Hub
        </h1>

        {/* ✅ EEAT Intro Block */}
        <p className="text-base md:text-lg leading-relaxed text-center text-muted-foreground mt-6 mb-8 max-w-2xl mx-auto">
          📚 This hub is built for humans—not just crawlers. Every guide here is backed by clinical studies, peer-reviewed sources, and nutrition datasets. Want to understand the “why” behind the calculators? You’re in the right place.
        </p>

        {/* 🔗 Insert your resource modules or content grid below */}
        {/* Example: <ResourceCardGrid /> or <ArticleList /> */}
      </main>
    </div>
  )
}
