"use client";

export default function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    >
      {text}
    </button>
  );
}
