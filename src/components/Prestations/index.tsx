'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Prestations.module.css'

const categories = ['Toutes', 'Coupes', 'Barbe', 'Soins']

const prestations = [
  {
    nom: 'Coupe Tondeuse',
    prix: 'dès 15€',
    desc: 'Technique rapide et précise, idéale pour des styles nets et uniformes. Un look soigné en un rien de temps.',
    img: '/images/coupe_scratch.webp',
    cat: 'Coupes',
  },
  {
    nom: 'Taille de Barbe',
    prix: 'dès 15€',
    desc: 'Sculpture des contours et finition impeccable. Service personnalisé selon votre morphologie.',
    img: '/images/barbe_boucle_oreille.webp',
    cat: 'Barbe',
  },
  {
    nom: 'Coupe + Barbe',
    prix: 'dès 25€',
    desc: 'Le combo complet pour un résultat parfait de la tête aux contours. Notre prestation phare.',
    img: '/images/degrade_tatouage.webp',
    cat: 'Coupes',
  },
  {
    nom: 'Dégradé',
    prix: 'dès 20€',
    desc: 'Un dégradé propre et précis, du skin fade au dégradé classique. Technique maîtrisée.',
    img: '/images/dessin_coupes.webp',
    cat: 'Coupes',
  },
  {
    nom: 'Rasage Traditionnel',
    prix: 'dès 18€',
    desc: 'Rasage à la latte avec serviette chaude. L\'expérience barbershop authentique.',
    img: '/images/5_tetes.webp',
    cat: 'Soins',
  },
]

export default function Prestations() {
  const [activeFilter, setActiveFilter] = useState('Toutes')

  const filtered = activeFilter === 'Toutes'
    ? prestations
    : prestations.filter((p) => p.cat === activeFilter)

  return (
    <section id="prestations" className={styles.section}>
      <div className="container">
        <div className="sectionEyebrow">Nos Prestations</div>
        <h2 className="sectionTitle">Coupes &amp; Barbes</h2>
        <p className="sectionDesc">
          Des prestations soignées par des barbers experts. Chaque coupe est un art,
          chaque barbe une signature.
        </p>

        {/* Filters */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((p) => (
            <div key={p.nom} className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  src={p.img}
                  alt={p.nom}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardName}>{p.nom}</span>
                  <span className={styles.cardPrice}>{p.prix}</span>
                </div>
                <p className={styles.cardDesc}>{p.desc}</p>
                <a href="/contact" className={styles.btnReserver}>Réserver</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
