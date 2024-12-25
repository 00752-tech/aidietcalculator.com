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
import { BlogStructuredData } from "@/components/blog-structured-data"
import { BlogAffiliateOffer } from "@/components/blog-affiliate-offer"

export const metadata: Metadata = {
  title: 'AI vs. Human Dietitians: Future of Nutrition | AI Diet Guide',
  description: "Compare AI-powered diet planning with human dietitians. Explore strengths, limitations, and synergies shaping personalized nutrition's future.",
  keywords: ['AI nutrition', 'human dietitians', 'personalized nutrition', 'future of nutrition', 'AI vs human dietitians', 'AI diet planning'],
}

export default function BlogPost() {
  const post = blogPosts.find((post) => post.slug === "future-of-nutrition-ai-vs-human-dietitians")

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
    }));

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-24">
        <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <BlogStructuredData post={post} />
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
          <BlogContentProcessor content={post.content} />
          <BlogAffiliateOffer
            title="Try Our AI Diet Calculator"
            description="Experience the future of nutrition planning with our state-of-the-art AI Diet Calculator. Get personalized meal plans and nutritional insights tailored just for you!"
            link="https://aidietcalculator.com/#ai-diet-planner"
          />
          <SocialShare url={`https://aidietcalculator.com/blog/${post.slug}`} title={post.title} />
          <AffiliateDisclosure />
        </article>
        <RelatedArticles articles={relatedArticles} />
        <CommentsSection />
      </main>
    </div>
  )
}
