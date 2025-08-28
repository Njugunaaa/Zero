import React, { useState, useEffect } from "react";
import logo from "../assets/Logo0.png";
import { Search, X, Menu } from "lucide-react";

function Nav() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBorderAnimation, setShowBorderAnimation] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    if (isSearchVisible) {
      const timer = setTimeout(() => {
        setShowBorderAnimation(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setShowBorderAnimation(false);
    }
  }, [isSearchVisible]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Reservations", href: "/reservations" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 8px;
          left: 0;
          height: 0.1rem;
          background-color: #fff;
          width: 0%;
          transition: width 0.3s ease-out;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* --- Main Navbar --- */}
      {!isSearchVisible && (
        <header className="bg-gray-900 p-2 sm:p-4 h-16 sm:h-20 lg:h-28 shadow-sm top-0 z-50 flex w-full items-center absolute">
          <div className="w-full mx-auto px-2 sm:px-4">
            <div className="flex justify-between items-center h-full">
              {/* Logo */}
              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 h-auto"
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-6 xl:space-x-10 p-2 text-white text-base xl:text-lg">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`nav-link transition-colors duration-200 pb-2 ${
                      activeLink === item.name ? "active" : ""
                    }`}
                    onClick={() => setActiveLink(item.name)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center">
                <Search
                  className="inline-block mr-4 cursor-pointer w-6 h-6 opacity-70 hover:opacity-100 text-white"
                  onClick={() => setIsSearchVisible(true)}
                />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <Search
                  className="inline-block mr-3 cursor-pointer w-5 h-5 opacity-70 text-white"
                  onClick={() => setIsSearchVisible(true)}
                />
                <Menu
                  className="cursor-pointer w-6 h-6 text-white"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute left-0 right-0 top-full bg-gray-900 shadow-lg border-t z-40">
                <nav className="flex flex-col p-4 space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`nav-link text-white transition-colors duration-200 py-2 ${
                        activeLink === item.name ? "active" : ""
                      }`}
                      onClick={() => setActiveLink(item.name)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </header>
      )}

      {/* --- Search Overlay --- */}
      {isSearchVisible && (
        <header className="bg-gray-900 p-2 sm:p-4 h-64 sm:h-72 md:h-80 lg:h-96 shadow-sm top-0 z-50 w-full absolute">
          <div className="w-full mx-auto px-2 sm:px-4">
            <div className="flex justify-between items-center h-16 sm:h-20 lg:h-28">
              <a href="/" className="flex">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 h-auto"
                />
              </a>
              <X
                className="inline-block cursor-pointer w-6 h-6 opacity-70 text-white"
                onClick={() => {
                  setIsSearchVisible(false);
                  setIsMobileMenuOpen(false);
                }}
              />
            </div>
          </div>

          <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex items-center relative mt-8 sm:mt-12 lg:mt-16">
            <div className="w-full relative">
              <input
                placeholder="Type words and hit enter"
                className="w-full outline-none border-b-2 border-white p-3 text-xl placeholder:text-gray-300 bg-transparent text-white"
              />
              <Search className="absolute right-4 bottom-3 w-6 h-6 opacity-50 text-white" />
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Nav;
