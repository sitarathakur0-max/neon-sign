import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ImageFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectRatioClass} flex flex-col items-center justify-center bg-gradient-to-br from-[#12161f] to-[#181d28] border border-white/5 rounded-lg p-6 text-center text-slate-400 ${className}`}
      >
        <Sparkles className="w-8 h-8 text-purple-400/70 mb-2" />
        <span className="text-sm font-medium text-slate-300">{alt}</span>
        <span className="text-xs text-slate-500 mt-1">Illuminated Signage Visual</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className} bg-[#11141a]`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#161a22] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
