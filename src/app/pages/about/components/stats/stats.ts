import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills';

@Component({
  selector: 'app-about-stats',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class StatsComponent {}
