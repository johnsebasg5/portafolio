import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card';

interface Project {
  title: string;
  description: string;
  emoji: string;
  technologies: string[];
  gradientClass: string;
}

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.css'
})
export class ProjectsGridComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      {
        title: 'Real Estate Platform',
        description: 'Plataforma completa de gestión de propiedades con búsqueda avanzada y mapas interactivos.',
        emoji: '🏠',
        technologies: ['Angular', 'Maps API'],
        gradientClass: 'from-blue-600 to-blue-800'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Dashboard de análisis en tiempo real con gráficos interactivos y reportes personalizados.',
        emoji: '📊',
        technologies: ['Angular', 'Charts'],
        gradientClass: 'from-purple-600 to-purple-800'
      },
      {
        title: 'E-commerce Store',
        description: 'Tienda online completa con carrito de compras, pagos seguros y gestión de inventario.',
        emoji: '🛒',
        technologies: ['Angular', 'Stripe'],
        gradientClass: 'from-green-600 to-green-800'
      },
      {
        title: 'CRM System',
        description: 'Sistema CRM personalizado para gestionar clientes, ventas y seguimiento de proyectos.',
        emoji: '🤝',
        technologies: ['Angular', 'PostgreSQL'],
        gradientClass: 'from-pink-600 to-pink-800'
      },
      {
        title: 'Learning Platform',
        description: 'Plataforma educativa con cursos interactivos, quizzes y seguimiento de progreso.',
        emoji: '📚',
        technologies: ['Angular', 'Firebase'],
        gradientClass: 'from-yellow-600 to-yellow-800'
      },
      {
        title: 'Music Streaming App',
        description: 'App de streaming de música con playlist, recomendaciones y reproducción en línea.',
        emoji: '🎵',
        technologies: ['Angular', 'Spotify API'],
        gradientClass: 'from-red-600 to-red-800'
      }
    ];
  }
}
