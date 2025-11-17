"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from '../components/Testimonials';
import Button from '../components/Button';

{/* <Button text="Click Me" onClick={() => alert('Button clicked!')} /> */ }



{/* <Testimonials /> */}

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
            {/* Navbar */}


            <Testimonials />

            {/* Main Section */}
            <main className="flex flex-1 flex-col items-center justify-center px-8 py-16 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Welcome to My App
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                    This is a beautifully structured Home Page built with Next.js, React,
                    and TailwindCSS.
                </p>
                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={120}
                    height={40}
                    className="dark:invert"
                    priority
                />

                {/* Routing Buttons */}
                <div className="flex gap-4 mt-8">
                    <Button text="About Us" onClick={() => window.location.href = '/about'} />
                    <Button text="Contact" onClick={() => window.location.href = '/contact'} />
                </div>

                {/* Testimonials Section */}
                


               
            </main>

            {/* Footer */}

        </div>
    );
};

export default HomePage;
