import { FaLaptopCode, FaDraftingCompass, FaSearch, FaDatabase } from 'react-icons/fa'; // إضافة أيقونات أخرى قد تحتاجها

export default function Services() {
  const services = [
    { 
      title: 'Backend Development', 
      desc: 'Building robust, scalable, and secure APIs and business logic using Laravel & PHP.', 
      icon: FaLaptopCode
    },
    { 
      title: 'Database Optimization', 
      desc: 'Performance tuning, indexing strategies, and complex query optimization for MySQL.', 
      icon: FaDatabase
    },
    { 
      title: 'RESTful API Design', 
      desc: 'Designing and implementing clean, standardized, and secure RESTful APIs.', 
      icon: FaDraftingCompass
    },
    // يمكنك إضافة خدمة رابعة لتتناسب مع التصميم
    { 
      title: 'System Architecture', 
      desc: 'Architecting scalable systems and defining the MVC pattern for projects.', 
      icon: FaSearch 
    },
  ];

  return (
    // 1. الخلفية مع صورة خلفية داكنة
    <div className="py-24 px-6 bg-[#0B1521] text-white min-h-screen" style={{ backgroundImage: "url('/images/15.jp')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" }}>
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* العنوان */}
        <h1 className="text-5xl font-extrabold mb-16 text-center text-cyan-400">
          💼 Services I Offer
        </h1>

        {/* Cards Grid - تغيير إلى 4 أعمدة على شاشات الكمبيوتر */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              // 2. تنسيق البطاقة (مطابق لتصميم المشاريع الداكن)
              className="p-6 bg-[#162938] rounded-xl shadow-2xl transition duration-300 transform 
                         hover:scale-[1.03] hover:shadow-[0_0px_30px_rgba(6,182,212,0.5)] 
                         border border-[#162938] hover:border-cyan-500 text-center"
            >
              {/* 3. الأيقونة في المنتصف */}
              {s.icon && <s.icon className="text-6xl mb-6 text-cyan-400 mx-auto" />} 
              
              <h2 className="text-2xl font-bold mb-3 text-white">{s.title}</h2>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}