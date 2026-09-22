import Link from 'next/link'
import Header from '@/components/Header'
import Reveal from '@/components/Reveal'
import { getPosts, formatDate } from '@/lib/blog'

export const metadata = {
  title: 'Blog — Kwang Yang Chia',
  description: 'More personal thoughts from Kwang Yang Chia.',
}

export default function BlogIndex() {
  const posts = getPosts()
  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-shell px-6 md:px-8">
        <section className="pb-24 pt-[104px]">
          <Reveal immediate className="mb-12 flex items-baseline justify-between gap-6">
            <h1 className="text-section font-medium">Blog</h1>
            <span className="font-mono text-label uppercase text-ink-3">
              {String(posts.length).padStart(2, '0')} posts
            </span>
          </Reveal>

          <div className="flex flex-col">
            {posts.map((post, i) => (
              <Reveal key={post.slug} immediate delay={0.1 + i * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="grid grid-cols-1 gap-2 border-t border-line py-7 text-ink no-underline md:grid-cols-[200px_minmax(0,1fr)] md:gap-12"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-ink-3">
                    {formatDate(post.date)}
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="text-card transition-colors hover:text-accent">{post.title}</span>
                    <span className="text-meta text-ink-2">{post.summary}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
