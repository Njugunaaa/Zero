import React, { useState} from 'react';

const YouTubeMixComponent = ({ 
  videoUrl = "https://www.youtube.com/watch?v=4nzcodYeh-Q&pp=ygUMIDAxNCBsb3VuZ2Ug",
  title = "Mix of the Week",
  highlightWord = "Week",
  className = "",
  containerClassName = "",
  showBackground = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Extract video ID from YouTube URL
  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoUrl);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isVideoLoaded) {
      setIsVideoLoaded(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const titleParts = title.split(highlightWord);

  return (
    <div className={`relative ${containerClassName}`}>
      <div 
        className={`relative text-center cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white transition-all duration-300">
          {titleParts[0]}
          <span className="text-amber-400">{highlightWord}</span>
          {titleParts[1]}
        </h2>

        {/* Hover instruction */}
        {!isHovered && (
          <p className="text-white/70 text-sm md:text-base animate-pulse">
            Hover to load the mix 🎵
          </p>
        )}

        {/* YouTube Video Container */}
        <div 
          className={`transition-all duration-700 ease-in-out overflow-hidden rounded-xl shadow-2xl ${
            isHovered 
              ? 'opacity-100 max-h-96 mt-8 transform translate-y-0' 
              : 'opacity-0 max-h-0 transform -translate-y-4'
          }`}
        >
          {isVideoLoaded && videoId && (
            <div className="relative w-full max-w-2xl mx-auto aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${isHovered ? '1' : '0'}&mute=1&rel=0&modestbranding=1&controls=1`}
                title={title}
                className="w-full h-full rounded-xl border-2 border-amber-400/30"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-amber-400 opacity-50 animate-pulse pointer-events-none"></div>
            </div>
          )}
        </div>

        {/* Loading indicator */}
        {isHovered && !isVideoLoaded && (
          <div className="mt-8 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400"></div>
            <span className="ml-3 text-white/70">Loading mix...</span>
          </div>
        )}

        {/* Background effects */}
        <div className="absolute -inset-10 bg-gradient-to-r from-amber-400/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>

      {/* Animated background particles - only show if showBackground is true */}
      {showBackground && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default YouTubeMixComponent;