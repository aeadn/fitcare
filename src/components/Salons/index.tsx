import Image from 'next/image'
import styles from './Salons.module.css'

const salons = [
  {
    nom: 'BAGNOLET',
    adresse: '3-7 rue Angela Davis,\n93170 Bagnolet',
    tel: '01 XX XX XX XX',
    img: '/images/fitcare_bagnolet.webp',
    open: true,
  },
  {
    nom: 'CORMEILLES',
    adresse: 'ZAC des Bois Rochefort,\nBd du Parisis, 95240 Cormeilles',
    tel: '01 XX XX XX XX',
    img: '/images/fitcare_cormeilles.webp',
    open: true,
  },
  {
    nom: 'BOISSY',
    adresse: 'Boissy-Saint-Léger',
    tel: '01 XX XX XX XX',
    img: '/images/fitcare_boissy.webp',
    open: true,
  },
  {
    nom: 'ÉPINAY',
    adresse: 'Épinay-sur-Seine',
    tel: '01 XX XX XX XX',
    img: '/images/fitcare_epinay.webp',
    open: true,
  },
  {
    nom: 'BONDY',
    adresse: '??? · À venir',
    tel: null,
    img: null,
    open: false,
  },
]

export default function Salons() {
  return (
    <section id="salons" className={styles.section}>
      <div className="container">
        <div className="sectionEyebrow">Nos Salons</div>
        <h2 className="sectionTitle">Trouvez votre salon</h2>
        <p className="sectionDesc">
          Quatre adresses disponibles pour vous accueillir. Chaque salon offre la même
          excellence FIT&#39;CARE, dans votre quartier.
        </p>

        <div className={styles.grid}>
          {salons.map((salon) => (
            <div
              key={salon.nom}
              className={`${styles.card} ${!salon.open ? styles.upcoming : ''}`}
            >
              <div className={styles.cardImg}>
                {salon.img ? (
                  <Image
                    src={salon.img}
                    alt={`FIT'CARE ${salon.nom}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="120px"
                  />
                ) : (
                  <div className={styles.cardImgPlaceholder}>
                    <span>Prochaine</span>
                    <span>Ouverture</span>
                  </div>
                )}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardName}>{salon.nom}</div>
                <div className={styles.cardAddress}>
                  {salon.adresse.split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </div>
                {salon.tel && (
                  <div className={styles.cardTel}>{salon.tel}</div>
                )}
                <div className={styles.cardFooter}>
                  {salon.open ? (
                    <a href="/contact" className={styles.btnReserver}>Réserver</a>
                  ) : (
                    <button className={styles.btnBientot} disabled>Bientôt</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
