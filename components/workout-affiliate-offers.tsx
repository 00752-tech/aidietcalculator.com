import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Zap, Sparkles } from 'lucide-react'

const offers = [
  {
    title: "BioTrust Low Carb Protein Powder",
    description: "Premium protein blend for muscle growth and recovery.",
    link: "https://www.dpbolvw.net/click-101319539-15626102",
    icon: Dumbbell,
    color: "bg-gradient-to-br from-blue-400 to-cyan-300",
  },
  {
    title: "BioTrust Ageless Multi-Collagen",
    description: "Support healthy skin, hair, nails, joints, and digestion.",
    link: "https://www.dpbolvw.net/click-101319539-15532752",
    icon: Zap,
    color: "bg-gradient-to-br from-purple-400 to-pink-300",
  },
  {
    title: "BioTrust Ageless Glow Serum",
    description: "Anti-aging serum for radiant, youthful-looking skin.",
    link: "https://www.anrdoezrs.net/click-101319539-15483311?url=https%3A%2F%2Fwww.biotrust.com%2Fproducts%2Fbiotrust-ageless-glow-anti-aging-serum%3Fvariant%3D8197142315104",
    icon: Sparkles,
    color: "bg-gradient-to-br from-yellow-400 to-orange-300",
  },
]

export function WorkoutAffiliateOffers() {
  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg text-gray-800">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Enhance Your Fitness Journey</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className={`${offer.color} text-white p-6`}>
              <offer.icon className="w-12 h-12 mb-4" />
              <CardTitle className="text-2xl font-bold">{offer.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">{offer.description}</p>
              <Button 
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white transition-colors duration-300" 
                asChild
              >
                <a href={offer.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Learn More
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
