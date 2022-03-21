import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private colorTheme: string;
  constructor() {}

  initTheme() {
    this.getColorTheme();
    document.body.setAttribute('theme', this.colorTheme);
  }

  setTheme(theme) {
    localStorage.setItem('default-theme', theme);
  }

  getColorTheme() {
    if (localStorage.getItem('default-theme')) {
      this.colorTheme = localStorage.getItem('default-theme');
    }
  }
}
