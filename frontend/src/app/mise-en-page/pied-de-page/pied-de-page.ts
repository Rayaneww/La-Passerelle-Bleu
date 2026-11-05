import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE, telephoneLien } from '../../donnees/site';

@Component({
  selector: 'app-pied-de-page',
  imports: [RouterLink],
  template: `
    <footer class="pied">
      <div class="conteneur grille">
        <div>
          <p class="nom">{{ site.nom }}</p>
          <p class="slogan">{{ site.slogan }}</p>
        </div>

        <div>
          <h2 class="titre">Nous contacter</h2>
          <ul class="contacts">
            <li><a [href]="'mailto:' + site.email">{{ site.email }}</a></li>
            <li><a [href]="tel">{{ site.telephone }}</a></li>
          </ul>
        </div>

        <div class="legal">
          <p>Association loi 1901, {{ site.ville }}</p>
          <a routerLink="/mentions-legales">Mentions légales</a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .pied {
      background: var(--bleu-nuit);
      color: var(--lavande-pale);
      padding-block: 3rem;
      margin-top: 4rem;
    }
    .grille {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
      gap: 2rem;
    }
    .nom {
      font: 700 var(--t-l) / 1.1 var(--police-titre);
      color: var(--blanc);
      margin-bottom: 0.25rem;
    }
    .slogan {
      color: var(--lavande);
    }
    .titre {
      font-size: var(--t-m);
      color: var(--blanc);
    }
    .contacts {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.35rem;
    }
    a {
      color: var(--blanc);
    }
    a:focus-visible {
      outline-color: var(--the);
    }
    .legal {
      font-size: var(--t-xs);
      color: var(--lavande);
    }
  `,
})
export class PiedDePage {
  protected readonly site = SITE;
  protected readonly tel = telephoneLien(SITE.telephone);
}
