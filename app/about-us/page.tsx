import { Metadata, Viewport } from 'next'
import { SiteHeader } from "@/components/site-header"

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
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-6 text-3xl font-bold">About Us</h1>
        <div className="space-y-4">
          {/* SEO-optimized introduction */}
          <p>
            Looking for personalized nutrition tailored specifically to you? <strong>AI Diet Calculator</strong> is a service that leverages cutting-edge artificial intelligence technology to provide tailored meal plans, aiming to make personalized nutrition accessible to everyone. Founded by a team of nutrition experts and AI enthusiasts, our platform believes a one-size-fits-all approach is outdated. We consider your unique preferences, dietary restrictions, and health goals to create meal plans that are as individual as you are. These plans are designed not only to meet your dietary needs but also to introduce variety and excitement to healthy eating.
          </p>
          {/* Additional supporting paragraphs */}
          <p>
            Our mission is to empower individuals to achieve their health and wellness goals through advanced AI-driven nutrition solutions. By combining the latest in nutritional science with sophisticated algorithms, we ensure every meal plan is both effective and enjoyable.
          </p>
          <p>
            At AI Diet Calculator, we are committed to continuous improvement, staying at the forefront of technology and nutrition research to deliver the best possible results for our users.
          </p>
        </div>
      </main>
    </div>
  )
}
