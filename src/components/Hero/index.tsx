'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

const slides = [
  '/images/carroussel_accueil.webp',
  '/images/carroussel_accueil.webp',
  '/images/carroussel_accueil.webp',
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
      {slides.map((src, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
        >
          <Image
            src={src}
            alt="FIT'CARE Barbershop"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

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
