"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/images/12.avif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contact Card */}
      <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl text-white">

        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded bg-white/20 placeholder-gray-200 text-white outline-none border border-white/20 focus:border-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded bg-white/20 placeholder-gray-200 text-white outline-none border border-white/20 focus:border-white"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="p-3 rounded bg-white/20 placeholder-gray-200 text-white outline-none border border-white/20 focus:border-white"
            required
          />

          <button
            type="submit"
            className="bg-blue-400 text-amber-50 font-semibold p-3 rounded hover:bg-cyan-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
