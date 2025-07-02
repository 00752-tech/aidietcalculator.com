import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Brain, Scale, Clock, Heart, Trophy, Shield } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI-Powered Precision",
      description: "Smarter than guesswork. Our nutrition engine adapts to your stats, preferences, and goals using machine-learned logic—not templates."
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Scientific Weight Control",
      description: "Rooted in verified metabolic science, your daily calorie needs and macros are calculated with clinical-grade accuracy."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Built for Busy People",
      description: "Get custom plans in seconds. No spreadsheets. No wasted time. Just fast, personalized nutrition made effortless."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Wellness First",
      description: "Beyond aesthetics. Our tools promote sustainable energy, hormonal balance, recovery, and cognitive clarity—starting with better meals."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Goal-Dialed Plans",
      description: "Whether you're shredding, bulking, fasting or maintaining—every tool adjusts to your phase for optimal results."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data-Verified Confidence",
      description: "No hallucinations here. Our results are backed by peer-reviewed formulas and USDA databases. You get the math."
    }
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* VSL-style intro paragraph for congruency */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg text-center text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
            <strong>Ready to optimize every part of your health strategy?</strong> These 15 calculators don’t just spit numbers—they build smarter routines. From calorie tracking to macro splits, workout plans to sleep cycles, your AI tools work together to craft results that last.
            <br /><br />
            🎯 Already trusted by <strong>11,000+ users this week</strong> to level up their body, energy, and performance with zero fluff.
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
