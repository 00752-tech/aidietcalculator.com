import Head from 'next/head'
import { Metadata, Viewport } from 'next'
import { SiteHeader } from "@/components/site-header"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About Us | AI Diet Calculator",
  description: "Learn about the team behind AI Diet Calculator and our mission to revolutionize personalized nutrition.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Us | AI Diet Calculator",
              "description": "Learn about the team behind AI Diet Calculator and our mission to revolutionize personalized nutrition.",
              "mainEntityOfPage": "https://aidietcalculator.com/about",
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
              }
            })
          }}
        />
      </Head>

      <SiteHeader />

      <main className="container mx-auto max-w-4xl px-6 py-12 pt-28">
        <h1 className="mb-8 text-4xl font-extrabold text-indigo-900 dark:text-indigo-300 drop-shadow-md">
          About Us
        </h1>
        <div className="space-y-8 bg-white dark:bg-indigo-900/70 rounded-2xl p-8 shadow-lg ring-1 ring-indigo-200 dark:ring-indigo-700">
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            📊 Personalized nutrition shouldn’t feel like guesswork. At <strong>AI Diet Calculator</strong>, we’ve built a smarter system—one that turns your unique data into a tailored, goal-focused meal strategy in seconds. No fluff. No templates. Just pure personalization powered by AI.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            Our team blends nutrition science with cutting-edge tech to give you meal plans that align with your goals, lifestyle, and preferences. Whether you're keto-curious, bulking clean, or burning fat, your plan adjusts dynamically as you evolve.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            🎯 Why did we build it? Because we’re tired of cookie-cutter diet calculators, restrictive templates, and silent apps that don’t explain the “why.” Our mission is clear: <strong>make smarter, science-backed nutrition accessible to everyone</strong>—no gatekeeping, no fees.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            🚀 Trained on 27,000+ nutrition datasets, refined with real-world feedback, and enhanced by GPT-4, our calculators are built to deliver clarity, results, and confidence. You’ll find tools for calorie tracking, macros, sleep, fasting, hydration, workouts—and they all speak your goals.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            🧠 Want to see the science behind the tools? Explore our{' '}
            <Link href="/resources" className="text-blue-600 hover:underline font-medium">
              Trusted Resource Hub
            </Link>{' '}
            for breakdowns from NCBI, Mayo Clinic, PubMed, and more.
          </p>
        </div>
      </main>
    </div>
  )
}
