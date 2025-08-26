import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Search, X, Menu } from "lucide-react";

function Nav() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBorderAnimation, setShowBorderAnimation] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // Track active link

  useEffect(() => {
    if (isSearchVisible) {
      // Trigger border animation after search overlay appears
      const timer = setTimeout(() => {
        setShowBorderAnimation(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setShowBorderAnimation(false);
    }
  }, [isSearchVisible]);

  const slideInTop = {
    animation: 'slideInTop 0.5s ease-out forwards'
  };

  const slideInLeft = {
    animation: 'slideInLeft 0.5s ease-out 0.2s forwards',
    opacity: 0,
    transform: 'translateX(-20px)'
  };

  const slideInRight = {
    animation: 'slideInRight 0.5s ease-out 0.2s forwards',
    opacity: 0,
    transform: 'translateX(20px)'
  };

  const fadeIn = {
    animation: 'fadeIn 0.7s ease-out 0.4s forwards',
    opacity: 0
  };

  const slideDown = {
    animation: 'slideDown 0.3s ease-out forwards'
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideInTop {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes borderExpand {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .input-border {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: rgba(0, 0, 0, 0.2);
          width: 0%;
        }

        .input-border.animate {
          animation: borderExpand 1s ease-out forwards;
        }

        .nav-link {
          position: relative;
          display: inline-block;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          height: 0.1rem;
          background-color: #000;
          width: 0%;
          transition: width 0.3s ease-out;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .rotate-on-hover {
          transition: all 0.3s ease;
        }

        .rotate-on-hover:hover {
          transform: rotate(90deg);
          opacity: 1;
        }

        .scale-on-hover {
          transition: all 0.3s ease;
        }

        .scale-on-hover:hover {
          transform: scale(1.1);
        }

        .slide-hover {
          transition: all 0.2s ease;
        }

        .slide-hover:hover {
          transform: translateX(8px);
        }

        .button-hover {
          transition: all 0.2s ease;
        }

        .button-hover:hover {
          transform: scale(1.05);
        }
      `}</style>

      {!isSearchVisible && (
        <header 
          className="bg-white p-2 sm:p-4 h-16 sm:h-20 lg:h-28 shadow-sm top-0 z-50 flex w-full items-center absolute"
          style={slideInTop}
        >
          <div className="w-full mx-auto px-2 sm:px-4">
            <div className="flex justify-between items-center h-full">
              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 h-auto" 
                />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-4 xl:space-x-8 p-2 text-gray-900 text-base xl:text-lg">
                <a 
                  href="#" 
                  className={`nav-link Herotransition-colors duration-200 pb-2 ${activeLink === 'Home' ? 'active' : ''}`}
                  onClick={() => setActiveLink('Home')}
                >
                  Home
                </a>
                <a 
                  href="#" 
                  className={`nav-link Herotransition-colors duration-200 pb-2 ${activeLink === 'Events' ? 'active' : ''}`}
                  onClick={() => setActiveLink('Events')}
                >
                  Events
                </a>
                <a 
                  href="#" 
                  className={`nav-link Herotransition-colors duration-200 pb-2 ${activeLink === 'Blog' ? 'active' : ''}`}
                  onClick={() => setActiveLink('Blog')}
                >
                  Blog
                </a>
                <a 
                  href="#" 
                  className={`nav-link Herotransition-colors duration-200 pb-2 ${activeLink === 'Donation' ? 'active' : ''}`}
                  onClick={() => setActiveLink('Donation')}
                >
                  Donation
                </a>
                <a 
                  href="#" 
                  className={`nav-link Herotransition-colors duration-200 pb-2 ${activeLink === 'Contacts' ? 'active' : ''}`}
                  onClick={() => setActiveLink('Contacts')}
                >
                  Contacts
                </a>
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center">
                <Search
                  className="inline-block mr-2 sm:mr-4 cursor-pointer w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-6 font-light opacity-70 hover:opacity-100 scale-on-hover"
                  onClick={() => setIsSearchVisible(true)}
                />
                <button className="bg-[#F66646] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-sm sm:text-base cursor-pointer hover:bg-[#E24D2B] transition-colors duration-200 button-hover">
                  Donate
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <Search
                  className="inline-block mr-3 cursor-pointer w-5 h-5 font-light opacity-70 scale-on-hover"
                  onClick={() => setIsSearchVisible(true)}
                />
                <Menu
                  className="cursor-pointer w-6 h-6 scale-on-hover"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div 
                className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t z-40"
                style={slideDown}
              >
                <nav className="flex flex-col p-4 space-y-4">
                  <a 
                    href="#" 
                    className={`nav-link text-gray-900 Herotransition-colors duration-200 py-2 slide-hover ${activeLink === 'Home' ? 'active' : ''}`}
                    onClick={() => setActiveLink('Home')}
                  >
                    Home
                  </a>
                  <a 
                    href="#" 
                    className={`nav-link text-gray-900 Herotransition-colors duration-200 py-2 slide-hover ${activeLink === 'Events' ? 'active' : ''}`}
                    onClick={() => setActiveLink('Events')}
                  >
                    Events
                  </a>
                  <a 
                    href="#" 
                    className={`nav-link text-gray-900 Herotransition-colors duration-200 py-2 slide-hover ${activeLink === 'Blog' ? 'active' : ''}`}
                    onClick={() => setActiveLink('Blog')}
                  >
                    Blog
                  </a>
                  <a 
                    href="#" 
                    className={`nav-link text-gray-900 Herotransition-colors duration-200 py-2 slide-hover ${activeLink === 'Donation' ? 'active' : ''}`}
                    onClick={() => setActiveLink('Donation')}
                  >
                    Donation
                  </a>
                  <a 
                    href="#" 
                    className={`nav-link text-gray-900 Herotransition-colors duration-200 py-2 slide-hover ${activeLink === 'Contacts' ? 'active' : ''}`}
                    onClick={() => setActiveLink('Contacts')}
                  >
                    Contacts
                  </a>
                  <button className="bg-[#F66646] text-white px-4 py-3 text-center cursor-pointer hover:bg-[#E24D2B] transition-all duration-200 rounded mt-4 button-hover">
                    Donate
                  </button>
                </nav>
              </div>
            )}
          </div>
        </header>
      )}

      {/* Search Overlay */}
      {isSearchVisible && (
        <header 
          className="bg-white p-2 sm:p-4 h-64 sm:h-72 md:h-80 lg:h-96 shadow-sm top-0 z-50 w-full absolute"
          style={slideInTop}
        >
          <div className="w-full mx-auto px-2 sm:px-4">
            <div className="flex justify-between items-center h-16 sm:h-20 lg:h-28">
              <div className="flex" style={slideInLeft}>
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 h-auto" 
                />
              </div>

              <div style={slideInRight}>
                <X
                  className="inline-block mr-2 sm:mr-4 cursor-pointer w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-6 font-light opacity-70 rotate-on-hover"
                  onClick={() => {
                    setIsSearchVisible(false);
                    setIsMobileMenuOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex items-center relative mt-8 sm:mt-12 lg:mt-16">
            <div className="w-full relative" style={fadeIn}>
              <input 
                placeholder="Type words and hit enter"
                className="w-full outline-none border-b-2 border-b-transparent p-2 sm:p-3 text-lg sm:text-xl lg:text-2xl placeholder:text-xl sm:placeholder:text-2xl lg:placeholder:text-3xl placeholder:text-gray-600/20 pb-3 sm:pb-4 caret-black/70 relative z-10"
              />
              {/* Animated border */}
              <div 
                className={`input-border ${showBorderAnimation ? 'animate' : ''}`}
              />
            </div>
            <Search
              className="inline-block cursor-pointer w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-6 font-light opacity-50 hover:opacity-70 scale-on-hover absolute right-4 sm:right-8 md:right-12 lg:right-24 bottom-2 sm:bottom-3"
              style={{...fadeIn, animationDelay: '0.6s'}}
              onClick={() => {
                // Handle search functionality
              }}
            />
          </div>
        </header>
      )}
    </>
  );
}

export default Nav;