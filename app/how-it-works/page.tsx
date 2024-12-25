import { Metadata, Viewport } from 'next'
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "How It Works | AI Diet Calculator",
  description: "Learn how our AI-powered diet calculator creates personalized meal plans tailored to your unique needs and goals.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-6 text-3xl font-bold">How It Works</h1>
        <div className="space-y-4">
          <p>
            AI Diet Calculator uses advanced artificial intelligence to create personalized meal plans tailored to your specific needs and goals. Here's how it works:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Input your dietary preferences, calorie goals, and any allergies or intolerances.</li>
            <li>Our AI analyzes your input and generates a customized meal plan.</li>
            <li>Review your meal plan, which includes detailed recipes and nutritional information.</li>
            <li>Regenerate or adjust your meal plan as needed to fit your lifestyle.</li>
          </ol>
          <p>
            Our AI continuously learns and improves, ensuring that you always receive the most up-to-date and effective meal plans possible.
          </p>
        </div>
      </main>
    </div>
  )
}
