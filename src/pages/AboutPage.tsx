import React from 'react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/business';
import { MapPin, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
          <span>About The Business</span>
          <span aria-hidden="true">·</span>
          <span>Verified Local Presence</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Neon Sign Board — Nagina Chowk, Pakpattan
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          A dedicated local signboard business serving retail shops, offices, and commercial establishments in Pakpattan and the surrounding Punjab region with custom illuminated signage.
        </p>
      </div>

      {/* Verified Business Profile Card */}
      <div className="bg-[#11141c] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
        <h2 className="text-xl font-bold text-white border-b border-white/5 pb-4">
          Public Listing & Business Profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div className="p-4 bg-white/5 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
              Official Business Name
            </span>
            <span className="text-base font-bold text-white">
              {BUSINESS_INFO.name}
            </span>
          </div>

          <div className="p-4 bg-white/5 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
              Primary Category
            </span>
            <span className="text-base font-semibold text-white">
              {BUSINESS_INFO.category}
            </span>
          </div>

          <div className="p-4 bg-white/5 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
              Location
            </span>
            <span className="text-base font-semibold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              {BUSINESS_INFO.location}
            </span>
          </div>

          <div className="p-4 bg-white/5 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
              Direct Phone Line
            </span>
            <span className="text-base font-semibold text-white flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-400 shrink-0" />
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="hover:text-purple-300 transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </span>
          </div>
        </div>

        {/* Focus & Craftsmanship */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <h3 className="text-lg font-bold text-white">
            Custom Illuminated Craftsmanship
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            In business storefronts, visual distinction is paramount. Signboards function as the architectural face of any company, helping customers locate premises easily and creating lasting impressions.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            At Neon Sign Board, work focuses on dimensional acrylic channel letters, silicone LED neon script for interior and hospitality accents, corporate reception backlighting, and heavy-duty outdoor fascia lightboxes.
          </p>
        </div>

        {/* Commitment to Transparency */}
        <div className="p-5 bg-[#151923] border border-purple-500/20 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Honest & Verified Information</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            We value client trust above all. We do not invent fabricated founding stories, synthetic awards, or generic star ratings. All technical specifications, materials (acrylic thickness, LED brands, power transformers), and prices are communicated honestly and verified per individual quotation.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center space-y-4 pt-2">
        <h3 className="text-xl font-bold text-white">
          Plan Your Next Signboard with Us
        </h3>
        <p className="text-sm text-slate-400 max-w-lg mx-auto">
          Reach out by phone or submit your project details online to receive a verified, transparent quotation for your business sign.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-900/30"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
