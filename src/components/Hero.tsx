import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

function Hero() {
  // State to control when to show non-critical animations
  const [showAnimations, setShowAnimations] = useState(false);

  // After component mounts and LCP likely happened, enable animations
  useEffect(() => {
    // Delay non-critical animations until after LCP likely occurred
    const timer = setTimeout(() => {
      setShowAnimations(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-0 overflow-hidden">
      {/* Preload critical images */}
      <link rel="preload" as="image" href="/boliviainteligente-pE3nbuHJOak-unsplash.jpg" />
      <link rel="preload" as="image" href="/1710339211464.jpeg" />
      
      {/* Simplified background with reduced initial processing */}
      <div 
        className="absolute inset-0 bg-[#0A192F]"
      />
      
      {/* Load actual background image after initial render */}
      {showAnimations && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-300"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.8)),
              url("/boliviainteligente-pE3nbuHJOak-unsplash.jpg")`,
            backgroundSize: 'cover'
          }}
        />
      )}
      
      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A192F] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-6 px-4 md:px-0">
          <div className="space-y-2">
            <span className="text-xl md:text-2xl text-primary-400 font-medium block">
              Hello, I'm
            </span>
            {/* LCP Element - Simplified styling for faster initial render */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Satwick Pandey
            </h1>
            
            {/* Apply fancy styling only after initial render */}
            {showAnimations && (
              <style jsx>{`
                h1 {
                  background-clip: text;
                  color: transparent;
                  background-image: linear-gradient(to right, var(--color-primary-400), purple, pink);
                  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                }
              `}</style>
            )}
          </div>

          <div className="h-20 bg-[#0A192F]/30 rounded-lg border border-white/5 flex items-center px-4">
            <TypewriterText
              texts={[
                "Full-Stack Developer",
                "Data Analyst",
                "Machine Learning Engineer"
              ]}
              className="text-lg sm:text-xl md:text-2xl text-gray-100 font-semibold"
              startDelay={600} // Delay typewriter to prioritize LCP
            />
          </div>

          <p className="text-gray-200 max-w-lg text-base sm:text-lg leading-relaxed bg-[#0A192F]/20 p-4 sm:p-6 rounded-lg border border-white/5">
            Passionate about creating innovative solutions through code. Specializing in full-stack development, data analysis, and machine learning.
          </p>

          <a
            href="/Satwick_Pandey_Resume.pdf"
            download
            className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white w-full sm:w-auto justify-center hover:bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-colors"
          >
            <Download className="mr-3" size={20} />
            <span className="font-medium text-base sm:text-lg">Download Resume</span>
          </a>
        </div>

        {/* Image container - Load with critical priority */}
        <div className="relative hidden md:block">
          <div className="relative w-96 h-96 mx-auto">
            {/* Replace complex animations with simpler styling for initial load */}
            <div className="absolute inset-0 rounded-full bg-primary-500 opacity-20 blur-xl"></div>
            
            {/* Add complex animations after LCP */}
            {showAnimations && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
              <img
                src="/1710339211464.webp"
                alt="Satwick Pandey"
                className="w-full h-full object-cover"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </div>
        
        {/* Apply motion animations only after LCP completes */}
        {showAnimations && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden"
          />
        )}
      </div>
    </section>
  );
}

export default Hero;
