export function FeaturedSnippetContent() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">How to Use Our Free AI Health Tools</h2>
        <ol className="list-decimal list-inside space-y-4 text-left">
          <li>Select a calculator that matches your current goal (e.g., fat loss, muscle gain, sleep optimization)</li>
          <li>Input your basic stats (age, height, weight, lifestyle factors)</li>
          <li>Customize for preferences—like meal count, macro style, allergies, or hated foods</li>
          <li>Click “Generate” and let the AI build your personalized blueprint</li>
          <li>Review your results—calories, macros, water, sleep, and training split—ready to execute</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">Why Our AI Tools Work So Well</h2>
        <ul className="list-disc list-inside space-y-4 text-left">
          <li>Custom-fit calculations backed by verified nutritional science</li>
          <li>Instant plans with no signup, payment, or fluff</li>
          <li>Built-in logic to adjust for goals, training intensity, and body type</li>
          <li>Perfect for daily use or monthly check-ins to stay on track</li>
          <li>Used by <strong>11,000+ users this week</strong> to build smarter routines across fitness, sleep, diet, and recovery</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: About AI Diet Calculator</h2>
        <div className="space-y-4 text-left">
          <div>
            <h3 className="text-xl font-semibold">Q: What is AI Diet Calculator?</h3>
            <p>
              A: It's a free platform that uses artificial intelligence to create custom health strategies—from diet plans to macro splits, sleep schedules to workout routines—all tailored to your goals and input.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: What makes it different?</h3>
            <p>
              A: Unlike static calculators, this system adapts daily—analyzing your goal type, body composition, and even food preferences to deliver precision plans in seconds.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: Can I trust the accuracy?</h3>
            <p>
              A: Yes—every calculator is built on peer-reviewed formulas and verified USDA nutrition datasets. We also display per-meal calorie totals so you can double-check any result.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
