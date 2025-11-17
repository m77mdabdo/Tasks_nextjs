'use client';
import { useState } from 'react';
import Button from '../../components/Button';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex justify-center gap-4">
        <Button text="Increase" onClick={() => setCount(count + 1)} />
        <Button text="Decrease" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
}
