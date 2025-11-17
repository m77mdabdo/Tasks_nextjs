export default function Services() {
  const services = [
    { title: 'Web Development', desc: 'Building responsive and modern websites.' },
    { title: 'UI/UX Design', desc: 'Designing user-friendly interfaces and experiences.' },
    { title: 'SEO Optimization', desc: 'Improving your website ranking on search engines.' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
