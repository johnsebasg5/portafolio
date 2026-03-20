import { Component, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopbarComponent],
  templateUrl: './app.html'
})
export class App {
  private themeService = inject(ThemeService);

  constructor() {
    // Reaccionar a cambios de tema
    effect(() => {
      const theme = this.themeService.theme$();
      const html = document.documentElement;
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    });
  }
}
