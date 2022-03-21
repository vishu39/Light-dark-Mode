import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private ts: ThemeService) {}

  ngOnInit(): void {}

  toggleDarkMode(theme: any) {
    switch (theme) {
      case 'light':
        document.body.setAttribute('theme', 'light');
        this.ts.setTheme('light');
        break;
      case 'dark':
        document.body.setAttribute('theme', 'dark');
        this.ts.setTheme('dark');
        break;
      case 'auto':
        document.body.removeAttribute('theme');
        localStorage.removeItem('default-theme');
        break;
      default:
        break;
    }
  }
}
