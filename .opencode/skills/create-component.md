# Create Component

Crea un nuevo componente Angular standalone.

## Pasos
1. Crear archivo `.ts` con `@Component` y `standalone: true`
2. Crear archivo `.html` con template
3. Crear archivo `.css` para estilos específicos
4. Imports: `CommonModule`, `RouterLink` según necesidad
5. Usar signals para estado reactivo
6. Usar `inject()` en lugar de constructor injection
7. Naming: `nombre-component.ts`
8. Selector prefix: `app-`
9. Exportar: `PascalCase` + `Component`

## Template
```typescript
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-{name}',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './{name}.html',
  styleUrl: './{name}.css'
})
export class {Name}Component {}
```

## Convenciones
- **Archivos**: `kebab-case`
- **Componentes**: `PascalCase` + `Component`
- **Selector**: `app-` prefix
