import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: 'HealthCare Website',
    description: 'Medimate is an AI-powered health-tech platform offering symptom analysis, mental health chat, community discussions, and medical news.',
    image: 'src/img/Screenshot 2024-12-08 at 10.14.07 AM.png',
    tags: ['Vue js', 'Node.js', 'TailwindCSS'],
    github: 'https://github.com/safarBots/commmunity_page/tree/main',
    demo: 'https://commmunity-pagebus.onrender.com/',
    icon: Brain
  },
  {
    title: 'Ticket Booking Tourism Website',
    description: 'Safar Bots is a chatbot-based ticket booking platform offering seamless travel experiences with interactive AI assistance.',
    image: 'src/img/Screenshot 2024-12-08 at 10.26.15 AM.png',
    tags: ['TailwindCSS', 'Razorpay', 'Firebase'],
    github: 'https://github.com/safarBots/Varanasi/tree/main',
    demo: 'https://varanasi-3.onrender.com',
    icon: Database
  },
  // {
  //   title: 'Social Media Dashboard',
  //   description: 'Analytics dashboard for social media metrics with real-time updates',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  //   tags: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
  //   github: 'https://github.com/yourusername/social-dashboard',
  //   demo: 'https://social-dashboard.demo',
  //   icon: Code
  // }
];

function Projects() {
  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-poppins font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400">
            Some of my recent work that showcases my skills
          </p>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full py-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={project.title}
              className="w-[300px] sm:w-[400px] md:w-[600px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20"
              >
                <div className="relative h-48 md:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <project.icon className="absolute bottom-4 right-4 w-8 h-8 text-white/80" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;