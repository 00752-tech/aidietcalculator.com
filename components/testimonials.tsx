import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const testimonials = [
  {
    name: "Lena Marwood",
    text: "Lost 15 lbs without starving myself. The plan felt tailored like I had my own AI nutrition coach. Absolute game-changer!",
  },
  {
    name: "Jonas Petrov",
    text: "I work 60+ hours/week. This tool planned my meals in seconds. It's seriously like having a dietitian in your pocket!",
  },
  {
    name: "Priya Chen",
    text: "Nothing else worked. But this one nailed my macros, banned the foods I hate, and helped me hit my fat-loss goal in 7 weeks.",
  },
]

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="mt-20">
      <div className="max-w-2xl mx-auto mb-8 px-4">
        <p className="text-lg text-center text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Real results. Real people. No fluff.</strong><br />
          Whether you're cutting fat, gaining lean mass, or just trying to feel better—<em>AI Diet Calculator is changing lives</em>. These users saw dramatic improvements in energy, strength, and body composition—without paying for cookie-cutter meal plans.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">What Real Users Say</h2>
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
      <p className="text-sm text-center text-muted-foreground mt-6">
        ✅ 4,812 plans generated this week alone. Want results like these? Start yours now.
      </p>
    </section>
  )
}
