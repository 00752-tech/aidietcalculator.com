'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Coffee, Droplet, Flame } from 'lucide-react'

const offers = [
  {
    title: "Alpine Ice Hack",
    description: "New \"Alpine Water\" 93% more Powerful than Ozempic?",
    price: "$79/bottle",
    link: "https://tinyurl.com/drop-weight-today",
    icon: Droplet,
    color: "bg-gradient-to-br from-blue-400 to-cyan-300",
  },
  {
    title: "JavaBurn",
    description: "Transform Your Coffee into a Fat-Burning Powerhouse!",
    price: "$79/60-day supply",
    link: "https://tinyurl.com/drink-coffee-lose-weight",
    icon: Coffee,
    color: "bg-gradient-to-br from-amber-400 to-orange-300",
  },
  {
    title: "Liv Pure",
    description: "Unlock Your Body's Natural Fat-Burning Potential.",
    price: "From $69",
    link: "https://tinyurl.com/natural-fat-burn",
    icon: Flame,
    color: "bg-gradient-to-br from-green-400 to-emerald-300",
  },
]

export function AffiliateOffers() {
  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg text-gray-800">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Recommended Products for Sustainable Weight Loss</h2>
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-base text-gray-700 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          Below you will find a list of recommended products for sustainable weight loss, such as Alpine Ice Hack, JavaBurn, and Liv Pure. Each entry provides key information including a brief description highlighting the product's potential benefits, its price point, and a prominent 'Learn More' link. To get detailed information about any of these supplements and understand how they might support your weight loss goals, please click the 'Learn More' button associated with the product you are interested in. <span className="font-semibold text-blue-600">Please note that some of these links are affiliate links, meaning we may earn a small commission if you make a purchase through them at no extra cost to you. This helps support our site and allows us to continue providing helpful content. Thank you for your support!</span>
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className={`${offer.color} text-white p-6`}>
              <offer.icon className="w-12 h-12 mb-4" />
              <CardTitle className="text-2xl font-bold">{offer.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">{offer.description}</p>
              <p className="mb-6 text-3xl font-light text-gray-500">{offer.price}</p>
              <Button 
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white transition-colors duration-300" 
                asChild
              >
                <a href={offer.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
