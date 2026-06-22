'use client'

import { useState } from 'react'
import styles from './Avis.module.css'

const avis = [
  {
    pseudo: 'Kevin M.',
    commentaire: 'Super expérience ! Personnel très professionnel et à l\'écoute. Ma coupe est parfaite, je reviendrai sans hésiter.',
    note: 5,
  },
  {
    pseudo: 'Samir B.',
    commentaire: 'Le meilleur barbershop de la région. L\'ambiance est top, les barbers sont des artistes. Je recommande vivement.',
    note: 5,
  },
  {
    pseudo: 'Thomas R.',
    commentaire: 'Service irréprochable du début à la fin. L\'abonnement Fullmax vaut vraiment le coup, je ne regrette pas.',
    note: 5,
  },
  {
    pseudo: 'Mehdi L.',
    commentaire: 'FIT\'CARE c\'est une autre dimension. Accueil chaleureux, salon propre et moderne. Ma barbe n\'a jamais été aussi bien.',
    note: 5,
  },
  {
    pseudo: 'Jordan K.',
    commentaire: 'Dégradé impeccable, rasage de près parfait. L\'expérience partenaire Fitness Park est un vrai plus. 5 étoiles !',
    note: 5,
  },
]

const VISIBLE = 3

export default function Avis() {
  const [start, setStart] = useState(0)

  const total = avis.length
  const prev = () => setStart((s) => (s - 1 + total) % total)
  const next = () => setStart((s) => (s + 1) % total)
  const visible = Array.from({ length: VISIBLE }, (_, i) => avis[(start + i) % total])

  return (
    <section id="avis" className={styles.section}>
      <div className="container">
        <div className="sectionEyebrow">Avis Clients</div>
        <h2 className="sectionTitle">Ce qu&#39;ils disent</h2>

        <div className={styles.grid}>
          {visible.map((a, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>{'★'.repeat(a.note)}</div>
              <p className={styles.comment}>&#34;{a.commentaire}&#34;</p>
              <div className={styles.pseudo}>{a.pseudo}</div>
            </div>
          ))}
        </div>

        <div className={styles.nav}>
          <button className={styles.navBtn} onClick={prev} aria-label="Précédent">←</button>
          <div className={styles.dots}>
            {avis.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === start ? styles.dotActive : ''}`}
                onClick={() => setStart(i)}
                aria-label={`Avis ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.navBtn} onClick={next} aria-label="Suivant">→</button>
        </div>
      </div>
    </section>
  )
}
