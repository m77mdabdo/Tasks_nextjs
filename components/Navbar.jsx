import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 dark:bg-gray-800">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
