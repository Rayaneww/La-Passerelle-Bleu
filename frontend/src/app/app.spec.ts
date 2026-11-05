import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('affiche l’en-tête, le contenu et le pied de page', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('app-en-tete')).toBeTruthy();
    expect(el.querySelector('main#contenu')).toBeTruthy();
    expect(el.querySelector('app-pied-de-page')?.textContent).toContain('Mentions légales');
  });
});
