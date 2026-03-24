# Create Service

Crea un nuevo servicio Angular.

## Pasos
1. Usar `@Injectable({ providedIn: 'root' })`
2. Usar signals para estado reactivo
3. Exponer signals como readonly con `.asReadonly()`
4. Métodos públicos para mutar estado
5. Naming: `nombre.service.ts`

## Template
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class {Name}Service {
  private stateSignal = signal<Type>(initialValue);
  state$ = this.stateSignal.asReadonly();
}
```

## Convenciones
- **Archivos**: `kebab-case.service.ts`
- **Servicios**: `PascalCase` + `Service`
- **Signals readonly**: `camelCase` + `$`
