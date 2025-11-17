export default function Testimonials() {
  const testimonials = [
    { name: 'Alice', text: 'Great service and support!' },
    { name: 'Bob', text: 'Highly professional team.' },
    { name: 'Charlie', text: 'Loved the design and speed.' },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-4 border rounded shadow hover:shadow-lg transition">
            <p className="mb-2">"{t.text}"</p>
            <span className="font-semibold">- {t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
