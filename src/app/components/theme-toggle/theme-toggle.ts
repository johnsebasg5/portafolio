import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="toggleTheme()"
      class="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-yellow-400 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition"
      [attr.aria-label]="'Toggle ' + (isDarkMode() ? 'light' : 'dark') + ' mode'"
    >
      <span *ngIf="!isDarkMode()" class="text-lg">🌙</span>
      <span *ngIf="isDarkMode()" class="text-lg">☀️</span>
    </button>
  `
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  
  isDarkMode = () => this.themeService.theme$() === 'dark';

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
