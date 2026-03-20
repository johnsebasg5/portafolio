import { Component, inject, OnInit, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopbarComponent],
  templateUrl: './app.html'
})
export class App implements OnInit {
  private themeService = inject(ThemeService);

  ngOnInit() {
    // Usar effect en ngOnInit cuando el inyector ya está listo
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
