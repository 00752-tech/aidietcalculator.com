export function MacroNutrientCalculatorSnippet() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      {/* SEO-optimized intro paragraph */}
      <div className="mb-10 mt-8 w-full">
        <p className="text-lg text-gray-800 bg-white bg-opacity-80 rounded-md p-4 shadow-sm border border-gray-200">
          <strong>Discover your optimal diet with our AI-Powered Macro Nutrient Calculator,</strong> designed to provide personalized recommendations for protein, carbohydrates, and fats based on your specific goals, body composition, and activity level. Instantly calculate your recommended daily intake tailored for weight loss, muscle gain, or maintenance, helping you simplify meal planning and achieve better results.
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-6">How to Use the AI-Powered Macro Nutrient Calculator</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Enter your daily calorie target</li>
          <li>Select your fitness goal (lose weight, maintain weight, or gain weight)</li>
          <li>Choose your activity level</li>
          <li>Click "Calculate Macronutrients" to get your personalized breakdown</li>
          <li>Review your recommended daily intake of protein, carbohydrates, and fat</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of Using an AI-Powered Macro Nutrient Calculator</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>Personalized macronutrient ratios based on your specific goals and activity level</li>
          <li>Helps optimize your diet for weight loss, muscle gain, or maintenance</li>
          <li>Ensures balanced nutrition to support your fitness journey</li>
          <li>Adapts recommendations based on your changing needs and progress</li>
          <li>Simplifies meal planning by providing clear macronutrient targets</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: AI-Powered Macro Nutrient Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: How does the AI determine my ideal macronutrient ratio?</h3>
            <p>
              A: Our AI considers your calorie target, fitness goal, and activity level to calculate an optimal balance of protein, carbohydrates, and fat. It uses advanced algorithms based on sports nutrition research to tailor the recommendations to your specific needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: Should I adjust my macros if I'm not seeing results?</h3>
            <p>
              A: Yes, you may need to adjust your macros if you're not progressing towards your goals. Our AI can help you fine-tune your macronutrient ratios based on your progress and feedback. However, always consult with a healthcare professional or registered dietitian for personalized advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
