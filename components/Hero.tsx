import Image from 'next/image'
import HeroIntro from './HeroIntro'
import Reveal from './Reveal'
import { REST_START } from './heroTiming'

export default function Hero() {
  return (
    <>
      <section className="pb-24 pt-[104px]">
        <Reveal immediate delay={REST_START} className="mb-14 flex items-center gap-2.5">
          <span className="h-[7px] w-[7px] rounded-full bg-ok" />
          <span className="font-mono text-label uppercase text-ink-2">
            Open to AI engineering work &middot; Singapore, US &amp; Japan
          </span>
        </Reveal>

        <HeroIntro />

        <Reveal immediate delay={REST_START + 0.14}>
          <div className="grid grid-cols-1 items-start gap-12 border-t border-line pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <p className="font-mono text-[12px] uppercase tracking-[0.09em] text-ink-2">
              AI Engineer, Huawei
              <br />
              Agentic systems &amp; RAG
            </p>
            <p className="max-w-[600px] text-[20px] leading-[1.5] tracking-[-0.011em]">
              I build systems that solve real-world problems with AI. These days that means agentic
              harnesses, browser-control agents, and the evaluation work that keeps them honest.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="grid grid-cols-1 items-start gap-12 border-t border-line py-24 md:grid-cols-[200px_minmax(0,1fr)]">
        <Reveal>
          <p className="mb-6 font-mono text-label uppercase text-ink-3">About</p>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
            <Image src="/kwang_yang_photo.jpg" alt="Kwang Yang Chia" fill className="object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.14} className="flex max-w-measure flex-col gap-6">
          <p className="text-lede">
            I&rsquo;m an AI Engineer at Huawei working on{' '}
            <a href="https://github.com/openJiuwen-ai" target="_blank" rel="noopener noreferrer">
              openJiuwen
            </a>
            , an open-sourced agentic harness. My main work is on the subagents, especially the
            browser-control and the computer-use agents.
          </p>
          <p className="text-lede">
            Before Huawei I was at Hypersketch, building image retrieval. Before that, two years
            teaching AI and Data Science at NUS: 150+ students, and the School of Computing&rsquo;s
            Honor List of Student Tutors twice.
          </p>
          <p className="text-lede text-ink-2">
            In my free time I make coffee, and I travel a lot. I also conduct workshops and give
            talks here and there. Currently open to AI engineering work in Singapore, the US and
            Japan.
          </p>
          <div className="mt-2 flex flex-wrap gap-2.5">
            <a
              href="/kwang_yang_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full bg-ink px-[18px] text-[13.5px] font-medium text-bg no-underline transition-opacity hover:opacity-85"
            >
              R&eacute;sum&eacute; (PDF)
            </a>
            <a
              href="https://medium.com/@kwangyyinc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full border border-line px-[18px] text-[13.5px] font-medium text-ink no-underline transition-colors hover:border-ink-3"
            >
              Read my writing
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
