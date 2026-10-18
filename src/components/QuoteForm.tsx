import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Search, ArrowRight } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteFormProps {
  initialSignType?: string;
  initialPreferredStyle?: string;
  onSuccess?: (quoteId: string) => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialSignType,
  initialPreferredStyle,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    signType: initialSignType || 'Illuminated Shop Sign',
    dimensions: '',
    placement: 'outdoor',
    preferredStyle: initialPreferredStyle || '',
    details: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    quoteId: string;
    message: string;
  } | null>(null);

  // Status Tracker State
  const [trackerMode, setTrackerMode] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [trackerLoading, setTrackerLoading] = useState(false);
  const [trackerResult, setTrackerResult] = useState<any | null>(null);
  const [trackerError, setTrackerError] = useState<string | null>(null);

  useEffect(() => {
    if (initialSignType) {
      setFormData((prev) => ({ ...prev, signType: initialSignType }));
    }
    if (initialPreferredStyle) {
      setFormData((prev) => ({ ...prev, preferredStyle: initialPreferredStyle }));
    }
  }, [initialSignType, initialPreferredStyle]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      setErrorMessage('Please provide a valid phone number (e.g., 0304 8888059 or +92 304 8888059).');
      return;
    }

    if (!formData.details.trim() || formData.details.trim().length < 5) {
      setErrorMessage('Please provide brief project requirements or questions (minimum 5 characters).');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Server rejected the request.');
      }

      setSuccessInfo({
        quoteId: data.quoteId,
        message: data.message,
      });

      if (onSuccess) {
        onSuccess(data.quoteId);
      }

      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        signType: 'Illuminated Shop Sign',
        dimensions: '',
        placement: 'outdoor',
        preferredStyle: '',
        details: '',
      });
    } catch (err: any) {
      console.error('Quote submission error:', err);
      setErrorMessage(
        err.message ||
          'Failed to connect to the quotation backend. Please ensure the server is running or call +92 304 8888059 directly.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleTrackLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setTrackerError(null);
    setTrackerResult(null);

    const cleanId = trackingId.trim();
    if (!cleanId) {
      setTrackerError('Please enter a quote reference ID (e.g. NSB-2026-1234).');
      return;
    }

    setTrackerLoading(true);
    try {
      const res = await fetch(`/api/quotes/${encodeURIComponent(cleanId)}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Quote reference ID not found.');
      }
      setTrackerResult(data.quote);
    } catch (err: any) {
      setTrackerError(err.message || 'Could not find that quote reference ID.');
    } finally {
      setTrackerLoading(false);
    }
  };

  return (
    <div className="bg-[#12151d] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
      {/* Mode Switch: Request Quote vs Track Quote */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-400">
            {trackerMode ? 'Reference Verification' : 'Direct Studio Quotation'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            {trackerMode ? 'Check Inquiry Status' : 'Request a Signage Quote'}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => {
            setTrackerMode(!trackerMode);
            setErrorMessage(null);
            setTrackerError(null);
          }}
          className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer"
        >
          {trackerMode ? 'Switch to Quote Form' : 'Track Existing Quote'}
        </button>
      </div>

      {trackerMode ? (
        /* Tracker Sub-form */
        <div className="space-y-6">
          <p className="text-sm text-slate-400">
            Enter the reference ID you received after submitting your inquiry to verify its status in our workshop registry.
          </p>

          <form onSubmit={handleTrackLookup} className="space-y-4">
            <div>
              <label htmlFor="trackId" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Quotation Reference ID *
              </label>
              <div className="flex gap-2">
                <input
                  id="trackId"
                  type="text"
                  placeholder="e.g. NSB-2026-4819"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1 bg-[#0c0e13] border border-white/15 focus:border-purple-500 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  disabled={trackerLoading}
                  className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium text-sm flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {trackerLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  <span>Search</span>
                </button>
              </div>
            </div>

            {trackerError && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-lg text-xs text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{trackerError}</span>
              </div>
            )}

            {trackerResult && (
              <div className="mt-4 p-5 bg-[#171b24] border border-purple-500/30 rounded-xl space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-400">Reference:</span>
                  <span className="text-sm font-bold text-purple-300">{trackerResult.id}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 block">Sign Type</span>
                    <span className="text-slate-200 font-medium">{trackerResult.signType}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Placement</span>
                    <span className="text-slate-200 font-medium capitalize">{trackerResult.placement}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Status</span>
                    <span className="text-emerald-400 font-medium uppercase tracking-wider">
                      {trackerResult.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Submitted</span>
                    <span className="text-slate-300">
                      {new Date(trackerResult.receivedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 pt-2 border-t border-white/5">
                  Direct inquiries regarding this reference can be verified by phone at +92 304 8888059.
                </p>
              </div>
            )}
          </form>
        </div>
      ) : (
        /* Main Quotation Form */
        <div>
          {successInfo ? (
            <div className="p-6 sm:p-8 bg-purple-950/20 border border-purple-500/30 rounded-xl space-y-4 text-center">
              <CheckCircle2 className="w-12 h-12 text-purple-400 mx-auto" />
              <h4 className="text-xl font-bold text-white">Quotation Request Received</h4>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                {successInfo.message}
              </p>
              <div className="inline-block bg-[#0c0e13] border border-white/10 rounded-lg px-4 py-2 my-2">
                <span className="text-xs text-slate-400 block">Your Quote Reference ID</span>
                <span className="text-base font-bold text-purple-300 tracking-wider">
                  {successInfo.quoteId}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                You can save this reference ID to track status or quote directly when calling our Pakpattan workshop at +92 304 8888059.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSuccessInfo(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div
                  role="alert"
                  className="p-3.5 bg-red-950/40 border border-red-500/30 rounded-lg text-xs text-red-300 flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="clientName"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="clientName"
                    type="text"
                    required
                    placeholder="e.g. Muhammad Usman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0c0e13] border border-white/10 focus:border-purple-500 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none text-sm transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="clientPhone"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Phone / Contact Number *
                  </label>
                  <input
                    id="clientPhone"
                    type="tel"
                    required
                    placeholder="e.g. +92 304 8888059"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0c0e13] border border-white/10 focus:border-purple-500 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sign Type */}
                <div>
                  <label
                    htmlFor="signCategory"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Sign Type *
                  </label>
                  <select
                    id="signCategory"
                    value={formData.signType}
                    onChange={(e) => setFormData({ ...formData, signType: e.target.value })}
                    className="w-full bg-[#0c0e13] border border-white/10 focus:border-purple-500 rounded-lg px-3.5 py-2.5 text-white focus:outline-none text-sm transition-colors cursor-pointer"
                  >
                    <option value="Illuminated Shop Sign">Illuminated Shop Sign (3D Channel Letters)</option>
                    <option value="LED Neon Lettering">LED Neon Lettering (Custom Script / Logo)</option>
                    <option value="Reception Signage">Reception & Interior Wall Signage</option>
                    <option value="Outdoor Commercial Sign">Outdoor Commercial Lightbox / Fascia</option>
                    <option value="Custom Signage Specification">Custom Signage (Other Specification)</option>
                  </select>
                </div>

                {/* Placement */}
                <div>
                  <label
                    htmlFor="placement"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Intended Placement *
                  </label>
                  <select
                    id="placement"
                    value={formData.placement}
                    onChange={(e) => setFormData({ ...formData, placement: e.target.value as any })}
                    className="w-full bg-[#0c0e13] border border-white/10 focus:border-purple-500 rounded-lg px-3.5 py-2.5 text-white focus:outline-none text-sm transition-colors cursor-pointer"
                  >
                    <option value="outdoor">Outdoor (Weather-Resistant Required)</option>
                    <option value="indoor">Indoor (Interior Accent / Lobby)</option>
                    <option value="unsure">Unsure / Need Guidance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Approximate Dimensions (Optional) */}
                <div>
                  <label
                    htmlFor="dimensions"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Approx. Dimensions <span className="text-slate-500 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="dimensions"
                    type="text"
                    placeholder="e.g. 8ft wide x 3ft high, or not known"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full bg-[#0c0e13] border border-white/10 focus:border-purple-500 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none text-sm transition-colors"
                  />
                </div>

                {/* Preferred Style / Visual Reference (Optional) */}
                <div>
                  <label
                    htmlFor="preferredStyle"
                    className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Preferred Style <span className="text-slate-500 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="preferredStyle"
                    type="text"
                    placeholder="e.g. Warm white glow, violet neon cursive"
                    value={formData.preferredStyle}
                    onChange={(e) => setFormData({ ...formData, preferredStyle: e.target.value })}
                    className="w-full bg-[#0c0e13] border border-white/10 focus:border-purple-500 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Project Requirements / Details */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                >
                  Signage Requirements & Business Name *
                </label>
                <textarea
                  id="details"
                  rows={4}
                  required
                  placeholder="State the text or logo you want on your signboard, wall mounting surface type (brick, glass, wood), and any specific design expectations..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#0c0e13] border border-white/10 focus:border-purple-500 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none text-sm transition-colors resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto px-7 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800/50 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-900/20"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Quotation...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>

                <span className="text-xs text-slate-500 text-center sm:text-right">
                  Stored directly in our Pakpattan workshop queue.
                </span>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
