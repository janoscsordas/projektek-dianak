import BMICalculate from "./BMICalculate";

export default function CalculatorPage() {
  return (
    <section>
        <h1 className="text-3xl font-bold text-center mb-32">BMI Kalkulátor</h1>
        <div className="w-full flex justify-center items-center">
            <BMICalculate />
        </div>
    </section>
  )
}
