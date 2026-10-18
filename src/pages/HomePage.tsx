import React, { useState } from 'react';
import { Page, SignageItem } from '../types';
import { ImageFallback } from '../components/ImageFallback';
import { QuoteForm } from '../components/QuoteForm';
import { BUSINESS_INFO, SIGNAGE_ITEMS, PROCESS_STEPS, APPLICATION_AREAS, FAQS } from '../data/business';
import { ArrowRight, ChevronDown, ChevronUp, Eye, Sparkles, Phone, MapPin } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
  onSelectSignForQuote: (signType: string, preferredStyle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onSelectSignForQuote,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const heroImage = SIGNAGE_ITEMS[0];
  const featuredSigns = SIGNAGE_ITEMS.slice(1, 5);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                <span>Pakpattan Signage Studio</span>
                <span aria-hidden="true">·</span>
                <span>Custom Fabrication</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Make Your Business Impossible to Miss.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Custom illuminated signboards, dimensional 3D channel letters, and LED neon engineered to give storefronts and commercial spaces commanding visibility day and night. Fabricated bespoke per project at Nagina Chowk, Pakpattan.
              </p>

              {/* Verified Trust Strip */}
              <div className="pt-2 pb-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 border-y border-white/5 py-3">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  Nagina Chowk, Pakpattan
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  +92 304 8888059
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span>Illuminated Shopboards & LED Signs</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-900/30 whitespace-nowrap shrink-0"
                >
                  <span>Request a Signage Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentPage('gallery')}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span>Explore Sign Designs</span>
                </button>
              </div>
            </div>

            {/* Right Media Hero Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 glow-accent bg-[#12151e]">
                <ImageFallback
                  src={heroImage.image}
                  alt={heroImage.alt}
                  aspectRatioClass="aspect-[4/3] sm:aspect-[16/10]"
                  className="w-full h-full"
                />
                {/* Minimalist Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-purple-300">Illuminated Studio Facade</span>
                    <span>Conceptual Reference</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Warm white & violet halo illumination with dimensional 3D lettering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURATED VISUAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/5">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-400 block mb-1">
              Curated Illumination Concepts
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Signage Styles & Illumination Profiles
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Conceptual designs generated to demonstrate illumination styles. Every signboard is individually crafted to client specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSigns.map((sign) => (
            <div
              key={sign.id}
              className="bg-[#12151d] border border-white/10 rounded-xl overflow-hidden flex flex-col group hover:border-purple-500/40 transition-colors"
            >
              <div className="relative">
                <ImageFallback
                  src={sign.image}
                  alt={sign.alt}
                  aspectRatioClass="aspect-[4/3]"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium text-slate-300">
                  {sign.categoryLabel}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {sign.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">
                    {sign.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>{sign.illuminationType}</span>
                    <span className="text-slate-400">{sign.placement}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectSignForQuote(sign.categoryLabel, sign.title);
                    setCurrentPage('contact');
                  }}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-purple-300 hover:text-white bg-white/5 hover:bg-purple-600 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Quote for this Style</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS APPLICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f1219] border border-white/10 rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-400 block mb-1">
              Commercial Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Signage Tailored to Your Commercial Venue
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From busy roadside commercial plazas in Pakpattan to interior hospitality environments, each sign is designed for its specific viewing distance and atmospheric context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {APPLICATION_AREAS.map((app, index) => (
              <div
                key={index}
                className="p-6 bg-[#151922] border border-white/5 rounded-xl space-y-3"
              >
                <h3 className="text-base font-bold text-white">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {app.description}
                </p>
                <div className="pt-2 text-xs font-medium text-purple-400">
                  {app.signTypes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN & ORDER PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-400 block mb-1">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our Signage Consultation & Fabrication Process
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            A straightforward process to verify your requirements, finalize lighting preferences, and provide an accurate quote before starting work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#12151d] border border-white/10 rounded-xl p-5 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-2xl font-bold text-purple-400/80 font-mono block mb-2">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setCurrentPage('process')}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Read full process details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-400 block mb-1">
            Questions & Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#12151d] border border-white/10 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-white">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-white/5 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section id="quote-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <QuoteForm />
      </section>
    </div>
  );
};
