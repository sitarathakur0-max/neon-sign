import React from 'react';
import { Page } from '../types';
import { ImageFallback } from '../components/ImageFallback';
import { SIGNAGE_ITEMS } from '../data/business';
import { ArrowRight, AlertCircle, Info } from 'lucide-react';

interface SolutionsPageProps {
  setCurrentPage: (page: Page) => void;
  onSelectSignForQuote: (signType: string, preferredStyle?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  setCurrentPage,
  onSelectSignForQuote,
}) => {
  const solutions = [
    {
      id: 'illuminated-shop',
      title: 'Illuminated Shop Signs',
      subtitle: 'Dimensional 3D Channel Letters & Facade Signs',
      image: SIGNAGE_ITEMS.find((s) => s.id === 'concept-aurora-shop') || SIGNAGE_ITEMS[1],
      description:
        'Custom fabricated 3D channel letters with front-lit or halo backlighting designed for retail shopfronts and commercial street visibility. Formed to your exact custom brand lettering.',
      suitability: 'High-street retail, fashion boutiques, electronics showrooms, and commercial shopping centers.',
      illumination: 'Internal LED module backlighting with diffused acrylic or halo illumination.',
      considerations: 'Outdoor weather exposure, front facade depth, and power supply feed.',
    },
    {
      id: 'led-lettering',
      title: 'LED Neon Lettering & Shapes',
      subtitle: 'Flexible Silicone LED Scripts & Accent Signs',
      image: SIGNAGE_ITEMS.find((s) => s.id === 'concept-dreamer-neon') || SIGNAGE_ITEMS[2],
      description:
        'Continuous flexible LED neon tubing styled into custom cursive typography, logos, or geometric icons. Highly popular for interior feature walls, selfie corners, and hospitality spaces.',
      suitability: 'Cafés, restaurants, studios, personal branding, salon backdrops, and event display.',
      illumination: 'Low-voltage vibrant silicone LED neon (available in warm white, cool white, violet, and custom tones).',
      considerations: 'Mainly recommended for indoor use; clear acrylic backing sheet mounting.',
    },
    {
      id: 'reception-signage',
      title: 'Reception & Interior Signage',
      subtitle: 'Corporate Dimensional Lettering & Lobby Boards',
      image: SIGNAGE_ITEMS.find((s) => s.id === 'concept-executive-reception') || SIGNAGE_ITEMS[3],
      description:
        'Architectural dimensional lettering mounted to feature walls behind executive reception desks, conference suites, and corporate office lobbies. Provides a polished, prestigious first impression.',
      suitability: 'Corporate offices, dental and medical clinics, professional consulting suites, and law practices.',
      illumination: 'Subtle halo backlighting (soft 3000K–3500K) or non-illuminated brushed acrylic.',
      considerations: 'Wall texture, mounting pin stand-offs, and concealed low-voltage wire channels.',
    },
    {
      id: 'outdoor-commercial',
      title: 'Outdoor Business Signs & Lightboxes',
      subtitle: 'Heavy-Duty Commercial Lightboxes & Plaza Fascias',
      image: SIGNAGE_ITEMS.find((s) => s.id === 'concept-nexus-lightbox') || SIGNAGE_ITEMS[4],
      description:
        'High-output illuminated commercial lightboxes and large-format fascia boards engineered for building corners and high-visibility plaza locations.',
      suitability: 'Commercial plazas, business centers, multi-unit buildings, and highway-facing businesses.',
      illumination: 'Uniform high-lumen commercial LED modules with weatherproof enclosure.',
      considerations: 'Structural wind load, outdoor weather sealing, and mounting brackets.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
          <span>Signage Solutions</span>
          <span aria-hidden="true">·</span>
          <span>Bespoke Fabrication</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Illuminated Signage & Lettering Solutions
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Explore our primary signage categories. We craft custom boards tailored to your building architecture, visibility requirements, and lighting preferences.
        </p>

        {/* Explicit Disclosure Banner */}
        <div className="p-4 bg-[#141721] border border-purple-500/30 rounded-xl flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Notice on Concepts & Verification:</strong> The visual examples presented on this page are curated conceptual references to help you explore style options. We do not list fixed prices or standardized sizes because every project is quoted individually based on exact dimensions, lighting specifications, and site requirements verified directly with our Pakpattan workshop.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="space-y-16">
        {solutions.map((item, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#11141c] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Media Column */}
              <div
                className={`lg:col-span-6 rounded-xl overflow-hidden border border-white/10 ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <ImageFallback
                  src={item.image.image}
                  alt={item.image.alt}
                  aspectRatioClass="aspect-[4/3]"
                />
                <div className="p-3 bg-[#0c0e13] text-[11px] text-slate-400 flex items-center justify-between border-t border-white/5">
                  <span className="text-purple-300">Style Inspiration Reference</span>
                  <span>{item.image.illuminationType}</span>
                </div>
              </div>

              {/* Information Column */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                    Category 0{index + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <span className="font-semibold text-white block mb-0.5">Recommended Applications:</span>
                    <span className="text-slate-400">{item.suitability}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <span className="font-semibold text-white block mb-0.5">Illumination Technique:</span>
                    <span className="text-slate-400">{item.illumination}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onSelectSignForQuote(item.title, item.subtitle);
                      setCurrentPage('contact');
                    }}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-purple-900/20"
                  >
                    <span>Request Quote for {item.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Callout */}
      <div className="bg-[#141822] border border-white/10 rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-white">Have a Unique Signage Specification?</h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          If your project requires unusual dimensions, dual-tone lighting, or custom logo vector reproduction, contact our workshop directly to discuss fabrication feasibility.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors cursor-pointer"
          >
            Start Custom Quotation
          </button>
        </div>
      </div>
    </div>
  );
};
