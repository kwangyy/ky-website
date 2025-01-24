'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <Image
            src="/kwang_yang_photo.jpg"
            alt="Kwang Yang"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Kwang Yang</h1>
        <p className="text-xl mb-8">I'm an AI Engineer with a focus on RAG and Data Science</p>
      </motion.div>
    </section>
  )
}

