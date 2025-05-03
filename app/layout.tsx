import "@/styles/globals.css";
// import "@/styles/blog.css"
import { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { StructuredData } from "@/components/structured-data";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: {
    default:
      "Free AI Diet Calculators | Personalized Nutrition & Fitness Tools 2025",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Get free, personalized diet calculations with our 15+ AI-powered nutrition tools. Calculate calories, macros, BMI, body fat, workout plans, and more with precision. Start optimizing your health today!",
  keywords: [
    // Trending keywords from research
    "AI diet calculator for weight loss",
    "free AI calculators",
    "personalized nutrition planning",
    "machine learning weight loss",
    "nutrient deficiency analysis",
    "sustainable eating AI",
    "macro nutrition planning",
    "health wearables integration",
    "AI diet ethics",
    "keto diet calculator",
    "vegan meal planner",
    // Original keywords
    "BMI calculator",
    "body fat calculator",
    "water intake calculator",
    "exercise calorie burn",
    "fitness tracking",
    "meal planning",
    "nutrition analysis",
    "diet optimization",
    "health calculator",
    "wellness tools",
    // New keyword
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
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aidietcalculator.com",
    title:
      "Free AI Diet Calculators - Personalized Nutrition & Fitness Tools",
    description:
      "Our AI-powered diet calculators provide free, personalized nutrition and fitness calculations. Discover 15+ specialized tools including calorie counters, macro planners, and workout generators designed to optimize your health journey.",
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
      "Personalized meal plans, workout routines, calorie tracking, BMI, body fat, water intake, macros, and exercise calorie burn calculators. Optimize your health journey with AI.",
    creator: "@aidietcalculator",
    images: ["https://aidietcalculator.com/twitter-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
    name="google-site-verification"
    content="RhY8MQoncEED33YHQnoIBVvxJLYtINYFouF8Bcq3Q84"
  />
  <meta name="msvalidate.01" content="0D933C8A8D6D92AC7CECDB6E21259A4F" />
        <link
          rel="icon"
          type="image/png"
          sizes="270x270"
          href="/favicon-270x270.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q2EXYV66X3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q2EXYV66X3');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <StructuredData />
        <SiteHeader />
        {children}
        <Toaster />
        <CookieConsent />
      </body>
      <Footer />
    </html>
  );
}
