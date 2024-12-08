import React from 'react';
import { motion } from 'framer-motion';

const technicalSkills = {
  "Programming Languages": ["JavaScript", "Python", "Java"],
  "Web Technologies": ["React", "Node.js", "Express", "Next.js", "HTML5", "CSS3"],
  "Databases": ["MongoDB", "MySQL"],
  "Tools & Platforms": ["Git", "Firebase", "Render","Vercel"],
  "Machine Learning": ["NumPy","Pandas", "Matplotlib", "Scikit-learn" ,"TensorFlow","PyTorch" ]
};

const softSkills = [
  { skill: "Problem Solving", level: 90 },
  { skill: "Team Collaboration", level: 85 },
  { skill: "Communication", level: 88 },
  { skill: "Leadership", level: 82 },
  { skill: "Time Management", level: 87 }
];

function Skills() {
  return (
    <div className="space-y-8 text-gray-200">
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
        Technical Proficiency
      </h3>
      
      {/* Technical Skills */}
      <div>
        <h4 className="text-xl font-semibold mb-4 text-primary-300">Technical Skills</h4>
        <div className="space-y-6">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            >
              <h5 className="text-lg font-medium text-primary-400 mb-3">{category}</h5>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold mb-6 text-primary-300">Soft Skills</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map(({ skill, level }, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-primary-300">{skill}</span>
                <span className="text-accent-400">{level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;