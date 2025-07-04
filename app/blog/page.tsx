import Head from 'next/head'
import { Metadata, Viewport } from 'next'
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "./blogData"

export const metadata: Metadata = {
  title: "AI Diet Calculator Blog | Expert Insights on Nutrition and Weight Loss",
  description: "Explore in-depth articles on AI-powered nutrition, personalized diet plans, and cutting-edge strategies for optimal health and weight management.",
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
    <div className="min-h-screen bg-gray-50">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "AI Diet Calculator Blog",
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
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">AI Diet Calculator Blog</h1>

        {/* ✅ EEAT-style Intro */}
        <p className="text-base md:text-lg leading-relaxed text-center text-muted-foreground mt-4 mb-10 max-w-2xl mx-auto">
          🔍 Vetted by our editorial team and powered by AI, every post in this blog explores practical strategies for smarter eating, metabolic flexibility, habit change, and wellness optimization. For deeper reference material and supporting data, check out our{' '}
          <Link href="/resources" className="text-blue-600 hover:underline font-medium">
            Trusted Resource Hub
          </Link>.
        </p>

        {/* 🧱 Card Grid Remains Untouched */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-primary font-semibold hover:underline">Read more</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
