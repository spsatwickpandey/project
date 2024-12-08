import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-0 overflow-hidden">
      {/* Background Image with enhanced clarity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.8)),
            url("/boliviainteligente-pE3nbuHJOak-unsplash.jpg")`,
          backgroundSize: 'cover',
          imageRendering: 'crisp-edges'
        }}
      />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/30 to-[#0A192F] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6 px-4 md:px-0"
        >
          <div className="space-y-2">
            <motion.span 
              className="text-xl md:text-2xl text-primary-400 font-medium block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-poppins font-bold drop-shadow-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-purple-500 to-pink-500">
                Satwick Pandey
              </span>
            </h1>
          </div>

          <div className="h-20 backdrop-blur-sm bg-[#0A192F]/10 rounded-lg border border-white/5 flex items-center px-4">
            <TypewriterText
              texts={[
                "Full-Stack Developer",
                "Data Analyst",
                "Machine Learning Engineer"
              ]}
              className="text-lg sm:text-xl md:text-2xl text-gray-100 font-semibold drop-shadow-lg"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 max-w-lg text-base sm:text-lg leading-relaxed drop-shadow-lg backdrop-blur-sm bg-[#0A192F]/20 p-4 sm:p-6 rounded-lg border border-white/5"
          >
            Passionate about creating innovative solutions through code. Specializing in full-stack development, data analysis, and machine learning.
          </motion.p>

          <motion.a
            href="/Satwick_Pandey_Resume.pdf"
            download
            className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-2xl transition-all hover:scale-105 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Download className="mr-3 relative z-10" size={20} />
            <span className="relative z-10 font-medium text-base sm:text-lg">Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative w-96 h-96 mx-auto">
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
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/1710339211464.jpeg"
                alt="Satwick Pandey"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;