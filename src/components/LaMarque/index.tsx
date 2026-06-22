import Image from 'next/image'
import styles from './LaMarque.module.css'

export default function LaMarque() {
  return (
    <section id="la-marque" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className="sectionEyebrow">La Marque</div>
        <h2 className="sectionTitle">Confiance &amp; Estime de soi</h2>
        <p className="sectionDesc">
          FIT&#39;CARE est bien plus qu&#39;un barbershop. C&#39;est un espace où chaque client repart
          transformé — avec une coupe soignée et une confiance retrouvée.
        </p>

        {/* Slogan image */}
        <div className={styles.sloganWrap}>
          <Image
            src="/images/fitcare_slogan.webp"
            alt="FIT'CARE — La confiance & l'estime de soi"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, 1120px"
          />
          <div className={styles.sloganOverlay} />
        </div>

        {/* Gold divider */}
        <div className="dividerGold">
          <div className="dividerGoldLine" />
          <div className="dividerGoldMark" />
          <div className="dividerGoldLine" />
        </div>

        {/* 5 étapes */}
        <div className={styles.etapesGrid}>
          <div className={styles.etapesImg}>
            <Image
              src="/images/5_etapes.webp"
              alt="Les 5 étapes FIT'CARE"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>
          <div className={styles.etapesText}>
            <div className="sectionEyebrow">Notre Processus</div>
            <h3 className={styles.etapesTitle}>L&#39;expérience FIT&#39;CARE en 5 étapes</h3>
            <p className={styles.etapesDesc}>
              De l&#39;accueil personnalisé à la finition impeccable, chaque visite suit un
              protocole rigoureux pour garantir votre satisfaction totale.
            </p>
            <div className={styles.etapesSteps}>
              {['Accueil & diagnostic', 'Shampooing', 'Coupe sur mesure', 'Finitions & détails', 'Soin final'].map((step, i) => (
                <div key={i} className={styles.step}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.stepLabel}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Avant / Après */}
        <div className={styles.avantApres}>
          <div className={styles.avantApresImg}>
            <Image
              src="/images/avant_apres.webp"
              alt="Avant / Après FIT'CARE"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>
          <div className={styles.avantApresText}>
            <div className="sectionEyebrow">Résultats</div>
            <h3 className={styles.etapesTitle}>Avant &amp; Après</h3>
            <p className={styles.etapesDesc}>
              Nos barbers experts transforment chaque style avec précision. Dégradés,
              contours, rasage traditionnel — découvrez la différence FIT&#39;CARE.
            </p>
            <a href="/prestations" className={styles.btnOr}>Voir nos prestations →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
