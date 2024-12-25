export function CalorieCalculatorSnippet() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">How to Use the AI-Powered Calorie Calculator</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Enter your age (between 15-80 years)</li>
          <li>Select your gender</li>
          <li>Input your height (in feet and inches or centimeters)</li>
          <li>Enter your weight (in pounds or kilograms)</li>
          <li>Choose your activity level from the dropdown menu</li>
          <li>Click "Calculate Daily Calorie Needs" to get your personalized results</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of Using an AI-Powered Calorie Calculator</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>Accurate estimation of daily calorie needs based on individual factors</li>
          <li>Personalized calorie targets for weight loss, maintenance, and gain</li>
          <li>Adjusts calculations based on activity level for more precise results</li>
          <li>Helps in creating effective meal plans and setting realistic fitness goals</li>
          <li>Provides a foundation for long-term, sustainable weight management</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: AI-Powered Calorie Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: How accurate is an AI-powered calorie calculator?</h3>
            <p>A: AI-powered calorie calculators are highly accurate as they consider multiple factors such as age, gender, height, weight, and activity level. However, individual metabolic rates may vary, so it's best to use the results as a starting point and adjust based on your progress.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: How often should I recalculate my calorie needs?</h3>
            <p>A: It's recommended to recalculate your calorie needs every 4-6 weeks or whenever there's a significant change in your weight or activity level. This ensures your calorie targets remain accurate as your body composition changes.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
