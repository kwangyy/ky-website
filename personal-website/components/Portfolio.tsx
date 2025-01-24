'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from 'framer-motion'

const projects = [
  {
    title: "RAG-powered Chatbot",
    description: "Developed a chatbot using Retrieval-Augmented Generation for enhanced context-aware responses.",
    details: "This project involved implementing a state-of-the-art language model with a retrieval mechanism to provide more accurate and contextually relevant responses. The chatbot was trained on a large corpus of domain-specific data, allowing it to handle complex queries with high precision."
  },
  {
    title: "Data Science Dashboard",
    description: "Created an interactive dashboard for visualizing complex datasets and deriving actionable insights.",
    details: "The dashboard was built using React and D3.js, providing real-time data visualization capabilities. It includes features such as dynamic filtering, custom chart creation, and automated report generation, making it an invaluable tool for data-driven decision making."
  },
  {
    title: "AI-driven Recommendation System",
    description: "Implemented a sophisticated recommendation system using machine learning algorithms for personalized user experiences.",
    details: "This system utilizes collaborative filtering and content-based approaches to generate highly accurate recommendations. It was implemented using Python and TensorFlow, and deployed on a cloud infrastructure to handle large-scale data processing and real-time recommendations."
  }
]

const workHighlights = [
  "Led the development of Atlas, a groundbreaking AI-powered data analysis platform",
  "Co-founded SimpleAI, democratizing access to AI tools for small businesses",
  "Spearheaded the implementation of machine learning models that increased operational efficiency by 40% at TechCorp"
]

const leadershipPositions = [
  "Team Lead, AI Research Division at TechCorp",
  "Mentor, Women in AI Program",
  "Conference Chair, International AI Symposium 2023"
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 grid-rows-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {projects.map((project, index) => (
                    <li key={index}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="link" onClick={() => setSelectedProject(project)}>
                            {project.title}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>{project.details}</DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Work Highlights</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {workHighlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Leadership</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {leadershipPositions.map((position, index) => (
                    <li key={index}>{position}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="/kwang_yang_resume.pdf" target="_blank" rel="noopener noreferrer" download>
            <Button>Download Resume (PDF)</Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

