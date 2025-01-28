import './globals.css'
import { Inter } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kwang Yang - AI Engineer',
  description: 'Hi, I\'m Kwang Yang :)',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
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

