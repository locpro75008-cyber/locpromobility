/** Coordonnées et constantes éditoriales — source unique pour tout le site. */
export const SITE_CONTACT = {
  phoneE164: "+33770955661",
  phoneDisplay: "07 70 95 56 61",
  phoneTel: "tel:+33770955661",
  whatsapp: "33770955661",
  whatsappUrl: "https://wa.me/33770955661",
  email: "contact@locpromobility.fr",
  streetAddress: "60 rue François 1er",
  postalCode: "75008",
  locality: "Paris",
  fullAddress: "60 rue François 1er, 75008 Paris",
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
