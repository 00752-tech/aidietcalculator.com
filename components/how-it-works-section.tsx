import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ClipboardList, Calculator, ChefHatIcon as Chef, Sparkles } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      title: "Input Your Stats",
      description: "Tell us your age, weight, goals, and food dislikes. Our AI maps your unique body and preferences—it’s not just calories, it’s custom."
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "AI Blueprint",
      description: "We run your data through verified nutrition formulas + real-time logic to calculate exact macros, meals, and timing strategies."
    },
    {
      icon: <Chef className="h-8 w-8 text-primary" />,
      title: "Get Your Custom Plan",
      description: "In seconds, we deliver a full day-by-day plan: breakfast, lunch, dinner + snack, all with calorie counts and variation logic included."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "See Real Results",
      description: "Users report results in just 7–21 days. Our tool adjusts over time based on your feedback to keep progress on autopilot."
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* VSL-style intro copy */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-center text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
            <strong>4,812+ custom diet plans generated this week.</strong><br />
            It takes just 30 seconds to build yours. No emails. No templates. Just real AI + verified science working for your goals.
            <br /><br />
            💡 Whether you're cutting, bulking, eating clean, or just feel stuck—our system builds your entire nutrition map in 4 simple steps.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Built for speed, backed by data. Follow the steps below and watch your health strategy build itself.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <CardHeader className="flex flex-row items-center gap-4 pt-8">
                {step.icon}
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
