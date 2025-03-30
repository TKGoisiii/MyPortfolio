'use client'

import { useState, useEffect } from 'react'; // Import useState and useEffect
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Show header if scrolled down more than, say, 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -50 }} // Start hidden and slightly above
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          exit={{ opacity: 0, y: -50 }} // Animate out when hiding
          transition={{ duration: 0.3 }}
          className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 text-white"
        >
          <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="mb-2 sm:mb-0">
              <Link href="/" className="text-xl sm:text-2xl font-bold">Portfolio</Link>
            </motion.div>
            
            <ul className="flex space-x-4 sm:space-x-8">
              {['About', 'Works', 'Blog', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="text-sm sm:text-base hover:text-yellow-300 transition-colors"
                >
                  <Link href={`/#${item.toLowerCase()}`}>{item}</Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
