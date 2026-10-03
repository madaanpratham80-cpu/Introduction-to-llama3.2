import React from 'react';
import { motion } from 'framer-motion';

interface SquashHamburgerProps {
  isOpen: boolean;
  isMobile?: boolean;
}

export const SquashHamburger: React.FC<SquashHamburgerProps> = ({ isOpen, isMobile = false }) => {
  const width = isMobile ? 15 : 18;
  const height = isMobile ? 10 : 12;
  const barHeight = isMobile ? 1.2 : 1.5;
  const centerY = (height - barHeight) / 2;

  const springConfig = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  };

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer select-none"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Top Bar */}
      <motion.span
        className="absolute left-0 bg-white rounded-full"
        style={{
          width: '100%',
          height: `${barHeight}px`,
          top: 0,
        }}
        animate={
          isOpen
            ? {
                y: centerY,
                rotate: 45,
              }
            : {
                y: 0,
                rotate: 0,
              }
        }
        transition={springConfig}
      />

      {/* Middle Bar */}
      <motion.span
        className="absolute left-0 bg-white rounded-full"
        style={{
          width: '100%',
          height: `${barHeight}px`,
          top: `${centerY}px`,
        }}
        animate={
          isOpen
            ? {
                opacity: 0,
                scale: 0.3,
              }
            : {
                opacity: 1,
                scale: 1,
              }
        }
        transition={{ duration: 0.15 }}
      />

      {/* Bottom Bar */}
      <motion.span
        className="absolute left-0 bg-white rounded-full"
        style={{
          width: '100%',
          height: `${barHeight}px`,
          bottom: 0,
        }}
        animate={
          isOpen
            ? {
                y: -centerY,
                rotate: -45,
              }
            : {
                y: 0,
                rotate: 0,
              }
        }
        transition={springConfig}
      />
    </div>
  );
};
