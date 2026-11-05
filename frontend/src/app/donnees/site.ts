/**
 * Coordonnées et informations générales de l'association.
 * À COMPLÉTER : remplacer l'e-mail et le téléphone par les vrais.
 */
export const SITE = {
  nom: 'La Passerelle Bleue',
  slogan: 'Ensemble, créons du lien',
  ville: 'La Ferté-sous-Jouarre',
  email: 'contact@exemple.fr',
  telephone: '01 23 45 67 89',
} as const;

/** Numéro au format international pour les liens tel: */
export const telephoneLien = (tel: string) => 'tel:+33' + tel.replace(/\s/g, '').replace(/^0/, '');
