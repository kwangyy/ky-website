'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
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
    title: "Node.py - Enterprise Knowledge Graphs",
    description: "Developed a visualization tool for enterprise knowledge graphs, as well as a search engine that uses LLMs to answer questions with natural language input.",
    details: "I led development of an AI-powered Knowledge Graph interface for enterprise content, focusing on React frontend and building asynchronous APIs with HuggingFace, Flask, and Neo4j. This was then dockerized for deployment.",
    github: "https://github.com/kwangyy/node_py",
    technologies: ["Python", "HuggingFace", "Docker", "D3.js", "React", "Neo4j"]
  },
  {
    title: "Accessible Personal Finance for Aging Population - HackSingapore 2024",
    description: "Built a chatbot that helps elderly people to manage their finances, with accessibility features such as voice input and output, and text-to-speech.",
      details: "I spearheaded the web scraping of financial advice from reputable sources such as DollarsAndSense, as well as DBS. I was part of the whole building process for the chatbot, specifically for the AI portion of the project.",
      github: "https://github.com/zsh-eng/hacksingapore",
    technologies: ["OpenAI API", "Langchain", "Selenium", "Python"]
  },
  {
    title: "Credit Card Approval Classification - Top 5 Project in IT1244 Cohort",
    description: "Implemented a clustering system and classification model to predict credit card approval",
    details: "This system first utilizes a clustering system to group customers into different segments, before using a XGBoost model to predict whether a customer will be approved for a credit card. This project was a top 5 project in my IT1244 cohort.",
    github: "https://github.com/kwangyy/credit-card-approval",
    technologies: ["Python", "XGBoost", "scikit-learn", "pandas"]
  }
]

const workHighlights = [
  "SimpleAI - Redesigned Pinecone embedding system for faster and more accurate retrieval, and refactored it with existing tech stack of MongoDB and React",
  "Atlas - Designed RAG workflow with advanced methods such as Query Expansion and Rewriting, and cut client-side inference time by 69.84%",
  "NUS - Co-authoring a paper with Prof Linda Sellou for measuring interests in electrochemistry learning"
]

const leadershipPositions = [
  "Media Director (AY24/25), NUS Raffles Hall",
  "Workshops Director (AY23/24), NUS Statistics and Data Science Society",
  "Student Lead (AY23/24), NUS Raffles Hall Developers",
  "Teaching Assistant (AY23/24 - AY24/25), IT1244 & other courses"
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
          className="text-3xl font-bold mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
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
                <CardTitle className="text-xl font-semibold">Projects</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {projects.map((project, index) => (
                    <li key={index}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className="text-blue-400 hover:text-blue-300 p-0 h-auto text-base font-normal focus-visible:ring-0 focus-visible:ring-offset-0 whitespace-normal text-left w-full justify-start"
                          >
                            {project.title}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle className="flex justify-between items-center text-xl">
                              {project.title}
                              {project.github && (
                                <a 
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center"
                                >
                                  <Button 
                                    variant="outline" 
                                    size="icon"
                                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                  >
                                    <Github className="h-4 w-4" />
                                  </Button>
                                </a>
                              )}
                            </DialogTitle>
                            <DialogDescription className="space-y-4 text-base">
                              <p>{project.details}</p>
                              {project.technologies && project.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                  {project.technologies.map((tech, index) => (
                                    <span 
                                      key={index}
                                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md text-sm"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </DialogDescription>
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
                <CardTitle>Leadership & Teaching</CardTitle>
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
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Download Resume (PDF)
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

