import Head from 'next/head'
import { Metadata, Viewport } from 'next'
import { SiteHeader } from "@/components/site-header"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blog | AI Diet Calculator",
  description: "Explore science-backed articles about nutrition, metabolism, sleep, and smart diet strategies—all curated by AI experts.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-green-100 dark:from-teal-950 dark:to-green-950">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Blog | AI Diet Calculator",
              "url": "https://aidietcalculator.com/blog",
              "description": "Explore science-backed articles curated by AI experts across nutrition, sleep, metabolism and goal tracking.",
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
              "mainEntityOfPage": "https://aidietcalculator.com/blog"
            })
          }}
        />
      </Head>

      <SiteHeader />

      <main className="container mx-auto max-w-4xl px-6 py-12 pt-28">
        <h1 className="mb-8 text-4xl font-extrabold text-teal-900 dark:text-teal-300 drop-shadow-md">
          AI Diet Blog
        </h1>
        <div className="space-y-8 bg-white dark:bg-teal-900/70 rounded-2xl p-8 shadow-lg ring-1 ring-teal-200 dark:ring-teal-700">
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            🔍 Real nutrition isn’t just macros and numbers—it’s context, timing, sleep, training, and habit psychology. That’s why our blog dives deeper than most calculators ever will.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            You’ll find breakdowns on metabolic flexibility, circadian nutrition, nutrient timing, AI-driven goal tracking, and more. Each article is designed to answer one core question: <strong>what actually moves the needle?</strong>
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            🧠 Want deeper clinical and research-backed references? Check out our{' '}
            <Link href="/resources" className="text-blue-600 hover:underline font-medium">
              Trusted Resource Hub
            </Link>{' '}
            for source material, citations, and curated learning paths.
          </p>
        </div>
      </main>
    </div>
  )
}
