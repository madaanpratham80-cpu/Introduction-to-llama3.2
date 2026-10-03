import React from 'react';
import { SynapseXLogo } from '../SynapseXLogo';

const FOOTER_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_080203_fd7f4f85-3a86-4837-8192-85e7bfe68e75.mp4';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-black overflow-hidden border-t border-white/10">
      <div className="flex flex-col md:flex-row min-h-[400px] w-full">
        {/* Left Column: Video Background */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto min-h-[300px] md:min-h-full overflow-hidden">
          <video
            src={FOOTER_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Column: Info & Copyright */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-10 sm:p-16 bg-black z-10">
          {/* Top block */}
          <div>
            {/* Logo + Brand Name */}
            <div className="flex items-center gap-2.5 mb-8">
              <SynapseXLogo className="w-[18px] h-[18px] text-white/70" />
              <span className="text-[15px] font-medium text-white/70 tracking-tight">
                Llama 3.2
              </span>
            </div>

            {/* Description */}
            <p className="text-white/40 text-[14px] sm:text-[15px] leading-relaxed max-w-sm font-normal">
              The next generation of open multimodal intelligence. Built for developers creating
              edge, mobile, and frontier vision applications.
            </p>
          </div>

          {/* Bottom Copyright */}
          <div>
            <p className="text-white/25 text-[12px] mt-12 font-mono">
              &copy; 2026 Meta AI &amp; Llama Community. Released under the Llama 3.2 Community License.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
