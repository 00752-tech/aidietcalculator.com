import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Brain, Scale, Clock, Heart, Trophy, Shield } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI-Powered Precision",
      description: "Our advanced artificial intelligence analyzes thousands of nutritional data points to create perfectly balanced meal plans tailored to your specific needs and goals."
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Scientific Weight Management",
      description: "Achieve your ideal weight through scientifically proven nutrition principles, with meal plans that maintain optimal caloric balance and macro-nutrient distribution."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Time-Saving Efficiency",
      description: "Save hours of meal planning time with instantly generated, personalized meal plans that take into account your preferences and dietary restrictions."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health-Focused Approach",
      description: "Every meal plan is designed to support your overall health, incorporating a balanced mix of nutrients essential for your well-being."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Goal Achievement",
      description: "Whether you're aiming for weight loss, muscle gain, or maintaining a healthy lifestyle, our AI adapts your meal plans to help you reach your specific goals."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Evidence-Based Results",
      description: "Our meal plans are based on peer-reviewed nutritional science and continuously updated with the latest research in diet and health."
    }
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* SEO-optimized first paragraph for Goal Completion */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200 text-center">
            <strong>Discover AI Diet Calculator, the AI-powered tool designed to help you achieve your health and weight goals with perfectly balanced, personalized meal plans.</strong> Leveraging advanced artificial intelligence and scientifically proven nutrition principles, it analyzes thousands of nutritional data points to tailor plans for weight loss, muscle gain, or a healthy lifestyle. Save valuable time while ensuring your meals are based on evidence-based, peer-reviewed nutritional science for optimal well-being.
          </p>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Diet Calculator?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
