import type { CollectionEntry } from "astro:content";
import { CALC_SLUGS } from "./site";

type Vehicle = CollectionEntry<"vehicules">;

export function parsePrixEuro(prix: string): number {
  if (/devis/i.test(prix)) return 0;
  const n = parseInt(prix.replace(/[^\d]/g, ""), 10);
  return Number.isNaN(n) ? 0 : n;
}

export function getTarifByLabel(
  tarifs: Vehicle["data"]["tarifs"],
  labelPart: string,
): string {
  const key = labelPart.toLowerCase();
  let t: (typeof tarifs)[number] | undefined;

  if (key === "journée") {
    t = tarifs.find((x) => x.label.toLowerCase().includes("journée"));
  } else if (key === "semaine") {
    t = tarifs.find((x) => x.label.toLowerCase().includes("semaine"));
  } else if (key === "mois") {
    t = tarifs.find((x) => /^mois$/i.test(x.label.trim()));
  } else if (key.includes("long")) {
    t = tarifs.find((x) => x.label.toLowerCase().includes("long terme"));
  } else {
    t = tarifs.find((x) => x.label.toLowerCase().includes(key));
  }

  return t?.prix ?? "—";
}

export function vehicleTariffRow(v: Vehicle) {
  const lld = getTarifByLabel(v.data.tarifs, "long terme");
  return {
    slug: v.slug,
    nom: v.data.nom,
    ref: v.data.modeleReference,
    jour: getTarifByLabel(v.data.tarifs, "journée"),
    semaine: getTarifByLabel(v.data.tarifs, "semaine"),
    mois: getTarifByLabel(v.data.tarifs, "mois"),
    lld,
    lldIsDevis: /devis/i.test(lld),
  };
}

export function buildCalcTarifs(vehicles: Vehicle[]) {
  const bySlug = Object.fromEntries(vehicles.map((v) => [v.slug, v]));
  const result: Record<
    string,
    { jour: number; semaine: number; mois: number; an: number; slug: string }
  > = {};

  for (const [key, slug] of Object.entries(CALC_SLUGS)) {
    const v = bySlug[slug];
    if (!v) continue;
    const jour = parsePrixEuro(getTarifByLabel(v.data.tarifs, "journée"));
    const semaine = parsePrixEuro(getTarifByLabel(v.data.tarifs, "semaine"));
    const mois = parsePrixEuro(getTarifByLabel(v.data.tarifs, "mois"));
    const lldRaw = getTarifByLabel(v.data.tarifs, "long terme");
    const an = parsePrixEuro(lldRaw) || mois;
    result[key] = { jour, semaine, mois, an, slug };
  }
  return result;
}

/** Fourchettes par catégorie pour les cartes court / moyen / long terme */
export function buildCategoryRanges(vehicles: Vehicle[]) {
  const groups: Record<string, Vehicle[]> = {
    trottinette: [],
    "velo-electrique": [],
    cargo: [],
    gyropode: [],
  };
  for (const v of vehicles) {
    groups[v.data.categorie]?.push(v);
  }

  function range(cats: Vehicle[], label: string) {
    const vals = cats
      .map((v) => parsePrixEuro(getTarifByLabel(v.data.tarifs, label)))
      .filter((n) => n > 0);
    if (!vals.length) return "—";
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    return min === max ? `${min} €` : `${min}–${max} €`;
  }

  return {
    court: {
      trottinette: range(groups.trottinette, "journée"),
      velo: range(groups["velo-electrique"], "journée"),
      cargo: range(groups.cargo, "journée"),
      gyropode: range(groups.gyropode, "journée"),
    },
    moyen: {
      trottinette: range(groups.trottinette, "mois"),
      velo: range(groups["velo-electrique"], "mois"),
      cargo: range(groups.cargo, "mois"),
      gyropode: range(groups.gyropode, "mois"),
    },
    long: {
      trottinette: range(groups.trottinette, "long terme"),
      velo: range(groups["velo-electrique"], "long terme"),
      cargo: range(groups.cargo, "long terme"),
    },
  };
}
