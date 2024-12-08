import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Data Science Intern",
    company: "Cognifyz Technologies",
    location: "Remote",
    period: "Jul 2024 - Aug 2024",
    description: "Data Visualization and Analysis",
    achievements: [
      "Processed and analyzed large datasets using Python",
      "Build multiple ML projects"
    ]
  },
  // {
  //   title: "Machine Learning Research Assistant",
  //   company: "AI Research Lab, NIET",
  //   location: "Greater Noida",
  //   period: "Jan 2023 - May 2023",
  //   description: "Conducted research on deep learning models for computer vision",
  //   achievements: [
  //     "Implemented and trained neural networks using PyTorch",
  //     "Processed and analyzed large datasets using Python",
  //     "Published research paper in international conference",
  //     "Mentored junior students in ML projects"
  //   ]
  // }
];

function Experience() {
  return (
    <div className="space-y-8 text-gray-200">
      <h3 className="text-2xl font-bold mb-6">Experience</h3>
      
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4 hover:bg-white/10 transition-colors"
        >
          <div>
            <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
            <p className="text-lg text-gray-300">{exp.company}</p>
          </div>
          
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{exp.location}</span>
            </div>
          </div>
          
          <p className="text-gray-300">{exp.description}</p>
          
          <div>
            <h5 className="font-medium mb-2">Key Achievements</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Experience;