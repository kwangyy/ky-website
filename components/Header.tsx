import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#writing', label: 'Writing & talks' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line-2 bg-bg/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-[60px] max-w-shell items-center justify-between gap-6 px-6 md:px-8">
        <Link href="#top" className="text-[14px] font-medium tracking-[-0.01em] text-ink no-underline">
          Kwang Yang
        </Link>
        <div className="flex items-center gap-7">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[13.5px] text-ink-2 no-underline transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
