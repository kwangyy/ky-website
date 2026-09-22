import Reveal from './Reveal'

type Entry = {
  kind: string
  title: string
  detail: string
  /** Omit when there is nothing to link to. The card still highlights on hover. */
  href?: string
}

const entries: Entry[] = [
  {
    kind: 'Essay',
    title: 'Optimising RAG for web content at Atlas',
    detail: 'Query expansion & rewriting, in practice',
    href: 'https://medium.com/@kwangyyinc/optimising-rag-for-web-content-at-atlas-3e9e300e971f',
  },
  {
    kind: 'Workshops',
    title: '12 workshops, 200+ students',
    detail: 'Workshop Director, NUS Statistics & Data Science Society',
  },
  {
    kind: 'Blog',
    title: 'Blog, for more personal thoughts',
    detail: 'Shorter and looser than the essays. Lives here, on this site.',
    href: '/blog',
  },
  {
    kind: 'Teaching',
    title: '150+ students taught at NUS',
    detail: 'IT1244 & DSA2101 \u00b7 Honor List of Student Tutors, two years running',
    href: 'https://credentials.nus.edu.sg/67613a15-2045-498e-af25-0864816b4b7d',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="border-t border-line py-24">
      <Reveal className="mb-12 flex items-baseline justify-between gap-6">
        <h2 className="text-section font-medium">Writing &amp; talks</h2>
        <span className="font-mono text-label uppercase text-ink-3">Interested in my thoughts?</span>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {entries.map((entry, i) => {
          const external = entry.href?.startsWith('http')
          const Tag = entry.href ? 'a' : 'div'
          return (
            <Reveal key={entry.title} delay={i * 0.07}>
              <Tag
                {...(entry.href ? { href: entry.href } : {})}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-full min-h-[180px] flex-col gap-3.5 rounded border border-line bg-surface p-[26px] text-ink no-underline transition-colors hover:border-ink-3"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-ink-3">
                  {entry.kind}
                </span>
                <span className="mt-auto text-[20px] leading-[1.28] tracking-[-0.017em]">
                  {entry.title}
                </span>
                <span className="text-meta text-ink-2">{entry.detail}</span>
              </Tag>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
