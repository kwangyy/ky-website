import Home from '../components/Home'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Header from '../components/Header'

export default function Page() {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  )
}

