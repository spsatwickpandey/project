import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, Shield } from 'lucide-react';

const certifications = [
  {
    title: "Microsoft Azure AI NLP",
    issuer: "Microsoft",
    date: "Feb 2024",
    credentialId: "A8D4373FB2EB92C3",
    url: "https://aws.amazon.com/certification/verify",
    color: "from-[#FF9900] to-[#FFB266]"
  },
  {
    title: "Virtual AIML Internship",
    issuer: "Google",
    date: "Sept 2024",
    credentialId: "7c8967e6fe5d0ed3f8121f6182fd2935",
    url: "https://www.tensorflow.org/certificate",
    color: "from-[#FF6F61] to-[#FF8F61]"
  },
  {
    title: "ReactJs",
    issuer: "Infosys SpringBoard",
    date: "Oct 2024",
    credentialId: "Verified",
    url: "https://www.coursera.org/meta",
    color: "from-[#0668E1] to-[#0F90F2]"
  }
];

function Certifications() {
  return (
    <div className="space-y-8 text-gray-200">
      <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
        Certifications
      </h3>
      
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 group hover:bg-white/10 transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cert.color} p-2`}>
                    <Shield className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-300 group-hover:text-primary-200 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              </div>
              
              {/* <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a> */}
            </div>
            
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4 text-primary-400" />
                <span>{cert.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-4 h-4 text-primary-400" />
                <span>ID: {cert.credentialId}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;