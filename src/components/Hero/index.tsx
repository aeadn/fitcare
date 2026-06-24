'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

const slides = [
  {
    src: '/images/1erimage_accueil_carroussel.webp',
    alt: "FIT'CARE Barbershop",
  },
  {
    src: '/images/carroussel_accueil.webp',
    alt: "FIT'CARE — Coupe",
  },
  {
    src: '/images/accueil_caroussel_etapes.webp',
    alt: "FIT'CARE — Processus",
  },
]

const INTERVAL = 4000

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>Barbershop · Partenaire Fitness Park</div>
        <h1 className={styles.title}>FIT&#39;CARE</h1>
        <p className={styles.subtitle}>La confiance &amp; l&#39;estime de soi</p>
        <Link href="/contact" className={styles.cta}>
          Prendre rendez-vous
        </Link>
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
