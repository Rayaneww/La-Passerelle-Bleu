import { CategorieEvenement } from '../donnees/modeles';

/** Heure à la française : « 15h » ou « 15h30 ». */
export function heureFr(iso: string): string {
  const d = new Date(iso);
  const min = d.getMinutes();
  return `${d.getHours()}h${min ? String(min).padStart(2, '0') : ''}`;
}

export const LIBELLES_CATEGORIE: Record<CategorieEvenement, string> = {
  atelier: 'Atelier',
  rencontre: 'Rencontre conviviale',
  sortie: 'Sortie',
};
