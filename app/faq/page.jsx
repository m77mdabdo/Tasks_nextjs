'use client';
import { useState } from 'react';

const faqs = [
  { q: 'What is Next.js?', a: 'Next.js is a React framework for building web apps.' },
  { q: 'What is TailwindCSS?', a: 'TailwindCSS is a utility-first CSS framework.' },
  { q: 'How to use useState?', a: 'useState is a React hook for managing state.' },
  { q: 'What is a component?', a: 'A component is a reusable UI piece in React.' },
  { q: 'How to route in Next.js?', a: 'Use the App Router or Link component.' },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded p-4">
            <h2
              className="font-semibold cursor-pointer"
              onClick={() => toggle(idx)}
            >
              {faq.q}
            </h2>
            {openIndex === idx && <p className="mt-2">{faq.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
