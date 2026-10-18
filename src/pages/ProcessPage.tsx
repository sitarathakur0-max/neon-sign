import React from 'react';
import { Page } from '../types';
import { PROCESS_STEPS } from '../data/business';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ProcessPageProps {
  setCurrentPage: (page: Page) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
          <span>Workflow & Engagement</span>
          <span aria-hidden="true">·</span>
          <span>From Concept to Workshop</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          How Custom Signboards Are Planned & Quoted
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Because custom illuminated signage requires accurate electrical sizing, material choices, and wall-mounting preparation, we follow an orderly 5-stage collaboration path.
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-8">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#11141c] border border-white/10 rounded-2xl p-6 sm:p-8 items-start hover:border-purple-500/30 transition-colors"
          >
            {/* Step Number & Header */}
            <div className="md:col-span-4 flex items-start gap-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono">
                {step.step}
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Stage 0{idx + 1}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {step.title}
                </h2>
              </div>
            </div>

            {/* Step Summary & Details */}
            <div className="md:col-span-8 space-y-3">
              <p className="text-sm font-semibold text-purple-300">
                {step.summary}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {step.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Production Notice */}
      <div className="bg-[#141822] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 max-w-4xl">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0" />
          <h3 className="text-base font-bold text-white">
            Honest Information on Timelines & On-Site Installation
          </h3>
        </div>
        <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            We do not advertise arbitrary &ldquo;24-hour turnaround&rdquo; guarantees. Sign fabrication timelines depend on the complexity of your custom lettering, LED density, acrylic availability, and queue volume at the Nagina Chowk workshop.
          </p>
          <p>
            Similarly, on-site physical installation within Pakpattan or surrounding areas is arranged on a case-by-case basis depending on building height, facade surface, and ladder/scaffolding access. Please discuss installation readiness when requesting your quote.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-900/30"
        >
          <span>Begin Stage 01: Request a Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
