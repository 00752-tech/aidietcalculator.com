import { Metadata, Viewport } from "next"
// ONLY ONE CSS IMPORT HERE
import "./globals.css" 
import { SiteHeader } from "@/components/site-header"
import Script from "next/script"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

export const metadata: Metadata = {
  title: {
    default: "Free AI Diet Calculators | Personalized Nutrition & Fitness Tools 2025",
    template: `%s | ${siteConfig.name}`,
  },
  description: "Get free, personalized diet calculations with our 15+ AI-powered nutrition tools.",
  // ... (rest of your metadata remains the same)
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Scripts and Meta tags */}
        <meta name="google-site-verification" content="RhY8MQoncEED33YHQnoIBVvxJLYtINYFouF8Bcq3Q84" />
        <link rel="icon" type="image/png" sizes="270x270" href="/favicon-270x270.png" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <StructuredData />
        <SiteHeader />
        <main>{children}</main>
        <Toaster />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  )
}
