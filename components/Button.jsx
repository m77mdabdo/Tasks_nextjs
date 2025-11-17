// Button.jsx (مع تأثير الوهج والشفافية)
'use client';

export default function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      // bg-sky-300: لون أزرق سماوي فاتح جداً (أكثر إشراقاً)
      // text-sky-950: لون أزرق داكن جداً للنص
      // shadow-lg shadow-sky-400/50: ظل أزرق متوهج لإحساس الـ "Glow"
      // hover:bg-sky-200: يصبح أفتح قليلاً عند التمرير لزيادة الإشراق
      // hover:shadow-xl hover:shadow-sky-400/70: يزيد الوهج عند التمرير
      className={`px-6 py-3 rounded bg-sky-300 text-blue-100 shadow-lg shadow-sky-400/50 hover:bg-sky-200 hover:shadow-xl hover:shadow-sky-400/70 transition ${className}`}
    >
      {text}
    </button>
  );
}