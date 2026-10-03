import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ScrambleIn } from '../ScrambleIn';

interface HeroSectionProps {
  entranceComplete: boolean;
}

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4';

export const HeroSection: React.FC<HeroSectionProps> = ({ entranceComplete }) => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isSeekingRef = useRef<boolean>(false);
  const pendingSeekTimeRef = useRef<number | null>(null);

  // Motion values for smooth 3D tilt tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 120, damping: 25, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothMouseX, [0, 1], [-7, 7]);
  const rotateX = useTransform(smoothMouseY, [0, 1], [5, -5]);
  const translateVideoX = useTransform(smoothMouseX, [0, 1], [-15, 15]);
  const translateVideoY = useTransform(smoothMouseY, [0, 1], [-10, 10]);

  // Attempt seek to target time smoothly
  const performSeek = (time: number) => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    const clamped = Math.max(0.001, Math.min(video.duration - 0.001, time));

    if (!isSeekingRef.current) {
      isSeekingRef.current = true;
      try {
        video.currentTime = clamped;
      } catch {
        isSeekingRef.current = false;
      }
    } else {
      pendingSeekTimeRef.current = clamped;
    }
  };

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video) return;

    if (pendingSeekTimeRef.current !== null) {
      const nextTime = pendingSeekTimeRef.current;
      pendingSeekTimeRef.current = null;
      try {
        video.currentTime = nextTime;
      } catch {
        isSeekingRef.current = false;
      }
    } else {
      isSeekingRef.current = false;
    }
  };

  const updateCursorTracking = (clientX: number, clientY: number) => {
    const normX = Math.max(0, Math.min(1, clientX / window.innerWidth));
    const normY = Math.max(0, Math.min(1, clientY / window.innerHeight));

    mouseX.set(normX);
    mouseY.set(normY);

    const video = videoRef.current;
    if (video && video.duration && !isNaN(video.duration)) {
      const duration = video.duration;
      // Map horizontal cursor position (0 -> 1) directly to video duration for head turning
      const targetTime = normX * duration;
      performSeek(targetTime);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleLoadedMetadata = () => {
      // Initialize llama to center gaze
      if (video.duration) {
        performSeek(video.duration * 0.5);
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const handleWindowMouseMove = (e: MouseEvent) => {
      // Only track if page is near the top
      if (window.scrollY < window.innerHeight * 0.9) {
        updateCursorTracking(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    updateCursorTracking(e.clientX, e.clientY);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black select-none cursor-crosshair perspective-[1200px]"
      onPointerMove={handlePointerMove}
    >
      {/* 3D Parallax Video Wrapper */}
      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none origin-center"
        style={{
          rotateX,
          rotateY,
          x: translateVideoX,
          y: translateVideoY,
          scale: 1.06,
        }}
      >
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          playsInline
          muted
          preload="auto"
          onSeeked={handleSeeked}
          className="w-full h-full object-cover pointer-events-none opacity-85 will-change-transform"
        />
      </motion.div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Large background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <span
          className="hero-watermark uppercase font-bold tracking-[-4px] select-none text-center"
          style={{
            fontSize: 'clamp(120px, 30vw, 521px)',
            opacity: 0.1,
            transform: 'translateY(50px)',
            lineHeight: 0.85,
          }}
        >
          MULTIMODAL
        </span>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-20 w-full h-full flex flex-col px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
      >
        {/* Flex spacer pushing content to bottom */}
        <div className="flex-1" />

        {/* Bottom Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between w-full pointer-events-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)]">
              <ScrambleIn text="Vision" delay={200} triggered={entranceComplete} />
              <br />
              <ScrambleIn text="And Edge" delay={500} triggered={entranceComplete} />
            </h1>

            <motion.p
              className="max-w-sm text-[13px] sm:text-[15px] text-white/60 leading-relaxed font-normal"
              initial={{ y: 25, opacity: 0 }}
              animate={entranceComplete ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
            >
              Built at the frontier of on-device AI and visual reasoning. Llama 3.2 brings small and
              medium-sized vision LLMs alongside ultra-efficient 1B and 3B text models that fit on
              mobile devices and power real-time multimodal intelligence.
            </motion.p>
          </div>

          {/* Right Column h1 */}
          <div className="text-left md:text-right">
            <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)]">
              <ScrambleIn text="Open" delay={700} triggered={entranceComplete} />
              <br />
              <ScrambleIn text="Weights" delay={1000} triggered={entranceComplete} />
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
