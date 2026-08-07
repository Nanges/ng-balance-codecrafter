import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

export type AppTheme = 'tulipe'|'lady';
export const APP_THEME = 'APP_THEME';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitchService {
  readonly #root = inject(DOCUMENT).documentElement;
  readonly #currentTheme = signal<AppTheme|null>(null)
  readonly currentTheme = this.#currentTheme.asReadonly();
  /**
   *
   */
  constructor() {
    // Update dom & local storage
    effect((cleanup) => {
      const currentTheme = this.#currentTheme();

      if(currentTheme !== null){
        this.#root.classList.add(currentTheme);
        localStorage.setItem(APP_THEME, currentTheme);

        cleanup(() => {
          this.#root.classList.remove(currentTheme);
        })
      }
      else{
        localStorage.removeItem(APP_THEME);
      }
    });
  }

  static initializers(){
    const themeSwitch = inject(ThemeSwitchService);
    const theme = localStorage.getItem(APP_THEME) as AppTheme|null;
    themeSwitch.setTheme(theme);
  }

  setTheme(theme:AppTheme|null){
    this.#currentTheme.set(theme);
  }
}
