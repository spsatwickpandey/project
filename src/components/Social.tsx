import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/spsatwickpandey',
    stats: ['10+ Repositories'],
    color: 'from-primary-500 to-primary-700',
    description: 'Check out my open-source projects and contributions'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/satwick-pandey-2493492ba/',
    stats: ['300+ Connections'],
    color: 'from-accent-500 to-accent-700',
    description: 'Connect with me professionally'
  },
  {
    name: 'LeetCode',
    icon: Code2,
    url: 'https://leetcode.com/u/Satwick_Pandey/',
    stats: ['30+ Problems'],
    color: 'from-yellow-500 to-yellow-700',
    description: 'View my problem-solving journey'
  }
];

function Social() {
  return (
    <section id="social" className="py-12 sm:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
            Connect With Me
          </h2>
          <p className="mt-4 text-gray-400">
            Let's connect and collaborate
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-full py-12"
          >
            {socialLinks.map((social, index) => (
              <SwiperSlide
                key={social.name}
                className="w-[280px] sm:w-[350px] md:w-[400px]"
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} p-4 mb-6 transform hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      {social.name}
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </h3>
                    
                    <p className="text-gray-400 mb-6">{social.description}</p>
                    
                    <div className="space-y-3">
                      {social.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-gray-300 bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary-400" />
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.a>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="swiper-button-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Social;
