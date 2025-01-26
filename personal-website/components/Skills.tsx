'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const skills = ["Python", "SQL", "JavaScript", "React", 
  "NumPy", "pandas", "matplotlib", "seaborn", "scikit-learn", "Selenium", 
  "Tensorflow", "PyTorch", "LangChain", "OpenAI API", "Pinecone", "HuggingFace", 
  "PostgreSQL", "MySQL", "Docker", "AWS", "MongoDB", "Flask", "Neo4j"]

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth
      const animationDuration = scrollWidth / 50 // Adjust speed here

      const element = scrollElement.querySelector('.animate-scroll') as HTMLElement
      if (element) {
        element.style.animationDuration = `${animationDuration}s`
      }
    }
  }, [])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        <div 
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
        >
          <div className="inline-block animate-scroll">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 m-2 bg-blue-500/10 text-blue-400 rounded-md"
              >
                {skill}
              </span>
            ))}
            {/* Duplicate skills for seamless loop */}
            {skills.map((skill, index) => (
              <span
                key={`duplicate-${index}`}
                className="inline-block px-4 py-2 m-2 bg-blue-500/10 text-blue-400 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

