export function BodyFatCalculatorSnippet() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">How to Use the AI-Powered Body Fat Calculator</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Select your gender</li>
          <li>Enter your age</li>
          <li>Input your height (in inches or centimeters)</li>
          <li>Enter your weight (in pounds or kilograms)</li>
          <li>Measure and input your neck circumference</li>
          <li>Measure and input your waist circumference</li>
          <li>For females, measure and input your hip circumference</li>
          <li>Click "Calculate Body Fat Percentage" to get your results</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of Using an AI-Powered Body Fat Calculator</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>More accurate estimation of body fat percentage compared to BMI</li>
          <li>Helps track progress in body composition changes over time</li>
          <li>Provides a better indicator of overall health and fitness</li>
          <li>Assists in setting realistic fitness goals and adjusting workout plans</li>
          <li>Offers insights into potential health risks associated with body fat levels</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: AI-Powered Body Fat Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: How accurate is the AI-powered body fat calculator?</h3>
            <p>A: The AI-powered body fat calculator uses the U.S. Navy method, which is considered reasonably accurate for most people. However, for the most precise measurements, methods like DEXA scans or hydrostatic weighing are recommended.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: How often should I measure my body fat percentage?</h3>
            <p>A: It's generally recommended to measure your body fat percentage every 4-8 weeks. More frequent measurements may not show significant changes and could lead to unnecessary stress or frustration.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
