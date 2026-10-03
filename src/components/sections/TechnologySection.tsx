import React from 'react';
import { motion } from 'framer-motion';

const TECH_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_095750_32a52ce0-2005-45c9-9093-41f03fde9530.mp4';

interface FeatureCard {
  title: string;
  description: string;
}

const FEATURES: FeatureCard[] = [
  {
    title: 'Visual Reasoning',
    description: 'High-resolution image understanding, chart interpretation, and visual QA.',
  },
  {
    title: 'Edge Optimization',
    description: '1B and 3B models quantized for lightning-fast on-device execution.',
  },
  {
    title: '128K Context',
    description: 'Massive context length with near-perfect retrieval fidelity across documents.',
  },
  {
    title: 'Agentic Tooling',
    description: 'Native zero-shot function calling and structured JSON output for complex agents.',
  },
];

export const TechnologySection: React.FC = () => {
  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black flex flex-col justify-between px-8 sm:px-12 md:px-16 py-12 sm:py-16">
      {/* Background Video #4 (autoplay, muted, loop) */}
      <video
        src={TECH_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50"
      />

      {/* Subtle top and bottom dark gradients */}
      <div
        className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
        }}
      />

      {/* Top Area */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between md:items-start gap-6 w-full pt-6">
        {/* Left Heading */}
        <motion.h2
          className="text-white font-light text-[clamp(36px,8vw,72px)] leading-[0.95] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.215, 0.61, 0.355, 1.0] }}
        >
          Multimodal
          <br />
          Intelligence
        </motion.h2>

        {/* Right Paragraph */}
        <motion.p
          className="text-white/50 text-[13px] sm:text-[15px] leading-relaxed max-w-xs md:text-right md:pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
        >
          Llama 3.2 integrates vision adapter weights directly into the core transformer.
          Optimized for Qualcomm, MediaTek, and Arm hardware from day one.
        </motion.p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Grid */}
      <motion.div
        className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 w-full pb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.0, delay: 0.3 }}
      >
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1.0],
            }}
          >
            <h3 className="text-white text-[14px] sm:text-[16px] font-normal mb-2">
              {feature.title}
            </h3>
            <p className="text-white/40 text-[12px] sm:text-[14px] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
