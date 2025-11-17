import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-center gap-4 p-4 bg-transparent text-white">
      
      {/* الروابط يجب أن تستخدم فئة `hover` لزيادة التفاعل */}
      <Link href="/" className="hover:text-gray-300 transition">Home</Link>
      <Link href="/about" className="hover:text-gray-300 transition">About</Link>
      <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
      <Link href="/projects" className="hover:text-gray-300 transition">Projdects</Link>
      <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
      <Link href="/blog" className="hover:text-gray-300 transition">Blog</Link>
    </nav>
  );
}