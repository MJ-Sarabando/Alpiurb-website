import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Testimonies from '@/components/Testimonies'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <CTA />
      <Gallery />
      <Testimonies/>
      <Contact />
      <Footer />
    </main>
  )
}