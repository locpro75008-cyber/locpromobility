# ROADMAP — Site vitrine location mobilité électrique
# Vélo élec. · Cargo · Trottinette · Gyropode
# B2C & B2B · Court / Moyen / Long terme
# Durée estimée : 9–12 mois

# ─────────────────────────────────────────────
# PHASE 1 — Cadrage & stratégie   [sem. 1–3]
# ─────────────────────────────────────────────

## Objectifs
- Définir les cibles (personas B2C et B2B)
- Fixer la grille tarifaire multi-durée
- Choisir la stack technique

## Livrables
- [ ] Personas (particulier, pro, collectivité, touriste)
- [ ] Benchmark 5–8 concurrents locaux & nationaux
- [ ] Catalogue produit (4 catégories de véhicules)
- [ ] Grille tarifaire : court (<1 sem.) / moyen (1 sem.–3 mois) / long (>3 mois)
- [ ] Arborescence du site + liste des pages clés
- [ ] Choix CMS/framework, solution de réservation, passerelle paiement
- [ ] Cahier des charges validé

## Notes
# B2C  → parcours self-service, réservation immédiate
# B2B  → parcours devis, interlocuteur commercial, contrat flotte
# Long terme B2B = différenciateur fort vs concurrents


# ─────────────────────────────────────────────
# PHASE 2 — UX & Design            [sem. 4–7]
# ─────────────────────────────────────────────

## Objectifs
- Concevoir deux tunnels distincts (B2C / B2B)
- Valider le design par tests utilisateurs

## Livrables
- [ ] Wireframes : accueil, catalogue, fiche véhicule, page B2B, contact
- [ ] Parcours B2C  : sélection → durée → dispo → réservation → paiement
- [ ] Parcours B2B  : landing dédiée → simulateur flotte → formulaire devis → relance
- [ ] Charte graphique (couleurs, typo, iconographie éco-mobilité)
- [ ] UI kit Figma (composants responsive, mobile-first)
- [ ] Prototype cliquable haute fidélité
- [ ] 5 sessions de tests utilisateurs + itérations

## Pages prioritaires
# /                        → accueil (hero, produits phares, CTA résa / devis)
# /catalogue               → liste filtrée par type & durée
# /catalogue/:slug         → fiche véhicule (photos, carac., tarifs, dispo)
# /reserver                → tunnel réservation B2C
# /entreprises             → landing B2B (fleet, avantages, cas clients)
# /devis                   → formulaire devis B2B
# /tarifs                  → grille complète court/moyen/long
# /faq                     → questions fréquentes
# /blog                    → SEO contenu
# /contact                 → formulaire + localisation agence(s)


# ─────────────────────────────────────────────
# PHASE 3 — Développement          [sem. 8–14]
# ─────────────────────────────────────────────

## 3.1 — Front-end & pages

- [ ] Intégration UI kit (design system → code)
- [ ] Page d'accueil : hero, section produits, témoignages, FAQ rapide
- [ ] Catalogue avec filtres (type, durée, disponibilité, prix)
- [ ] Fiche véhicule : galerie, specs, tarifs, bouton réserver
- [ ] Landing B2B : bénéfices fleet, témoignages entreprises, simulateur
- [ ] Pages statiques : CGU, politique de confidentialité, mentions légales

## 3.2 — Formulaire de contact (cœur du MVP)

## 3.2 — Formulaire de contact (cœur du MVP)

- [ ] Champs : nom, e-mail, téléphone, type de véhicule, durée souhaitée, message
- [ ] Champ honeypot anti-spam (caché, jamais visible utilisateur)
- [ ] Validation côté client (HTML5 required + messages d'erreur custom)
- [ ] Validation côté serveur (zod ou équivalent)
- [ ] Envoi e-mail via Resend (ou Netlify Forms natif si hébergement Netlify)
- [ ] E-mail de confirmation automatique à l'expéditeur
- [ ] Notification interne à l'adresse pro (récap de tous les champs)
- [ ] Page ou message de succès après envoi
- [ ] Turnstile Cloudflare (CAPTCHA RGPD-friendly) si spam persistant

## 3.3 — Espace B2B (version vitrine simplifiée)

# Sur un site vitrine simple, pas de simulateur ni de back-office.
# L'espace B2B = une page dédiée + un formulaire de devis enrichi.

- [ ] Page /entreprises : bénéfices fleet, types de contrats, avantages longue durée
- [ ] Formulaire devis B2B : nom société, SIRET, nb véhicules, durée, usage prévu
- [ ] Même pipeline e-mail que le formulaire contact
- [ ] Section témoignages / logos clients entreprises

## 3.4 — Gestion du catalogue (sans back-office lourd)

# Catalogue géré via fichiers Markdown dans le repo.
# Pas de base de données. Pas d'interface admin custom.

- [ ] Schéma frontmatter par véhicule :
#     nom, categorie, description, tarifs[], images[], disponible (bool)
- [ ] Astro Content Collections (typage automatique + validation au build)
- [ ] Mise à jour contenu = modifier un .md + push Git
- [ ] Optionnel : Decap CMS pour une interface admin légère sans toucher au code

## 3.5 — SEO & performances

- [ ] Balisage sémantique (titres, méta, schema.org : LocalBusiness, Product)
- [ ] Pages locales (ex. /location-velo-electrique-paris)
- [ ] Images WebP + lazy loading
- [ ] Core Web Vitals : LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Sitemap XML + robots.txt

## 3.6 — Conformité

- [ ] RGPD : bandeau cookies, consentement, politique confidentialité
- [ ] RGAA / WCAG AA : accessibilité (contraste, navigation clavier, alt)
- [ ] SSL / HTTPS

## Stack suggérée — Vitrine simple + formulaire de contact
#
# ┌─────────────────────────────────────────────────────────────────┐
# │  NIVEAU       │  OUTIL              │  RÔLE                     │
# ├─────────────────────────────────────────────────────────────────┤
# │  Framework    │  Astro              │  Génération statique (SSG) │
# │               │                     │  → zéro JS inutile, SEO   │
# │               │                     │    optimal out-of-the-box  │
# ├─────────────────────────────────────────────────────────────────┤
# │  Style        │  Tailwind CSS       │  Utilitaire, responsive,  │
# │               │                     │  mobile-first             │
# ├─────────────────────────────────────────────────────────────────┤
# │  Formulaire   │  Resend             │  API e-mail (gratuit       │
# │  de contact   │  + react-email      │  jusqu'à 3 000 mails/mois) │
# │               │                     │  → route API Astro ou      │
# │               │                     │    endpoint Vercel/Netlify  │
# │               │  OU Formspree       │  Alternative no-code :     │
# │               │                     │  coller l'action= dans le  │
# │               │                     │  <form>, aucun backend     │
# ├─────────────────────────────────────────────────────────────────┤
# │  CMS contenu  │  Decap CMS          │  Interface admin légère,   │
# │  (optionnel)  │  (ex-Netlify CMS)   │  fichiers Markdown / YAML  │
# │               │                     │  commitées dans le repo    │
# │               │  OU fichiers .md    │  Si l'équipe est à l'aise  │
# │               │  directs dans repo  │  avec Git : pas de CMS     │
# ├─────────────────────────────────────────────────────────────────┤
# │  Hébergement  │  Vercel             │  Deploy automatique        │
# │               │                     │  sur push Git, CDN global, │
# │               │                     │  SSL inclus, tier gratuit  │
# │               │  OU Netlify         │  Identique + Netlify Forms │
# │               │                     │  (formulaire natif gratuit │
# │               │                     │   si < 100 soumissions/mois│
# ├─────────────────────────────────────────────────────────────────┤
# │  Domaine      │  OVH / Gandi        │  ~10–15 €/an               │
# ├─────────────────────────────────────────────────────────────────┤
# │  Analytics    │  Umami (self-hosted)│  RGPD-friendly, open-source│
# │               │  OU Plausible       │  Léger, sans cookies tiers │
# │               │  OU GA4             │  Gratuit, plus complexe    │
# └─────────────────────────────────────────────────────────────────┘
#
# COÛT TOTAL ESTIMÉ (hors nom de domaine)
# → Option Vercel + Resend + Decap CMS  :  0 €/mois (tiers gratuits)
# → Option Netlify (Forms natif)         :  0 €/mois jusqu'à 100 soumissions
# → Si Plausible Cloud (analytics)       :  ~9 €/mois
#
# STRUCTURE DE FICHIERS (Astro)
# ─────────────────────────────
# /
# ├── public/
# │   ├── images/          ← photos véhicules (WebP)
# │   └── favicon.svg
# ├── src/
# │   ├── components/      ← Header, Footer, ProductCard, ContactForm
# │   ├── layouts/         ← BaseLayout.astro
# │   ├── pages/
# │   │   ├── index.astro          ← accueil
# │   │   ├── catalogue.astro      ← liste véhicules
# │   │   ├── catalogue/[slug].astro ← fiche véhicule
# │   │   ├── tarifs.astro
# │   │   ├── entreprises.astro    ← landing B2B
# │   │   ├── contact.astro
# │   │   ├── faq.astro
# │   │   └── api/
# │   │       └── contact.ts       ← endpoint Resend (si SSR activé)
# │   ├── content/
# │   │   └── vehicules/           ← fichiers .md par véhicule
# │   └── styles/
# │       └── global.css
# ├── astro.config.mjs
# ├── tailwind.config.mjs
# └── package.json
#
# FORMULAIRE DE CONTACT — deux approches
# ────────────────────────────────────────
# Option A : Resend (recommandé si Vercel)
#   1. npm install resend
#   2. Créer src/pages/api/contact.ts
#      → valider les champs (zod)
#      → appeler resend.emails.send({ from, to, subject, html })
#      → retourner { success: true } ou { error }
#   3. Le <form> poste en fetch() vers /api/contact
#   4. Afficher un message de confirmation côté client
#
# Option B : Netlify Forms (recommandé si Netlify, aucun code backend)
#   1. Ajouter data-netlify="true" et name="contact" au <form>
#   2. Ajouter un <input type="hidden" name="form-name" value="contact">
#   3. Netlify détecte le formulaire au build et gère les soumissions
#   4. Notifications e-mail configurables dans le dashboard Netlify
#
# ANTI-SPAM
# → Honeypot field (champ caché, si rempli = bot)  ← toujours ajouter
# → Turnstile (Cloudflare, RGPD-friendly)          ← si spam persistant
# → Rate limiting côté API (optionnel mais conseillé)


# ─────────────────────────────────────────────
# PHASE 4 — Lancement              [sem. 15–17]
# ─────────────────────────────────────────────

## Pré-lancement
- [ ] Tests QA complets (cross-browser, mobile, tablette)
- [ ] Test du parcours réservation de bout en bout (paiement réel)
- [ ] Test du formulaire devis B2B + réception e-mail
- [ ] Audit de sécurité (headers HTTP, injection, CSRF)
- [ ] Revue RGPD finale

## Mise en production
- [ ] Déploiement hébergement de production
- [ ] Configuration DNS + SSL
- [ ] Redirections 301 si migration d'un site existant
- [ ] Monitoring : Sentry (erreurs) + Uptime robot

## Communication lancement
- [ ] Google Ads local (recherche + display)
- [ ] Campagne réseaux sociaux (Instagram, Facebook, LinkedIn B2B)
- [ ] Offre promo lancement (ex. -15% première réservation)
- [ ] Fiche Google My Business optimisée (photos, horaires, catégories)
- [ ] Emailing ciblé entreprises (LinkedIn Sales Nav. ou base propre)
- [ ] Formation équipe : back-office, gestion réservations, mise à jour contenu


# ─────────────────────────────────────────────
# PHASE 5 — Optimisation & croissance  [M5–M12]
# ─────────────────────────────────────────────

## Analytics & conversion
- [ ] Mise en place GA4 + heatmaps (Hotjar / Clarity)
- [ ] Suivi du funnel réservation (step-by-step)
- [ ] A/B test CTA accueil, page tarifs, formulaire B2B
- [ ] Taux de conversion cible B2C : > 3% visiteurs → réservation

## Fidélisation B2C
- [ ] Programme avantages (remises long terme, parrainage)
- [ ] Newsletter mensuelle (conseils mobilité, offres)
- [ ] Collecte & affichage automatique des avis (Google, Trustpilot)

## Développement B2B
- [ ] Espace client B2B : tableau de bord flotte, factures, contrats
- [ ] Portail de renouvellement de contrat longue durée
- [ ] Intégration CE d'entreprise / plateformes RH (Gymlib, Swile…)
- [ ] API partenaires : OTA mobilité, plateformes de réservation

## Extension catalogue & contenu
- [ ] Nouveaux véhicules / gammes (e-cargo lourd, speed pedelec…)
- [ ] Accessoires & options (casque, siège enfant, assurance)
- [ ] Blog SEO : 2 articles/mois (guides d'usage, comparatifs, actualités)
- [ ] Pages villes supplémentaires pour la longue traîne SEO

## Infrastructure
- [ ] Optimisation base de données (index, cache Redis)
- [ ] API REST ou GraphQL documentée (pour partenaires / app mobile future)
- [ ] Internationalisation i18n si expansion géographique


# ─────────────────────────────────────────────
# RÉCAPITULATIF PLANNING — Vitrine simple
# ─────────────────────────────────────────────
#
#  Sem. 01–02  │ Phase 1 — Cadrage & stratégie    (réduit)
#  Sem. 03–05  │ Phase 2 — UX & Design
#  Sem. 06–10  │ Phase 3 — Développement
#  Sem. 11–12  │ Phase 4 — Lancement
#  Mois 04–12  │ Phase 5 — Optimisation & croissance
#
#  MVP go-live cible : fin de semaine 12  (~3 mois)
#
#  → Gain vs version complète : 5 semaines de dev
#    (moteur de réservation, paiement et back-office reportés en V2)
#
# ─────────────────────────────────────────────
# KPIs à suivre dès le lancement
# ─────────────────────────────────────────────
#
#  B2C
#  - Taux de conversion visiteur → réservation    cible > 3%
#  - Panier moyen par réservation
#  - Taux de retour client (J+90)
#
#  B2B
#  - Nombre de devis générés / mois
#  - Taux de conversion devis → contrat           cible > 20%
#  - Durée moyenne des contrats flotte
#
#  SEO
#  - Positions sur mots-clés cibles (top 10)
#  - Trafic organique mensuel
#  - Core Web Vitals (LCP / CLS / INP)
#
# ─────────────────────────────────────────────
