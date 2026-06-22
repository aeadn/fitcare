import Nav from '@/components/Nav'
import Prestations from '@/components/Prestations'
import Abonnements from '@/components/Abonnements'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Prestations & Abonnements — FIT'CARE Barbershop",
  description: "Coupes, barbes et abonnements FIT'CARE — Tarifs et réservation",
}

export default function PrestationsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Prestations />
        <Abonnements />
      </main>
      <Footer />
    </>
  )
}
