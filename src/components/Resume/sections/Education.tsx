import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Noida Institute of Engineering and Technology",
    location: "Greater Noida, UP",
    period: "2022 - 2026",
    grade: "8.4 CGPA",
    highlights: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Development"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "The Aryan International School",
    location: "Varanasi, UP",
    period: "2019 - 2021",
    grade: "90%",
    highlights: [
      "Physics, Chemistry, Mathematics",
      "Computer Science",
      "English"
    ]
  }
];

function Education() {
  return (
    <div className="space-y-8 text-gray-200">
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
        Education
      </h3>
      
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-all group"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-semibold text-primary-400 group-hover:text-primary-300 transition-colors">
                {edu.degree}
              </h4>
              <p className="text-lg text-gray-300">{edu.institution}</p>
            </div>
            <div className="flex items-center gap-2 bg-accent-500/20 px-3 py-1 rounded-full">
              <Award className="w-4 h-4 text-accent-400" />
              <span className="text-accent-300 font-medium">{edu.grade}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-primary-400" />
              <span>{edu.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>{edu.location}</span>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-medium mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary-400" />
              <span>Key Subjects</span>
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {edu.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Education;