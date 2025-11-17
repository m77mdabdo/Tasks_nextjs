import Image from 'next/image';

export default function Gallery() {
  const images = [
    'https://source.unsplash.com/random/300x300?sig=1',
    'https://source.unsplash.com/random/300x300?sig=2',
    'https://source.unsplash.com/random/300x300?sig=3',
    'https://source.unsplash.com/random/300x300?sig=4',
    'https://source.unsplash.com/random/300x300?sig=5',
    'https://source.unsplash.com/random/300x300?sig=6',
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg">
            <Image src={src} width={300} height={300} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
