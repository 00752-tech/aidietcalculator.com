export function SleepCalculatorSnippet() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">How to Use the AI-Powered Sleep Calculator</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Enter your desired wake-up time</li>
          <li>Select the number of sleep cycles you want (3-6 cycles)</li>
          <li>Click "Calculate Sleep Schedule" to get your personalized bedtime</li>
          <li>Review your recommended bedtime and wake-up time</li>
          <li>Adjust your sleep schedule as needed for optimal rest</li>
        </ol>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of Using the Sleep Calculator</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>Optimize your sleep schedule based on natural sleep cycles</li>
          <li>Improve sleep quality and wake up feeling more refreshed</li>
          <li>Enhance overall health and cognitive function</li>
          <li>Support weight loss and fitness goals through better sleep</li>
          <li>Increase daytime productivity and energy levels</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: Sleep Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: How does the Sleep Calculator work?</h3>
            <p>A: The Sleep Calculator uses the average 90-minute sleep cycle to determine the best times to fall asleep based on your desired wake-up time. It aims to wake you up at the end of a sleep cycle when you're in a lighter stage of sleep.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Q: How many sleep cycles do I need?</h3>
            <p>A: Most adults need 4-6 sleep cycles per night, which translates to about 6-9 hours of sleep. However, individual needs may vary. Experiment with different numbers of cycles to find what works best for you.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
