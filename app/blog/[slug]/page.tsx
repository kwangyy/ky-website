import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Header from '@/components/Header'
import Reveal from '@/components/Reveal'
import { getPost, getPosts, formatDate } from '@/lib/blog'

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return {}
  return { title: `${post.title} — Kwang Yang Chia`, description: post.summary }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-shell px-6 md:px-8">
        <article className="pb-24 pt-[104px]">
          <Reveal immediate>
            <Link href="/blog" className="font-mono text-label uppercase text-ink-3 no-underline hover:text-ink">
              &larr; Blog
            </Link>
            <h1 className="mb-4 mt-8 max-w-[760px] text-[clamp(32px,5vw,56px)] font-medium leading-[1.05] tracking-[-0.03em]">
              {post.title}
            </h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-ink-3">
              {formatDate(post.date)}
            </p>
          </Reveal>
          <Reveal immediate delay={0.14} className="prose mt-12 max-w-measure border-t border-line pt-10">
            <MDXRemote source={post.content} />
          </Reveal>
        </article>
      </main>
    </>
  )
}
