# LocPro Mobilité — Site vitrine

Site Astro (hybrid) pour la location de mobilité électrique à Paris et en Île-de-France.

## Stack

- **Astro 4** + Tailwind CSS
- **Vercel** (adapter serverless)
- **Resend** — e-mails formulaires (contact, réservation, devis)
- **Brevo** — newsletter
- **Pagefind** — recherche statique

## Développement

```bash
npm install
npm run dev
```

Build production :

```bash
npm run build
```

## Variables d'environnement

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Clé API Resend (obligatoire pour les formulaires) |
| `BREVO_API_KEY` | Clé API Brevo (newsletter) |
| `BREVO_LIST_ID` | ID liste Brevo (défaut : `2`) |
| `PUBLIC_SITE_URL` | URL publique du site |
| `VERCEL_DEPLOY_HOOK_URL` | Hook rebuild hebdo (optionnel) |

## Contact site

- Téléphone / WhatsApp : **07 70 95 56 61**
- E-mail : contact@locpromobility.fr
- Adresse : 60 rue François 1er, 75008 Paris

## Structure

- `src/content/vehicules/` — fiches catalogue (source unique des tarifs)
- `src/lib/site.ts` — coordonnées et délais standard
- `src/lib/tariff-utils.ts` — helpers tarifs / calculateur
- `public/images/vehicules/` — photos produits
