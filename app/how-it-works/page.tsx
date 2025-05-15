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
      <main className="container mx-auto max-w-4xl px-6 py-12 pt-28">
        <h1 className="mb-8 text-4xl font-extrabold text-indigo-900 dark:text-indigo-300 drop-shadow-md">
          How It Works
        </h1>
        <div className="space-y-8 bg-white dark:bg-indigo-900/70 rounded-2xl p-8 shadow-lg ring-1 ring-indigo-200 dark:ring-indigo-700">
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <strong>AI Diet Calculator</strong> uses advanced artificial intelligence to create personalized meal plans tailored exactly to your specific needs and goals. You simply input your dietary preferences, calorie goals, and any allergies or intolerances, and our AI immediately generates a customized meal plan complete with detailed recipes and nutritional information. Our AI continuously learns and improves to provide the most effective plans possible.
          </p>
          <h2 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-200 mt-4 mb-2">Getting Started is Simple:</h2>
          <ol className="list-decimal list-inside space-y-3 pl-4 text-lg text-gray-800 dark:text-gray-200">
            <li>
              <span className="font-medium text-indigo-700 dark:text-indigo-300">Input</span> your dietary preferences, calorie goals, and any allergies or intolerances.
            </li>
            <li>
              <span className="font-medium text-indigo-700 dark:text-indigo-300">Our AI analyzes</span> your input and generates a customized meal plan.
            </li>
            <li>
              <span className="font-medium text-indigo-700 dark:text-indigo-300">Review</span> your meal plan, which includes detailed recipes and nutritional information.
            </li>
            <li>
              <span className="font-medium text-indigo-700 dark:text-indigo-300">Regenerate or adjust</span> your meal plan as needed to fit your lifestyle.
            </li>
          </ol>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            Our AI continuously learns and improves, ensuring that you always receive the most up-to-date and effective meal plans possible.
          </p>
        </div>
      </main>
    </div>
  )
}
