import Reveal from './Reveal'

const socials = [
  { href: 'https://linkedin.com/in/kwang-yang-chia', label: 'LinkedIn' },
  { href: 'https://github.com/kwangyy', label: 'GitHub' },
  { href: 'https://twitter.com/kwangyyinc', label: 'Twitter' },
  { href: 'https://medium.com/@kwangyyinc', label: 'Medium' },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line pb-10 pt-24">
      <Reveal>
        <p className="mb-8 font-mono text-label uppercase text-ink-3">Contact</p>
        <a
          href="mailto:chia.kwang.yang@gmail.com"
          className="inline-block text-[clamp(30px,5.2vw,64px)] font-medium leading-[1.05] tracking-[-0.035em] text-ink no-underline transition-colors hover:text-accent"
        >
          chia.kwang.yang@gmail.com
        </a>
        <div className="mt-14 flex flex-wrap items-baseline gap-7 border-t border-line pt-6">
          {socials.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-meta text-ink-2 no-underline transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
          <span className="ml-auto font-mono text-[11px] text-ink-3">
            &copy; {new Date().getFullYear()} Kwang Yang
          </span>
        </div>
      </Reveal>
    </section>
  )
}
