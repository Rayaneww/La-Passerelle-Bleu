import { Component, effect, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ContenuService } from '../../donnees/contenu.service';
import { heureFr, LIBELLES_CATEGORIE } from '../../partage/formats';

@Component({
  selector: 'app-evenement',
  imports: [DatePipe, RouterLink],
  templateUrl: './evenement.html',
  styleUrl: './evenement.scss',
})
export class EvenementPage {
  private readonly contenu = inject(ContenuService);
  private readonly titre = inject(Title);
  private readonly meta = inject(Meta);

  /** Paramètre de route `:slug` (liaison via withComponentInputBinding). */
  readonly slug = input.required<string>();

  /** `undefined` = introuvable. */
  protected readonly evenement = toSignal(
    toObservable(this.slug).pipe(switchMap((s) => this.contenu.evenementParSlug(s))),
  );

  protected readonly heure = heureFr;
  protected readonly categories = LIBELLES_CATEGORIE;

  constructor() {
    effect(() => {
      const evt = this.evenement();
      this.titre.setTitle(`${evt ? evt.titre : 'Événement introuvable'} · La Passerelle Bleue`);
      if (evt) this.meta.updateTag({ name: 'description', content: evt.description.slice(0, 160) });
    });
  }

  protected estPasse(iso: string): boolean {
    const fin = new Date(iso);
    fin.setHours(23, 59, 59, 999);
    return fin < new Date();
  }
}
