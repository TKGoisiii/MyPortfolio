'use client'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-md py-12 border-t border-white/20 relative text-white"
    >
      <div className="container mx-auto px-6 text-center">

        <p className="relative z-10 text-white/80">
          © {new Date().getFullYear()} TK&apos;s Portfolio. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
