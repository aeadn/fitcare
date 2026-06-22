import Image from 'next/image'
import styles from './Blog.module.css'

const articles = [
  {
    titre: 'Les tendances coupe 2025',
    cat: 'Tendances',
    date: '15 Jan. 2025',
    img: '/images/affiche_barbershop.webp',
  },
  {
    titre: 'FIT\'CARE : La marque qui révolutionne le barbershop',
    cat: 'Marque',
    date: '02 Fév. 2025',
    img: '/images/affiche_graphisme.webp',
  },
  {
    titre: 'Comment entretenir votre barbe au quotidien',
    cat: 'Conseils',
    date: '18 Mar. 2025',
    img: '/images/avant_apres.webp',
  },
]

export default function Blog() {
  return (
    <section id="actualites" className={styles.section}>
      <div className="container">
        <div className="sectionEyebrow">Actualités</div>
        <h2 className="sectionTitle">Le Blog FIT&#39;CARE</h2>
        <p className="sectionDesc">
          Tendances, conseils et actualités de votre barbershop favori.
        </p>

        <div className={styles.grid}>
          {articles.map((a) => (
            <article key={a.titre} className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  src={a.img}
                  alt={a.titre}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 360px"
                />
                <div className={styles.cardOverlay} />
                <div className={styles.cardFooter}>
                  <div className={styles.cardTitle}>{a.titre}</div>
                  <div className={styles.cardMeta}>
                    <span>{a.cat}</span>
                    <span>{a.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.more}>
          <a href="#" className={styles.btnGhost}>Voir plus d&#39;articles →</a>
        </div>
      </div>
    </section>
  )
}
