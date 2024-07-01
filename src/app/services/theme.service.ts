import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string = 'light-theme';
  private renderer: Renderer2;
  private themeLink: HTMLLinkElement | null = null;
  public theme$: BehaviorSubject<string> = new BehaviorSubject(
    this.currentTheme
  );

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  initializeTheme() {
    this.themeLink = document.getElementById(
      'theme-style'
    ) as HTMLLinkElement | null;
    if (this.themeLink) {
      this.updateTheme();
    } else {
      console.error('Theme element not found.');
    }
  }

  setDarkTheme() {
    this.currentTheme = 'dark-theme';
    this.updateTheme();
  }

  setLightTheme() {
    this.currentTheme = 'light-theme';
    this.updateTheme();
  }

  private updateTheme() {
    if (this.themeLink) {
      console.log(`Applying theme: ${this.currentTheme}`);
      this.renderer.setAttribute(
        this.themeLink,
        'href',
        `assets/themes/${this.currentTheme}.css`
      );
      this.theme$.next(this.currentTheme);
    } else {
      console.error('Theme element not found.');
    }
  }
}
