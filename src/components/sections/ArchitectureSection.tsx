import React from 'react';
import { motion } from 'framer-motion';

interface LayerItem {
  layer: string;
  name: string;
}

const LAYERS: LayerItem[] = [
  { layer: 'Layer 1: Edge', name: '1B & 3B Text' },
  { layer: 'Layer 2: Vision', name: '11B & 90B Multimodal' },
  { layer: 'Layer 3: Runtime', name: 'ExecuTorch & PyTorch' },
];

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center">
        {/* Heading Block */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, ease: [0.215, 0.61, 0.355, 1.0] }}
        >
          <span className="text-white/40 text-[13px] sm:text-[14px] tracking-[0.2em] uppercase mb-8 block">
            Architecture & Training
          </span>

          <h2 className="text-white font-light text-[clamp(28px,6vw,56px)] leading-[1.15] tracking-[-0.02em] mb-10">
            Three tiers. Infinite scale.
          </h2>

          <p className="text-white/45 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
            Dense text backbones trained on trillions of diverse tokens. Cross-attention vision
            adapters encode high-resolution visual tokens directly into language space. Lightweight
            quantized runtime engines deploy across edge silicon.
          </p>
        </motion.div>

        {/* Layer Cards */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {LAYERS.map((item, index) => (
            <motion.div
              key={item.layer}
              className="w-full max-w-md h-[72px] border border-white/10 rounded-lg flex items-center justify-between px-6 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all duration-300 group hover:bg-white/[0.04]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
            >
              <span className="text-white/30 text-[12px] tracking-[0.15em] uppercase font-mono group-hover:text-white/50 transition-colors">
                {item.layer}
              </span>
              <span className="text-white text-[16px] sm:text-[18px] font-light">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
