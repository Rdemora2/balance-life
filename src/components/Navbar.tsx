import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link 
              to="/" 
              className={`flex-shrink-0 flex items-center transition-colors duration-300 ${
                isScrolled ? 'text-rose-500' : 'text-white'
              }`}
            >
              <span className="text-2xl font-bold hover-scale inline-block">
                Balance Life
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isScrolled ? 'text-gray-700 hover:text-rose-500' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${isScrolled ? 'text-gray-700 hover:text-rose-500' : ''}`}
            >
              Serviços
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isScrolled ? 'text-gray-700 hover:text-rose-500' : ''}`}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isScrolled ? 'text-gray-700 hover:text-rose-500' : ''}`}
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md
                       transition-colors duration-300 ${
                         isScrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white hover:text-gray-200'
                       }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700
                       hover:text-rose-500 hover:bg-gray-50 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700
                       hover:text-rose-500 hover:bg-gray-50 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700
                       hover:text-rose-500 hover:bg-gray-50 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700
                       hover:text-rose-500 hover:bg-gray-50 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;