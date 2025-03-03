import React, { useState } from "react";

const OutSolution = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Comprehensive IT Solutions & Services
        </h2>

        {/* Primary Solutions Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              Our Core IT Solutions
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We provide tailored IT solutions that empower businesses with cutting-edge 
              technology, security, and innovation. Our services are designed to enhance 
              efficiency, scalability, and security across various industries.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-center space-x-2">
                ✅ Cloud Computing & Infrastructure
              </li>
              <li className="flex items-center space-x-2">
                ✅ Cybersecurity & Data Protection
              </li>
              <li className="flex items-center space-x-2">
                ✅ Custom Software Development
              </li>
              <li className="flex items-center space-x-2">
                ✅ IT Strategy & Consulting
              </li>
              <li className="flex items-center space-x-2">
                ✅ Managed IT Services & Support
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/solutions.jpg"
              alt="IT Solutions Overview"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-600 text-white text-lg px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {showMore ? "Show Less" : "Learn More About Our IT Solutions"}
          </button>
        </div>

        {/* Expandable Learn More Section */}
        {showMore && (
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-lg">
            {/* Text Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                Unlock the Full Potential of IT with Our Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our team specializes in designing, implementing, and managing 
                advanced IT solutions that align with your business objectives. 
                From seamless cloud migration to proactive cybersecurity 
                strategies, we ensure that your organization stays ahead in the digital landscape.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                Key Services We Offer
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <li className="flex items-center space-x-2">🚀 Enterprise Application Development</li>
                <li className="flex items-center space-x-2">🔧 IT Infrastructure Management</li>
                <li className="flex items-center space-x-2">☁️ Cloud Strategy & Optimization</li>
                <li className="flex items-center space-x-2">🛡️ Cybersecurity & Risk Assessment</li>
                <li className="flex items-center space-x-2">📊 Data Analytics & Business Intelligence</li>
                <li className="flex items-center space-x-2">🔗 API Integration & Custom Solutions</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/images/56.png"
                alt="Advanced IT Services"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OutSolution;
