export interface Location {
  slug: string;
  nom: string;
  type: "arrondissement" | "ville";
  departement?: string;
  description: string;
  metaDescription: string;
  intro: string;
  landmarks: string[];
  metros: string[];
  usages: string[];
  distanceAgence: string;
  codePostal: string;
}

export const locations: Location[] = [
  // ─── Arrondissements Paris ───────────────────────────────────────────
  {
    slug: "paris-1er",
    nom: "Paris 1er arrondissement",
    type: "arrondissement",
    codePostal: "75001",
    description: "Location vélo électrique Paris 1er — Louvre, Châtelet, Les Halles",
    metaDescription:
      "Location de vélo électrique dans le 1er arrondissement de Paris. Livraison au Louvre, Châtelet, Les Halles. Réservation en ligne — LocPro Mobilité.",
    intro:
      "Au cœur de Paris, le 1er arrondissement concentre les grands axes touristiques et professionnels. Entre le Louvre, les Halles et les quais de Seine, le vélo électrique est le moyen de transport idéal pour se déplacer rapidement sans chercher de stationnement.",
    landmarks: ["Musée du Louvre", "Centre Pompidou", "Les Halles", "Pont Neuf", "Palais Royal"],
    metros: ["Châtelet (L1/4/7/11/14)", "Les Halles (L4)", "Louvre-Rivoli (L1)", "Pont Neuf (L7)"],
    usages: ["Visites touristiques", "Déplacements professionnels", "Livraisons dernier kilomètre"],
    distanceAgence: "10 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-2e",
    nom: "Paris 2e arrondissement",
    type: "arrondissement",
    codePostal: "75002",
    description: "Location vélo électrique Paris 2e — Sentier, Bourse, Grands Boulevards",
    metaDescription:
      "Location de vélo électrique Paris 2e arrondissement. Livraison au Sentier, Bourse, Grands Boulevards. Tarifs dès 29€/jour — LocPro Mobilité.",
    intro:
      "Le 2e arrondissement, quartier de la mode et des start-ups, est parfait pour les déplacements professionnels rapides. Le vélo électrique vous permet de naviguer efficacement entre le Sentier, la Bourse et les Grands Boulevards.",
    landmarks: ["Bourse de Commerce", "Passage des Panoramas", "Galerie Vivienne", "Sentier (mode)"],
    metros: ["Bonne Nouvelle (L8/9)", "Sentier (L3)", "Grands Boulevards (L8/9)", "Bourse (L3)"],
    usages: ["Start-ups et entreprises tech", "Industrie de la mode", "Courriers et livraisons B2B"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-3e",
    nom: "Paris 3e arrondissement",
    type: "arrondissement",
    codePostal: "75003",
    description: "Location vélo électrique Paris 3e — Le Marais, Temple, Arts et Métiers",
    metaDescription:
      "Louez un vélo électrique dans le Marais (Paris 3e). Livraison à domicile ou en atelier. Idéal pour touristes et professionnels — LocPro Mobilité.",
    intro:
      "Le Marais historique et ses ruelles pavées se parcourent idéalement à vélo. Galeries d'art, boutiques tendance et restaurants s'enchaînent dans ce quartier culturel où le vélo électrique est roi.",
    landmarks: ["Musée Picasso", "Place des Vosges", "Carreau du Temple", "Archives Nationales"],
    metros: ["Arts et Métiers (L3/11)", "Filles du Calvaire (L8)", "Temple (L3)", "République (L3/5/8/9/11)"],
    usages: ["Tourisme culturel", "Galeries et événements", "Commerces et livraisons"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-4e",
    nom: "Paris 4e arrondissement",
    type: "arrondissement",
    codePostal: "75004",
    description: "Location vélo électrique Paris 4e — Île de la Cité, Notre-Dame, Marais",
    metaDescription:
      "Location vélo électrique Paris 4e : Île de la Cité, Notre-Dame, Bastille. Livraison rapide — LocPro Mobilité Paris.",
    intro:
      "L'Île de la Cité, Notre-Dame en reconstruction, l'Île Saint-Louis et la Bastille : le 4e arrondissement est un must pour explorer Paris à vélo. Les quais de Seine offrent des pistes cyclables sécurisées.",
    landmarks: ["Cathédrale Notre-Dame", "Île Saint-Louis", "Place de la Bastille", "Centre Pompidou"],
    metros: ["Hôtel de Ville (L1/11)", "Saint-Paul (L1)", "Bastille (L1/5/8)", "Cité (L4)"],
    usages: ["Tourisme et visites", "Promenades quais de Seine", "Déplacements courts"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-7e",
    nom: "Paris 7e arrondissement",
    type: "arrondissement",
    codePostal: "75007",
    description: "Location vélo électrique Paris 7e — Tour Eiffel, Invalides, Saint-Germain",
    metaDescription:
      "Louez un vélo électrique Paris 7e : Tour Eiffel, Invalides, Assemblée Nationale. Livraison sur place — LocPro Mobilité.",
    intro:
      "Ministères, ambassades et monuments emblématiques : le 7e arrondissement est le quartier des institutions. Le vélo électrique est le moyen de transport plébiscité par les professionnels et les touristes qui souhaitent rejoindre rapidement la Tour Eiffel ou les musées.",
    landmarks: ["Tour Eiffel", "Musée d'Orsay", "Les Invalides", "Assemblée Nationale", "Champ-de-Mars"],
    metros: ["Invalides (L8/13)", "École Militaire (L8)", "La Tour-Maubourg (L8)", "Solférino (L12)"],
    usages: ["Tourisme Tour Eiffel", "Déplacements institutionnels", "Visites musées"],
    distanceAgence: "12 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-8e",
    nom: "Paris 8e arrondissement",
    type: "arrondissement",
    codePostal: "75008",
    description: "Location vélo électrique Paris 8e — Champs-Élysées, Madeleine",
    metaDescription:
      "Location vélo électrique Paris 8e arrondissement. Champs-Élysées, Madeleine. Livraison sous 24-48h — LocPro Mobilité.",
    intro:
      "Le 8e arrondissement, entre les Champs-Élysées et la Madeleine, est le cœur du Paris des affaires et du luxe. Livraison express à votre adresse depuis notre agence du 11e arrondissement.",
    landmarks: ["Champs-Élysées", "Arc de Triomphe", "Place de la Madeleine", "Parc Monceau", "Grand Palais"],
    metros: ["Charles de Gaulle-Étoile (L1/2/6/RER A)", "Madeleine (L8/12/14)", "Franklin D. Roosevelt (L1/9)", "George V (L1)"],
    usages: ["Cadres et professions libérales", "Tourisme Champs-Élysées", "Livraison express"],
    distanceAgence: "12 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-9e",
    nom: "Paris 9e arrondissement",
    type: "arrondissement",
    codePostal: "75009",
    description: "Location vélo électrique Paris 9e — Opéra, Pigalle, Grands Magasins",
    metaDescription:
      "Location vélo électrique Paris 9e : Opéra Garnier, Galeries Lafayette, Pigalle. Tarifs dès 29€/jour — LocPro Mobilité.",
    intro:
      "Entre l'Opéra Garnier, les Grands Magasins et le quartier créatif de Pigalle, le 9e arrondissement est idéal pour les déplacements shopping et professionnels. Le vélo électrique permet d'éviter la congestion des Grands Boulevards.",
    landmarks: ["Opéra Garnier", "Galeries Lafayette", "Printemps", "Moulin Rouge (à proximité)"],
    metros: ["Opéra (L3/7/8)", "Havre-Caumartin (L3/9)", "Pigalle (L2/12)", "Saint-Lazare (L3/12/13/14)"],
    usages: ["Shopping et déplacements commerciaux", "Événements culturels", "Tourisme"],
    distanceAgence: "8 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-11e",
    nom: "Paris 11e arrondissement",
    type: "arrondissement",
    codePostal: "75011",
    description: "Location vélo électrique Paris 11e — Bastille, Oberkampf, Charonne, agence LocPro",
    metaDescription:
      "Location vélo électrique Paris 11e : Bastille, Oberkampf, Nation. Siège LocPro au 86 rue de Charonne. Retrait sur place — LocPro Mobilité.",
    intro:
      "Quartier vivant et branché, le 11e arrondissement abrite notre agence au 86 rue de Charonne. Idéal pour les jeunes actifs, start-ups et la vie nocturne — retrait sur place et livraison le jour même possibles.",
    landmarks: ["Place de la Bastille", "Oberkampf", "Rue de Charonne", "Cirque d'Hiver"],
    metros: ["Bastille (L1/5/8)", "Charonne (L9)", "Oberkampf (L5/9)", "Voltaire (L9)", "Nation (L1/2/6/9)"],
    usages: ["Navetteurs et actifs", "Livraisons restaurants", "Retrait en agence"],
    distanceAgence: "Notre agence est dans le 11e — retrait sur place possible",
  },
  {
    slug: "paris-15e",
    nom: "Paris 15e arrondissement",
    type: "arrondissement",
    codePostal: "75015",
    description: "Location vélo électrique Paris 15e — Montparnasse, Convention, Vaugirard",
    metaDescription:
      "Vélo électrique en location Paris 15e : livraison à Montparnasse, Convention, Vaugirard. Tarifs attractifs — LocPro Mobilité.",
    intro:
      "Arrondissement le plus peuplé de Paris, le 15e est avant tout résidentiel. Les familles et actifs y trouvent dans le vélo électrique une alternative efficace aux transports en commun pour les déplacements quotidiens.",
    landmarks: ["Tour Montparnasse", "Parc André-Citroën", "Palais des Sports", "Marché Georges-Brassens"],
    metros: ["Montparnasse (L4/6/12/13)", "Convention (L12)", "Vaugirard (L12)", "Balard (L8)"],
    usages: ["Déplacements domicile-travail", "Courses et loisirs familiaux", "Sport et bien-être"],
    distanceAgence: "20 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-16e",
    nom: "Paris 16e arrondissement",
    type: "arrondissement",
    codePostal: "75016",
    description: "Location vélo électrique Paris 16e — Trocadéro, Passy, Auteuil",
    metaDescription:
      "Location vélo électrique Paris 16e : Trocadéro, Passy, Auteuil, Bois de Boulogne. Livraison à domicile — LocPro Mobilité.",
    intro:
      "Le 16e arrondissement, avec ses larges avenues et sa proximité du Bois de Boulogne, offre un cadre privilégié pour les balades et les déplacements à vélo. Les pistes cyclables longeant la Seine et le Bois sont parmi les plus agréables de Paris.",
    landmarks: ["Trocadéro", "Musée Marmottan Monet", "Bois de Boulogne", "Palais de Chaillot", "Roland-Garros"],
    metros: ["Trocadéro (L6/9)", "Passy (L6)", "La Muette (L9)", "Ranelagh (L9)"],
    usages: ["Balades Bois de Boulogne", "Résidents CSP+", "Tourisme Trocadéro"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-17e",
    nom: "Paris 17e arrondissement",
    type: "arrondissement",
    codePostal: "75017",
    description: "Location vélo électrique Paris 17e — Batignolles, Ternes, Wagram",
    metaDescription:
      "Vélo électrique à louer Paris 17e : Batignolles, Ternes, Wagram. Livraison rapide — LocPro Mobilité Paris.",
    intro:
      "Entre les Ternes côté bourgeois et les Batignolles côté bobo-familial, le 17e arrondissement est un quartier en pleine transformation. Son accessibilité cyclable depuis La Défense en fait un secteur stratégique pour les navetteurs.",
    landmarks: ["Parc Clichy-Batignolles", "Palais des Congrès", "Porte Maillot", "Place des Ternes"],
    metros: ["Ternes (L2)", "Wagram (L3)", "Porte Maillot (L1)", "Rome (L2)"],
    usages: ["Navetteurs La Défense", "Familles actives", "Professionnels du quartier d'affaires"],
    distanceAgence: "10 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-18e",
    nom: "Paris 18e arrondissement",
    type: "arrondissement",
    codePostal: "75018",
    description: "Location vélo électrique Paris 18e — Montmartre, Pigalle, Clignancourt",
    metaDescription:
      "Location vélo électrique Paris 18e : Montmartre, Sacré-Cœur, Clignancourt. Idéal touristes et résidents — LocPro Mobilité.",
    intro:
      "Montmartre et sa butte, le Sacré-Cœur, les marchés de Clignancourt... Le 18e arrondissement est un incontournable touristique. Le vélo électrique vous aide à gravir les côtes et à explorer ce quartier bohème sans effort.",
    landmarks: ["Basilique du Sacré-Cœur", "Place du Tertre", "Moulin de la Galette", "Marché aux Puces de Clignancourt"],
    metros: ["Abbesses (L12)", "Pigalle (L2/12)", "Anvers (L2)", "Lamarck-Caulaincourt (L12)"],
    usages: ["Tourisme Montmartre", "Résidents et artistes", "Visites guidées"],
    distanceAgence: "20 min à vélo depuis notre agence (Paris 11e)",
  },

  // ─── Villes de banlieue ──────────────────────────────────────────────
  {
    slug: "boulogne-billancourt",
    nom: "Boulogne-Billancourt",
    type: "ville",
    departement: "Hauts-de-Seine (92)",
    codePostal: "92100",
    description: "Location vélo électrique Boulogne-Billancourt — livraison à domicile",
    metaDescription:
      "Location vélo électrique à Boulogne-Billancourt (92). Livraison à domicile. Idéal pour rejoindre Paris ou longer la Seine — LocPro Mobilité.",
    intro:
      "Première ville de banlieue parisienne, Boulogne-Billancourt est directement connectée à Paris par la piste cyclable des quais de Seine. Le vélo électrique est le choix idéal pour rejoindre le 16e ou le 15e arrondissement en moins de 20 minutes.",
    landmarks: ["Île Seguin", "Stade Bollaert-Delelis", "Parc de Billancourt", "MediaPark"],
    metros: ["Marcel Sembat (L9)", "Billancourt (L9)", "Pont de Sèvres (T2)"],
    usages: ["Navetteurs vers Paris", "Déplacements entre entreprises", "Balades quais de Seine"],
    distanceAgence: "25 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "neuilly-sur-seine",
    nom: "Neuilly-sur-Seine",
    type: "ville",
    departement: "Hauts-de-Seine (92)",
    codePostal: "92200",
    description: "Location vélo électrique Neuilly-sur-Seine — livraison premium",
    metaDescription:
      "Location de vélo électrique à Neuilly-sur-Seine (92). Livraison à domicile ou bureau. Tarifs entreprise disponibles — LocPro Mobilité.",
    intro:
      "Neuilly-sur-Seine, ville résidentielle haut de gamme aux portes du 17e arrondissement, est idéalement positionnée pour rejoindre les Champs-Élysées, La Défense ou le Bois de Boulogne à vélo électrique en quelques minutes.",
    landmarks: ["Avenue Charles-de-Gaulle", "Bois de Boulogne", "Île de la Jatte", "La Défense (proche)"],
    metros: ["Les Sablons (L1)", "Pont de Neuilly (L1)", "Tram T2 (Neuilly-Porte Maillot)"],
    usages: ["Résidents premium", "Navetteurs La Défense", "Balades Bois de Boulogne"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "levallois-perret",
    nom: "Levallois-Perret",
    type: "ville",
    departement: "Hauts-de-Seine (92)",
    codePostal: "92300",
    description: "Location vélo électrique Levallois-Perret — quartier d'affaires et résidentiel",
    metaDescription:
      "Vélo électrique à louer à Levallois-Perret (92). Livraison entreprise et particulier. Connexion directe Paris 17e — LocPro Mobilité.",
    intro:
      "Levallois-Perret, ville dense et dynamique aux portes de Paris, est un bassin d'emploi majeur. Ses pistes cyclables directement connectées au 17e arrondissement en font une destination idéale pour les navetteurs à vélo électrique.",
    landmarks: ["Tribunal de Levallois", "Centre commercial Levallois", "Île de la Jatte"],
    metros: ["Anatole France (L3)", "Louise Michel (L3)", "Pont de Levallois (L3)"],
    usages: ["Navetteurs et salariés", "PME et grandes entreprises", "Résidents actifs"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "issy-les-moulineaux",
    nom: "Issy-les-Moulineaux",
    type: "ville",
    departement: "Hauts-de-Seine (92)",
    codePostal: "92130",
    description: "Location vélo électrique Issy-les-Moulineaux — livraison entreprise",
    metaDescription:
      "Location vélo électrique Issy-les-Moulineaux (92). Idéal pôle médias, Canal+, Eurosport. Tarifs flotte entreprise — LocPro Mobilité.",
    intro:
      "Issy-les-Moulineaux est l'un des pôles économiques les plus dynamiques de la région parisienne, avec de nombreux sièges sociaux médias et tech. Le vélo électrique est plébiscité par les salariés pour les déplacements inter-sites et vers Paris.",
    landmarks: ["Canal+ (siège)", "Eurosport", "Fort d'Issy", "Quais de Seine"],
    metros: ["Mairie d'Issy (L12)", "Issy-Val de Seine (RER C)", "Corentin Celton (L12)"],
    usages: ["Salariés entreprises médias/tech", "Navetteurs RER C", "Déplacements inter-sites"],
    distanceAgence: "25 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "vincennes",
    nom: "Vincennes",
    type: "ville",
    departement: "Val-de-Marne (94)",
    codePostal: "94300",
    description: "Location vélo électrique Vincennes — Bois de Vincennes, château",
    metaDescription:
      "Location vélo électrique à Vincennes (94). Idéal Bois de Vincennes, Château. Livraison à domicile — LocPro Mobilité.",
    intro:
      "Vincennes, porte du Bois de Vincennes, est un paradis pour les cyclistes. Le vélo électrique vous permet d'explorer les 995 hectares du plus grand bois parisien et de rejoindre facilement Nation ou le 12e arrondissement.",
    landmarks: ["Château de Vincennes", "Bois de Vincennes", "Zoo de Vincennes", "Hippodrome de Vincennes"],
    metros: ["Vincennes (L1)", "Château de Vincennes (L1)", "RER A (Vincennes)"],
    usages: ["Balades Bois de Vincennes", "Tourisme château", "Familles et sportifs"],
    distanceAgence: "30 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "saint-denis",
    nom: "Saint-Denis",
    type: "ville",
    departement: "Seine-Saint-Denis (93)",
    codePostal: "93200",
    description: "Location vélo électrique Saint-Denis — Stade de France, livraison Nord Paris",
    metaDescription:
      "Location vélo électrique Saint-Denis (93). Stade de France, événements sportifs et culturels. Livraison rapide — LocPro Mobilité.",
    intro:
      "Saint-Denis, ville en pleine transformation autour du Stade de France et des Jeux Olympiques, développe rapidement ses infrastructures cyclables. Le vélo électrique est idéal pour les événements sportifs et les déplacements professionnels.",
    landmarks: ["Stade de France", "Basilique de Saint-Denis", "Plaine Commune", "Canal Saint-Denis"],
    metros: ["Saint-Denis Université (L13)", "Stade de France Saint-Denis (RER D/B)", "La Plaine Stade de France (RER B)"],
    usages: ["Événements Stade de France", "Salariés Plaine Commune", "Tourisme culturel"],
    distanceAgence: "35 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "montreuil",
    nom: "Montreuil",
    type: "ville",
    departement: "Seine-Saint-Denis (93)",
    codePostal: "93100",
    description: "Location vélo électrique Montreuil — livraison Est parisien",
    metaDescription:
      "Vélo électrique à louer à Montreuil (93). Livraison à domicile ou en entreprise. Connexion directe Paris 20e — LocPro Mobilité.",
    intro:
      "Ville créative et en pleine gentrification, Montreuil est directement connectée au 20e arrondissement de Paris. Le vélo électrique est le transport de prédilection de la communauté startup et artiste qui y réside.",
    landmarks: ["Murs à Pêches", "Marché de Montreuil", "Les Portes de Montreuil", "Fort de Montreuil"],
    metros: ["Croix de Chavaux (L9)", "Mairie de Montreuil (L9)", "Vincennes (L1 proche)"],
    usages: ["Start-ups et créatifs", "Navetteurs Paris Est", "Résidents actifs"],
    distanceAgence: "30 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "versailles",
    nom: "Versailles",
    type: "ville",
    departement: "Yvelines (78)",
    codePostal: "78000",
    description: "Location vélo électrique Versailles — Château, jardins, Grande Écurie",
    metaDescription:
      "Location vélo électrique à Versailles (78). Explorez le Château et les jardins à vélo. Livraison sur demande — LocPro Mobilité.",
    intro:
      "Versailles et ses alentours offrent des pistes cyclables exceptionnelles pour explorer le Château, les jardins à la française et le Grand Parc. Le cargo électrique est également idéal pour les professionnels du secteur touristique versaillais.",
    landmarks: ["Château de Versailles", "Jardins à la française", "Trianon", "Marché Notre-Dame"],
    metros: ["Versailles Château Rive Gauche (RER C)", "Versailles Chantiers (RER C/N)"],
    usages: ["Tourisme Château de Versailles", "Balades grandes allées", "Familles et groupes"],
    distanceAgence: "Livraison sur rendez-vous (45 min depuis Paris 11e)",
  },
  // ─── Arrondissements manquants ────────────────────────────────────────
  {
    slug: "paris-5e",
    nom: "Paris 5e arrondissement",
    type: "arrondissement",
    codePostal: "75005",
    description: "Location vélo électrique Paris 5e — Quartier Latin, Sorbonne, Panthéon",
    metaDescription:
      "Location de vélo électrique Paris 5e arrondissement. Quartier Latin, Sorbonne, jardins des plantes. Livraison sous 48h — LocPro Mobilité.",
    intro:
      "Le 5e arrondissement, cœur intellectuel de Paris, est idéal pour le vélo électrique : ruelles historiques, quais de Seine, Jardin des Plantes et campus universitaires. Rejoignez facilement les grandes bibliothèques et les musées.",
    landmarks: ["Panthéon", "Sorbonne", "Jardin des Plantes", "Musée National d'Histoire Naturelle", "Arènes de Lutèce"],
    metros: ["Cardinal Lemoine (L10)", "Jussieu (L7/10)", "Luxembourg (RER B)", "Maubert-Mutualité (L10)"],
    usages: ["Étudiants et enseignants", "Tourisme culturel", "Navetteurs Rive Gauche"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-6e",
    nom: "Paris 6e arrondissement",
    type: "arrondissement",
    codePostal: "75006",
    description: "Location vélo électrique Paris 6e — Saint-Germain-des-Prés, Luxembourg",
    metaDescription:
      "Location vélo électrique Paris 6e arrondissement. Saint-Germain-des-Prés, jardin du Luxembourg. Livraison 24–48h — LocPro Mobilité.",
    intro:
      "Saint-Germain-des-Prés, les Cafés de Flore et de la Paix, le jardin du Luxembourg : le 6e est un arrondissement de promenade et de culture. Le vélo électrique vous permet de relier facilement les rives et les musées.",
    landmarks: ["Jardin du Luxembourg", "Saint-Germain-des-Prés", "École des Beaux-Arts", "Odéon", "Musée d'Orsay (proche)"],
    metros: ["Saint-Germain-des-Prés (L4)", "Odéon (L4/10)", "Mabillon (L10)", "Luxembourg (RER B)"],
    usages: ["Promenades culturelles", "Mode et design", "Cadres et professions libérales"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-10e",
    nom: "Paris 10e arrondissement",
    type: "arrondissement",
    codePostal: "75010",
    description: "Location vélo électrique Paris 10e — Canal Saint-Martin, gares du Nord et de l'Est",
    metaDescription:
      "Location vélo électrique Paris 10e. Canal Saint-Martin, Gare du Nord, Gare de l'Est. Livraison rapide — LocPro Mobilité.",
    intro:
      "Le 10e arrondissement est un quartier en plein essor, animé par le Canal Saint-Martin et les deux grandes gares parisiennes. Idéal pour les navetteurs arrivant à Paris et les résidents du quartier.",
    landmarks: ["Canal Saint-Martin", "Gare du Nord", "Gare de l'Est", "Hôpital Saint-Louis", "Place de la République (proche)"],
    metros: ["Gare du Nord (L2/4/5/RER B/D/E)", "Gare de l'Est (L4/5/7/RER E)", "Jacques Bonsergent (L5)"],
    usages: ["Navetteurs grandes lignes", "Résidents actifs", "Touristes en transit"],
    distanceAgence: "20 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-12e",
    nom: "Paris 12e arrondissement",
    type: "arrondissement",
    codePostal: "75012",
    description: "Location vélo électrique Paris 12e — Bercy, Vincennes, Bastille",
    metaDescription:
      "Location vélo électrique Paris 12e arrondissement. Bercy Village, Bois de Vincennes, Bastille. Livraison sous 48h — LocPro Mobilité.",
    intro:
      "Le 12e arrondissement offre l'une des meilleures pistes cyclables de Paris : la Coulée Verte relie Bastille au Bois de Vincennes sur 4 km. Un terrain idéal pour découvrir Paris à vélo électrique.",
    landmarks: ["Bercy Village", "Coulée Verte", "Opéra Bastille", "Bois de Vincennes (proche)", "Accor Arena"],
    metros: ["Gare de Lyon (L1/14/RER A/D)", "Bastille (L1/5/8)", "Bercy (L6/14)", "Nation (L1/2/6/9/RER A)"],
    usages: ["Loisirs et balades Vincennes", "Salariés Bercy", "Navetteurs Gare de Lyon"],
    distanceAgence: "20 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-13e",
    nom: "Paris 13e arrondissement",
    type: "arrondissement",
    codePostal: "75013",
    description: "Location vélo électrique Paris 13e — Bibliothèque Nationale, Chinatown, Butte-aux-Cailles",
    metaDescription:
      "Location vélo électrique Paris 13e arrondissement. BNF, quartier asiatique, Butte-aux-Cailles. Livraison domicile — LocPro Mobilité.",
    intro:
      "Le 13e, entre la BNF François-Mitterrand et la Butte-aux-Cailles, est un arrondissement de contrastes idéal pour le vélo électrique. Les berges de Seine et la ZAC Paris Rive Gauche offrent des voies cyclables de qualité.",
    landmarks: ["Bibliothèque François-Mitterrand (BNF)", "Butte-aux-Cailles", "Quartier asiatique", "Les Frigos"],
    metros: ["Bibliothèque François-Mitterrand (L14/RER C)", "Place d'Italie (L5/6/7)", "Tolbiac (L7)"],
    usages: ["Étudiants et chercheurs", "Résidents actifs", "Balade berges de Seine"],
    distanceAgence: "25 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-14e",
    nom: "Paris 14e arrondissement",
    type: "arrondissement",
    codePostal: "75014",
    description: "Location vélo électrique Paris 14e — Montparnasse, Parc Montsouris, Catacombes",
    metaDescription:
      "Location vélo électrique Paris 14e arrondissement. Montparnasse, Catacombes, Parc Montsouris. Livraison 24–48h — LocPro Mobilité.",
    intro:
      "Montparnasse, les Catacombes et le Parc Montsouris caractérisent ce 14e arrondissement résidentiel et culturel. Le vélo électrique est le transport idéal pour relier les grandes rues et se connecter au périphérique cyclable.",
    landmarks: ["Tour Montparnasse", "Catacombes de Paris", "Parc Montsouris", "Fondation Cartier", "Marché Edgar-Quinet"],
    metros: ["Montparnasse-Bienvenüe (L4/6/12/13)", "Denfert-Rochereau (L4/6/RER B)", "Alésia (L4)"],
    usages: ["Résidents et familles", "Tourisme culturel", "Navetteurs Montparnasse"],
    distanceAgence: "20 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-19e",
    nom: "Paris 19e arrondissement",
    type: "arrondissement",
    codePostal: "75019",
    description: "Location vélo électrique Paris 19e — Buttes-Chaumont, Canal de l'Ourcq, La Villette",
    metaDescription:
      "Location vélo électrique Paris 19e. Buttes-Chaumont, Cité des Sciences, Canal de l'Ourcq. Livraison rapide — LocPro Mobilité.",
    intro:
      "Le 19e arrondissement est un paradis pour le cycliste avec le Parc des Buttes-Chaumont, le Canal de l'Ourcq et la Cité des Sciences et de l'Industrie. Le vélo électrique s'y intègre naturellement dans ce quartier jeune et dynamique.",
    landmarks: ["Parc des Buttes-Chaumont", "Cité des Sciences", "La Villette", "Canal de l'Ourcq", "Parc de la Villette"],
    metros: ["Jaurès (L2/5/7bis)", "Laumière (L5)", "Porte de Pantin (L5)"],
    usages: ["Familles et loisirs", "Navetteurs La Villette", "Résidents Est parisien"],
    distanceAgence: "30 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "paris-20e",
    nom: "Paris 20e arrondissement",
    type: "arrondissement",
    codePostal: "75020",
    description: "Location vélo électrique Paris 20e — Belleville, Père-Lachaise, Ménilmontant",
    metaDescription:
      "Location vélo électrique Paris 20e arrondissement. Belleville, Père-Lachaise, Ménilmontant. Livraison à domicile — LocPro Mobilité.",
    intro:
      "Belleville, Ménilmontant et le Père-Lachaise donnent au 20e arrondissement un caractère unique, mélange de cultures et d'art. Le vélo électrique permet de gravir facilement les côtes du quartier tout en profitant de l'ambiance locale.",
    landmarks: ["Cimetière du Père-Lachaise", "Belleville", "Ménilmontant", "Parc de Belleville"],
    metros: ["Gambetta (L3/3bis)", "Père Lachaise (L2/3)", "Ménilmontant (L2)", "Belleville (L2/11)"],
    usages: ["Résidents et artistes", "Tourisme culturel alternatif", "Navetteurs Est parisien"],
    distanceAgence: "25 min à vélo depuis notre agence (Paris 11e)",
  },
  // ─── Nouvelles villes banlieue proche ────────────────────────────────
  {
    slug: "courbevoie",
    nom: "Courbevoie",
    type: "ville",
    departement: "Hauts-de-Seine (92)",
    codePostal: "92400",
    description: "Location vélo électrique Courbevoie — La Défense, Seine, livraison 92",
    metaDescription:
      "Location vélo électrique Courbevoie (92). La Défense, berges de Seine. Livraison à domicile ou en entreprise — LocPro Mobilité.",
    intro:
      "Courbevoie, aux portes de La Défense, est un pôle d'affaires majeur de l'Île-de-France. Le vélo électrique permet de relier facilement les tours de La Défense, les berges de Seine et Paris Ouest en quelques minutes.",
    landmarks: ["La Défense (CNIT, Grande Arche)", "Berges de Seine", "Parc de Bécon", "Île de la Jatte"],
    metros: ["La Défense (L1/RER A)", "Courbevoie (Transilien L)", "Charlebourg (T2)"],
    usages: ["Cadres La Défense", "Navetteurs Paris Ouest", "Salariés secteur tertiaire"],
    distanceAgence: "20 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "clichy",
    nom: "Clichy",
    type: "ville",
    departement: "Hauts-de-Seine (92)",
    codePostal: "92110",
    description: "Location vélo électrique Clichy — livraison Nord Ouest Paris, industries créatives",
    metaDescription:
      "Location vélo électrique à Clichy (92). Livraison rapide, proche Paris 17e. Industries créatives et résidentiel — LocPro Mobilité.",
    intro:
      "Clichy, directement connectée au 17e arrondissement de Paris, est une ville en transformation rapide. Le vélo électrique y est idéal pour rejoindre Paris sans embouteillages et explorer les nouveaux quartiers rénovés.",
    landmarks: ["Maison du Peuple", "Berges de Seine", "Clichy Batignolles (proche)", "Parc Roger Salengro"],
    metros: ["Mairie de Clichy (L13)", "Porte de Clichy (L13/RER C)"],
    usages: ["Navetteurs Paris 17e/8e", "Résidents actifs", "PME et artisans"],
    distanceAgence: "15 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "ivry-sur-seine",
    nom: "Ivry-sur-Seine",
    type: "ville",
    departement: "Val-de-Marne (94)",
    codePostal: "94200",
    description: "Location vélo électrique Ivry-sur-Seine — livraison Sud Est Paris, RER C",
    metaDescription:
      "Location vélo électrique à Ivry-sur-Seine (94). Proche Paris 13e, RER C. Livraison domicile ou bureau — LocPro Mobilité.",
    intro:
      "Ivry-sur-Seine, limitrophe du 13e arrondissement, est en plein développement avec le quartier ZAC du Plateau et les berges de Seine. Le vélo électrique est le meilleur moyen de se déplacer vers Paris sans les embouteillages de la RN7.",
    landmarks: ["Berges de Seine d'Ivry", "Manufacture des Œillets", "Parc Maurice Thorez", "ZAC du Plateau"],
    metros: ["Pierre et Marie Curie (T3a)", "Ivry-sur-Seine (RER C)"],
    usages: ["Navetteurs Paris 13e", "Résidents en reconversion urbaine", "Salariés secteur créatif"],
    distanceAgence: "30 min à vélo depuis notre agence (Paris 11e)",
  },
  {
    slug: "pantin",
    nom: "Pantin",
    type: "ville",
    departement: "Seine-Saint-Denis (93)",
    codePostal: "93500",
    description: "Location vélo électrique Pantin — Canal de l'Ourcq, mode, livraison 93",
    metaDescription:
      "Location vélo électrique à Pantin (93). Canal de l'Ourcq, quartier mode et design. Livraison rapide — LocPro Mobilité.",
    intro:
      "Pantin est devenue la capitale française de la mode et du design, avec les sièges de Chanel, Hermès et de nombreuses agences créatives. Le long du Canal de l'Ourcq, le vélo électrique est le transport de prédilection des professionnels de l'industrie créative.",
    landmarks: ["Canal de l'Ourcq", "Siège Chanel et Hermès", "Parc de la Bergère", "Docks en Seine (proche)"],
    metros: ["Hoche (L5)", "Église de Pantin (L5)", "Aubervilliers-Pantin (L7)"],
    usages: ["Professionnels de la mode", "Navetteurs Paris 19e", "Résidents actifs"],
    distanceAgence: "30 min à vélo depuis notre agence (Paris 11e)",
  },
];

function arrondissementNum(slug: string): number {
  const m = slug.match(/paris-(\d+)/);
  return m ? parseInt(m[1], 10) : 999;
}

export const locationsByType = {
  arrondissements: locations
    .filter((l) => l.type === "arrondissement")
    .sort((a, b) => arrondissementNum(a.slug) - arrondissementNum(b.slug)),
  villes: locations
    .filter((l) => l.type === "ville")
    .sort((a, b) => a.nom.localeCompare(b.nom, "fr")),
};
