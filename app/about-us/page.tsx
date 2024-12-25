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
          <p>
            AI Diet Calculator was founded by a team of nutrition experts and AI enthusiasts with a shared vision: to make personalized nutrition accessible to everyone.
          </p>
          <p>
            Our mission is to leverage cutting-edge artificial intelligence technology to provide tailored meal plans that not only meet individual dietary needs but also introduce variety and excitement to healthy eating.
          </p>
          <p>
            We believe that a one-size-fits-all approach to nutrition is outdated. That's why we've developed an AI system that considers your unique preferences, dietary restrictions, and health goals to create meal plans that are as individual as you are.
          </p>
          <p>
            At AI Diet Calculator, we're committed to continually improving our service, staying up-to-date with the latest nutritional science, and helping our users achieve their health and wellness goals.
          </p>
        </div>
      </main>
    </div>
  )
}
