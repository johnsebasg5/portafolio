import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../stats/stats';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, StatsComponent],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css'
})
export class PersonalInfoComponent {}
