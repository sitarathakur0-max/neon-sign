import React, { useState } from 'react';
import { Page, SignageItem } from '../types';
import { ImageFallback } from '../components/ImageFallback';
import { SIGNAGE_ITEMS } from '../data/business';
import { Info, ArrowRight, Eye, X, Check } from 'lucide-react';

interface GalleryPageProps {
  setCurrentPage: (page: Page) => void;
  onSelectSignForQuote: (signType: string, preferredStyle?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  setCurrentPage,
  onSelectSignForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<SignageItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Concepts' },
    { id: 'shop', label: 'Retail Shopfronts' },
    { id: 'led', label: 'LED Neon Scripts' },
    { id: 'reception', label: 'Reception & Interior' },
    { id: 'outdoor', label: 'Commercial Lightboxes' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? SIGNAGE_ITEMS
      : SIGNAGE_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
          <span>Design Gallery</span>
          <span aria-hidden="true">·</span>
          <span>Aesthetic Reference</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Curated Signage Design Concepts
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Browse visual concepts illustrating varied lighting temperatures, letter depths, and mounting aesthetics across retail, hospitality, corporate, and commercial environments.
        </p>

        {/* Clear Disclosure Notice */}
        <div className="p-4 bg-[#141722] border border-purple-500/30 rounded-xl flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Conceptual Showcase Notice:</strong> The images displayed in this gallery are curated AI-generated conceptual designs created to demonstrate architectural signage styles and illumination possibilities. They are not represented as completed past projects by this business. All customer signage is manufactured custom to order based on agreed technical specifications.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-white/5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-purple-600 text-white font-semibold'
                : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#12151e] border border-white/10 rounded-xl overflow-hidden flex flex-col group hover:border-purple-500/40 transition-colors"
          >
            <div className="relative">
              <ImageFallback
                src={item.image}
                alt={item.alt}
                aspectRatioClass="aspect-[4/3]"
              />
              <button
                type="button"
                onClick={() => setActiveModalItem(item)}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-[2px] cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Inspect Details</span>
              </button>
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium text-purple-300">
                {item.categoryLabel}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Illumination:</span>
                    <span className="text-slate-300 font-medium">{item.illuminationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Placement:</span>
                    <span className="text-slate-300 font-medium">{item.placement}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(item)}
                  className="flex-1 py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-center cursor-pointer"
                >
                  View Details
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectSignForQuote(item.categoryLabel, item.title);
                    setCurrentPage('contact');
                  }}
                  className="py-2 px-3 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#121620] border border-white/15 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative">
              <ImageFallback
                src={activeModalItem.image}
                alt={activeModalItem.alt}
                aspectRatioClass="aspect-[16/10]"
              />
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs text-purple-300 font-medium">
                Concept Illustration
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  {activeModalItem.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-[#0d0f15] rounded-xl text-xs border border-white/5">
                <div>
                  <span className="text-slate-500 block mb-0.5">Illumination Technique</span>
                  <span className="text-white font-medium">{activeModalItem.illuminationType}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">Suitable Environment</span>
                  <span className="text-white font-medium">{activeModalItem.placement}</span>
                </div>
              </div>

              <div className="p-3 bg-purple-950/20 border border-purple-500/20 rounded-lg text-xs text-slate-400 flex items-start gap-2">
                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  Interested in this aesthetic? Click below to load this style into the quotation request form.
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectSignForQuote(activeModalItem.categoryLabel, activeModalItem.title);
                    setActiveModalItem(null);
                    setCurrentPage('contact');
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-purple-900/30"
                >
                  <span>Request Quote for this Concept</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
