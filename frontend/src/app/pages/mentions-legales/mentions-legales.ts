import { Component } from '@angular/core';
import { SITE, telephoneLien } from '../../donnees/site';

/**
 * Mentions légales (loi pour la confiance dans l'économie numérique, art. 6).
 * Les éléments [À COMPLÉTER] doivent être renseignés avant la mise en ligne.
 */
@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.html',
  styles: `
    .page { padding-block: clamp(1.5rem, 4vw, 3.5rem) 1rem; }
    h1 { font-size: var(--t-xl); font-weight: 800; }
    h2 { font-size: var(--t-l); margin-top: 2.5rem; }
    .a-completer { background: var(--the); color: var(--bleu-nuit); padding: 0 0.3em; border-radius: 4px; font-weight: 700; }
    .maj { color: var(--texte-doux); font-size: var(--t-s); }
  `,
})
export class MentionsLegales {
  protected readonly site = SITE;
  protected readonly tel = telephoneLien(SITE.telephone);
}
