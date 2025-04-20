import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';

function Footer() {
  const contactInfo = {
    email: "satwickpandey@gmail.com",
    phone: "+91 7355776843",
    location: "NIET Greater Noida, Knowledge Park II",
    social: {
      github: "https://github.com/spsatwickpandey",
      linkedin: "https://www.linkedin.com/in/satwick-pandey-2493492ba/",
      instagram: "https://www.instagram.com/mr.wick5207/"
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-[#0A192F] text-gray-300 pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <motion.h3 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact Info
            </motion.h3>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <span className="group-hover:text-primary-400 transition-colors">{contactInfo.email}</span>
              </motion.a>

              <motion.a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-accent-400" />
                </div>
                <span className="group-hover:text-accent-400 transition-colors">{contactInfo.phone}</span>
              </motion.a>
            </div>
          </div>

          {/* Connect With Me */}
          <div className="space-y-6">
            <motion.h3 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Connect With Me
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Github, link: contactInfo.social.github, label: 'GitHub', color: 'primary' },
                { icon: Linkedin, link: contactInfo.social.linkedin, label: 'LinkedIn', color: 'accent' },
                { icon: Instagram, link: contactInfo.social.instagram, label: 'Instagram', color: 'pink' }
              ].map(({ icon: Icon, link, label, color }) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group`}
                  whileHover={{ y: -5 }}
                >
                  <Icon className={`w-5 h-5 text-${color}-400 group-hover:text-${color}-300`} />
                  <span className={`group-hover:text-${color}-300`}>{label}</span>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location Map */}
          <div className="space-y-6 lg:col-span-1">
            <motion.h3 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Location
            </motion.h3>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5523108756083!2d77.48811837613958!3d28.46290899176207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1733237890056!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Satwick Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
