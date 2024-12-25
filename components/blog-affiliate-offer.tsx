import { Button } from "@/components/ui/button"

interface BlogAffiliateOfferProps {
  title: string
  description: string
  link: string
}

export function BlogAffiliateOffer({ title, description, link }: BlogAffiliateOfferProps) {
  return (
    <div className="my-8 relative overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">From Plate to Progress: Recommended Products for Sustainable Weight Loss</h3>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="mb-4">{description}</p>
        <Button 
          asChild 
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </Button>
      </div>
    </div>
  )
}
