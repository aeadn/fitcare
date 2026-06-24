import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import LaMarque from '@/components/LaMarque'
import Valeurs from '@/components/Valeurs'
import Prestations from '@/components/Prestations'
import Salons from '@/components/Salons'
import Abonnements from '@/components/Abonnements'
import CTASection from '@/components/CTASection'
import Avis from '@/components/Avis'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LaMarque />
        <Valeurs />
        <Prestations />
        <Salons />
        <Abonnements />
        <CTASection />
        <Avis />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
