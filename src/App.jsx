import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Hero from './components/Hero'
import FeatureStrip from './components/FeatureStrip'
import Categories from './components/Categories'
import Promo from './components/Promo'
import Products from './components/Products'
import Personas from './components/Personas'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Products />
        <Hero />
        <FeatureStrip />
        <Categories />
        <Promo />
        <Personas />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
