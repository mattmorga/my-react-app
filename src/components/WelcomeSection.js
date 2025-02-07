import React, { useState, useEffect } from 'react';

const WelcomeSection = () => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Add a zoom-in animation when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="bg-cover bg-center h-[350px] relative flex justify-center items-center"
      style={{
        backgroundImage: 'url(/images/tower.jpg)',
      }}
    >
      <a
        href="#_"
        onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
        className={`relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-transparent rounded-full group bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/50 ${
          isVisible ? 'animate-zoomIn' : ''
        }`}
      >
        {/* Hover Effect - Color Transition & SVG Arrow */}
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
          Welcome to Nixbase
        </span>
        <span className="relative invisible">Welcome to Nixbase</span>
      </a>
    </section>
  );
};

export default WelcomeSection;
