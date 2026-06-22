import styles from './CTASection.module.css'

const ctas = [
  {
    label: 'Clients',
    action: 'Prendre\nrendez-vous',
    href: '#contact',
  },
  {
    label: 'Barbers',
    action: 'Postulez',
    href: '#contact',
  },
  {
    label: 'Entrepreneurs',
    action: 'Devenez\nfranchisés',
    href: '#contact',
  },
]

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="sectionEyebrow">Rejoignez-nous</div>
        <h2 className="sectionTitle">Impose ton style</h2>

        <div className={styles.grid}>
          {ctas.map((c) => (
            <a key={c.label} href={c.href} className={styles.card}>
              <div className={styles.cardLabel}>{c.label}</div>
              <div className={styles.cardAction}>
                {c.action.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && c.action.includes('\n') && <br />}</span>
                ))}
              </div>
              <div className={styles.arrow}>→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
