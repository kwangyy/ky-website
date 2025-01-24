'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const skills = [
  "Machine Learning", "Deep Learning", "Natural Language Processing",
  "Computer Vision", "Data Science", "Python", "TensorFlow", "PyTorch",
  "SQL", "Big Data Technologies", "Cloud Computing (AWS, GCP)"
]

export default function Skills() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth
      const animationDuration = scrollWidth / 50 // Adjust speed here

      scrollElement.style.animationDuration = `${animationDuration}s`
    }
  }, [])

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="inline-flex">
              {skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="inline-block px-4 py-2 m-2 bg-blue-500 text-white rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

