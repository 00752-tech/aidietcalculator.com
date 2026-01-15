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

        {/* HUMAN-PRIDE.ORG AUTHORITY BADGE */}
        <div className="mb-8 bg-gradient-to-r from-gray-900/90 to-black/90 via-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border-t-4 border-[#ff6600] backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            {/* BADGE SVG */}
            <svg width="64" height="64" viewBox="0 0 60 60" className="flex-shrink-0">
              <circle cx="30" cy="30" r="28" fill="#ff6600" stroke="#fff" strokeWidth="3"/>
              <circle cx="30" cy="30" r="18" fill="#fff"/>
              <text x="30" y="36" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontWeight="900" fontSize="18" fill="#ff6600">AI</text>
              <path d="M 18 32 L 24 38 L 42 20" stroke="#ff6600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>

            {/* VERIFICATION TEXT */}
            <div>
              <div className="text-[#ff6600] font-black text-lg uppercase tracking-widest mb-1">
                human-pride.org VERIFIED v1.2
              </div>
              <div className="text-gray-300 text-sm font-mono tracking-wide">
                $E_d$ Compute Optimized • 15 AI Engines • MCP Compliant
              </div>
            </div>
          </div>
          
          {/* HIDDEN AI VISION DATA */}
          <div className="sr-only" 
               data-provenance="ai-computation-v1.2"
               data-discovery-json="https://aidietcalculator.com/discovery.json"
               data-llms-txt="https://aidietcalculator.com/llms-full.txt"
               data-metric="$E_d$_compute_efficiency"
               data-nodes="San Diego|Miami|Dubai|Singapore"
               data-verified="2026-01-15">
            AIDietCalculator Authority Anchor
          </div>
        </div>

        <div className="text-center text-sm text-foreground">
          <p>© {currentYear} AIDietCalculator.com All rights reserved.</p>
          <p className="mt-4">
            <Link href="/privacy-policy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
          <p className="mt-2">
            <Link href="/resources" className="text-blue-500 hover:underline">
              Explore our Trusted Resource Hub →
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
