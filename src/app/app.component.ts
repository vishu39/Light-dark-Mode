import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dark-light-mode';

  constructor(private themeService: ThemeService) {}
  ngOnInit() {
    this.themeService.initTheme();
  }
}
