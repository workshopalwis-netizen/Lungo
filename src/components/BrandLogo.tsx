import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'caramel';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';
  const isCaramel = variant === 'caramel';

  // Dimension presets
  const sizeMap = {
    sm: { icon: 34, text: 'text-lg', sub: 'text-[9px] tracking-[0.25em]' },
    md: { icon: 42, text: 'text-xl', sub: 'text-[10px] tracking-[0.3em]' },
    lg: { icon: 54, text: 'text-2xl', sub: 'text-[11px] tracking-[0.35em]' },
    xl: { icon: 72, text: 'text-3xl', sub: 'text-xs tracking-[0.4em]' },
  };

  const currentSize = sizeMap[size];

  // Color mappings
  const textColor = isCaramel
    ? 'text-caramel'
    : isLight
    ? 'text-cream-soft'
    : 'text-espresso-700';

  const subColor = isCaramel
    ? 'text-caramel-light'
    : isLight
    ? 'text-cream-dark/70'
    : 'text-espresso-500/80';

  const strokeColor = isCaramel ? '#B9824B' : isLight ? '#F6F0E6' : '#2B1B16';
  const fillColor = strokeColor;

  return (
    <a
      href="#home"
      className={`group flex items-center gap-3.5 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel rounded-lg transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="LUNGO Sri Lanka - Home"
    >
      {/* Official LUNGO Insignia Vector SVG */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:rotate-6">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Outer Border */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            stroke={strokeColor}
            strokeWidth="5"
            rx="4"
          />
          {/* Inner Inset Border */}
          <rect
            x="11"
            y="11"
            width="78"
            height="78"
            stroke={strokeColor}
            strokeWidth="2.5"
            rx="2"
          />
          {/* Corner Studs */}
          <circle cx="21" cy="21" r="4.5" fill={fillColor} />
          <circle cx="79" cy="21" r="4.5" fill={fillColor} />
          <circle cx="21" cy="79" r="4.5" fill={fillColor} />
          <circle cx="79" cy="79" r="4.5" fill={fillColor} />
          
          {/* Medallion Outer Circle */}
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke={strokeColor}
            strokeWidth="3.5"
          />
          
          {/* 4 Diagonal Dot Accents */}
          <circle cx="34" cy="34" r="3" fill={fillColor} />
          <circle cx="66" cy="34" r="3" fill={fillColor} />
          <circle cx="34" cy="66" r="3" fill={fillColor} />
          <circle cx="66" cy="66" r="3" fill={fillColor} />

          {/* Central 4-Lobe Coffee Blossom / Rosette */}
          <path
            d="M 50 28 C 55 38 62 45 72 50 C 62 55 55 62 50 72 C 45 62 38 55 28 50 C 38 45 45 38 50 28 Z"
            fill={fillColor}
          />
          {/* Internal Star Center Cutout */}
          <path
            d="M 50 42 C 52 46 54 48 58 50 C 54 52 52 54 50 58 C 48 54 46 52 42 50 C 46 48 48 46 50 42 Z"
            fill={isLight ? '#201A17' : '#F6F0E6'}
          />
          <circle cx="50" cy="50" r="2.5" fill={fillColor} />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-display font-extrabold uppercase tracking-[0.22em] leading-none ${currentSize.text} ${textColor} transition-colors duration-300`}
        >
          LUNGO
        </span>
        {showSubtitle && (
          <span
            className={`font-sans uppercase font-medium mt-1 ${currentSize.sub} ${subColor}`}
          >
            SRI LANKA
          </span>
        )}
      </div>
    </a>
  );
};
