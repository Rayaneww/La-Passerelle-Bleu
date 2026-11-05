import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'La Passerelle Bleue · Ensemble, créons du lien',
    loadComponent: () => import('./pages/accueil/accueil').then((m) => m.Accueil),
  },
  {
    path: 'nos-actions',
    title: 'Nos actions · La Passerelle Bleue',
    loadComponent: () => import('./pages/nos-actions/nos-actions').then((m) => m.NosActions),
  },
  {
    path: 'agenda',
    title: 'Agenda et annonces · La Passerelle Bleue',
    loadComponent: () => import('./pages/agenda/agenda').then((m) => m.Agenda),
  },
  {
    path: 'agenda/:slug',
    loadComponent: () => import('./pages/evenement/evenement').then((m) => m.EvenementPage),
  },
  {
    path: 'mentions-legales',
    title: 'Mentions légales · La Passerelle Bleue',
    loadComponent: () => import('./pages/mentions-legales/mentions-legales').then((m) => m.MentionsLegales),
  },
  { path: '**', redirectTo: '' },
];
