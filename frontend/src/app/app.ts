import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnTete } from './mise-en-page/en-tete/en-tete';
import { PiedDePage } from './mise-en-page/pied-de-page/pied-de-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnTete, PiedDePage],
  template: `
    <a class="lien-evitement" href="#contenu">Aller au contenu</a>
    <app-en-tete />
    <main id="contenu" tabindex="-1">
      <router-outlet />
    </main>
    <app-pied-de-page />
  `,
  styleUrl: './app.scss',
})
export class App {}
