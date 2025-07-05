import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
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
  description:
    "Get free, personalized diet calculations with our 15+ AI-powered nutrition tools. Calculate calories, macros, BMI, body fat, workout plans, and more with precision. Start optimizing your health today!",
  keywords: [
    "AI diet calculator for weight loss",
    "free AI calculators",
    "personalized nutrition planning",
    "machine learning weight loss",
    "macro nutrition planning",
    "BMI calculator",
    "body fat calculator",
    "water intake calculator",
    "exercise calorie burn",
    "meal planning",
    "nutrition analysis",
    "diet optimization",
    "AI workout plan generator",
  ],
  authors: [{ name: "AI Diet Calculator Team" }],
  creator: "AI Diet Calculator",
  publisher: "AI Diet Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aidietcalculator.com",
    title: "Free AI Diet Calculators - Personalized Nutrition & Fitness Tools",
    description:
      "Free personalized nutrition & fitness tools powered by AI. Try 15+ calculators including macros, calorie tracking, body fat, and workout planning.",
    siteName: "AI Diet Calculator",
    images: [
      {
        url: "https://aidietcalculator.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Diet & Fitness Calculators Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Diet & Fitness Calculators | Smart Health Tools",
    description:
      "AI-powered nutrition, calorie and macro planners. Customize your diet, workouts, and progress for faster results.",
    creator: "@aidietcalculator",
    images: ["https://aidietcalculator.com/twitter-image.jpg"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Verification + Icons */}
        <meta name="google-site-verification" content="RhY8MQoncEED33YHQnoIBVvxJLYtINYFouF8Bcq3Q84" />
        <meta name="msvalidate.01" content="53E73AC5DA2CE94096AD71CA76115F81" />
        <link rel="icon" type="image/png" sizes="270x270" href="/favicon-270x270.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Google Analytics - Lazy Load */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q2EXYV66X3"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q2EXYV66X3');
          `}
        </Script>

        {/* ✅ Microsoft Clarity - Lazy Load */}
        <Script id="microsoft-clarity-script" strategy="lazyOnload">
          {`
            window.addEventListener('load', function() {
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s8nwqflxvk");
            });
          `}
        </Script>
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <StructuredData />
        <SiteHeader />
        {children}
        <Toaster />
        <CookieConsent />
      </body>
      <Footer />
    </html>
  )
}
