import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Hotel Booking System",
      desc: "A complete PHP + MySQL hotel booking system with PayPal integration.",
      img: "/projects/project1.jpg",
      link: "https://your-project-link.com",
    },
    {
      title: "POS System",
      desc: "Point of Sale system built with pure PHP and JavaScript.",
      img: "/projects/project2.jpg",
      link: "https://your-project-link.com",
    },
    {
      title: "Mini CRM (Laravel)",
      desc: "CRM system with user roles, clients, and activity tracking.",
      img: "/projects/project3.jpg",
      link: "https://your-project-link.com",
    },
  ];

  return (
    <div
      className="p-12 min-h-screen bg-cover bg-center bg-no-repeat relative"
      // استخدام خلفية داكنة موحدة لتجنب مشاكل مسار الصورة الافتراضية، 
      // ويمكنك استبدالها بـ bg-[#0B1521] أو لون مشابه.
      style={{ backgroundColor: "#0B1521" }} 
    >
      {/* Dark Overlay (لم يعد مطلوبًا إذا استخدمنا لون موحد، لكن سنبقي الحاوية لحماية المحتوى) */}
      <div className="absolute inset-0 bg-black opacity-30"></div> 

      {/* Content Wrapper - مركز ومحاذاة المحتوى */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-16 text-center text-cyan-400">
          ⚙️ My Projects
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              // تحسين تنسيق البطاقة: ظل وحركة عند المرور (hover)
              className="group block bg-[#162938] rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0px_30px_rgba(6,182,212,0.5)] border border-[#162938] hover:border-cyan-500"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <Image
                  src={project.img}
                  width={400}
                  height={250}
                  alt={project.title}
                  className="w-full h-52 object-cover transition duration-500 group-hover:scale-110" // تأثير زووم عند المرور
                />
              </div>

              <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 mb-4">
                  {project.desc}
                </p>

                {/* View Project Link - تم تضمينه في البطاقة بأكملها، لكن نضع مؤشراً */}
                <span
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition"
                >
                  View Project 
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}