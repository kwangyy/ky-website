'use client'

import { useEffect, useState } from 'react'
import type { Heading } from '@/lib/blog'

/** Sticky contents list for a blog post. Highlights the section currently being read. */
export default function Toc({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      // The active section is the last heading that has scrolled past the top third of the viewport.
      let current: string | null = null
      for (const h of headings) {
        const el = document.getElementById(h.id)
        if (el && el.getBoundingClientRect().top < window.innerHeight / 3) current = h.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [headings])

  return (
    <nav aria-label="Contents">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.09em] text-ink-3">Contents</p>
      <ul className="flex flex-col gap-2.5 border-l border-line">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`-ml-px block border-l py-0.5 pl-4 text-[13px] leading-snug no-underline transition-colors ${
                active === h.id ? 'border-ink text-ink' : 'border-transparent text-ink-3 hover:text-ink'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
