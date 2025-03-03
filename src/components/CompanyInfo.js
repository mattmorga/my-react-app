import React, { useState } from "react";

const CompanyInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative w-full">
      {/* Gradient Border */}
      <div
        className="p-[1px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
        }}
      >
        {/* Dark Background with Auto-Height */}
        <div className="bg-black/80 backdrop-blur px-6 py-8 sm:px-12 sm:py-10">
          {/* Title */}
          <h2 className="text-center pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            If you can dream it, you can do it.
          </h2>

          {/* Collapsible Content */}
          <div
            className={`mt-2 max-w-3xl mx-auto transition-all duration-500 ease-in-out ${
              isVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <p className="text-gray-400 text-center font-medium leading-relaxed tracking-wide">
              <a
                href="https://www.nixbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                Nixbase Technology
              </a>{" "}
              is a leading company in Chennai providing IT solutions since 2000. We provide Data security solutions
              to our clients across South India. We have successfully delivered thousands of projects covering a
              wide range of industries.
            </p>
            <p className="mt-3 text-gray-400 text-center font-medium leading-relaxed tracking-wide">
              Our processes are structured, and our solutions are informative, flexible, and cost-effective. We
              care for your Safety, Security & Protection!
            </p>
          </div>

          {/* Button */}
          <div className="mt-4 text-center">
            <button
              onClick={toggleVisibility}
              className="bg-violet-600 text-white rounded-md transition-all duration-300 px-6 py-2 text-sm sm:text-md hover:bg-violet-500"
            >
              {isVisible ? "Show Less" : "More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
