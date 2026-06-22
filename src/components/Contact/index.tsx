'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [activeForm, setActiveForm] = useState<'contact' | 'postuler'>('contact')

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className="sectionEyebrow">Contact</div>
        <h2 className="sectionTitle">Écrivez-nous</h2>

        {/* Tab switcher */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeForm === 'contact' ? styles.tabActive : ''}`}
            onClick={() => setActiveForm('contact')}
          >
            Nous contacter
          </button>
          <button
            className={`${styles.tab} ${activeForm === 'postuler' ? styles.tabActive : ''}`}
            onClick={() => setActiveForm('postuler')}
          >
            Postuler
          </button>
        </div>

        <div className={styles.formsGrid}>
          {/* Contact form */}
          {activeForm === 'contact' && (
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formTitle}>Nous contacter</div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Nom</label>
                  <input className={styles.input} type="text" placeholder="Dupont" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Prénom</label>
                  <input className={styles.input} type="text" placeholder="Marc" />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Adresse e-mail</label>
                <input className={styles.input} type="email" placeholder="marc@email.com" />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Objet</label>
                <select className={styles.select}>
                  <option value="">Choisir un objet...</option>
                  <option>Renseignements</option>
                  <option>Partenariat</option>
                  <option>Réclamation</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} placeholder="Votre message..." rows={4} />
              </div>

              <button type="submit" className={styles.submit}>Envoyer</button>
            </form>
          )}

          {/* Postuler form */}
          {activeForm === 'postuler' && (
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formTitle}>Postuler</div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Nom</label>
                  <input className={styles.input} type="text" placeholder="Dupont" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Prénom</label>
                  <input className={styles.input} type="text" placeholder="Marc" />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Adresse e-mail</label>
                <input className={styles.input} type="email" placeholder="marc@email.com" />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Type de candidature</label>
                <select className={styles.select}>
                  <option value="">Choisir...</option>
                  <option>Barber</option>
                  <option>Franchisé</option>
                  <option>Partenaire</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} placeholder="Parlez-nous de vous..." rows={4} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>CV / Portfolio</label>
                <div className={styles.fileWrap}>
                  <span className={styles.filePlaceholder}>Pièces jointes</span>
                  <button type="button" className={styles.fileBtn}>Parcourir...</button>
                </div>
              </div>

              <button type="submit" className={styles.submit}>Envoyer ma candidature</button>
            </form>
          )}

          {/* Info bloc */}
          <div className={styles.infoBloc}>
            <div className={styles.infoTitle}>Nos salons</div>
            {[
              { nom: 'Bagnolet', addr: '3-7 rue Angela Davis, 93170 Bagnolet' },
              { nom: 'Cormeilles', addr: 'ZAC des Bois Rochefort, 95240 Cormeilles' },
              { nom: 'Boissy', addr: 'Boissy-Saint-Léger' },
              { nom: 'Épinay', addr: 'Épinay-sur-Seine' },
            ].map((s) => (
              <div key={s.nom} className={styles.infoSalon}>
                <div className={styles.infoSalonNom}>{s.nom}</div>
                <div className={styles.infoSalonAddr}>{s.addr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
