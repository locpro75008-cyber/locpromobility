/** Coordonnées et constantes éditoriales — source unique pour tout le site. */
export const SITE_CONTACT = {
  /** Numéro fixe — appels téléphoniques (tel:, footer, assistance) */
  phoneE164: "+33170955661",
  phoneDisplay: "01 70 95 56 61",
  phoneTel: "tel:+33170955661",
  /** Mobile — WhatsApp uniquement */
  whatsapp: "33758481021",
  whatsappDisplay: "07 58 48 10 21",
  whatsappUrl: "https://wa.me/33758481021",
  email: "contact@locpromobility.fr",
  streetAddress: "86 rue de Charonne",
  postalCode: "75011",
  locality: "Paris",
  fullAddress: "86 rue de Charonne, 75011 Paris",
} as const;

export const SITE_DELAYS = {
  /** Confirmation de disponibilité après demande de réservation */
  reservationResponse: "2 h ouvrées",
  /** Livraison après confirmation */
  delivery: "24 à 48 h",
  /** Réponse message contact */
  contactResponse: "24 h ouvrées",
  /** Proposition devis B2B */
  devisResponse: "48 h ouvrées",
  /** Remplacement véhicule en urgence */
  replacementUrgent: "24 h",
  /** Remplacement si immobilisation prolongée */
  replacementStandard: "48 h",
} as const;

/** Slug catalogue → catégorie formulaire réservation */
export const SLUG_TO_TYPE: Record<string, string> = {
  "locpro-city": "velo-electrique",
  "locpro-urban": "velo-electrique",
  "locpro-urban-plus": "velo-electrique",
  "locpro-fold": "velo-electrique",
  "locpro-cargo-box": "cargo",
  "locpro-cargo-long": "cargo",
  "locpro-cargo-pro": "cargo",
  "locpro-cargo-flex": "cargo",
  "locpro-scoot-s9": "trottinette",
  "locpro-scoot-pro": "trottinette",
  "locpro-gyro-event": "gyropode",
  "locpro-gyro-fleet": "gyropode",
};

/** Slug représentatif par clé calculateur tarifs */
export const CALC_SLUGS: Record<string, string> = {
  trottinette: "locpro-scoot-s9",
  "velo-city": "locpro-city",
  velo: "locpro-urban",
  "velo-plus": "locpro-urban-plus",
  cargo: "locpro-cargo-box",
  gyropode: "locpro-gyro-event",
};
