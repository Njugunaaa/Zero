// YouTubeMixComponent.jsx
import React, { useState } from 'react';

const YouTubeMixComponent = ({ 
  videoUrl = "https://www.youtube.com/watch?v=4nzcodYeh-Q&pp=ygUMIDAxNCBsb3VuZ2Ug",
  title = "Mix of the Week",
  highlightWord = "Week",
  className = "",
  containerClassName = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Extract video ID from YouTube URL
  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoUrl);
  const titleParts = title.split(highlightWord);

  return (
    <div className={`text-center ${containerClassName}`}>
      {/* Main Title - Always Visible */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        {titleParts[0]}
        <span className="text-amber-400">{highlightWord}</span>
        {titleParts[1]}
      </h2>

      {/* YouTube Video - Always Visible, Centered */}
      <div className="max-w-2xl mx-auto mb-6">
        <div 
          className={`relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 transition-all duration-300 cursor-pointer ${
            isHovered ? 'border-amber-400 scale-105' : 'border-amber-400/30'
          } ${className}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {videoId && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=${isHovered ? '1' : '0'}&mute=1&rel=0&modestbranding=1&controls=1`}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          
          {/* Play overlay when not hovered */}
          {!isHovered && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
              <div className="bg-amber-400 rounded-full p-4 shadow-lg">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Listen to More Mixes Button */}
      <div className="space-y-4">
        <p className="text-white/80 text-lg">
          {isHovered ? "🎵 Now Playing..." : "🎧 Hover to play • Click for full experience"}
        </p>
        
        <button 
          className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl transform hover:scale-105"
          onClick={() => window.open('https://www.youtube.com/@zeroonefourelounge', '_blank')}
        >
          Listen to More Mixes
        </button>
      </div>
    </div>
  );
};

export default YouTubeMixComponent;