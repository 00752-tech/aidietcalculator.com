import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const testimonials = [
  {
    name: "Lena Marwood",
    text: "The AI Diet Calculator transformed my approach to nutrition. I've lost 15 pounds and feel more energetic than ever!",
  },
  {
    name: "Jonas Petrov",
    text: "As a busy professional, I love how easy it is to follow the personalized meal plans. It's like having a nutritionist in my pocket!",
  },
  {
    name: "Priya Chen",
    text: "I've tried many diet apps, but this one stands out. The AI recommendations are spot-on and have helped me achieve my fitness goals.",
  },
]

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="mt-20">
      {/* SEO-optimized first paragraph for Goal Completion */}
      <div className="max-w-2xl mx-auto mb-8 px-4">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200 text-center">
          <strong>Discover how the AI Diet Calculator can help you achieve your health and fitness goals with personalized meal plans and expert AI recommendations.</strong> According to users, this tool transforms approaches to nutrition, with some reporting significant weight loss (like Lena Marwood losing 15 pounds) and increased energy. Busy professionals appreciate how easy it is to follow the tailored plans, feeling like they have "a nutritionist in [their] pocket". This innovative app stands out for its spot-on recommendations that help users meet their fitness goals.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Image
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.name}`}
                  alt={`${testimonial.name}'s avatar`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground mt-2">{testimonial.text}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
