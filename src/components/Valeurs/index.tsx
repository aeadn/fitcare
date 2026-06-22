import styles from './Valeurs.module.css'

const valeurs = [
  {
    num: '01',
    titre: 'Excellence',
    desc: 'Notre équipe est composée de professionnels passionnés et à l\'écoute, formés aux meilleures techniques.',
  },
  {
    num: '02',
    titre: 'Confiance',
    desc: 'Un service pensé dans ses moindres détails pour votre confort et votre bien-être à chaque visite.',
  },
  {
    num: '03',
    titre: 'Style',
    desc: 'Chaque coupe reflète votre personnalité. Votre style, votre identité — nous le faisons exister.',
  },
]

export default function Valeurs() {
  return (
    <section id="valeurs" className={styles.section}>
      <div className="container">
        <div className="sectionEyebrow">Nos Valeurs</div>
        <h2 className="sectionTitle">Ce qui nous définit</h2>
        <p className="sectionDesc">
          Trois piliers fondateurs portent l&#39;identité FIT&#39;CARE et guident chacun
          de nos gestes au quotidien.
        </p>

        <div className={styles.grid}>
          {valeurs.map((v) => (
            <div key={v.titre} className={styles.card}>
              <div className={styles.cardNum}>{v.num}</div>
              <div className={styles.cardDivider} />
              <h3 className={styles.cardTitle}>{v.titre}</h3>
              <p className={styles.cardDesc}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="dividerGold" style={{ marginTop: 'var(--s7)' }}>
          <div className="dividerGoldLine" />
          <div className="dividerGoldMark" />
          <div className="dividerGoldLine" />
        </div>

        {/* Partenaire badge */}
        <div className={styles.partenaire}>
          <div className={styles.partenaireLabel}>Partenaire officiel</div>
          <div className={styles.partenaireText}>Fitness Park</div>
          <p className={styles.partenaireDesc}>
            Profitez d&#39;offres exclusives en tant que membre Fitness Park.
            Montrez votre carte et bénéficiez de tarifs préférentiels dans tous nos salons.
          </p>
        </div>
      </div>
    </section>
  )
}
