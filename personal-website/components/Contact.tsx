'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const highlightContactButton = () => {
    const contactButton = document.querySelector('[data-contact-button]')
    const overlay = document.createElement('div')
    
    if (contactButton) {
      // Create and add overlay
      overlay.className = 'fixed inset-0 bg-black/60 transition-opacity duration-300 z-40'
      document.body.appendChild(overlay)
      
      // Add highlight to button and bring it forward
      contactButton.classList.add('ring', 'ring-blue-400', 'relative', 'z-50')
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // Remove overlay and highlight after animation
      setTimeout(() => {
        overlay.classList.add('opacity-0')
        contactButton.classList.remove('ring', 'ring-blue-400', 'relative', 'z-50')
        setTimeout(() => {
          overlay.remove()
        }, 300) // Wait for fade out animation
      }, 2000)
    }
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
            onClick={highlightContactButton}
          >
            Click here
          </button>
        </motion.p>
      </div>
    </motion.section>
  )
}

