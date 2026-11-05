import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Annonce, Evenement } from './modeles';

/**
 * Source des événements et annonces.
 * Étape 1 : données d'exemple en dur.
 * Étape 3 : ces méthodes appelleront l'API NestJS (HttpClient) — les composants ne changeront pas.
 */
@Injectable({ providedIn: 'root' })
export class ContenuService {
  private readonly evenements: Evenement[] = [
    {
      id: 1,
      titre: "Jeux de socié'THÉ",
      slug: 'jeux-de-societhe',
      dateDebut: '2026-11-14T15:00:00',
      lieu: 'La Ferté-sous-Jouarre',
      description:
        "Jouez à des jeux variés à l'heure du thé ! Découvrez notre sélection de jeux et n'hésitez pas à apporter les vôtres. Un moment convivial que vous soyez seul, en famille ou entre amis.",
      affiche: 'images/evenements/jeux-de-societhe.jpg',
      categorie: 'rencontre',
      mentions: ['Ouvert à toutes et tous', 'Buvette sur place'],
    },
    {
      id: 2,
      titre: 'Atelier cuisine du monde',
      slug: 'atelier-cuisine-du-monde',
      dateDebut: '2026-11-28T10:00:00',
      lieu: 'La Ferté-sous-Jouarre',
      description: 'On cuisine ensemble une recette venue d’ailleurs, puis on partage le repas. Exemple de démonstration.',
      categorie: 'atelier',
      mentions: ['Gratuit', 'Sur inscription'],
    },
    {
      id: 3,
      titre: 'Sortie au marché de Noël',
      slug: 'sortie-marche-de-noel',
      dateDebut: '2026-12-12T14:00:00',
      lieu: 'Départ devant la mairie',
      description: 'Une après-midi pour flâner ensemble entre les chalets. Exemple de démonstration.',
      categorie: 'sortie',
      mentions: ['Covoiturage organisé'],
    },
    {
      id: 4,
      titre: 'Forum des associations',
      slug: 'forum-des-associations-2026',
      dateDebut: '2026-09-06T10:00:00',
      lieu: 'La Ferté-sous-Jouarre',
      description: 'Nous étions présents sur notre stand pour présenter l’association et rencontrer les habitants.',
      categorie: 'rencontre',
      mentions: [],
    },
  ];

  private readonly annonces: Annonce[] = [
    {
      id: 1,
      titre: 'Merci pour votre visite au Forum des associations',
      slug: 'merci-forum-des-associations',
      contenu:
        'Vous avez été nombreux à venir nous rencontrer sur notre stand. Merci ! Retrouvez toutes nos prochaines rencontres dans l’agenda.',
      publieLe: '2026-09-10',
    },
    {
      id: 2,
      titre: 'On cherche des jeux de société',
      slug: 'on-cherche-des-jeux',
      contenu: 'Vous avez des jeux qui dorment dans un placard ? Ils feront le bonheur de nos après-midi jeux. Exemple de démonstration.',
      publieLe: '2026-10-20',
    },
  ];

  /** Un événement reste « à venir » jusqu'à la fin de sa journée (ou de sa date de fin). */
  private estAVenir(e: Evenement, maintenant: Date): boolean {
    const fin = new Date(e.dateFin ?? e.dateDebut);
    if (!e.dateFin) fin.setHours(23, 59, 59, 999);
    return fin >= maintenant;
  }

  prochainsEvenements(limite = Infinity, maintenant = new Date()): Observable<Evenement[]> {
    return of(
      this.evenements
        .filter((e) => this.estAVenir(e, maintenant))
        .sort((a, b) => a.dateDebut.localeCompare(b.dateDebut))
        .slice(0, limite),
    );
  }

  evenementsPasses(maintenant = new Date()): Observable<Evenement[]> {
    return of(
      this.evenements
        .filter((e) => !this.estAVenir(e, maintenant))
        .sort((a, b) => b.dateDebut.localeCompare(a.dateDebut)),
    );
  }

  evenementParSlug(slug: string): Observable<Evenement | undefined> {
    return of(this.evenements.find((e) => e.slug === slug));
  }

  /** Tous les slugs, pour le pré-rendu des pages de détail. */
  slugsEvenements(): string[] {
    return this.evenements.map((e) => e.slug);
  }

  dernieresAnnonces(limite = Infinity): Observable<Annonce[]> {
    return of([...this.annonces].sort((a, b) => b.publieLe.localeCompare(a.publieLe)).slice(0, limite));
  }
}
