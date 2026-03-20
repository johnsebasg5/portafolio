import { Component, inject, OnInit, effect } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopbarComponent],
  templateUrl: './app.html'
})
export class App  {
  private themeService = inject(ThemeService);
  private router = inject(Router);

  constructor() {
    // Usar effect en el constructor donde el contexto de inyección está disponible
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
