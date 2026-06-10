export const CATEGORIES: Record<string, { label: string; description: string; keywords: string[] }> = {
  pratique: {
    label: "Guides pratiques",
    description: "Entretien, autonomie, recharge, sécurité : tous nos guides pour profiter au mieux de votre vélo électrique.",
    keywords: ["guide", "entretien", "autonomie", "batterie", "recharger", "réparer", "pneu", "freins", "équipement", "casque", "assurance"],
  },
  actualite: {
    label: "Actualité & chiffres",
    description: "Marché du vélo électrique, statistiques, réglementation et aides financières : l'essentiel de l'actu.",
    keywords: ["marché", "vente", "statistiques", "réglementation", "loi", "bonus", "aide", "subvention", "chiffre", "2025", "2024"],
  },
  comparatifs: {
    label: "Comparatifs",
    description: "Comparatifs objectifs pour choisir le bon vélo électrique ou la bonne formule de location.",
    keywords: ["vs", "versus", "comparatif", "choisir", "louer", "acheter", "meilleur", "différence"],
  },
  paris: {
    label: "Paris & Île-de-France",
    description: "Itinéraires, infrastructure cyclable et conseils pour se déplacer à vélo électrique à Paris.",
    keywords: ["paris", "vélib", "arrondissement", "île-de-france", "itinéraire", "piste cyclable", "circulation"],
  },
  entreprise: {
    label: "Mobilité entreprise",
    description: "Flotte d'entreprise, Forfait Mobilités Durables, vélo cargo professionnel : solutions B2B.",
    keywords: ["entreprise", "b2b", "flotte", "salarié", "mobilité durable", "fmd", "forfait", "livraison", "cargo"],
  },
};
