import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Apple, Beef, Fish, Leaf } from 'lucide-react'

export function NutritionInfoSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-center text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
            <strong>Food isn’t just fuel—it’s strategy.</strong><br />
            Our AI Diet Calculator builds personalized nutrition plans around what actually works for your body: protein balance, meal timing, portion strategy, and dietary preferences that match your lifestyle. Whether you’re vegan, gluten-sensitive, or keto-curious—our system adapts.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-4">What Our AI System Optimizes</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These nutrition fundamentals are dialed in for every plan we generate—no fluff, no filler, just verified dietary logic.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Apple className="h-6 w-6 text-primary" />
                Macronutrient Mastery
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Balance your macros for sustainable results:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Protein:</strong> Key for muscle repair and satiety</li>
                <li><strong>Carbs:</strong> Fuel workouts, balance energy</li>
                <li><strong>Fats:</strong> Boost recovery and regulate hormones</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Beef className="h-6 w-6 text-primary" />
                Portion Strategy
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Never eyeball your meals again:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI calculates exact portion sizes per food group</li>
                <li>Targets your caloric goal with real-time math</li>
                <li>Scales meals for training days vs rest days</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Fish className="h-6 w-6 text-primary" />
                Meal Timing
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Your body runs on rhythms. We sync to them:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Smart spacing between meals for digestion & focus</li>
                <li>Optimized carb timing for workout recovery</li>
                <li>Late-night hunger reduction via evening macro shifts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                Preference Intelligence
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">No more “just eat tilapia” plans:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Auto-filters meals for food allergies or intolerances</li>
                <li>Includes vegan, vegetarian, or paleo formats</li>
                <li>Respects religious and cultural dietary boundaries</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
