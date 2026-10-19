'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/**
 * Eased, gliding page scroll in place of the browser's stepped wheel scroll.
 * Skipped entirely for visitors who prefer reduced motion; touch devices keep native scrolling.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.1,
      // In-page links (TOC, /#contact) glide too; offset matches the h2 scroll-margin-top.
      anchors: { offset: -96 },
      autoRaf: true,
    })
    return () => lenis.destroy()
  }, [])

  return null
}
