'use client';

import Button from '../../components/Button';
import { FaBlog } from 'react-icons/fa';

const blogs = [
  {
    title: 'Learn Next.js in 2025',
    desc: 'A comprehensive guide to mastering Next.js with the latest features and best practices.',
    icon: FaBlog
  },
  {
    title: 'TailwindCSS Tips and Tricks',
    desc: 'Advanced techniques and tips for efficient styling with TailwindCSS.',
    icon: FaBlog
  },
  {
    title: 'Building Reusable Components',
    desc: 'How to create modular, reusable React components for scalable applications.',
    icon: FaBlog
  },
  {
    title: 'Understanding React Hooks',
    desc: 'Deep dive into React hooks and how to use them effectively in your projects.',
    icon: FaBlog
  },
  {
    title: 'Deploying Your Next.js App',
    desc: 'Step-by-step guide to deploying your Next.js application to production.',
    icon: FaBlog
  },
];

export default function BlogPage() {
  return (
    <div className="py-24 px-6 bg-[#0B1521] text-white min-h-screen" style={{ backgroundImage: "url('/images/13.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" }}>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-16 text-center text-cyan-400">
          📝 Blog Posts
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#162938] rounded-xl shadow-2xl transition duration-300 transform
                         hover:scale-[1.03] hover:shadow-[0_0px_30px_rgba(6,182,212,0.5)]
                         border border-[#162938] hover:border-cyan-500 text-center"
            >
              {blog.icon && <blog.icon className="text-6xl mb-6 text-cyan-400 mx-auto" />}
              <h2 className="text-2xl font-bold mb-3 text-white">{blog.title}</h2>
              <p className="text-gray-400 mb-4">{blog.desc}</p>
              <Button text="Read More" onClick={() => {}} className="mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
