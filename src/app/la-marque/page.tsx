import Nav from '@/components/Nav'
import LaMarque from '@/components/LaMarque'
import Footer from '@/components/Footer'

export const metadata = {
  title: "La Marque — FIT'CARE Barbershop",
  description: "Confiance & Estime de soi — Découvrez l'univers FIT'CARE",
}

export default function LaMarquePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <LaMarque />
      </main>
      <Footer />
    </>
  )
}
