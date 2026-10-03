import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const SECTION2_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4';

export const CinematicTextSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 32,
    mass: 1.8,
  });

  const yScaleValue = useTransform(smoothProgress, [0, 1], [60, -120]);
  const opacity = useTransform(smoothProgress, [0.15, 0.3, 0.5, 0.7, 0.85], [0, 0.8, 1, 0.8, 0.2]);

  const transform = useMotionTemplate`perspective(400px) rotateX(24deg) translateY(${yScaleValue}px) translateZ(15px)`;

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Video #2 (autoplay, muted, loop) */}
      <video
        src={SECTION2_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
      />

      {/* Top gradient overlay (180px height) */}
      <div
        className="absolute top-0 left-0 right-0 h-[180px] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, #010103 0%, transparent 100%)',
        }}
      />

      {/* Bottom gradient overlay to blend into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, #000000 0%, transparent 100%)',
        }}
      />

      {/* Centered 3D Text Container */}
      <div className="relative z-20 max-w-5xl mx-auto flex items-center justify-center px-4" style={{ perspective: '400px' }}>
        <motion.p
          style={{
            transform,
            opacity,
          }}
          className="font-sans font-normal text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-white leading-[1.35] tracking-[-0.02em] select-none px-6 sm:px-12 text-center will-change-transform drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
        >
          A state-of-the-art collection of multilingual multimodal models. Llama 3.2
          seamlessly integrates visual reasoning with high-throughput language comprehension.
          From lightweight 1B and 3B edge models to 11B and 90B vision architectures, intelligence
          now runs natively on mobile devices and distributed infrastructure. Open weights.
          Uncompromised efficiency.
        </motion.p>
      </div>
    </section>
  );
};
