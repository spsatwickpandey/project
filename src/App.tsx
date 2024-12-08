import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import Background from './components/Background';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ResumeLayout from './components/Resume/ResumeLayout';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-200 bg-[#0A192F] min-h-screen">
      <Background />
      
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 z-50" />
      
      <Navbar />
      
      <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-4 z-50">
        <SocialButton href="https://github.com/spsatwickpandey" icon={<Github />} label="GitHub" />
        <SocialButton href="https://www.linkedin.com/in/satwick-pandey-2493492ba/" icon={<Linkedin />} label="LinkedIn" />
      </div>

      <main className="relative">
        <Hero />
        <ResumeLayout />
        <Projects />
        <Social />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

const SocialButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors shadow-lg"
    whileHover={{ y: -5 }}
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default App;