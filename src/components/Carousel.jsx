import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// Import your images
import Lounge1 from "../assets/Lounge1.jpg";
import Lounge2 from "../assets/Lounge2.jpg";
import Lounge3 from "../assets/Lounge3.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animateText, setAnimateText] = useState(true);

  // Slides content with modern gradients
  const slides = [
    {
      id: 1,
      image: Lounge1,
      alt: "014 Lounge Interior",
      title: "WELCOME TO ZERO ONE FOUR LOUNGE",
      subtitle: "Your premium spot for unforgettable nights",
      buttonText: "BOOK A TABLE",
      gradient: "from-purple-900/70 via-black/50 to-red-900/70"
    },
    {
      id: 2,
      image: Lounge2,
      alt: "014 Lounge Ambience",
      title: "EXPERIENCE LUXURY",
      subtitle: "Drinks, vibes & moments that matter",
      buttonText: "EXPLORE MENU",
      gradient: "from-blue-900/70 via-black/50 to-purple-900/70"
    },
    {
      id: 3,
      image: Lounge3,
      alt: "014 Lounge Party",
      title: "WHERE MEMORIES ARE MADE",
      subtitle: "Music, drinks & unforgettable nights await",
      buttonText: "CONTACT US",
      gradient: "from-red-900/70 via-black/50 to-orange-900/70"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  // Text animation trigger
  useEffect(() => {
    setAnimateText(false);
    const timer = setTimeout(() => setAnimateText(true), 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .fade-in-title {
          animation: ${animateText ? 'slideInUp 0.8s ease-out 0.2s forwards' : 'none'};
          opacity: 0;
        }

        .fade-in-subtitle {
          animation: ${animateText ? 'slideInUp 0.8s ease-out 0.5s forwards' : 'none'};
          opacity: 0;
        }

        .fade-in-button {
          animation: ${animateText ? 'slideInUp 0.8s ease-out 0.8s forwards' : 'none'};
          opacity: 0;
        }

        .slide-transition {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .modern-button {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
          transition: all 0.3s ease;
        }

        .modern-button:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          box-shadow: 0 15px 40px rgba(239, 68, 68, 0.4);
          transform: translateY(-2px);
        }

        .nav-button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
      `}</style>

      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 slide-transition ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              {/* Image with better fitting */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                  style={{
                    objectPosition: '50% 40%', // Adjust this to show the best part of your images
                    filter: 'brightness(0.7) contrast(1.1) saturate(1.2)'
                  }}
                />
              </div>
              
              {/* Modern gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
              
              {/* Subtle pattern overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 fade-in-title tracking-tight leading-none">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {currentSlideData.title}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto fade-in-subtitle font-light leading-relaxed">
              {currentSlideData.subtitle}
            </p>
            
            <button className="modern-button text-white font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider fade-in-button transform transition-all duration-300 hover:scale-105">
              {currentSlideData.buttonText}
            </button>
          </div>
        </div>

        {/* Modern Indicators */}
        <div className="absolute z-30 flex items-center space-x-4 bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/50'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-125'
                }`}
              />
            ))}
          </div>
          
          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoPlay}
            className="nav-button p-2 rounded-full ml-4 group"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-white group-hover:text-red-400 transition-colors" />
            ) : (
              <Play className="w-4 h-4 text-white group-hover:text-red-400 transition-colors" />
            )}
          </button>
        </div>

      

        
      </div>
    </>
  );
};

export default Carousel;