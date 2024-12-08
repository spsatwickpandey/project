import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Database, Brain, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const technicalSkills = [
  { name: 'Frontend Development', icon: Code, items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend Development', icon: Database, items: ['Node.js', 'Python', 'SQL'] },
  { name: 'Machine Learning', icon: Brain, items: ['TensorFlow', 'PyTorch', 'Scikit-learn'] }
];

const softSkills = [
  {
    title: 'Leadership',
    description: 'Led multiple project teams and organized tech events',
    icon: Star,
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Problem Solving',
    description: 'Strong analytical and critical thinking abilities',
    icon: Brain,
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Communication',
    description: 'Excellent verbal and written communication skills',
    icon: Code,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Teamwork',
    description: 'Collaborative mindset and team player',
    icon: Database,
    color: 'from-pink-500 to-rose-500'
  }
];

function Resume() {
  return (
    <section id="resume" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Skills & Experience
          </h2>
          
          {/* Technical Skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-6 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50" />
                <div className="relative z-10">
                  <skill.icon className="w-12 h-12 text-primary mb-4 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-4 text-gray-100">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-300">
                        <Award className="w-4 h-4 text-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills Carousel */}
          <div className="mt-20">
            <h3 className="text-2xl font-poppins font-bold text-center mb-12 text-white">
              Soft Skills
            </h3>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Autoplay]}
              className="max-w-sm mx-auto"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {softSkills.map((skill, index) => (
                <SwiperSlide key={skill.title}>
                  <motion.div
                    className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} p-4 mb-6`}>
                      <skill.icon className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{skill.title}</h4>
                    <p className="text-gray-300">{skill.description}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;