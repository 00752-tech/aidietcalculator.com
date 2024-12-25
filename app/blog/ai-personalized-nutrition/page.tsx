import { Metadata } from 'next'
import { SiteHeader } from "@/components/site-header"
import { blogPosts } from "../blogData"
import { notFound } from "next/navigation"
import Image from 'next/image'
import Link from 'next/link'
import { AffiliateDisclosure } from "@/components/affiliate-disclosure"
import { TableOfContents } from "@/components/table-of-contents"
import { RelatedArticles } from "@/components/related-articles"
import { SocialShare } from "@/components/social-share"
import { CommentsSection } from "@/components/comments-section"
import { BlogContentProcessor } from "@/components/blog-content-processor"

export const metadata: Metadata = {
  title: "Revolutionizing Nutrition: The Power of AI in Personalized Diet Plans | AI Diet Calculator",
  description: "Discover how artificial intelligence is transforming the way we approach nutrition, offering tailored meal plans and revolutionizing our path to better health.",
  openGraph: {
    title: "Revolutionizing Nutrition: The Power of AI in Personalized Diet Plans",
    description: "Discover how artificial intelligence is transforming the way we approach nutrition, offering tailored meal plans and revolutionizing our path to better health.",
    images: [{ url: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" }],
  },
}

export default function BlogPost() {
  const post = blogPosts.find((post) => post.slug === "ai-personalized-nutrition")

  if (!post) {
    notFound()
  }

  const relatedArticles = blogPosts
    .filter((article) => article.slug !== post.slug)
    .slice(0, 3)
    .map((article) => ({
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      image: article.image,
    }))

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-24">
        <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="relative h-64 w-full mb-8">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{post.date}</span>
            <span>By {post.author}</span>
          </div>

          <TableOfContents content={post.content} />

          {/* Stylized Liv Pure ad */}
          <div className="my-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-900 mb-2">🌟 Breakthrough in Natural Weight Loss</h3>
                <p className="text-lg text-purple-800 mb-4">Discover Liv Pure's revolutionary supplement that's changing lives across America. Unlock your body's natural fat-burning potential with this groundbreaking formula.</p>
                <ul className="mb-4 text-purple-700">
                  <li className="flex items-center gap-2 mb-2">
                    <span className="text-green-500">✓</span> Targets stubborn fat naturally
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <span className="text-green-500">✓</span> Boosts metabolism & energy levels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Supports healthy weight management
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://tinyurl.com/Discover-LivPures-fat-burner"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discover Liv Pure Now
                  </a>
                  <span className="text-purple-600 font-semibold">Limited Time Offer!</span>
                </div>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Natural Weight Loss Supplement"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>

          <BlogContentProcessor content={post.content} />
          
          <SocialShare url={`https://aidietcalculator.com/blog/${post.slug}`} title={post.title} />
          
          <AffiliateDisclosure />
        </article>
        
        <RelatedArticles articles={relatedArticles} />
        
        <CommentsSection />
        
      </main>
    </div>
  )
}
