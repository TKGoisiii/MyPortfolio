'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="contact" className="py-20 text-white" ref={ref}>
      <div className="container mx-auto px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto w-full"
        >
          <form 
            method="post" 
            action="https://tkd.form.newt.so/v1/t8Sg8tmPb" 
            className="space-y-6"
          >
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-2">
                Full name
              </label>
              <input
                type="text"
                name="Full name"
                id="full-name"
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition duration-150 ease-in-out"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="Email"
                id="email"
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition duration-150 ease-in-out"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="Message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition duration-150 ease-in-out"
                placeholder="お問い合わせ内容をご記入ください..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full inline-block justify-center px-6 py-3 text-white font-medium bg-white/10 hover:bg-white/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
