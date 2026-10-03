import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SynapseXLogo } from './SynapseXLogo';
import { SquashHamburger } from './SquashHamburger';
import { ScrambleText } from './ScrambleText';
import { MetaLogo } from './MetaLogo';

interface NavbarProps {
  entranceComplete: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ entranceComplete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);

  const scrollToSection = (targetY: number) => {
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  const springConfig = {
    type: 'spring' as const,
    stiffness: 350,
    damping: 28,
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 h-20 z-50 px-4 sm:px-6 md:px-8 flex items-center justify-between pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* DESKTOP NAVBAR (hidden below sm) */}
      <div className="hidden sm:flex items-center justify-between w-full pointer-events-auto">
        {/* Left group: Logo Pill & Expanding Menu Pill */}
        <div className="flex items-center gap-2">
          {/* Logo Pill */}
          <motion.div
            className={`h-12 px-5 bg-white/15 backdrop-blur-md rounded-[14px] flex items-center gap-2.5 cursor-pointer select-none text-white ${
              isMenuOpen ? 'hidden md:flex' : 'flex'
            }`}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.22)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection(0)}
          >
            <SynapseXLogo className="w-[18px] h-[18px] text-white" />
            <span className="text-[16px] font-medium tracking-tight text-white">Llama 3.2</span>
          </motion.div>

          {/* Expanding Menu Pill */}
          <motion.div
            className="h-12 rounded-[14px] bg-white/15 backdrop-blur-md flex items-center overflow-hidden border border-white/5"
            animate={{ width: isMenuOpen ? 300 : 48 }}
            transition={springConfig}
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center justify-center transition-all duration-200 outline-none ${
                isMenuOpen
                  ? 'w-9 h-9 rounded-[11px] bg-white/10 hover:bg-white/20 ml-1.5'
                  : 'w-12 h-12 rounded-[14px] hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              <SquashHamburger isOpen={isMenuOpen} isMobile={false} />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  className="flex items-center gap-6 pl-4 pr-3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  <button
                    type="button"
                    className="text-[16px] font-normal text-white/85 hover:text-white cursor-pointer transition-colors"
                    onMouseEnter={() => setHoveredLink('about')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => scrollToSection(window.innerHeight)}
                  >
                    <ScrambleText text="Vision" isHovered={hoveredLink === 'about'} />
                  </button>

                  <button
                    type="button"
                    className="text-[16px] font-normal text-white/85 hover:text-white cursor-pointer transition-colors"
                    onMouseEnter={() => setHoveredLink('metrics')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => scrollToSection(window.innerHeight * 2)}
                  >
                    <ScrambleText text="Benchmarks" isHovered={hoveredLink === 'metrics'} />
                  </button>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right: Meta Blog Button */}
        <motion.a
          href="https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 px-4 bg-white rounded-full flex items-center cursor-pointer shadow-lg outline-none select-none"
          whileHover={{ scale: 1.04, backgroundColor: '#e8e8ec' }}
          whileTap={{ scale: 0.97 }}
        >
          <MetaLogo height={18} />
        </motion.a>
      </div>

      {/* MOBILE NAVBAR (visible below sm) */}
      <div className="flex sm:hidden items-center justify-between w-full pointer-events-auto gap-2">
        {/* Mobile Left Area */}
        <div className="flex items-center gap-1.5 flex-1 overflow-hidden">
          {/* Mobile Logo Pill */}
          <motion.div
            className="h-9 px-3 bg-white/15 backdrop-blur-md rounded-[10px] flex items-center gap-2 cursor-pointer select-none overflow-hidden"
            animate={{
              width: isMenuOpen ? 0 : 'auto',
              paddingLeft: isMenuOpen ? 0 : 12,
              paddingRight: isMenuOpen ? 0 : 12,
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={springConfig}
            onClick={() => scrollToSection(0)}
          >
            <SynapseXLogo className="w-3.5 h-3.5 text-white flex-shrink-0" />
            <span className="text-[13px] font-medium tracking-tight text-white whitespace-nowrap">Llama 3.2</span>
          </motion.div>

          {/* Mobile Expanding Menu Pill */}
          <motion.div
            className={`h-9 rounded-[10px] bg-white/15 backdrop-blur-md flex items-center overflow-hidden border border-white/5 ${
              isMenuOpen ? 'flex-1' : 'w-9'
            }`}
            transition={springConfig}
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 flex items-center justify-center flex-shrink-0"
              aria-label="Toggle Mobile Menu"
            >
              <SquashHamburger isOpen={isMenuOpen} isMobile={true} />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  className="flex items-center gap-4 px-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    type="button"
                    className="text-[13px] font-normal text-white/85 hover:text-white cursor-pointer"
                    onClick={() => scrollToSection(window.innerHeight)}
                  >
                    Vision
                  </button>
                  <button
                    type="button"
                    className="text-[13px] font-normal text-white/85 hover:text-white cursor-pointer"
                    onClick={() => scrollToSection(window.innerHeight * 2)}
                  >
                    Benchmarks
                  </button>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile Meta Blog Button */}
        <motion.a
          href="https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 px-3 bg-white rounded-full flex items-center cursor-pointer shadow-md select-none flex-shrink-0"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <MetaLogo height={14} />
        </motion.a>
      </div>
    </motion.header>
  );
};
