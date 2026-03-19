import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectsGridComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {}
