import Reveal from './Reveal'

type Project = {
  title: string
  description: string
  meta: string
  /** Omit when there is nothing public to link to. The card renders unclickable, flagged "Internal". */
  href?: string
}

const projects: Project[] = [
  {
    title: 'JiuwenSwarm',
    description:
      "The browser-control agent powering JiuwenClaw's web capabilities, built on Playwright MCP and openJiuwen.",
    meta: 'Playwright MCP \u00b7 OpenRouter \u00b7 in Tech in Asia',
    href: 'https://github.com/openjiuwen-ai/jiuwenswarm',
  },
  {
    title: 'Browser-Pilot',
    description:
      'Took it from UX spec to backend: the chat interface, the SSE streaming pipeline, and the agent stopping logic. Reasoning steps and tool calls render as they arrive.',
    meta: 'SSE \u00b7 3rd, Huawei internal hackathon',
    href: 'https://github.com/agent-fun/browser-pilot',
  },
  {
    title: 'Image retrieval at Hypersketch',
    description:
      'End-to-end AI image retrieval on GPT-generated descriptions and Pinecone, with positive and negative prompt weighting tuned across 7 lambda configurations.',
    meta: 'Pinecone \u00b7 5,000 monthly users',
  },
  {
    title: 'RAG-Keyword',
    description:
      'A hybrid retriever that prioritises keyword-level relevance while keeping token-level scoring, cutting noisy context in LLM toxicity detection by 58%.',
    meta: 'Llama-3.1-8B \u00b7 0.93 recall \u00b7 full report (PDF)',
    href: '/kwang_yang_fyp.pdf',
  },
]

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24">
      <Reveal className="mb-12 flex items-baseline justify-between gap-6">
        <h2 className="text-section font-medium">Selected work</h2>
        <span className="font-mono text-label uppercase text-ink-3">
          {String(projects.length).padStart(2, '0')} projects
        </span>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project, i) => {
          const external = project.href?.startsWith('http')
          const Tag = project.href ? 'a' : 'div'
          return (
            <Reveal key={project.title} delay={i * 0.07}>
              <Tag
                {...(project.href ? { href: project.href } : {})}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`flex h-full min-h-[236px] flex-col gap-4 rounded border border-line bg-surface p-7 text-ink no-underline${
                  project.href ? ' transition-colors hover:border-ink-3' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11.5px] text-ink-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {project.href ? (
                    <span className="text-[15px] text-ink-3" aria-hidden>
                      &rarr;
                    </span>
                  ) : (
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.09em] text-ink-3">
                      Internal
                    </span>
                  )}
                </div>
                <span className="mt-auto text-card">{project.title}</span>
                <span className="text-[15px] leading-[1.5] text-ink-2">{project.description}</span>
                <span className="border-t border-line pt-1 font-mono text-[11px] uppercase tracking-[0.09em] text-ink-3">
                  {project.meta}
                </span>
              </Tag>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.28}>
        <p className="mt-7 text-meta">
          <a href="#">All work, including openJiuwen, Terminal Bench and knowledge graphs &rarr;</a>
        </p>
      </Reveal>
    </section>
  )
}
