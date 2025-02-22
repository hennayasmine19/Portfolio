import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Henna Yasmine
          </a>
          <div className="flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#languages" className="nav-link">Languages</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}