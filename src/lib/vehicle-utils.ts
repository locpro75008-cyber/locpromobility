export function prixMin(tarifs: { prix: string }[]): number {
  const nums = tarifs
    .map((t) => parseInt(t.prix.replace(/[^\d]/g, ""), 10))
    .filter((n) => !Number.isNaN(n));
  return nums.length ? Math.min(...nums) : 999;
}

export function autonomieKm(specs?: { label: string; value: string }[]): number {
  const spec = specs?.find((s) => s.label.toLowerCase().includes("autonomie"));
  if (!spec) return 0;
  const m = spec.value.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export const catLabels: Record<string, string> = {
  "velo-electrique": "Vélo électrique",
  cargo: "Cargo électrique",
  trottinette: "Trottinette",
  gyropode: "Gyropode",
};
