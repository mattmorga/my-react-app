import React, { useState } from 'react';

const CompanyInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="min-h-96 relative overflow-hidden bg-gray-900 flex items-center justify-center p-4">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(12,82,255,0.1)_25%,transparent_25%),linear-gradient(-45deg,rgba(12,82,255,0.1)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(12,82,255,0.1)_75%),linear-gradient(-45deg,transparent_75%,rgba(12,82,255,0.1)_75%)] bg-[size:20px_20px] opacity-30"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 animate-gradient-x"></div>
      
      {/* Glowing dots */}
      <div className="absolute top-20 left-40 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-100"></div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-[1.005]">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-8 animate-fade-in-down">
            If you can dream it, you can do it.
          </h1>

          {/* Animated content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isVisible ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <div className={`space-y-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-500 delay-200`}>
              <p className="text-lg text-white/90 leading-relaxed">
                <a
                  href="https://www.nixbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 font-semibold border-b-2 border-blue-400/50 hover:border-blue-300 transition-colors duration-300"
                >
                  Nixbase Technology
                </a>
                {' '}is a leading company in Chennai providing IT solutions since 2000. We provide Data security solutions to our clients across South India. We have successfully delivered thousands of projects covering a wide range of industries. We have a highly qualified team in IT consulting & delivering niche solutions in the world of Data security & Management.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Our processes are structured, and our solutions are informative, flexible, and cost-effective. Our success story will continue, and our long-term committed relationships with our clients are key for us to evolve in the world of IT. We care for your Safety, Security & Protection!
              </p>
            </div>
          </div>

          {/* Animated button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleVisibility}
              className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <span className="relative z-10">{isVisible ? 'Show Less' : 'Learn More'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 animate-pulse-slow opacity-20 bg-gradient-to-r from-blue-400/30 via-transparent to-purple-400/30"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;