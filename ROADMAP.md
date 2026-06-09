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

## 3.2 — Moteur de réservation

- [ ] Calendrier de disponibilités en temps réel
- [ ] Sélection de la durée (court / moyen / long)
- [ ] Calcul tarifaire dynamique
- [ ] Gestion du stock par véhicule
- [ ] Confirmation de réservation par e-mail (client + équipe interne)
- [ ] Caution / empreinte CB (Stripe ou PayPlug)

## 3.3 — Espace B2B

- [ ] Formulaire devis avec simulateur de flotte
- [ ] Envoi automatique du devis PDF par e-mail
- [ ] Intégration CRM ou notification Slack/e-mail côté admin

## 3.4 — Back-office admin

- [ ] Gestion du catalogue (véhicules, photos, tarifs)
- [ ] Gestion des réservations (statuts, paiements, contrats)
- [ ] Gestion des clients (B2C et B2B)
- [ ] Export comptable (CSV/PDF)

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

## Stack suggérée (exemple)
# Front    : Next.js (SSG/SSR) ou Nuxt.js
# CMS      : Sanity / Strapi / Directus
# Résa     : module custom ou Checkfront / Rentle
# Paiement : Stripe (caution + paiement)
# Emails   : Resend / Brevo
# Héberg.  : Vercel / Scaleway


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
# RÉCAPITULATIF PLANNING
# ─────────────────────────────────────────────
#
#  Sem. 01–03  │ Phase 1 — Cadrage & stratégie
#  Sem. 04–07  │ Phase 2 — UX & Design
#  Sem. 08–14  │ Phase 3 — Développement
#  Sem. 15–17  │ Phase 4 — Lancement
#  Mois 05–12  │ Phase 5 — Optimisation & croissance
#
#  MVP go-live cible : fin de semaine 17
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
