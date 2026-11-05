import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Evenement } from '../../donnees/modeles';
import { heureFr, LIBELLES_CATEGORIE } from '../formats';

/** Un rendez-vous dans une liste : pastille de date + infos. Toute la carte mène au détail. */
@Component({
  selector: 'app-carte-rdv',
  imports: [DatePipe, RouterLink],
  templateUrl: './carte-rdv.html',
  styleUrl: './carte-rdv.scss',
  host: { '[class.passe]': 'passe()' },
})
export class CarteRdv {
  readonly evenement = input.required<Evenement>();
  /** Niveau de titre pour respecter la hiérarchie de la page. */
  readonly niveau = input<2 | 3>(3);
  readonly passe = input(false);

  protected readonly heure = heureFr;
  protected readonly categories = LIBELLES_CATEGORIE;
}
