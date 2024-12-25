export function FeaturedSnippetContent() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">How to Use AI Diet Calculator</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Enter your daily calorie target</li>
          <li>Select the number of meals you want per day</li>
          <li>Choose your preferred diet type (e.g., balanced, low-carb, high-protein)</li>
          <li>Input any allergies or food intolerances</li>
          <li>Click "Generate AI Meal Plan" to receive your personalized plan</li>
        </ol>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of AI-Powered Meal Planning</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>Personalized nutrition plans tailored to your specific needs</li>
          <li>Time-saving meal suggestions and recipes</li>
          <li>Improved adherence to dietary goals</li>
          <li>Diverse and balanced meal options</li>
          <li>Continuous optimization based on your progress and feedback</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: AI Diet Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: What is an AI Diet Calculator?</h3>
            <p>A: An AI Diet Calculator is a tool that uses artificial intelligence to create personalized meal plans based on your individual nutritional needs, preferences, and goals.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: How accurate is AI-powered meal planning?</h3>
            <p>A: AI-powered meal planning can be highly accurate as it considers multiple factors such as age, weight, height, activity level, and dietary preferences. However, it's always recommended to consult with a healthcare professional for personalized advice.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
