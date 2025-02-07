import React from "react";

const OurCustomers = () => {
  const images = [
    "/images/futurisk.jpg",
    "/images/akas.jpg", 
    "/images/natrust.jpg",
    "/images/amity.jpg",
  ];

  return (
    <section className="relative py-8 px-4 overflow-hidden bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(12,82,255,0.1)_25%,transparent_25%),linear-gradient(-45deg,rgba(12,82,255,0.1)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(12,82,255,0.1)_75%),linear-gradient(-45deg,transparent_75%,rgba(12,82,255,0.1)_75%)] bg-[size:20px_20px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 animate-gradient-x"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-6">
          Our Customers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 p-4 rounded-xl border border-white/10 animate-blink"
            >
              <img
                src={image}
                alt={`Customer ${index + 1}`}
                className="w-full h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;