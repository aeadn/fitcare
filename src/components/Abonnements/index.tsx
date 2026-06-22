import styles from './Abonnements.module.css'

const forfaits = [
  {
    nom: 'Abonnement\nFitmax',
    detail: '4 coupes',
    prix: '50',
    featured: false,
  },
  {
    nom: 'Abonnement\nFullmax',
    detail: '4 coupes et barbes',
    prix: '70',
    featured: true,
  },
]

export default function Abonnements() {
  return (
    <section id="abonnements" className={styles.section}>
      <div className="container">
        <div className="sectionEyebrow">Abonnements</div>
        <h2 className="sectionTitle">Nos Forfaits</h2>
        <p className="sectionDesc">
          Engagez-vous sur la durée et bénéficiez d&#39;un tarif préférentiel.
          Des formules pensées pour les habitués.
        </p>

        <div className={styles.grid}>
          {forfaits.map((f) => (
            <div key={f.nom} className={`${styles.card} ${f.featured ? styles.featured : ''}`}>
              {f.featured && <div className={styles.badge}>Recommandé</div>}
              <div className={styles.nom}>
                {f.nom.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </div>
              <div className={styles.detail}>{f.detail}</div>
              <div className={styles.prix}>
                {f.prix}<sup>€</sup>
              </div>
              <a
                href="/contact"
                className={f.featured ? styles.btnPrimary : styles.btnOr}
              >
                Choisir
              </a>
            </div>
          ))}

          {/* Card générique info */}
          <div className={styles.infoCard}>
            <div className="sectionEyebrow" style={{ margin: 0 }}>Avantages</div>
            <h3 className={styles.infoTitle}>Pourquoi s&#39;abonner ?</h3>
            <ul className={styles.infoList}>
              <li>Tarifs préférentiels toute l&#39;année</li>
              <li>Priorité de réservation</li>
              <li>Accès à tous nos salons</li>
              <li>Sans engagement, résiliable à tout moment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
