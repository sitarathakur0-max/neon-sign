export type Page = 'home' | 'solutions' | 'gallery' | 'process' | 'about' | 'contact';

export interface SignageItem {
  id: string;
  title: string;
  category: 'shop' | 'led' | 'reception' | 'outdoor';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  illuminationType: string;
  placement: 'Indoor' | 'Outdoor' | 'Indoor / Outdoor';
  isConcept: boolean;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  signType: string;
  dimensions?: string;
  placement: 'indoor' | 'outdoor' | 'unsure';
  preferredStyle?: string;
  details: string;
}

export interface QuoteSubmissionResult {
  success: boolean;
  quoteId?: string;
  message?: string;
  error?: string;
}
