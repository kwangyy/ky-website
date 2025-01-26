'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"
import { Engine } from "tsparticles-engine"

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden">
      {/* Particle background */}
      <Particles
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3b82f6",
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl px-4 flex flex-col md:flex-row items-center gap-12 relative"
      >
        <div className="w-full md:w-1/3 h-[600px] bg-gray-800 rounded-lg relative">
          <Image 
            src="/kwang_yang_photo.jpg" 
            alt="Kwang Yang" 
            fill 
            className="rounded-lg object-cover" 
          />
        </div>

        <div className="w-full md:w-2/3 text-left space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Kwang Yang</h1>
            <p className="text-xl text-gray-300">AI Engineer specializing in RAG</p>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              I'm an AI Engineer, passionate about building systems that solve real-world problems with the help of AI. 
              My speciality is Retrieval-Augmented Generation (RAG), and I am also trained as a Data Scientist. I create efficient and scalable AI solutions.
            </p>
            <p>
              Currently, I'm working on my Final Year Project, which utilises RAG to detect toxicity in games. I'm super interested in the Edtech and Gaming industries!
              In my free time, I make coffee, and I travel a lot. I also like to conduct workshops and give talks here and there. 
            </p>
            <p>
              Interested in some of my thoughts? Check it out here :) (Work in progress)
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

