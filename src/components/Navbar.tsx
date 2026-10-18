import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Process', page: 'process' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0c0e12]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-xl font-bold tracking-tight text-white hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded cursor-pointer"
        >
          Neon Sign Board
        </button>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded ${
                  isActive
                    ? 'text-white border-b-2 border-purple-500 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-purple-900/30 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            Request Quote
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#10131a] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`block w-full text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-purple-950/50 text-white font-semibold border-l-2 border-purple-500'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
