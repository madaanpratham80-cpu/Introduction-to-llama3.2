import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { CinematicTextSection } from './components/sections/CinematicTextSection';
import { MetricsSection } from './components/sections/MetricsSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { FooterSection } from './components/sections/FooterSection';

export function App() {
  const [entranceComplete, setEntranceComplete] = useState<boolean>(false);

  useEffect(() => {
    // 800ms entrance animation delay
    const timer = setTimeout(() => {
      setEntranceComplete(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      {/* Fixed Navbar */}
      <Navbar entranceComplete={entranceComplete} />

      {/* Main Landing Content */}
      <main className="w-full bg-black">
        {/* Section 1: Hero */}
        <HeroSection entranceComplete={entranceComplete} />

        {/* Section 2: Cinematic Text (3D Perspective Scroll) */}
        <CinematicTextSection />

        {/* Section 3: Metrics */}
        <MetricsSection />

        {/* Section 4: Technology (Adaptive Intelligence) */}
        <TechnologySection />

        {/* Section 5: Architecture */}
        <ArchitectureSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
