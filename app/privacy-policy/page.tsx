import { Metadata } from 'next'
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Privacy Policy | AI Diet Calculator",
  description: "Our commitment to protecting your privacy and personal data.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <div className="space-y-4">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            AI Diet Calculator ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aidietcalculator.com (the "Website").
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you use our AI Diet Calculator tool or contact us. We also automatically collect certain information when you visit, use, or navigate the Website. This information may include:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Personal information (e.g., name, email address) that you voluntarily provide</li>
            <li>Usage information (e.g., pages visited, time spent on pages)</li>
            <li>Device information (e.g., IP address, browser type)</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you. This includes:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Generating personalized meal plans</li>
            <li>Analyzing Website usage to improve user experience</li>
            <li>Sending you updates and marketing communications (with your consent)</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Google Analytics</h2>
          <p>
            We use Google Analytics to help us understand how our users use the Website. Google Analytics collects information such as how often users visit the Website, what pages they visit, and what other sites they used prior to coming to the Website. We use the information we get from Google Analytics only to improve our Website and services.
          </p>
          <p>
            Google Analytics collects only the IP address assigned to you on the date you visit the Website, rather than your name or other identifying information. We do not combine the information collected through the use of Google Analytics with personally identifiable information.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            passiveincomestreaming@gmail.com
          </p>
        </div>
      </main>
    </div>
  )
}
