# Test Routing

Tests para rutas y navegación.

## Pasos
1. Configurar `RouterTestingModule`
2. Mockear `Location` para verificar navegación
3. Testear que `RouterLink` funcione
4. Verificar que rutas carguen componentes correctos
5. Testear wildcard route (404)
6. Testear navegación programática

## Ejemplo
```typescript
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes(routes)]
  }).compileComponents();
});

it('should navigate to about page', () => {
  const location = TestBed.inject(Location);
  router.navigate(['/about']);
  expect(location.path()).toBe('/about');
});
```
