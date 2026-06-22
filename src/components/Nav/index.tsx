'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const navLinks = [
  { label: 'Accueil',     href: '/' },
  { label: 'La Marque',   href: '/la-marque' },
  { label: 'Prestations', href: '/prestations' },
  { label: 'Nos Salons',  href: '/nos-salons' },
  { label: 'Contact',     href: '/contact' },
  { label: 'Actualités',  href: '/actualites' },
]

const mobileLinks = [
  { label: 'Accueil',           href: '/' },
  { label: 'La Marque',         href: '/la-marque' },
  { label: 'Prestations',       href: '/prestations' },
  { label: 'Abonnements',       href: '/prestations' },
  { label: 'Nos Salons',        href: '/nos-salons' },
  { label: 'Contact',           href: '/contact' },
  { label: 'Actualités',        href: '/actualites' },
  { label: 'Devenir partenaire', href: '/contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const close = () => setIsOpen(false)

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo image */}
        <Link href="/" className={styles.logo} onClick={close}>
          <Image
            src="/images/logo.webp"
            alt="FIT'CARE Barbershop"
            width={160}
            height={52}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav className={styles.links} aria-label="Navigation principale">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href ? styles.linkActive : ''}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.btnOutline}>Devenir partenaire</Link>
          <Link href="/contact" className={styles.btnSolid}>Postuler</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        {mobileLinks.map((l) => (
          <Link key={l.label} href={l.href} className={styles.mobileItem} onClick={close}>
            {l.label} <span>→</span>
          </Link>
        ))}
        <Link href="/contact" className={`${styles.mobileItem} ${styles.mobileCta}`} onClick={close}>
          Postuler <span>→</span>
        </Link>
      </div>
    </header>
  )
}
