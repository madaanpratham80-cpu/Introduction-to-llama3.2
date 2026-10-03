import React from 'react';

interface MetaWordmarkProps {
  height?: number;
  className?: string;
}

/**
 * Full Meta wordmark — blue gradient infinity loop + "Meta" logotype.
 * Designed to sit on a white/light background.
 */
export const MetaLogo: React.FC<MetaWordmarkProps> = ({ height = 22, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 468 100"
      height={height}
      aria-label="Meta"
      className={className}
      style={{ display: 'inline-block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="meta-loop-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%"   stopColor="#0064E0" />
          <stop offset="40%"  stopColor="#0064E0" />
          <stop offset="100%" stopColor="#00C7FF" />
        </linearGradient>
        <linearGradient id="meta-loop-grad-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#0082FB" />
          <stop offset="100%" stopColor="#0064E0" />
        </linearGradient>
      </defs>

      {/* ── Infinity / loop mark ── */}
      {/*
        The Meta "M" infinite loop is drawn as two overlapping ovals.
        Left oval: centred at ~(50,50), right oval centred at ~(98,50).
        Stroke-based for crisp gradient rendering.
      */}
      <g>
        {/* Left lobe */}
        <path
          d="M 9,50
             C 9,29 22,15 39,15
             C 54,15 64,25 76,50
             C 64,75 54,85 39,85
             C 22,85 9,71 9,50 Z"
          fill="none"
          stroke="url(#meta-loop-grad)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Right lobe */}
        <path
          d="M 76,50
             C 88,25 98,15 113,15
             C 130,15 143,29 143,50
             C 143,71 130,85 113,85
             C 98,85 88,75 76,50 Z"
          fill="none"
          stroke="url(#meta-loop-grad-b)"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>

      {/* ── "Meta" wordmark ── */}
      <text
        x="172"
        y="72"
        fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="500"
        fontSize="68"
        letterSpacing="-1"
        fill="#1c2b33"
      >
        Meta
      </text>
    </svg>
  );
};

export default MetaLogo;
