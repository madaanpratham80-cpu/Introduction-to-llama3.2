import React from 'react';
import { motion } from 'framer-motion';

const METRICS_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095810_ecea3dd2-fc5e-4e41-8696-4219290b6589.mp4';

interface MetricItem {
  value: string;
  label: string;
}

const METRICS: MetricItem[] = [
  { value: '128K', label: 'Context Length' },
  { value: '11B & 90B', label: 'Vision Parameters' },
  { value: '1B & 3B', label: 'On-Device Edge Models' },
];

export const MetricsSection: React.FC = () => {
  return (
    <section
      id="metrics"
      className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Video #3 (autoplay, muted, loop) */}
      <video
        src={METRICS_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50"
      />

      {/* Top & Bottom gradient overlays */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
        }}
      />

      {/* Centered content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto pt-32 pb-32 px-6 flex flex-col items-center">
        {/* Subtitle */}
        <motion.span
          className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-20 text-center block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Model Specifications & Benchmarks
        </motion.span>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full text-center">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
            >
              <span className="text-white text-[clamp(44px,8vw,80px)] font-light tracking-[-0.04em] leading-none">
                {metric.value}
              </span>
              <span className="text-white/40 text-[13px] sm:text-[15px] mt-4 tracking-wide font-normal">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
