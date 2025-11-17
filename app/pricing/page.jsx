const plans = [
  { title: 'Free', price: '$0', features: ['Basic Feature 1', 'Basic Feature 2'] },
  { title: 'Basic', price: '$10', features: ['Feature A', 'Feature B', 'Feature C'] },
  { title: 'Premium', price: '$30', features: ['All Features', 'Priority Support'] },
];

export default function PricingPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="p-6 border rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-4 list-disc list-inside">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
