import React from 'react';
import { QuoteForm } from '../components/QuoteForm';
import { BUSINESS_INFO } from '../data/business';
import { Phone, MapPin, CheckCircle, ShieldCheck, Clock } from 'lucide-react';

interface ContactPageProps {
  initialSignType?: string;
  initialPreferredStyle?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialSignType,
  initialPreferredStyle,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
          <span>Direct Studio Contact & Quotations</span>
          <span aria-hidden="true">·</span>
          <span>Pakpattan, Punjab</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Request a Custom Signage Quote
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Provide your business name and signage specifications below. Our workshop reviews dimensions, lighting requirements, and fabrication feasibility before issuing your quotation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info & Verified Details (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#11141c] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-bold text-white border-b border-white/5 pb-4">
              Verified Studio Details
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                    Workshop Location
                  </span>
                  <span className="text-slate-200 font-medium">
                    {BUSINESS_INFO.location}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Central Pakpattan market hub
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-base text-white hover:text-purple-300 font-bold transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Direct call or SMS for quotation inquiries
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-3">
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                What to Include in Your Request
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Exact spelling of business name or custom slogan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Sign type (Channel letters, LED neon, or lightbox)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Approximate wall or facade dimensions if known</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Indoor room accent vs outdoor exterior placement</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-[#151924] border border-purple-500/20 rounded-xl text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-purple-300">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Direct Workshop Response</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Quotations are prepared with actual material gauge and component costs. No unsolicited marketing messages.
              </p>
            </div>
          </div>
        </div>

        {/* Quotation Form (7 columns) */}
        <div className="lg:col-span-7">
          <QuoteForm
            initialSignType={initialSignType}
            initialPreferredStyle={initialPreferredStyle}
          />
        </div>
      </div>
    </div>
  );
};
