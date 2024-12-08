import React from 'react';
import { motion } from 'framer-motion';
import { sections, Section } from './ResumeLayout';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <nav className="lg:w-72 bg-[#0A192F]/80 backdrop-blur-sm p-6 border-r border-white/10">
      <ul className="space-y-2">
        {sections.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <button
              onClick={() => onSectionChange(id as Section)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative overflow-hidden group ${
                activeSection === id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-primary'
              }`}
            >
              {activeSection === id && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className={`w-5 h-5 relative z-10 transition-transform group-hover:scale-110 ${
                activeSection === id ? '' : 'group-hover:text-primary'
              }`} />
              <span className="font-medium relative z-10">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;