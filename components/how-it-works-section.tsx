import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ClipboardList, Calculator, ChefHatIcon as Chef, Sparkles } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      title: "Input Your Details",
      description: "Start by telling us about your dietary preferences, calorie goals, and any food allergies or restrictions. Our AI needs this information to create a personalized plan that works for you."
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "AI Analysis",
      description: "Our advanced AI processes your information, calculating the perfect balance of nutrients, meal timing, and portion sizes to match your goals and lifestyle."
    },
    {
      icon: <Chef className="h-8 w-8 text-primary" />,
      title: "Generate Meal Plan",
      description: "Within seconds, receive a complete meal plan featuring delicious, nutritious recipes that match your preferences and help you reach your health goals."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Achieve Results",
      description: "Follow your personalized meal plan and track your progress. Our AI continuously learns from your feedback to make your future meal plans even more effective."
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our AI-powered system makes creating personalized meal plans simple and effective. Follow these steps to start your journey to better nutrition.
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
