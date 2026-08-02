'use client'

import { useEffect, useRef } from 'react'
import { NAME, POP_DURATION, TYPE_START, PER_CHAR } from './heroTiming'

/**
 * "Hi!" pops in from below with an overshoot, then the name writes on one character
 * at a time behind a blinking caret.
 *
 * Every character is in the DOM from the first frame at opacity 0, so the line reserves
 * its full width and nothing reflows as it types. The caret is a single node moved
 * between characters.
 */
export default function HeroIntro() {
  const popRef = useRef<HTMLSpanElement>(null)
  const typeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const pop = popRef.current
    const type = typeRef.current
    if (!pop || !type) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      type.textContent = NAME
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []

    pop.style.transformOrigin = '0% 100%'
    pop.style.animation = `kyPop ${POP_DURATION}ms cubic-bezier(.22,.68,.32,1) both`

    type.textContent = ''
    const frag = document.createDocumentFragment()
    const chars = Array.from(NAME).map((ch) => {
      const s = document.createElement('span')
      s.textContent = ch === ' ' ? '\u00a0' : ch
      s.style.opacity = '0'
      s.style.transition = 'opacity 90ms linear'
      frag.appendChild(s)
      return s
    })
    type.appendChild(frag)

    const caret = document.createElement('span')
    caret.setAttribute('aria-hidden', 'true')
    caret.style.cssText =
      'display:inline-block;width:.055em;height:.7em;background:currentColor;margin-left:.03em;' +
      'vertical-align:baseline;opacity:0;animation:kyBlink 900ms steps(1,end) infinite'
    type.insertBefore(caret, chars[0] ?? null)
    timers.push(setTimeout(() => (caret.style.opacity = '1'), TYPE_START - 160))

    chars.forEach((s, i) => {
      timers.push(
        setTimeout(() => {
          s.style.opacity = '1'
          const next = chars[i + 1]
          if (next) type.insertBefore(caret, next)
          else type.appendChild(caret)
        }, TYPE_START + i * PER_CHAR),
      )
    })

    timers.push(setTimeout(() => caret.remove(), TYPE_START + chars.length * PER_CHAR + 520))

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <h1 className="mb-10 text-[clamp(52px,10vw,156px)] font-medium leading-[0.9] tracking-[-0.045em]">
      <span ref={popRef} className="inline-block">
        Hi!
      </span>
      <br />
      <span ref={typeRef} className="inline-block whitespace-pre">
        {NAME}
      </span>
    </h1>
  )
}
