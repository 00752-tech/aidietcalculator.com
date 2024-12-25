import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <Alert variant="warning" className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Medical Disclaimer</AlertTitle>
          <AlertDescription>
            The AI Diet Planner is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary changes. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
          </AlertDescription>
        </Alert>

        <div className="mb-8">
          <h2 className="font-semibold mb-2 text-lg">Affiliate Disclosure</h2>
          <p className="text-sm text-foreground">
            AIDietCalculator.com is a participant in affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to affiliated sites. Please note that this does not impact our editorial integrity. Our recommendations are always based on our genuine beliefs in a product's value to our readers.
          </p>
        </div>

        <div className="text-center text-sm text-foreground">
          <p>© {currentYear} AIDietCalculator.com All rights reserved.</p>
          <p className="mt-4">
            <Link href="/privacy-policy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
