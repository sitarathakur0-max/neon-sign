import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSignType, setSelectedSignType] = useState<string | undefined>(undefined);
  const [selectedPreferredStyle, setSelectedPreferredStyle] = useState<string | undefined>(undefined);

  // Sync with window hash if user reloads or navigates directly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'solutions', 'gallery', 'process', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSignForQuote = (signType: string, preferredStyle?: string) => {
    setSelectedSignType(signType);
    setSelectedPreferredStyle(preferredStyle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0e12] text-slate-100 bg-studio-grid selection:bg-purple-600 selection:text-white">
      {/* Top Bar Contract Compliant Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={navigateToPage} />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={navigateToPage}
            onSelectSignForQuote={handleSelectSignForQuote}
          />
        )}
        {currentPage === 'solutions' && (
          <SolutionsPage
            setCurrentPage={navigateToPage}
            onSelectSignForQuote={handleSelectSignForQuote}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage
            setCurrentPage={navigateToPage}
            onSelectSignForQuote={handleSelectSignForQuote}
          />
        )}
        {currentPage === 'process' && (
          <ProcessPage setCurrentPage={navigateToPage} />
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={navigateToPage} />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            initialSignType={selectedSignType}
            initialPreferredStyle={selectedPreferredStyle}
          />
        )}
      </main>

      {/* Verified Business Minimal Footer */}
      <Footer setCurrentPage={navigateToPage} />
    </div>
  );
}
