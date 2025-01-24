import './globals.css'
import { Inter } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kwang Yang - AI Engineer',
  description: 'Personal website of Kwang Yang, AI Engineer specializing in RAG and Data Science',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}

