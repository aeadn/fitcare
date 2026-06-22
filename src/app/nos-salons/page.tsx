import Nav from '@/components/Nav'
import Salons from '@/components/Salons'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Nos Salons — FIT'CARE Barbershop",
  description: "Trouvez votre salon FIT'CARE — Bagnolet, Cormeilles, Boissy, Épinay",
}

export default function NosSalonsPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Salons />
      </main>
      <Footer />
    </>
  )
}
