import styles from './Footer.module.css'

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"
        fill="currentColor"
      />
    </svg>
  )
}

const footerLinks = [
  { label: 'Accueil',     href: '/' },
  { label: 'La Marque',   href: '/la-marque' },
  { label: 'Prestations', href: '/prestations' },
  { label: 'Nos Salons',  href: '/nos-salons' },
  { label: 'Abonnements', href: '/prestations' },
  { label: 'Contact',     href: '/contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandName}>FIT&#39;CARE</div>
          <div className={styles.brandTagline}>La confiance ✂ L&#39;estime de soi</div>

          {/* Hexagone SVG */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 80 80"
            fill="none"
            className={styles.hex}
            aria-hidden="true"
          >
            <polygon
              points="40,4 72,22 72,58 40,76 8,58 8,22"
              stroke="#AE986C"
              strokeWidth="1.2"
              fill="none"
            />
            <line x1="28" y1="28" x2="52" y2="52" stroke="#AE986C" strokeWidth="1" strokeLinecap="round"/>
            <line x1="52" y1="28" x2="28" y2="52" stroke="#AE986C" strokeWidth="1" strokeLinecap="round"/>
            <circle cx="26" cy="26" r="4" stroke="#AE986C" strokeWidth="0.8" fill="none"/>
            <circle cx="54" cy="26" r="4" stroke="#AE986C" strokeWidth="0.8" fill="none"/>
          </svg>

          {/* Social icons */}
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram FIT'CARE"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="TikTok FIT'CARE"
            >
              <IconTikTok />
            </a>
          </div>
        </div>

        {/* Links */}
        <nav className={styles.links} aria-label="Navigation footer">
          <div className={styles.linksTitle}>Navigation</div>
          {footerLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Salons */}
        <div className={styles.salons}>
          <div className={styles.linksTitle}>Nos Salons</div>
          {[
            { nom: 'Bagnolet',   addr: '3-7 rue Angela Davis, 93170' },
            { nom: 'Cormeilles', addr: 'Bd du Parisis, 95240' },
            { nom: 'Boissy',     addr: 'Boissy-Saint-Léger' },
            { nom: 'Épinay',     addr: 'Épinay-sur-Seine' },
          ].map((s) => (
            <div key={s.nom} className={styles.salonItem}>
              <span className={styles.salonNom}>{s.nom}</span>
              <span className={styles.salonAddr}>{s.addr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className={styles.bottom}>
        <div className={styles.bottomLine} />
        <div className={styles.meta}>
          © {new Date().getFullYear()} FIT&#39;CARE Barbershop — Tous droits réservés
        </div>
      </div>
    </footer>
  )
}
