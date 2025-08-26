import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ch_1 from '../assets/ch_1.avif'
import ch_2 from '../assets/ch_2.avif'
import ch_3 from '../assets/ch_3.avif'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample images - replace with your actual image URLs
  const slides = [
    {
      id: 1,
      image: `${ch_1}`,
      alt: "Mountain landscape"
    },
    {
      id: 2,
      image: `${ch_2}`,
      alt: "Forest path"
    },
    {
      id: 3,
      image: `${ch_3}`,
      alt: "Ocean waves"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute block w-full h-full bg-top "
            />
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0" />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-8 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg shadow-orange-500/60'
                : 'bg-white/50 hover:bg-white/80 hover:shadow-md hover:shadow-orange-400/40'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-6 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-8 h-8 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
        <span className="sr-only">Previous</span>
      </button>

      {/* Next button */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-6 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <ChevronRight className="w-8 h-8 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
        <span className="sr-only">Next</span>
      </button>

      {/* Optional: Auto-play pause/resume button */}
      <button
        className="absolute top-6 right-6 z-40 px-4 py-2 bg-black/50 text-white text-sm rounded-lg hover:bg-black/70 transition-colors duration-200"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
      >
        {isAutoPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Optional: Slide counter */}
      <div className="absolute top-6 left-6 z-40 px-3 py-1 bg-black/50 text-white text-sm rounded-lg">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Carousel;