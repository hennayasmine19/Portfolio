import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Henna Yasmine
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="nav-link hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#skills" className="nav-link hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="#education" className="nav-link hover:text-blue-600 dark:hover:text-blue-400">Education</a>
            <a href="#certifications" className="nav-link hover:text-blue-600 dark:hover:text-blue-400">Certifications</a>
            <a href="#projects" className="nav-link hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="#languages" className="nav-link hover:text-blue-600 dark:hover:text-blue-400">Languages</a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#about" onClick={closeMenu} className="nav-link py-2 hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#skills" onClick={closeMenu} className="nav-link py-2 hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#education" onClick={closeMenu} className="nav-link py-2 hover:text-blue-600 dark:hover:text-blue-400">Education</a>
              <a href="#certifications" onClick={closeMenu} className="nav-link py-2 hover:text-blue-600 dark:hover:text-blue-400">Certifications</a>
              <a href="#projects" onClick={closeMenu} className="nav-link py-2 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#languages" onClick={closeMenu} className="nav-link py-2 hover:text-blue-600 dark:hover:text-blue-400">Languages</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}