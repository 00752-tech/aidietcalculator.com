import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Apple, Beef, Fish, Leaf } from 'lucide-react'

export function NutritionInfoSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Understanding Nutrition</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our AI Diet Calculator takes into account all essential aspects of nutrition to create balanced, healthy meal plans that work for you.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Apple className="h-6 w-6 text-primary" />
                Macronutrients
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Macronutrients are the building blocks of nutrition, providing your body with the energy it needs to function:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Proteins:</strong> Essential for muscle building and repair</li>
                <li><strong>Carbohydrates:</strong> Primary energy source for your body</li>
                <li><strong>Fats:</strong> Important for hormone production and nutrient absorption</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Beef className="h-6 w-6 text-primary" />
                Portion Control
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Understanding portion sizes is crucial for maintaining a healthy diet:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proper portions help maintain caloric balance</li>
                <li>Different foods require different portion sizes</li>
                <li>Our AI helps you measure portions accurately</li>
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
              <p className="mb-4">
                When you eat is just as important as what you eat:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular meal times help stabilize blood sugar</li>
                <li>Proper spacing between meals aids digestion</li>
                <li>Strategic meal timing can boost metabolism</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                Dietary Preferences
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We accommodate various dietary preferences and restrictions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vegetarian and vegan options available</li>
                <li>Allergen-free meal alternatives</li>
                <li>Cultural and religious dietary considerations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
