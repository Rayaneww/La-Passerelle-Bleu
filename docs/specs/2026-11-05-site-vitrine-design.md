# Site vitrine — La Passerelle Bleue · Spécification

_Date : 2026-11-05_

## 1. Objectifs
- Faire connaître l'association (vivre-ensemble, lien social, inclusion par le partage, l'échange et la solidarité) à La Ferté-sous-Jouarre et alentours.
- Annoncer les événements à venir et publier des annonces.
- Les bénévoles ajoutent événements et annonces sans toucher au code ; les grosses évolutions sont faites par le développeur (admin).

## 2. Identité visuelle (direction A — chaleureuse et illustrée)
- Logo : `assets/source/logo.jpg` (« La Passerelle Bleue — Ensemble, créons du lien »).
- Couleurs (estimées d'après le logo, à confirmer) :
  - Bleu roi `#2D44D0` (titres, boutons, logo)
  - Bleu nuit `#1A2A8C` (texte)
  - Lavande `#C9D2FA` (formes rondes décoratives)
  - Lavande pâle `#E8ECFD` (fonds de section)
  - Blanc `#FFFFFF`
- Formes arrondies (cercles lavande), cartes aux coins arrondis, ton convivial.
- Orthographe affichée : « La Passerelle Bleue » (comme sur le logo).

## 3. Pages
- **Commun** : en-tête (logo + menu Accueil · Nos actions · Agenda, menu replié sur mobile) ; pied de page (slogan, e-mail et téléphone cliquables, « Association loi 1901 · La Ferté-sous-Jouarre », lien Mentions légales).
- **Accueil** : bandeau « Ensemble, créons du lien » + bouton « Voir l'agenda » ; 3 prochains événements ; valeurs Partage · Échange · Solidarité ; 2–3 dernières annonces ; encadré Forum des associations.
- **Nos actions** : Ateliers & activités, Rencontres conviviales, Sorties & culture. Contenu statique, modifié dans le code.
- **Agenda & annonces** : événements à venir (tri par date), détail d'un événement, annonces, événements passés repliés (bascule automatique selon la date).
- **Mentions légales** : page statique.
- **Admin** (`/admin`, hors menu) : connexion ; CRUD événements et annonces ; gestion des comptes (rôle admin uniquement).

## 4. Architecture
- **Front** : Angular (composants standalone, routing, pré-rendu des pages publiques).
- **API** : NestJS (TypeScript), préfixe `/api`.
- **Base** : SQLite (fichier unique) via Drizzle ORM + migrations.
- **Images** : dossier `uploads/`, redimensionnées à l'envoi (`sharp`, largeur max 1600 px, WebP).
- **Auth** : comptes en base, mots de passe hachés argon2, session par cookie httpOnly/Secure/SameSite=Lax ; rôles `admin` et `benevole` ; limitation des tentatives de connexion.
- **Hébergement** : vieux portable Linux. Apache sert le build Angular et `/uploads`, proxy `/api` → NestJS (`localhost:3000`, service systemd). Exposition via Cloudflare Tunnel (aucun port ouvert). Sauvegarde nocturne de la base et des affiches.
- **Domaine** : ex. `lapasserellebleue.fr` (~10 €/an).

## 5. Modèle de données
**utilisateurs** : `id`, `email` (unique), `nom`, `mot_de_passe_hash`, `role` (`admin` | `benevole`), `cree_le`.

**evenements** : `id`, `titre`, `slug` (unique), `date_debut` (date + heure), `date_fin` (optionnelle), `lieu`, `description` (texte), `affiche` (chemin image, optionnel), `categorie` (`atelier` | `rencontre` | `sortie`), `mentions` (texte court optionnel, ex. « Ouvert à toutes et tous · Buvette sur place »), `publie` (booléen), `cree_par`, `cree_le`, `modifie_le`.

**annonces** : `id`, `titre`, `slug` (unique), `contenu` (texte), `image` (optionnelle), `publie` (booléen), `publie_le`, `cree_par`, `cree_le`, `modifie_le`.

## 6. API
Public : `GET /api/evenements?periode=a-venir|passes`, `GET /api/evenements/:slug`, `GET /api/annonces`, `GET /api/annonces/:slug`.
Authentifié : `POST /api/auth/connexion`, `POST /api/auth/deconnexion`, `GET /api/auth/moi` ; `POST|PATCH|DELETE /api/evenements[/:id]`, idem annonces ; `POST /api/uploads` ; admin : `GET|POST|DELETE /api/utilisateurs`.

## 7. Hors périmètre (pour l'instant)
Formulaire de contact, adhésion/paiement en ligne, newsletter, page Qui sommes-nous, réseaux sociaux.

## 8. Étapes
1. Structure du projet + charte visuelle + en-tête / pied de page + Accueil (données d'exemple).
2. Pages Nos actions, Agenda, Mentions légales.
3. API NestJS + SQLite + lecture publique.
4. Authentification + interface admin + envoi d'affiches.
5. Déploiement sur le portable (Apache, systemd, Cloudflare Tunnel, sauvegardes).
