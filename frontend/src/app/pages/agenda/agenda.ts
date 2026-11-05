import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContenuService } from '../../donnees/contenu.service';
import { CarteRdv } from '../../partage/carte-rdv/carte-rdv';

@Component({
  selector: 'app-agenda',
  imports: [DatePipe, CarteRdv],
  templateUrl: './agenda.html',
  styleUrl: './agenda.scss',
})
export class Agenda {
  private readonly contenu = inject(ContenuService);

  protected readonly aVenir = toSignal(this.contenu.prochainsEvenements(), { initialValue: [] });
  protected readonly passes = toSignal(this.contenu.evenementsPasses(), { initialValue: [] });
  protected readonly annonces = toSignal(this.contenu.dernieresAnnonces(), { initialValue: [] });
}
