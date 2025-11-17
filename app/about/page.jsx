export default function About() {
  return (
    <div
      className="min-h-screen px-6 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/9.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto text-white">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6 text-blue-50">About Me</h1>

          {/* Text + Image Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Text Content */}
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I am a Backend Developer specializing in <strong>PHP</strong> and <strong>Laravel</strong> 
                with over <strong>2 years of experience</strong> in building secure and scalable web systems.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I have worked on several PHP Native projects following the 
                <strong> MVC architecture</strong>, in addition to modern Laravel projects. 
                Skilled in RESTful APIs, database optimization, and building clean backend logic.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I leverage <strong>AI tools</strong> to boost productivity, automate workflows, 
                and deliver efficient solutions.
              </p>

              <p className="text-lg leading-relaxed">
                My goal is to build fast, secure, scalable backend systems while constantly learning 
                new technologies.
              </p>
            </div>

            {/* Profile Image */}
            {/* <div className="flex justify-center">
              <img 
                src="/images/9.jpeg" 
                alt="Professional portrait" 
                className="w-full max-w-sm rounded-lg shadow-2xl border-4 border-x-blue-400"
                style={{ filter: "grayscale(100%) brightness(1.1)" }}
              />
            </div> */}

          </div>

        </div>
      </div>
    </div>
  );
}
