import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    { id: 1, image: "/images/tower.jpg?width=1200&height=400",  title: "Welcome To Nixbase Total IT Solution" },
    { id: 2, image: "/images/vis.jpg?width=1200&height=400",  title: "Enterprise IT Solutions" },
    { id: 3, image: "/images/3.jpg?width=1200&height=400", title: "Advanced Data Security" },
    { id: 4, image: "/images/4.jpg?width=1200&height=400",  title: "Network Infrastructure Solutions" }
  ];

  useEffect(() => {
    let slideInterval;
    if (isPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(slideInterval);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (!isPlaying) setIsPlaying(true);
  };

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={currentSlide !== index}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover" 
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
            <div className="max-w-4xl px-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Play/Pause Control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Contact Button */}
      <button
        onClick={handleContact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg animate-bounce-hover"
      >
        <Mail className="w-5 h-5" />
        <span className="font-semibold text-sm md:text-base">Contact Us</span>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;