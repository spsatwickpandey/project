import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Star, Code } from 'lucide-react';

function Objective() {
  const interests = [
    { icon: Code, text: "Full-Stack Web Development", color: "from-primary-400 to-primary-600" },
    { icon: Target, text: "Data Analysis and Visualization", color: "from-purple-400 to-purple-600" },
    { icon: Star, text: "Machine Learning and AI Applications", color: "from-pink-400 to-pink-600" },
    { icon: Rocket, text: "Cloud Computing and Big Data", color: "from-accent-400 to-accent-600" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-gray-200"
    >
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
        Career Objective
      </h3>
      
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <p className="leading-relaxed">
          Passionate and results-driven B.Tech student specializing in full-stack development, 
          data analysis, and machine learning. Seeking opportunities to leverage my technical 
          skills and creative problem-solving abilities to contribute to innovative projects 
          while continuously learning and growing in the field of software development.
        </p>
      </div>
      
      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-6 text-primary-300">Areas of Interest</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interests.map(({ icon: Icon, text, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${color} p-2 mb-3`}>
                <Icon className="w-full h-full text-white" />
              </div>
              <p className="text-gray-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Objective;