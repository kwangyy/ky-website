import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

/** All posts, newest first. Each is a .mdx file in content/blog with title, date and summary frontmatter. */
export function getPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '')
      const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, f), 'utf8'))
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ''),
        summary: String(data.summary ?? ''),
        content,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug)
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export type Heading = { id: string; text: string }

/** URL-safe id for a heading. Keeps non-ASCII letters (e.g. こだわり) and swaps spaces and ASCII punctuation for hyphens. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s!-/:-@[-`{-~]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** The ## headings in a post, in order, for the contents list. */
export function getHeadings(content: string): Heading[] {
  return content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.slice(3).trim()
      return { id: slugify(text), text }
    })
}
