import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Award, Star } from 'lucide-react';

const achievements = [
  {
    title: "Hackathon Winner",
    description: "First place and Grand Finalist in Round 1 of GeeksforGeeks Delhi NCR Hackathon 2024",
    icon: Trophy,
    color: "from-yellow-400 to-yellow-600",
    gradient: "yellow"
  },
  {
    title: "Microsoft Azure AI Challenge",
    description: "Completed Microsoft Azure AI skills challenge",
    icon: Code,
    color: "from-primary-400 to-primary-600",
    gradient: "blue"
  }
  // {
  //   title: "Research Paper",
  //   description: "Published paper on ML in International Conference",
  //   icon: Award,
  //   color: "from-purple-400 to-purple-600",
  //   gradient: "purple"
  // },
  // {
  //   title: "Open Source",
  //   description: "Major contributor to popular open-source projects",
  //   icon: Star,
  //   color: "from-accent-400 to-accent-600",
  //   gradient: "accent"
  // }
];

function Achievements() {
  return (
    <div className="space-y-8 text-gray-200">
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
        Achievements
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:bg-white/10 transition-all"
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} p-3 mb-4 transform group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <h4 className="text-lg font-semibold mb-2 text-primary-300">{achievement.title}</h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Achievements;