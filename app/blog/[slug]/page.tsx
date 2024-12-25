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

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | AI Diet Calculator',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | AI Diet Calculator`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

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
        <TableOfContents />
        <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <BlogStructuredData post={post} />
          <div className="relative h-64 w-full mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{post.date}</span>
            <span>By {post.author}</span>
          </div>
          <BlogContentProcessor content={post.content} affiliateOffer={post.affiliateOffer} />
          
          <SocialShare url={`https://aidietcalculator.com/blog/${post.slug}`} title={post.title} />
          
          <AffiliateDisclosure />
        </article>
        
        <RelatedArticles articles={relatedArticles} />
        
        <CommentsSection />
        
        <div className="mt-12 bg-primary text-white p-8 rounded-lg text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Diet?</h2>
          <p className="mb-6">Try our AI-powered Diet Calculator and get a personalized meal plan tailored to your unique needs and goals.</p>
          <Link href="/" className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Your Personalized Meal Plan
          </Link>
        </div>
      </main>
    </div>
  )
}
