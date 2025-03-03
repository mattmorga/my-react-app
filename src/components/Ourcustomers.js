import React, { useState, useEffect } from "react";

const OurCustomers = () => {
  const images = [
    "/images/futurisk.jpg",
    "/images/akas.jpg",
    "/images/natrust.jpg",
    "/images/amity.jpg",
    "/images/ampers.jpg",
    "/images/hhf.jpeg",
    "/images/sgc.jpg",
    "/images/visalam.jpg",
    "/images/ramkay.jpg",
    "/images/rajpark.png",
    "/images/PPMS.jpg",
    "/images/thinksynq.jpg",
    
  ];

  const [displayedImages, setDisplayedImages] = useState(images.slice(0, 4));
  const [isShuffling, setIsShuffling] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShuffling(true);
      setTimeout(() => {
        setDisplayedImages(() => {
          const newIndex = (currentIndex + 4) % images.length;
          setCurrentIndex(newIndex);
          if (newIndex + 4 <= images.length) {
            return images.slice(newIndex, newIndex + 4);
          } else {
            return images.slice(newIndex).concat(images.slice(0, newIndex + 4 - images.length));
          }
        });
        setIsShuffling(false);
      }, 500); // Duration of the fade-out animation
    }, 3000); // Interval between shuffles

    return () => clearInterval(interval);
  }, [images, currentIndex]);

  return (
    <section className="relative py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(12,82,255,0.1)_25%,transparent_25%),linear-gradient(-45deg,rgba(12,82,255,0.1)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(12,82,255,0.1)_75%),linear-gradient(-45deg,transparent_75%,rgba(12,82,255,0.1)_75%)] bg-[size:20px_20px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 animate-gradient-x"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-6 animate-fade-in-down">
          Our Customers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className={`backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 transform transition-transform duration-500 ${
                isShuffling ? "scale-50 opacity-0" : "scale-100 opacity-100"
              }`}
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
