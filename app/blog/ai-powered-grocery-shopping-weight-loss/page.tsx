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
  title: 'AI-Powered Grocery Shopping for Weight Loss | AI Diet Guide',
  description: 'Learn how AI transforms grocery shopping, helping you make smarter food choices and stick to your weight loss goals with personalized recommendations.',
  keywords: ['AI grocery shopping', 'smart food choices', 'weight loss', 'personalized recommendations', 'AI diet guide'],
}

export default function BlogPost() {
  const post = blogPosts.find((post) => post.slug === "ai-powered-grocery-shopping-weight-loss")

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950">
      <SiteHeader />
      <main className="container mx-auto max-w-3xl px-6 py-12 pt-28">
        <article className="bg-white dark:bg-indigo-900/80 p-8 rounded-2xl shadow-lg ring-1 ring-indigo-100 dark:ring-indigo-800">
          <BlogStructuredData post={post} />
          <div className="relative h-64 w-full mb-8">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h1 className="text-4xl font-extrabold mb-6 text-indigo-900 dark:text-indigo-200 drop-shadow-md">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-8">
            <span className="mr-4">{post.date}</span>
            <span>By {post.author}</span>
          </div>
          {/* SEO-optimized first paragraph */}
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100 mb-6">
            Looking for personalized nutrition tailored specifically to you? <strong>AI Diet Calculator</strong> is a service that leverages cutting-edge artificial intelligence technology to provide tailored meal plans, aiming to make personalized nutrition accessible to everyone. Founded by a team of nutrition experts and AI enthusiasts, our platform believes a one-size-fits-all approach is outdated. We consider your unique preferences, dietary restrictions, and health goals to create meal plans that are as individual as you are. These plans are designed not only to meet your dietary needs but also to introduce variety and excitement to healthy eating.
          </p>
          {/* Improved intro for this post */}
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100 mb-6">
            Discover how AI-powered tools like our AI Diet Calculator can revolutionize your weight loss journey. This guide explores how artificial intelligence can assist with personalized nutrition planning, smarter grocery shopping for weight loss, and help you achieve sustainable results by avoiding common diet mistakes. Learn how AI can provide a personalized meal plan tailored to your unique needs and goals.
          </p>
          <TableOfContents content={post.content} />
          {/* --- Main Blog Content --- */}
          <section className="my-8">
            <BlogContentProcessor content={post.content} />
          </section>
          <SocialShare url={`https://aidietcalculator.com/blog/${post.slug}`} title={post.title} />
          {post.affiliateOffer && (
            <BlogAffiliateOffer
              title={post.affiliateOffer.title}
              description={post.affiliateOffer.description}
              link={post.affiliateOffer.link}
            />
          )}
          <AffiliateDisclosure />
        </article>
        <RelatedArticles articles={relatedArticles} />
        <CommentsSection />
        {/* Call to Action */}
        <div className="mt-12 bg-indigo-700 dark:bg-indigo-800 text-white p-8 rounded-2xl text-center max-w-3xl mx-auto shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Diet?</h2>
          <p className="mb-6 text-lg">
            Try our AI-powered Diet Calculator and get a personalized meal plan tailored to your unique needs and goals.
          </p>
          <Link href="/" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
            Get Your Personalized Meal Plan
          </Link>
        </div>
      </main>
    </div>
  )
}
