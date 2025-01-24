'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div>
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">
                With a strong background in Machine Learning and AI, I've dedicated my career to pushing the boundaries of what's possible in artificial intelligence. My passion lies in developing innovative solutions that bridge the gap between complex AI models and real-world applications.
              </p>
              <p>
                I thrive on challenges and am constantly seeking new ways to leverage AI to solve intricate problems across various industries.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Fun Facts</h3>
              <ul className="list-disc list-inside">
                <li>Coffee enthusiast - always in search of the perfect brew</li>
                <li>Avid traveler - exploring new cultures and perspectives</li>
                <li>Amateur photographer - capturing moments and memories</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

