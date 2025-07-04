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

// ✍️ Resource content
const resourceArticles = [
  {
    slug: "sleep-optimization",
    title: "The Science of Sleep for Fat Loss",
    excerpt: "How REM depth, circadian syncing, and melatonin rhythms drive metabolism and recovery—beyond just rest.",
  },
  {
    slug: "macro-nutrient-strategy",
    title: "Macronutrients Made Smarter",
    excerpt: "Break down protein, carbs, and fat by function, satiety, and metabolic impact—not outdated ratios.",
  },
  {
    slug: "hydration-biology",
    title: "Hydration, Electrolytes & Performance",
    excerpt: "Learn how fluid balance affects cellular health, fat metabolism, appetite, and training output.",
  },
  {
    slug: "fasting-and-metabolic-flexibility",
    title: "Intermittent Fasting Without the Hype",
    excerpt: "Explore feeding windows, AMPK activation, autophagy, and how to cycle fasting around real goals.",
  },
  {
    slug: "ai-nutrition-engine",
    title: "How the AI Calorie Engine Works",
    excerpt: "Get under the hood: datasets, personalization layers, GPT-4 tuning, and logic behind your meal plan outputs.",
  },
]

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

        {/* 🧠 EEAT-Intro Block */}
        <p className="text-base md:text-lg leading-relaxed text-center text-muted-foreground mt-6 mb-8 max-w-2xl mx-auto">
          📚 This hub is built for humans—not just crawlers. Every guide here is backed by clinical studies, peer-reviewed sources, and nutrition datasets. Want to understand the “why” behind the calculators? You’re in the right place.
        </p>

        {/* 📘 Resource Cards */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resourceArticles.map((item) => (
            <article key={item.slug} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <Link href={`/resources/${item.slug}`}>
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-snug mb-4">{item.excerpt}</p>
                <span className="text-primary font-semibold text-sm hover:underline">
                  Read More
                </span>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
