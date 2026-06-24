# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

FIT'CARE Barbershop — site vitrine PWA en **Next.js (App Router) + TypeScript**.  
Projet BUT MMI S5. Le site est responsive : desktop fidèle à `maquette/desktop/`, mobile fidèle à `maquette/mobile/`.

> Les maquettes de référence sont dans les **sous-dossiers** `maquette/desktop/` et `maquette/mobile/` (une page par fichier PDF). Les fichiers à la racine de `maquette/` sont des versions moins précises — les ignorer.  
> Note : les PDFs ne peuvent pas être lus directement par l'outil Read (pdftoppm absent). Se baser sur les descriptions utilisateur et le design system.

## Commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Design System

Source unique : `design_system/FITCARE_design-system.html` — lire ce fichier avant toute décision de style.

**Tokens CSS clés** (définis dans `src/app/globals.css`)
| Token | Valeur |
|---|---|
| `--noir-absolu` | `#000000` |
| `--noir-mat` | `#111111` |
| `--or` | `#AE986C` ← valeur intentionnelle du projet (le DS HTML utilise `#C09A50`, ne pas changer) |
| `--or-light` | `#C4AF8A` |
| `--blanc-casse` | `#F0F0F0` |
| `--gris-clair` | `#A0A0A0` |
| `--gris-border` | `#2A2A2A` |
| `--serif` | `'Inria Serif'` (titres) |
| `--sans` | `'Inter'` (textes, nav, labels) |
| `--border-or-subtle` | `1px solid rgba(174,152,108,0.35)` |
| `--nav-height` | `64px` |

Bordures toujours carrées (`border-radius: 0`). Lignes dégradées dorées (`linear-gradient(to right, transparent, #AE986C, transparent)`) = signature visuelle.

## Styling pattern

- **CSS Modules** par composant (`Component.module.css`) pour les styles spécifiques.
- **Classes globales** dans `globals.css` pour les patterns partagés : `.container`, `.sectionEyebrow`, `.sectionTitle`, `.sectionDesc`, `.dividerGold`, `.dividerGoldLine`, `.dividerGoldMark`.
- Chaque composant importe ses propres styles + utilise les classes globales directement dans le JSX.

## Page structure pattern

Chaque page suit ce schéma :

```tsx
<Nav />
<main style={{ paddingTop: 'var(--nav-height)' }}>
  <SectionA />
  <SectionB />
</main>
<Footer />
```

La Nav est `position: fixed`, donc tout `<main>` doit avoir `paddingTop: var(--nav-height)`.

## Pages et composants associés

| Route | Composants |
|---|---|
| `/` | Hero + (toutes sections accueil) |
| `/la-marque` | LaMarque (concept + valeurs) |
| `/prestations` | Prestations + Abonnements |
| `/nos-salons` | Salons |
| `/contact` | Contact |
| `/actualites` | Blog |

## Images

- **Source** : `img/` (originals, non servis)
- **Servis** : `public/images/` (copier depuis `img/` avant utilisation)
- Toujours utiliser le composant `<Image>` de Next.js avec `fill` + `sizes` approprié.
- Images de réservation par salon disponibles : `reservation_fitcare_[bagnolet|cormeilles|boissy|epinay].webp` (à copier dans `public/images/` si besoin).

## Architecture

```
src/
  app/
    layout.tsx          # RootLayout — metadata PWA, import globals.css
    globals.css         # Tokens CSS + reset + classes globales partagées
    page.tsx            # Accueil
    la-marque/page.tsx
    prestations/page.tsx
    nos-salons/page.tsx
    contact/page.tsx
    actualites/page.tsx
  components/
    Nav/                # Fixed, desktop links + mobile hamburger, scroll effect
    Hero/               # Carousel plein écran, auto-scroll 4000ms, dots cliquables
    LaMarque/           # Slogan image + 5 étapes + avant/après
    Salons/             # Cards salon (image 120px + body + btn Réserver)
    Prestations/        # Cards prestation avec filtres par catégorie
    Abonnements/        # Cards forfait Fitmax / Fullmax
    Valeurs/            # Cards valeur + partenaire Fitness Park
    CTASection/         # 3 blocs CTA (clients / barbers / entrepreneurs)
    Avis/               # Carousel témoignages avec nav ←/→
    Blog/               # Grille articles avec overlay image
    Contact/            # Formulaire tabbed (contact / postuler)
    Footer/             # Brand + tagline + hex SVG + Instagram/TikTok + nav links
public/
  images/               # WebP servis par Next.js Image
  manifest.json         # PWA manifest
  sw.js                 # Service worker
```

## Salons connus

| Nom | Adresse | Statut |
|---|---|---|
| Bagnolet | 3-7 rue Angela Davis, 93170 Bagnolet | Ouvert |
| Cormeilles | ZAC des Bois Rochefort, Bd du Parisis, 95240 Cormeilles | Ouvert |
| Boissy | Boissy-Saint-Léger | Ouvert |
| Épinay | Épinay-sur-Seine | Ouvert |
| Bondy | — | Prochaine ouverture |

## Abonnements

- **Fitmax** — 4 coupes — 50 €
- **Fullmax** *(recommandé)* — 4 coupes et barbes — 70 €

## Navigation

**Desktop** (> 900px) : Logo image `logo.webp` + liens + boutons "Devenir partenaire" (outline or) / "Postuler" (solid or).  
**Mobile** (≤ 900px) : Hamburger → menu déroulant avec liens + Abonnements, Réservation, Blog.

## PWA

- `manifest.json` : `name: "FIT'CARE"`, `theme_color: "#000000"`, `display: "standalone"`
- Service worker enregistré dans `layout.tsx` via `dangerouslySetInnerHTML`
