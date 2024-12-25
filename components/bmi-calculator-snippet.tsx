export function BMICalculatorSnippet() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">How to Use the AI-Powered BMI Calculator</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Enter your height (in inches or centimeters)</li>
          <li>Input your weight (in pounds or kilograms)</li>
          <li>Select your preferred unit system (Imperial or Metric)</li>
          <li>Click "Calculate BMI" to get your results</li>
          <li>Review your BMI category and personalized insights</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of Using an AI-Powered BMI Calculator</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>Quick and easy assessment of your body mass index</li>
          <li>Personalized insights based on your BMI category</li>
          <li>Helps in setting realistic fitness goals</li>
          <li>Provides a starting point for your health and fitness journey</li>
          <li>Allows for easy tracking of progress over time</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: AI-Powered BMI Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: How does an AI-powered BMI calculator differ from a regular one?</h3>
            <p>A: An AI-powered BMI calculator not only calculates your BMI but also provides personalized insights and recommendations based on your results, considering factors like age, gender, and activity level.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: Is BMI always an accurate indicator of health?</h3>
            <p>A: While BMI is a useful starting point, it doesn't account for factors like muscle mass, bone density, and overall body composition. Our AI-powered calculator provides context and additional insights to give you a more comprehensive understanding of your health.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
