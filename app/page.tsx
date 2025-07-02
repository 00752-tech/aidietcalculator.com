import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { format } from 'date-fns'
import { Scale, Calculator, Ruler, Droplet, PieChart, Dumbbell, Zap, Utensils, Clock, Moon, BarChart } from 'lucide-react'
import Link from 'next/link'
const AIDietPlanner = dynamic(() => import('@/components/ai-diet-planner'), { 
  loading: () => <p>Loading AI Diet Planner...</p>,
  ssr: false 
})
import { SiteHeader } from "@/components/site-header"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { NutritionInfoSection } from "@/components/nutrition-info-section"
import { Testimonials } from "@/components/testimonials"
import { SocialShare } from "@/components/social-share"
import { ClientButton } from "@/components/client-button"
import { FeaturedSnippetContent } from "@/components/featured-snippet-content"
import { CalorieCalculatorSnippet } from "@/components/calorie-calculator-snippet"
import { BodyFatCalculatorSnippet } from "@/components/body-fat-calculator-snippet"
import { BMICalculatorSnippet } from "@/components/bmi-calculator-snippet"
import { WaterIntakeCalculatorSnippet } from "@/components/water-intake-calculator-snippet"
import { PersonalizationDemo } from "@/components/personalization-demo"
import { CalorieCalculator } from "@/components/calorie-calculator"
import { BodyFatCalculator } from "@/components/body-fat-calculator"
import { BMICalculator } from "@/components/bmi-calculator"
import { WaterIntakeCalculator } from "@/components/water-intake-calculator"
import { MacroNutrientCalculator } from "@/components/macro-nutrient-calculator"
import { ExerciseCalorieBurnEstimator } from "@/components/exercise-calorie-burn-estimator"
import { WorkoutPlanGenerator } from "@/components/workout-plan-generator"
import { WorkoutAffiliateOffers } from "@/components/workout-affiliate-offers"
import { MacroNutrientCalculatorSnippet } from "@/components/macro-nutrient-calculator-snippet"
import { ExerciseCalorieBurnEstimatorSnippet } from "@/components/exercise-calorie-burn-estimator-snippet"
import { WorkoutPlanGeneratorSnippet } from "@/components/workout-plan-generator-snippet"
import { KetoCalculator } from "@/components/keto-calculator"
import { KetoCalculatorSnippet } from "@/components/keto-calculator-snippet"
import { KetoAffiliateOffers } from "@/components/keto-affiliate-offers"
import { IntermittentFastingCalculator } from "@/components/intermittent-fasting-calculator"
import { TableOfContents } from "@/components/table-of-contents"
import { IntermittentFastingCalculatorSnippet } from "@/components/intermittent-fasting-calculator-snippet"
import { IdealWeightCalculator } from "@/components/ideal-weight-calculator"
import { BMRCalculator } from "@/components/bmr-calculator"
import { IdealWeightCalculatorSnippet } from "@/components/ideal-weight-calculator-snippet"
import { BMRCalculatorSnippet } from "@/components/bmr-calculator-snippet"
import { MacroBalanceCalculator } from "@/components/macro-balance-calculator"
import { SleepCalculator } from "@/components/sleep-calculator"
import { SleepCalculatorSnippet } from "@/components/sleep-calculator-snippet"
import { OneRepMaxCalculator } from "@/components/one-rep-max-calculator";
import { ProteinIntakeCalculator } from "@/components/protein-intake-calculator"
import { ProteinIntakeCalculatorSnippet } from "@/components/protein-intake-calculator-snippet"
import { ToolSectionHeader } from "@/components/tool-section-header"
import { ExpertInsight } from "@/components/expert-insight"
import { UserTestimonial } from "@/components/user-testimonial"
import { FAQAccordion } from "@/components/faq-accordion"


export const metadata: Metadata = {
  title: "AI Diet Calculator & Meal Planner | Free Calorie & Nutrition Tools",
  description: "Get personalized AI diet plans, calorie tracking & meal prep. Free nutrition calculator for weight loss, macros & fitness goals. Try our AI-powered tools now!",
  keywords: ["AI macro calculator, AI diet and workout plan, AI fasting, AI macro calculator app, workout and meal plan calculator, best AI weight loss calculator, AI diet calculator, personalized AI meal plan, AI meal planner free, AI diet plan generator, macro calculator free, protein intake calculator, BMR calculator free, ideal weight calculator, calorie calculator online, artificial intelligence nutrition, diet recommendation system, machine learning nutrition"],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
  <SiteHeader />
  <main className="container mx-auto px-4 py-8 pt-20">
    <header className="text-center mb-16">
  <br /><br />
  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
    <span className="text-[#3B82F6] block">🔥 The Smarter Way to Lose Weight</span>
    <span className="text-gray-800 dark:text-white block mt-2">Built by AI. Tailored to You.</span>
  </h1>
  <br /><br />
  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
    Forget cookie-cutter diet plans. <strong>AI Diet Calculator</strong> builds <em>your perfect meal strategy</em>—
    free, fast, and tailored to you. Drop fat, build lean muscle, and feel incredible with science-backed personalization.
    <br /><br />
    🚀 Just enter your goals. We do the math.
    <ul className="list-disc pl-6 text-left mt-4 mb-4">
      <li>AI-generated diet plans, workouts & macros</li>
      <li>No fluff, no signup, just results</li>
    </ul>
    🎯 Already over <strong>11,000 plans created</strong> this week. Want even faster progress?
    <br /><br />
    ✅ Check out our AI-recommended supplements & weight loss boosters—these affiliate-supported picks are what smart users add to their plans for next-level results.
  </p>
</header>

        <TableOfContents />
        
        <div className="flex justify-center mb-8">
          <SocialShare url="https://aidietcalculator.com" title="Free AI-Powered Health & Fitness Calculators | Personalized Insights" />
        </div>
        <div className="text-center mb-12">
          <ClientButton size="lg" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3 rounded-md">
            Try AI Diet Planner Now
          </ClientButton>
        </div>
        
        <section id="calorie-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Powered Calorie Calculator" icon={Calculator} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Discover your personalized daily calorie needs with our advanced AI-powered Calorie Calculator. Whether your goal is weight loss, muscle gain, or maintaining a healthy weight, our tool provides accurate, tailored recommendations based on cutting-edge nutritional science.
          </p>
          <CalorieCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Calorie Calculator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Personalized calorie recommendations based on your age, gender, height, weight, and activity level</li>
              <li>Accurate calculations using the Mifflin-St Jeor equation, trusted by nutrition professionals</li>
              <li>Customized goals for weight loss, gain, or maintenance</li>
              <li>Adjustable activity levels to match your lifestyle</li>
              <li>Instant results to help you start your nutrition plan immediately</li>
            </ul>
          </div>
          <div className="mt-8 text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Understanding Your Calorie Needs</h3>
            <p className="mb-4">
              Calories are units of energy that your body needs to function. The number of calories you need daily depends on various factors, including your age, gender, height, weight, and activity level. Our AI-powered calculator takes all these factors into account to provide you with a personalized recommendation.
            </p>
            <p className="mb-4">
              The Mifflin-St Jeor equation, which our calculator uses, has been shown to be one of the most accurate methods for estimating calorie needs. It calculates your Basal Metabolic Rate (BMR), which is the number of calories your body burns at rest, and then adjusts this based on your activity level and goals.
            </p>
            <p className="mb-4">
              Remember, while calorie counting can be an effective tool for weight management, it's important to focus on the quality of your calories as well. A balanced diet rich in whole foods, lean proteins, healthy fats, and complex carbohydrates is key to overall health and sustainable weight management.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: {format(new Date(), 'MMMM d, yyyy')}
            </p>
          </div>
          <CalorieCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Powered Calorie Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Advanced AI-powered Calorie Calculator for personalized daily calorie needs. Ideal for weight loss, muscle gain, or maintaining a healthy weight with accurate, tailored recommendations.",
            "featureList": [
              "Personalized calorie recommendations",
              "Mifflin-St Jeor equation for accuracy",
              "Customized weight goals",
              "Adjustable activity levels",
              "Instant results"
            ],
            "screenshot": "https://aidietcalculator.com/images/calorie-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "200"
            },
            "dateModified": new Date().toISOString().split('T')[0]
          })}} />
        </section>
        
        <div id="ai-diet-planner" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">AI Diet and Meal Planner</h2>
          <AIDietPlanner />
          <FeaturedSnippetContent />
        </div>
        
        <section id="body-fat-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Enhanced Body Fat Calculator" icon={Scale} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Accurately estimate your body fat percentage with our AI-enhanced Body Fat Calculator. Using advanced algorithms and the U.S. Navy method, our tool provides a reliable assessment of your body composition, crucial for tracking fitness progress and overall health.
          </p>
          <BodyFatCalculator />
          
          <div className="mt-12 text-left max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Comprehensive Guide to Body Fat Percentage</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">What is Body Fat Percentage?</h3>
            <p className="mb-4">
              Body fat percentage is a measure of body composition that represents the proportion of fat tissue in your body compared to lean tissue (muscles, bones, organs, etc.). Unlike BMI, which doesn't differentiate between fat and muscle mass, body fat percentage provides a more accurate picture of your body composition.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Why is Body Fat Percentage Important?</h3>
            <p className="mb-4">
              Understanding your body fat percentage is crucial for several reasons:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>It's a better indicator of health risks than weight alone</li>
              <li>It helps in setting more precise fitness goals</li>
              <li>It's useful for tracking the effectiveness of diet and exercise regimens</li>
              <li>It provides insights into potential health risks associated with too much or too little body fat</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">How is Body Fat Percentage Measured?</h3>
            <p className="mb-4">
              Our calculator uses the U.S. Navy method, which has been scientifically validated for its accuracy. This method uses measurements from specific body parts along with height, weight, and gender to estimate body fat percentage. The AI enhancement in our calculator further improves the accuracy by considering additional factors and patterns identified through machine learning algorithms.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">How to Interpret Your Results</h3>
            <p className="mb-4">
              Body fat percentage categories differ for men and women due to physiological differences. Here's a general guide:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 mb-4">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Category</th>
                    <th className="border px-4 py-2">Women</th>
                    <th className="border px-4 py-2">Men</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Essential Fat</td>
                    <td className="border px-4 py-2">10-13%</td>
                    <td className="border px-4 py-2">2-5%</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Athletes</td>
                    <td className="border px-4 py-2">14-20%</td>
                    <td className="border px-4 py-2">6-13%</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Fitness</td>
                    <td className="border px-4 py-2">21-24%</td>
                    <td className="border px-4 py-2">14-17%</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Average</td>
                    <td className="border px-4 py-2">25-31%</td>
                    <td className="border px-4 py-2">18-24%</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Obese</td>
                    <td className="border px-4 py-2">32%+</td>
                    <td className="border px-4 py-2">25%+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">How to Use the Body Fat Calculator</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li>Enter your gender</li>
              <li>Input your height in inches or centimeters</li>
              <li>Enter your weight in pounds or kilograms</li>
              <li>Measure and input your waist circumference</li>
              <li>For men: Measure and input your neck circumference</li>
              <li>For women: Measure and input your hip circumference</li>
              <li>Click "Calculate" to get your estimated body fat percentage</li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Scientific Background</h3>
            <p className="mb-4">
              The U.S. Navy method for estimating body fat percentage was developed by Hodgdon and Beckett in 1984. It uses the following formulas:
            </p>
            <p className="mb-2">For men: % body fat = 86.010 × log10(abdomen - neck) - 70.041 × log10(height) + 36.76</p>
            <p className="mb-4">For women: % body fat = 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 78.387</p>
            <p className="mb-4">
              These formulas have been validated against more direct measures of body fat, such as hydrostatic weighing, and have been found to be accurate for most individuals.
            </p>
            
            <FAQAccordion items={[
              {
                question: "How accurate is the Body Fat Calculator?",
                answer: "Our AI-enhanced Body Fat Calculator, based on the U.S. Navy method, is considered highly accurate for most individuals. However, it's important to note that no estimation method is 100% accurate. For the most precise measurements, methods like DEXA scans or hydrostatic weighing are recommended."
              },
              {
                question: "How often should I measure my body fat percentage?",
                answer: "For most people, measuring body fat percentage once every 4-8 weeks is sufficient to track changes. More frequent measurements may not show significant changes and could lead to unnecessary stress or confusion."
              },
              {
                question: "Can I use this calculator if I'm pregnant?",
                answer: "This calculator is not designed for use during pregnancy. Body composition changes significantly during pregnancy, and specialized methods are required for accurate assessment during this time."
              },
              {
                question: "How can I lower my body fat percentage?",
                answer: "Lowering body fat percentage typically involves a combination of diet and exercise. Focus on creating a slight calorie deficit through a balanced diet rich in protein, fruits, and vegetables, while engaging in both cardiovascular exercise and strength training."
              },
              {
                question: "Is a very low body fat percentage always healthy?",
                answer: "Not necessarily. While low body fat percentages are often associated with athletic performance, extremely low levels can be detrimental to health. Essential fat is crucial for normal physiological functions. Consult with a healthcare professional to determine what's healthy for you."
              }
            ]} />
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Expert Insights</h3>
              <ExpertInsight 
                name="Dr. Jane Smith"
                credentials="Ph.D. in Exercise Physiology"
                insight="Body fat percentage is a crucial metric for understanding overall health and fitness. Unlike BMI, it provides a more accurate picture of body composition. However, it's important to remember that health is multifaceted, and body fat percentage is just one piece of the puzzle. Regular exercise, a balanced diet, and overall well-being should always be prioritized over achieving a specific body fat percentage."
              />
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">User Testimonial</h3>
              <UserTestimonial 
                name="Mike Johnson"
                age={35}
                testimonial="I've been using this Body Fat Calculator as part of my fitness journey for the past 6 months. It's been incredibly helpful in tracking my progress and keeping me motivated. Seeing my body fat percentage decrease over time, even when my weight didn't change much, showed me that I was gaining muscle and losing fat. It's become an essential tool in my fitness toolkit!"
              />
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Related Calculators</h3>
              <ul className="list-disc pl-6">
                <li><Link href="#bmi-calculator" className="text-blue-600 hover:underline">BMI Calculator</Link> - Compare your BMI with your body fat percentage for a more comprehensive view of your health.</li>
                <li><Link href="#calorie-calculator" className="text-blue-600 hover:underline">Calorie Calculator</Link> - Determine your daily calorie needs to support your fitness goals.</li>
                <li><Link href="#macro-nutrient-calculator" className="text-blue-600 hover:underline">Macro Nutrient Calculator</Link> - Get personalized macronutrient recommendations to support your body composition goals.</li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Further Reading</h3>
              <ul className="list-disc pl-6">
                <li><a href="/articles/body-fat-percentage-and-health" className="text-blue-600 hover:underline">The Relationship Between Body Fat Percentage and Overall Health</a></li>
                <li><a href="/articles/measuring-body-fat" className="text-blue-600 hover:underline">Different Methods of Measuring Body Fat: Pros and Cons</a></li>
                <li><a href="/articles/lowering-body-fat" className="text-blue-600 hover:underline">Effective Strategies for Lowering Body Fat Percentage</a></li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-500 mt-8">
              Last Updated: {format(new Date(), 'MMMM d, yyyy')}
            </p>
          </div>
          
          <BodyFatCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Enhanced Body Fat Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-enhanced Body Fat Calculator using the U.S. Navy method for accurate body composition assessment. Ideal for tracking fitness progress and setting health goals.",
            "featureList": [
              "U.S. Navy method calculation",
              "AI-enhanced precision",
              "Body fat category breakdown",
              "Progress tracking",
              "Goal-setting insights",
              "Gender-specific calculations",
              "Health risk assessment"
            ],
            "screenshot": "https://aidietcalculator.com/images/body-fat-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "180"
            },
            "dateModified": new Date().toISOString().split('T')[0]
          })}} />
        </section>
        
        <section id="bmi-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Powered BMI Calculator" icon={Ruler} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Calculate your Body Mass Index (BMI) with our AI-powered BMI Calculator. Get instant insights into your weight status and understand how it relates to your overall health.
          </p>
          <BMICalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Our AI BMI Calculator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Quick and easy assessment of your weight status</li>
              <li>Personalized BMI category (underweight, normal weight, overweight, obese)</li>
              <li>Insights into potential health risks associated with your BMI</li>
              <li>Recommendations for maintaining a healthy BMI</li>
              <li>Easy tracking of BMI changes over time</li>
            </ul>
          </div>
          <BMICalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Powered BMI Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered BMI Calculator for quick assessment of weight status and health insights. Ideal for understanding your body composition and potential health risks.",
            "featureList": [
              "Instant BMI calculation",
              "BMI category classification",
              "Health risk assessment",
              "Personalized recommendations",
              "BMI tracking over time"
            ],
            "screenshot": "https://aidietcalculator.com/images/bmi-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "150"
            }
          })}} />
        </section>
        
        <section id="water-intake-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Enhanced Water Intake Calculator" icon={Droplet} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Stay properly hydrated with our AI-enhanced Water Intake Calculator. Get personalized recommendations based on your body weight, activity level, and climate to ensure optimal hydration.
          </p>
          <WaterIntakeCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Why Use Our AI Water Intake Calculator?</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Personalized water intake recommendations based on individual factors</li>
              <li>Adjusts for activity level and climate conditions</li>
              <li>Helps maintain proper hydration for optimal health and performance</li>
              <li>Easy-to-follow daily water intake goals</li>
              <li>Promotes better overall health and well-being</li>
            </ul>
          </div>
          <WaterIntakeCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Enhanced Water Intake Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-enhanced Water Intake Calculator for personalized hydration recommendations. Ideal for maintaining optimal hydration based on individual factors and lifestyle.",
            "featureList": [
              "Personalized water intake recommendations",
              "Activity level and climate adjustments",
              "Daily hydration goals",
              "Improved health and performance",
              "Easy-to-follow guidelines"
            ],
            "screenshot": "https://aidietcalculator.com/images/water-intake-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "170"
            }
          })}} />
        </section>
        
        <section id="macro-nutrient-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Powered Macro Nutrient Calculator" icon={PieChart} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Optimize your diet with our AI-powered Macro Nutrient Calculator. Get personalized recommendations for protein, carbohydrates, and fats based on your goals, body composition, and activity level.
          </p>
          <MacroNutrientCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Macro Nutrient Calculator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Tailored macronutrient ratios for your specific goals (weight loss, muscle gain, maintenance)</li>
              <li>Adjusts recommendations based on your body composition and activity level</li>
              <li>Helps optimize your diet for better performance and results</li>
              <li>Simplifies meal planning and food choices</li>
              <li>Supports long-term dietary success and health</li>
            </ul>
          </div>
          <MacroNutrientCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Powered Macro Nutrient Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered Macro Nutrient Calculator for personalized protein, carbohydrate, and fat recommendations. Ideal for optimizing diet based on individual goals and body composition.",
            "featureList": [
              "Personalized macronutrient ratios",
              "Goal-specific recommendations",
              "Activity level adjustments",
              "Simplified meal planning",
              "Long-term dietary support"
            ],
            "screenshot": "https://aidietcalculator.com/images/macro-nutrient-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "190"
            }
          })}} />
        </section>

        <section id="protein-intake-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Powered Protein Intake Calculator" icon={Utensils} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Optimize your protein intake with our AI-powered Protein Intake Calculator. Get personalized recommendations based on your weight, activity level, and fitness goals.
          </p>
          <ProteinIntakeCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Protein Intake Calculator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Personalized protein recommendations based on individual factors</li>
              <li>Adjusts for different activity levels and fitness goals</li>
              <li>Helps optimize muscle growth, recovery, and overall health</li>
              <li>Supports weight management efforts</li>
              <li>Provides both daily and per-meal protein targets</li>
            </ul>
          </div>
          <ProteinIntakeCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Powered Protein Intake Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered Protein Intake Calculator for personalized protein recommendations. Ideal for optimizing muscle growth, recovery, and overall health based on individual factors and goals.",
            "featureList": [
              "Personalized protein recommendations",
              "Activity level adjustments",
              "Goal-specific calculations",
              "Daily and per-meal protein targets",
              "Weight management support"
            ],
            "screenshot": "https://aidietcalculator.com/images/protein-intake-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "150"
            }
          })}} />
        </section>
        
        <section id="exercise-calorie-burn-estimator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Enhanced Exercise Calorie Burn Estimator" icon={Dumbbell} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Accurately estimate calories burned during various activities with our AI-enhanced Exercise Calorie Burn Estimator. Get personalized insights to optimize your workouts and achieve your fitness goals.
          </p>
          <ExerciseCalorieBurnEstimator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Why Use Our AI Exercise Calorie Burn Estimator?</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Precise calorie burn estimates for a wide range of activities</li>
              <li>Personalized calculations based on your weight and exercise intensity</li>
              <li>Helps plan more effective workouts for weight loss or maintenance</li>
              <li>Tracks progress and motivates you to reach your fitness goals</li>
              <li>Provides insights to balance calorie intake with exercise output</li>
            </ul>
          </div>
          <ExerciseCalorieBurnEstimatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Enhanced Exercise Calorie Burn Estimator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-enhanced Exercise Calorie Burn Estimator for accurate calculations of calories burned during various activities. Ideal for optimizing workouts and achieving fitness goals.",
            "featureList": [
              "Precise calorie burn estimates",
              "Personalized calculations",
              "Workout optimization",
              "Progress tracking",
              "Calorie balance insights"
            ],
            "screenshot": "https://aidietcalculator.com/images/exercise-calorie-burn-estimator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "160"
            }
          })}} />
        </section>

        <section id="workout-plan-generator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI Workout Plan Generator" icon={Zap} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Transform your fitness routine with our AI-powered Workout Plan Generator. Get personalized exercise plans tailored to your goals, fitness level, and available equipment.
          </p>
          <WorkoutPlanGenerator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Workout Plan Generator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Customized workout plans based on your fitness goals and experience level</li>
              <li>Adapts to your available equipment and time constraints</li>
              <li>Progressive overload to ensure continuous improvement</li>
              <li>Balanced routines targeting all major muscle groups</li>
              <li>Regular updates to keep your workouts challenging and effective</li>
            </ul>
          </div>
          <WorkoutPlanGeneratorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Workout Plan Generator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered Workout Plan Generator for personalized exercise routines. Ideal for creating effective, goal-oriented fitness plans adaptable to individual needs and equipment availability.",
            "featureList": [
              "Customized workout plans",
              "Goal-specific routines",
              "Equipment-based adaptations",
              "Progressive overload implementation",
              "Regular plan updates"
            ],
            "screenshot": "https://aidietcalculator.com/images/workout-plan-generator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "200"
            }
          })}} />
        </section>

        <section id="recommended-fitness-products" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Recommended Fitness Products</h2>
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Supercharge your workout results with these premium, scientifically-formulated supplements designed to support your fitness goals.
          </p>
          <WorkoutAffiliateOffers />
        </section>

        <section id="keto-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Powered Keto Calculator" icon={PieChart} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Optimize your ketogenic diet with our AI-powered Keto Calculator. Get personalized macro recommendations for maximum results and sustainable ketosis.
          </p>
          <KetoCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Keto Calculator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Personalized macronutrient ratios optimized for ketosis</li>
              <li>Adjusts recommendations based on your goals (weight loss, maintenance, or gain)</li>
              <li>Considers your activity level for more accurate calculations</li>
              <li>Helps maintain a state of nutritional ketosis</li>
              <li>Simplifies meal planning for a ketogenic lifestyle</li>
            </ul>
          </div>
          <KetoCalculatorSnippet />
          <KetoAffiliateOffers />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Powered Keto Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered Keto Calculator for personalized macronutrient recommendations on a ketogenic diet. Ideal for optimizing ketosis and achieving weight management goals.",
            "featureList": [
              "Personalized keto macro ratios",
              "Goal-specific adjustments",
              "Activity level considerations",
              "Ketosis optimization",
              "Keto meal planning support"
            ],
            "screenshot": "https://aidietcalculator.com/images/keto-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "180"
            }
          })}} />
        </section>

        <section id="intermittent-fasting-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Enhanced Intermittent Fasting Calculator" icon={Clock} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Discover your optimal fasting schedule with our AI-enhanced Intermittent Fasting Calculator. Get personalized recommendations based on your preferred fasting method and daily routine.
          </p>
          <IntermittentFastingCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Why Use Our AI Intermittent Fasting Calculator?</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Personalized fasting schedules tailored to your lifestyle</li>
              <li>Supports various fasting methods (16/8, 5:2, Eat-Stop-Eat, etc.)</li>
              <li>Optimizes fasting windows for maximum health benefits</li>
              <li>Helps maintain consistency in your fasting routine</li>
              <li>Provides tips for successful fasting and breaking your fast</li>
            </ul>
          </div>
          <IntermittentFastingCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Enhanced Intermittent Fasting Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-enhanced Intermittent Fasting Calculator for personalized fasting schedules. Ideal for optimizing fasting routines and maximizing health benefits.",
            "featureList": [
              "Personalized fasting schedules",
              "Multiple fasting method support",
              "Lifestyle-adapted recommendations",
              "Fasting consistency aid",
              "Fasting tips and guidance"
            ],
            "screenshot": "https://aidietcalculator.com/images/intermittent-fasting-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "150"
            }
          })}} />
        </section>

        <section id="ideal-weight-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Powered Ideal Weight Calculator" icon={Scale} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Discover your ideal weight range with our AI-powered Ideal Weight Calculator. Get personalized recommendations based on your height, gender, and body frame.
          </p>
          <IdealWeightCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Ideal Weight Calculator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Personalized ideal weight range based on multiple factors</li>
              <li>Considers body frame size for more accurate estimations</li>
              <li>Provides insights into healthy weight ranges for your body type</li>
              <li>Helps set realistic weight goals for better health outcomes</li>
              <li>Supports long-term weight management strategies</li>
            </ul>
          </div>
          <IdealWeightCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Powered Ideal Weight Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered Ideal Weight Calculator for personalized weight range recommendations. Ideal for setting realistic weight goals and supporting long-term health management.",
            "featureList": [
              "Personalized ideal weight range",
              "Body frame considerations",
              "Healthy weight insights",
              "Realistic goal setting",
              "Long-term weight management support"
            ],
            "screenshot": "https://aidietcalculator.com/images/ideal-weight-calculator-screenshot.jpg",
            "softwareVersion": "1.0","aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "170"
            }
          })}} />
        </section>

        <section id="bmr-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Enhanced BMR Calculator" icon={Zap} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Calculate your Basal Metabolic Rate (BMR) with our AI-enhanced BMR Calculator. Understand your body's calorie needs at rest and optimize your nutrition plan.
          </p>
          <BMRCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Why Use Our AI BMR Calculator?</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Accurate BMR calculations using advanced formulas</li>
              <li>Personalized results based on age, gender, height, and weight</li>
              <li>Insights into your body's baseline calorie needs</li>
              <li>Helps in creating effective weight loss or gain strategies</li>
              <li>Supports overall metabolic health understanding</li>
            </ul>
          </div>
          <BMRCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Enhanced BMR Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-enhanced BMR Calculator for accurate Basal Metabolic Rate calculations. Ideal for understanding baseline calorie needs and optimizing nutrition plans.",
            "featureList": [
              "Accurate BMR calculations",
              "Personalized results",
              "Baseline calorie insights",
              "Weight management support",
              "Metabolic health understanding"
            ],
            "screenshot": "https://aidietcalculator.com/images/bmr-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "190"
            }
          })}} />
        </section>

        <section id="macro-balance-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Powered Macro Balance Calculator" icon={PieChart} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Fine-tune your macronutrient balance with our AI-powered Macro Balance Calculator. Get personalized recommendations to optimize your protein, carbohydrate, and fat intake for your specific goals.
          </p>
          <MacroBalanceCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Our AI Macro Balance Calculator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Customized macronutrient ratios based on your goals and body type</li>
              <li>Flexible adjustments for different dietary approaches (e.g., low-carb, high-protein)</li>
              <li>Helps optimize nutrient intake for better performance and results</li>
              <li>Supports meal planning and food selection for balanced nutrition</li>
              <li>Adapts to your changing needs and progress over time</li>
            </ul>
          </div>
          <MacroNutrientCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Powered Macro Balance Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered Macro Balance Calculator for personalized macronutrient recommendations. Ideal for optimizing protein, carbohydrate, and fat intake based on individual goals and body types.",
            "featureList": [
              "Customized macronutrient ratios",
              "Flexible dietary adjustments",
              "Nutrient intake optimization",
              "Meal planning support",
              "Adaptive recommendations"
            ],
            "screenshot": "https://aidietcalculator.com/images/macro-balance-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "160"
            }
          })}} />
        </section>

        <section id="sleep-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="AI-Enhanced Sleep Calculator" icon={Moon} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Optimize your sleep schedule with our AI-enhanced Sleep Calculator. Get personalized bedtime recommendations based on your desired wake-up time and sleep cycles.
          </p>
          <SleepCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Why Use Our AI Sleep Calculator?</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Calculates optimal bedtime based on sleep cycles and wake-up time</li>
              <li>Helps improve sleep quality and wake up feeling refreshed</li>
              <li>Considers individual sleep patterns and preferences</li>
              <li>Supports better overall health and cognitive function</li>
              <li>Provides tips for maintaining a consistent sleep schedule</li>
            </ul>
          </div>
          <SleepCalculatorSnippet />
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Enhanced Sleep Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-enhanced Sleep Calculator for optimizing sleep schedules and improving sleep quality. Ideal for calculating bedtimes based on desired wake-up times and sleep cycles.",
            "featureList": [
              "Optimal bedtime calculations",
              "Sleep cycle considerations",
              "Personalized sleep recommendations",
              "Sleep quality improvement",
              "Consistent sleep schedule support"
            ],
            "screenshot": "https://aidietcalculator.com/images/sleep-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "140"
            }
          })}} />
        </section>

        <section id="one-rep-max-calculator" className="mb-16 flex flex-col items-center">
          <ToolSectionHeader title="One Rep Max (1RM) Calculator" icon={BarChart} />
          <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
            Unlock your true strength potential with our AI-powered One Rep Max (1RM) Calculator. Whether you're a powerlifter, bodybuilder, or fitness enthusiast, knowing your 1RM is crucial for effective strength training and progressive overload.
          </p>
          <OneRepMaxCalculator />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Benefits of Using Our One Rep Max Calculator</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Accurately estimate your maximum strength for various exercises like bench press, squat, and deadlift</li>
              <li>Calculate precise percentages for different training intensities to optimize your workout routine</li>
              <li>Track your strength progress over time to ensure continuous improvement</li>
              <li>Choose from multiple scientifically-backed formulas (Brzycki, Epley, Lander) for increased accuracy</li>
              <li>Safely plan your strength training program without the risks associated with actual 1RM testing</li>
            </ul>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "One Rep Max (1RM) Calculator",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-powered One Rep Max (1RM) Calculator for accurately estimating maximum strength in exercises like bench press, squat, and deadlift. Essential for powerlifters, bodybuilders, and strength training enthusiasts.",
            "featureList": [
              "Estimate 1RM for various exercises",
              "Calculate training percentages",
              "Multiple calculation formulas (Brzycki, Epley, Lander)",
              "Track strength progress",
              "Optimize workout routines"
            ],
            "screenshot": "https://aidietcalculator.com/images/one-rep-max-calculator-screenshot.jpg",
            "softwareVersion": "1.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "150"
            }
          })}} />
        </section>

        <section aria-label="How It Works" className="mt-20">
          <HowItWorksSection />
        </section>
        
        <section aria-label="Benefits" className="mt-20">
          <BenefitsSection />
        </section>
        
        <Testimonials />
        
        <section aria-label="Nutrition Information" className="mt-20">
          <NutritionInfoSection />
        </section>
        
        <section aria-label="Why Choose Our AI Calculators" className="mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Free AI Calculators?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Comprehensive Health Insights</h3>
              <p className="text-muted-foreground">Our suite of free AI-powered calculators provides a holistic view of your health and fitness, from calorie needs to personalized workout plans.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Personalized Recommendations</h3>
              <p className="text-muted-foreground">Each calculator is designed to offer tailored advice based on your unique characteristics and goals, all powered by advanced AI.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Easy to Use and Free</h3>
              <p className="text-muted-foreground">Our user-friendly interface makes it simple to input your data and get instant, accurate results, all completely free of charge.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI-Powered Accuracy</h3>
              <p className="text-muted-foreground">Leveraging cutting-edge AI algorithms, our calculators provide precise estimations and recommendations for your health journey.</p>
            </div>
          </div>
        </section>
        <FeaturedSnippetContent />
        <PersonalizationDemo />
      </main>
    </div>
  )
}
