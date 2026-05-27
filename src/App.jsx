import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Locations from './components/Locations'
import Social from './components/Social'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Locations />
        <Social />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
