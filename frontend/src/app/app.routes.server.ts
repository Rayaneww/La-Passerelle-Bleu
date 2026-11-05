import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ContenuService } from './donnees/contenu.service';

export const serverRoutes: ServerRoute[] = [
  {
    // Une page HTML par événement, générée au build.
    path: 'agenda/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => inject(ContenuService).slugsEvenements().map((slug) => ({ slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
