'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 0.61, 0.36, 1] as const

/**
 * Hero content animates on mount. Everything else animates when scrolled into view.
 * Deliberate pacing: 900ms, 140ms stagger between siblings.
 */
export default function Reveal({
  children,
  delay = 0,
  immediate = false,
  className,
}: {
  children: ReactNode
  delay?: number
  immediate?: boolean
  className?: string
}) {
  const motionProps = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -10% 0px' } }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.9, delay, ease }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
