import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Award, 
  ScrollText 
} from 'lucide-react';
import Sidebar from './Sidebar';
import Objective from './sections/Objective';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';

export type Section = 'objective' | 'education' | 'skills' | 'experience' | 'achievements' | 'certifications';

export const sections = [
  { id: 'objective', label: 'Objective', icon: Target },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'certifications', label: 'Certifications', icon: ScrollText },
] as const;

function ResumeLayout() {
  const [activeSection, setActiveSection] = useState<Section>('objective');

  const renderContent = () => {
    switch (activeSection) {
      case 'objective':
        return <Objective />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'achievements':
        return <Achievements />;
      case 'certifications':
        return <Certifications />;
      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-20 min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-poppins font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 bg-[#112240]/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/10">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          
          <div className="flex-1 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeLayout;
