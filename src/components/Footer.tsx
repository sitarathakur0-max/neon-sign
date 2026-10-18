import React from 'react';
import { Page } from '../types';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handlePageClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080a0e] border-t border-white/5 pt-12 pb-10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/5">
          {/* Brand & Category */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {BUSINESS_INFO.category}. Studio providing custom illuminated signboards, 3D channel letters, and LED signage for storefronts and business spaces.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Studio Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Signage Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Design Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Business
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Verified Business Details
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium text-slate-200"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                Specific signage production, material options, and installation arrangements are confirmed directly with the business.
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Copyright and Honesty statement */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Pakpattan, Punjab, Pakistan.
          </p>
          <p className="text-slate-500 text-center sm:text-right">
            All design concepts are showcased for visual reference. Inquiries are processed directly.
          </p>
        </div>
      </div>
    </footer>
  );
};
