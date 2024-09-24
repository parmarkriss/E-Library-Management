import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser, faBell, faCog, faBars } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Logo/Name */}
        <div className="text-white font-bold text-xl">E-Library</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 items-center">
          <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md no-underline">Home</a>

          {/* Browse Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-md flex items-center no-underline"
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Browse
              <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-10 bg-white text-blue-700 rounded-md shadow-md mt-2 w-48">
                <Link to={'/trending-books'} className="block px-4 py-2 hover:bg-blue-100 no-underline">Trending</Link>
                <Link to={'/new-books'} className="block px-4 py-2 hover:bg-blue-100 no-underline">New Books</Link>
              </div>
            )}
          </div>

          <a href="/add-books" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md no-underline">Forms</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-white px-3 py-2 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={faBars} /> {/* Hamburger icon */}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-600 text-white shadow-md mobile-menu">
            <Link to={'/'} className="block px-4 py-2 hover:bg-gray-700">Home</Link>
            <Link to={'/add-books'} className="block px-4 py-2 hover:bg-gray-700">Forms</Link>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md flex items-center no-underline"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Browse
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-10 bg-white text-blue-700 rounded-md shadow-md mt-2 w-full">
                  <Link to={'/trending-books'} className="block px-4 py-2 hover:bg-blue-100 no-underline">Trending</Link>

                  <Link to={'/new-books'} className="block px-4 py-2 hover:bg-blue-100 no-underline">New Books</Link>
                </div>
              )}
            </div>
          </nav>
        )}

        {/* Icons for Logged-In Users - Only visible on desktop */}
        <div className="hidden md:flex space-x-4">
          <FontAwesomeIcon icon={faUser} className="text-white hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="text-white hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faCog} className="text-white hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
