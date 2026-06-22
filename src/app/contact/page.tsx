import Nav from '@/components/Nav'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Contact — FIT'CARE Barbershop",
  description: "Contactez FIT'CARE — Postuler, devenir partenaire ou franchisé",
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
