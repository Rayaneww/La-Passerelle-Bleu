import { firstValueFrom } from 'rxjs';
import { ContenuService } from './contenu.service';

describe('ContenuService', () => {
  const service = new ContenuService();

  it('ne renvoie que les événements à venir, triés par date', async () => {
    const evts = await firstValueFrom(service.prochainsEvenements(10, new Date('2026-11-20T00:00:00')));
    expect(evts.map((e) => e.slug)).toEqual(['atelier-cuisine-du-monde', 'sortie-marche-de-noel']);
  });

  it('garde un événement « à venir » jusqu’à la fin de sa journée', async () => {
    const evts = await firstValueFrom(service.prochainsEvenements(1, new Date('2026-11-14T20:00:00')));
    expect(evts[0].slug).toBe('jeux-de-societhe');
  });

  it('respecte la limite demandée', async () => {
    const evts = await firstValueFrom(service.prochainsEvenements(1, new Date('2026-01-01T00:00:00')));
    expect(evts).toHaveLength(1);
  });

  it('liste les événements passés du plus récent au plus ancien', async () => {
    const passes = await firstValueFrom(service.evenementsPasses(new Date('2026-11-20T00:00:00')));
    expect(passes.map((e) => e.slug)).toEqual(['jeux-de-societhe', 'forum-des-associations-2026']);
  });

  it('retrouve un événement par son slug', async () => {
    expect((await firstValueFrom(service.evenementParSlug('jeux-de-societhe')))?.titre).toBe("Jeux de socié'THÉ");
    expect(await firstValueFrom(service.evenementParSlug('inconnu'))).toBeUndefined();
  });

  it('trie les annonces de la plus récente à la plus ancienne', async () => {
    const annonces = await firstValueFrom(service.dernieresAnnonces());
    expect(annonces[0].slug).toBe('on-cherche-des-jeux');
  });
});
