'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('ky-theme', next ? 'dark' : 'light')
    } catch (e) {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="grid h-[30px] w-[30px] place-items-center rounded-full border border-line font-mono text-[11px] text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
    >
      {dark ? '\u2600' : '\u263e'}
    </button>
  )
}
