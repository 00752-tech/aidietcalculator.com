export function KetoCalculatorSnippet() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">How to Use the AI-Powered Keto Calculator</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Select your gender</li>
          <li>Enter your age</li>
          <li>Input your height (in inches or centimeters)</li>
          <li>Enter your weight (in pounds or kilograms)</li>
          <li>Choose your activity level from the dropdown menu</li>
          <li>Adjust the body fat percentage slider</li>
          <li>Click "Calculate Keto Macros" to get your personalized results</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of Using an AI-Powered Keto Calculator</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>Personalized macro recommendations based on your unique body composition</li>
          <li>Accurate calorie and nutrient calculations for optimal ketosis</li>
          <li>Adjusts macros based on activity level for better results</li>
          <li>Helps maintain proper nutrient balance while following a ketogenic diet</li>
          <li>Supports weight loss and health goals through precise macro tracking</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: AI-Powered Keto Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: How does the AI determine my keto macros?</h3>
            <p>A: Our AI-powered calculator uses advanced algorithms to analyze your personal data, including age, gender, height, weight, activity level, and body fat percentage. It then calculates your basal metabolic rate (BMR) and adjusts it based on your activity level to determine your total daily energy expenditure (TDEE). From there, it applies keto-specific ratios to provide personalized macronutrient recommendations for optimal ketosis.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: How often should I recalculate my keto macros?</h3>
            <p>A: It's recommended to recalculate your keto macros every 2-4 weeks or whenever you experience significant changes in weight, activity level, or body composition. Regular recalculation ensures that your macros remain optimized for your current state and goals.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
