"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from '../components/Testimonials';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans" style={{
      backgroundImage: "url('/images/13.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>

     


      {/* Hero Section */}
      <main
        className="flex flex-1 flex-col items-center justify-center text-center px-8 py-32 relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Mohamed Abdo
          </h1>
          <p className="relative z-10 max-w-3xl text-white mb-8 text-lg md:text-xl">
            I'm a Backend Developer & Web Designer building modern and responsive web applications.
          </p>

          {/* Buttons */}

          
          <div className="flex flex-wrap justify-center gap-4">
            <Button text="About Me" onClick={() => window.location.href = '/about'} />
            {/* <Button text="My Services" onClick={() => window.location.href = '/services'} /> */}
            <Button text="Contact Me" onClick={() => window.location.href = '/contact'} />
          </div>
        </div>

        {/* Profile Image */}
        {/* <Testimonials /> */}
        
      </main>

      {/* Testimonials Section */}
      {/* <section className="bg-gray-100 dark:bg-gray-900 py-16">
        <Testimonials />
      </section> */}

      {/* Footer */}

    </div>
  );
};

export default HomePage;
