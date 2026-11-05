import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Action {
  id: string;
  titre: string;
  texte: string;
  exemples: string[];
}

/** Contenu stable : modifié directement ici par l'administrateur du site. */
@Component({
  selector: 'app-nos-actions',
  imports: [RouterLink],
  templateUrl: './nos-actions.html',
  styleUrl: './nos-actions.scss',
})
export class NosActions {
  protected readonly actions: Action[] = [
    {
      id: 'ateliers',
      titre: 'Ateliers et activités',
      texte:
        'Apprendre en faisant, et surtout en faisant ensemble. Nos ateliers sont pensés pour que chacun puisse participer, quel que soit son âge ou son niveau. On vient comme on est, on repart avec un savoir-faire et quelques nouvelles connaissances.',
      exemples: ['Cuisine du monde', 'Jeux de société', 'Activités créatives'],
    },
    {
      id: 'rencontres',
      titre: 'Rencontres conviviales',
      texte:
        'Un thé, un jeu, une discussion : parfois il n’en faut pas plus pour créer du lien. Nos rencontres sont des moments simples et chaleureux, ouverts à toutes et tous, que l’on vienne seul, en famille ou entre amis.',
      exemples: ["Jeux de socié'THÉ", 'Goûters partagés', 'Temps d’échange'],
    },
    {
      id: 'sorties',
      titre: 'Sorties et culture',
      texte:
        'Découvrir ensemble ce qui se passe près de chez nous et un peu plus loin. Nos sorties permettent de profiter d’activités culturelles en groupe, sans rester seul face à l’organisation ou au transport.',
      exemples: ['Visites', 'Marchés et fêtes locales', 'Spectacles'],
    },
  ];
}
