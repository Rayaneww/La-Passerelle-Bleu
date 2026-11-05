import { Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContenuService } from '../../donnees/contenu.service';
import { Evenement } from '../../donnees/modeles';
import { CarteRdv } from '../../partage/carte-rdv/carte-rdv';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, DatePipe, CarteRdv],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  private readonly contenu = inject(ContenuService);

  protected readonly evenements = toSignal(this.contenu.prochainsEvenements(3), { initialValue: [] });
  protected readonly annonces = toSignal(this.contenu.dernieresAnnonces(3), { initialValue: [] });
  protected readonly vedette = computed<Evenement | undefined>(() => this.evenements()[0]);

  protected readonly valeurs = [
    {
      titre: 'Partage',
      texte: 'Un savoir-faire, une recette, un jeu, un moment : chacun apporte ce qu’il a, et tout le monde en profite.',
    },
    {
      titre: 'Échange',
      texte: 'Se rencontrer entre voisins, entre générations et entre cultures, pour mieux se connaître.',
    },
    {
      titre: 'Solidarité',
      texte: 'Personne ne reste sur le bord du chemin : nos activités sont ouvertes à toutes et tous.',
    },
  ];
}
