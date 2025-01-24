'use client'

import { motion } from 'framer-motion'
// Make sure framer-motion is properly installed in your package.json

export default function ClientContact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p
          className="mb-4 text-xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Interested in collaborating or have a question?{" "}
          <button 
            className="text-blue-400 hover:underline"
            onClick={scrollToTop}
          >
            Click here
          </button>
        </motion.p>
      </div>
    </motion.section>
  )
}