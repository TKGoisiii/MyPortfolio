'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="h-screen w-full overflow-hidden relative flex items-center justify-center">

      <div className="w-full max-w-[100vw] px-4 text-center relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '80%' }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-0.5 bg-white/30 origin-left mb-8 sm:mb-12"
          style={{ maxWidth: '400px' }}
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full py-4"
        >
          <div className="flex justify-center items-center whitespace-nowrap overflow-visible">
            {['F', 'R', 'O', 'N', 'T', 'E', 'N', 'D'].map((char, index) => (
              <motion.span
                key={`frontend-${index}`}
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  delay: 0.3 + index * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 10
                }}
                whileHover={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.6 }
                }}
                className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] inline-block mx-0.5 sm:mx-1 font-bold text-white cursor-pointer hover:text-yellow-300 transition-transform"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full py-4"
        >
          <div className="flex justify-center items-center whitespace-nowrap overflow-visible">
            {['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'].map((char, index) => (
              <motion.span
                key={`developer-${index}`}
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  delay: 0.6 + index * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 10
                }}
                whileHover={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.6 }
                }}
                className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] inline-block mx-0.5 sm:mx-1 font-bold text-white cursor-pointer hover:text-yellow-300 transition-transform"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '80%' }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="h-0.5 bg-white/30 origin-left mt-4 mb-8 sm:mb-12"
          style={{ maxWidth: '400px' }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] text-white/70 tracking-widest pt-4"
        >
          TK&apos;s Portfolio Site
        </motion.div>
      </div>
    </section>
  )
}
