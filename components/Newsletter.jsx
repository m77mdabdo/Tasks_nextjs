'use client';
import { useState } from 'react';
import Button from './Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed!');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto mt-8">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 p-2 border rounded"
        required
      />
      <Button text="Subscribe" />
    </form>
  );
}
