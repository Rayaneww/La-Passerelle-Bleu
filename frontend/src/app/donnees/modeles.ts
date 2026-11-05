/** Types partagés — calqués sur le modèle de données de la spec (docs/specs). */

export type CategorieEvenement = 'atelier' | 'rencontre' | 'sortie';

export interface Evenement {
  id: number;
  titre: string;
  slug: string;
  /** Date ISO 8601, heure locale (ex. "2026-11-14T15:00:00") */
  dateDebut: string;
  dateFin?: string;
  lieu: string;
  description: string;
  affiche?: string;
  categorie: CategorieEvenement;
  /** Infos pratiques courtes, une par ligne : « Ouvert à toutes et tous », « Buvette sur place »… */
  mentions: string[];
}

export interface Annonce {
  id: number;
  titre: string;
  slug: string;
  contenu: string;
  image?: string;
  publieLe: string;
}
