import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-en-tete',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './en-tete.html',
  styleUrl: './en-tete.scss',
})
export class EnTete {
  protected readonly menuOuvert = signal(false);

  protected readonly liens = [
    { chemin: '/', libelle: 'Accueil', exact: true },
    { chemin: '/nos-actions', libelle: 'Nos actions', exact: false },
    { chemin: '/agenda', libelle: 'Agenda', exact: false },
  ];

  protected basculerMenu(): void {
    this.menuOuvert.update((v) => !v);
  }

  protected fermerMenu(): void {
    this.menuOuvert.set(false);
  }
}
