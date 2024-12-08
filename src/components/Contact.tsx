import React, { useState, useRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Send, Mail, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// Define motion component props with correct typing
const motionProps: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
  style: { touchAction: "none" } // Correct way to add touchAction
};

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0A192F] to-[#112240]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...motionProps}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-400">
            Let's discuss your next project
          </p>
        </motion.div>

        <motion.div
          {...motionProps}
        >
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-200 mb-2">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary-400" />
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-primary-400 text-white placeholder-gray-400"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="relative">
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-200 mb-2">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary-400" />
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-primary-400 text-white placeholder-gray-400"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary-400" />
                  Subject
                </span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-primary-400 text-white placeholder-gray-400"
                required
                placeholder="Message subject"
              />
            </div>
            
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary-400" />
                  Message
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-primary-400 text-white placeholder-gray-400"
                required
                placeholder="Your message..."
              />
            </div>

            <input type="hidden" name="to_email" value="satwickpandey788@gmail.com" />

            <motion.button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium flex items-center justify-center group hover:shadow-lg hover:shadow-primary-500/25 transition-all disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center"
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-center"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;