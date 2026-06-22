# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

FIT'CARE Barbershop — site vitrine PWA en **Next.js (App Router) + TypeScript**.  
Projet BUT MMI S5. Le site est responsive : desktop fidèle à `maquette/FITCARE_maquette_desktop.pdf`, mobile fidèle à `maquette/FITCARE_maquette_mobile.pdf`.

## Commands (once scaffolded)

```bash
npm run dev      # dev server
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Design System

Source unique : `design_system/FITCARE_design-system.html` — lire ce fichier avant toute décision de style.

**Tokens CSS clés**
| Token | Valeur |
|---|---|
| `--noir-absolu` | `#000000` |
| `--noir-mat` | `#111111` |
| `--or` | `#AE986C` |
| `--or-light` | `#C4AF8A` |
| `--blanc-casse` | `#F0F0F0` |
| `--gris-clair` | `#A0A0A0` |
| `--gris-border` | `#2A2A2A` |
| `--serif` | `'Inria Serif'` (titres) |
| `--sans` | `'Inter'` (textes, nav, labels) |
| `--border-or-subtle` | `1px solid rgba(192,154,80,0.35)` |

Bordures toujours carrées (`border-radius: 0`). Les lignes dégradées dorées (`linear-gradient(to right, transparent, #C09A50, transparent)`) sont la signature visuelle.

## Architecture prévue

```
src/
  app/
    layout.tsx          # RootLayout — nav + footer globaux
    page.tsx            # Page d'accueil (toutes sections)
    globals.css         # Variables CSS du design system
  components/
    Nav/                # Desktop (hamburger caché) + Mobile (hamburger)
    Hero/               # Carousel avec dots
    Salons/             # Cards salon avec photo, adresse, CTA réserver
    Prestations/        # Cards prestation avec filtre
    Abonnements/        # Cards forfait (Fitmax / Fullmax)
    Valeurs/            # Cards valeur (Excellence, Confiance, Style)
    CTA/                # 3 blocs (clients / barbers / franchisés)
    Avis/               # Carousel témoignages
    Blog/               # Grille articles
    Contact/            # Formulaire contact + formulaire candidature
    Footer/             # Brand + tagline + icônes Instagram & TikTok
  public/
    images/             # Toutes les webp copiées depuis img/
    manifest.json       # PWA manifest
    sw.js               # Service worker (généré par next-pwa)
    icons/              # Icônes PWA (192x192, 512x512)
```

## Mapping images → sections

| Fichier (`img/`) | Section |
|---|---|
| `carroussel_accueil.webp` | Hero/Carousel — image principale |
| `fitcare_slogan.webp` | Hero ou section valeurs |
| `fitcare_bagnolet.webp` | Card salon — Bagnolet |
| `fitcare_cormeilles.webp` | Card salon — Cormeilles |
| `fitcare_boissy.webp` | Card salon — Boissy |
| `fitcare_epinay.webp` | Card salon — Épinay |
| `coupe_scratch.webp` | Card prestation — Coupe Tondeuse |
| `barbe_boucle_oreille.webp` | Card prestation — Taille de Barbe |
| `degrade_tatouage.webp` | Card prestation — Coupe + Barbe |
| `5_tetes.webp` / `dessin_coupes.webp` | Section valeurs / styles |
| `5_etapes.webp` | Section "La Marque" / process |
| `avant_apres.webp` | Section résultats / prestations |
| `affiche_barbershop.webp` | Article ou section actualités |
| `affiche_graphisme.webp` | Article ou section actualités |

## Navigation

**Desktop** : Logo `FIT'CARE` (Inria Serif) + liens (Accueil, La Marque, Prestations, Nos Salons, Contact, Actualités) + boutons "Devenir partenaire" (outline or) / "Postuler" (solid or).

**Mobile** : Hamburger (3 lignes blanches) → menu déroulant avec les mêmes liens + Abonnements, Réservation, Blog.

## PWA

- `manifest.json` : `name: "FIT'CARE"`, `theme_color: "#000000"`, `background_color: "#000000"`, `display: "standalone"`
- Utiliser `next-pwa` pour le service worker
- Icônes PWA générées depuis le logo hexagone SVG du design system

## Salons connus

| Nom | Adresse | Statut |
|---|---|---|
| Bagnolet | 3-7 rue Angela Davis, 93170 Bagnolet | Ouvert |
| Cormeilles | ZAC des Bois Rochefort, Bd du Parisis, 95240 Cormeilles | Ouvert |
| Boissy | — | Ouvert ou prochaine ouverture |
| Épinay | — | Ouvert ou prochaine ouverture |
| Bondy | — | Prochaine ouverture |

## Abonnements

- **Fitmax** — 4 coupes — 50 €
- **Fullmax** *(recommandé)* — 4 coupes et barbes — 70 €
