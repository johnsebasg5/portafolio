import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './components/personal-info/personal-info';
import { EducationComponent } from './components/education/education';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PersonalInfoComponent, EducationComponent],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {}

