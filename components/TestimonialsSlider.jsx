'use client';
import { useState } from 'react';
import Button from './Button';

const testimonials = [
  'Great service and support!',
  'Highly professional team.',
  'Loved the design and speed.',
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <div className="p-8 text-center max-w-xl mx-auto border rounded shadow">
      <p className="mb-4">"{testimonials[index]}"</p>
      <Button text="Next" onClick={next} />
    </div>
  );
}
