# La Passerelle Bleue — site vitrine

Site de l'association La Passerelle Bleue (La Ferté-sous-Jouarre) : « Ensemble, créons du lien ».

- `frontend/` : site Angular 21 (pages pré-rendues)
- `docs/specs/` : spécification du projet
- `assets/source/` : logo et affiches d'origine

## Développer

```bash
cd frontend
npm install
npm start          # http://localhost:4200
npx ng test --watch=false
```

## Démo sur GitHub Pages

Chaque push sur `master` publie automatiquement la version statique du site
(workflow `.github/workflows/deploy-pages.yml`).
À activer une fois : dépôt GitHub > Settings > Pages > Source : **GitHub Actions**.

> Les données (événements, annonces) sont pour l'instant des exemples.
> La version finale (API NestJS + SQLite) sera hébergée sur le serveur de l'association.
