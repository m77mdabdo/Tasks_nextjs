import Button from '../../components/Button';

const blogs = [
  'Learn Next.js in 2025',
  'TailwindCSS Tips and Tricks',
  'Building Reusable Components',
  'Understanding React Hooks',
  'Deploying Your Next.js App',
];

export default function BlogPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((title, idx) => (
          <div key={idx} className="p-4 border rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <Button text="Read More" onClick={() => {}} className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
