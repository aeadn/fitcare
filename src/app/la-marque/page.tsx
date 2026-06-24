import Nav from '@/components/Nav'
import LaMarque from '@/components/LaMarque'
import Valeurs from '@/components/Valeurs'
import Footer from '@/components/Footer'

export const metadata = {
  title: "La Marque — FIT'CARE Barbershop",
  description: "Le concept et les valeurs FIT'CARE — Confiance & Estime de soi",
}

export default function LaMarquePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <LaMarque />
        <Valeurs />
      </main>
      <Footer />
    </>
  )
}
