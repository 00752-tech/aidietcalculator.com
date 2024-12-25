export function BMRCalculatorSnippet() {
return (
  <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6">How to Use the AI-Powered BMR Calculator</h2>
      <ol className="list-decimal list-inside space-y-4">
        <li>Select your gender.</li>
        <li>Enter your age.</li>
        <li>Input your height in either inches or centimeters.</li>
        <li>Enter your weight in either pounds or kilograms.</li>
        <li>Click "Calculate BMR" to see your results.</li>
      </ol>

      <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of Using the BMR Calculator</h2>
      <ul className="list-disc list-inside space-y-4">
        <li>Understand your baseline calorie needs.</li>
        <li>Set realistic weight goals.</li>
        <li>Make informed decisions about your diet and exercise plan.</li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: BMR Calculator</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Q: What is BMR?</h3>
          <p>A: BMR stands for Basal Metabolic Rate. It represents the number of calories your body burns at rest to maintain basic functions like breathing and circulation.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Q: How does BMR affect weight management?</h3>
          <p>A: Your BMR is a crucial factor in weight management. Knowing your BMR helps you understand how many calories you need to consume to maintain, lose, or gain weight.</p>
        </div>
      </div>
    </section>
  </div>
)
}
