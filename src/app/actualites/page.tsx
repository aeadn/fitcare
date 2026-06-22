import Nav from '@/components/Nav'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Actualités — FIT'CARE Barbershop",
  description: "Tendances, conseils et actualités du barbershop FIT'CARE",
}

export default function ActualitesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Blog />
      </main>
      <Footer />
    </>
  )
}
