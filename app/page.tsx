import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Writing from '@/components/Writing'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-shell px-6 md:px-8">
        <Hero />
        <Work />
        <Writing />
        <Contact />
      </main>
    </>
  )
}
